// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { isNode, isTokenCredential, TokenCredential } from "@azure/core-http";
import { SpanOptions } from "@opentelemetry/types";

import { AnonymousCredential } from "./credentials/AnonymousCredential";
import { StorageSharedKeyCredential } from "./credentials/StorageSharedKeyCredential";
import { StorageClientContext } from "./generated/src/storageClientContext";
import { Pipeline } from "./Pipeline";
import { toBlobEndpointUrl, toDfsEndpointUrl } from "./transforms";
import { escapeURLPath, getAccountNameFromUrl, getURLScheme, iEqual } from "./utils/utils.common";

/**
 * An interface for options common to every remote operation.
 */
export interface CommonOptions {
  /**
   * Options to configure spans created when tracing is enabled.
   */
  tracingOptions?: OperationTracingOptions;
}

export interface OperationTracingOptions {
  /**
   * OpenTelemetry SpanOptions used to create a span when tracing is enabled.
   */
  spanOptions?: SpanOptions;
}

/**
 * A StorageClient represents a based URL class for {@link BlobServiceClient}, {@link ContainerClient}
 * and etc.
 *
 * @export
 * @class StorageClient
 */
export abstract class StorageClient {
  /**
   * Encoded URL string value.
   *
   * @type {string}
   * @memberof StorageClient
   */
  public readonly url: string;

  public readonly accountName: string;

  /**
   * Encoded URL string value for corresponding blob endpoint.
   *
   * @type {string}
   * @memberof StorageClient
   */
  protected readonly blobEndpointUrl: string;

  /**
   * Encoded URL string value for corresponding dfs endpoint.
   *
   * @type {string}
   * @memberof StorageClient
   */
  protected readonly dfsEndpointUrl: string;

  /**
   * Request policy pipeline.
   *
   * @internal
   * @ignore
   * @type {Pipeline}
   * @memberof StorageClient
   */
  protected readonly pipeline: Pipeline;
  /**
   * Such as AnonymousCredential, StorageSharedKeyCredential or any credential from the @azure/identity package to authenticate requests to the service. You can also provide an object that implements the TokenCredential interface. If not specified, AnonymousCredential is used.
   *
   * @type {StorageSharedKeyCredential | AnonymousCredential | TokenCredential}
   * @memberof StorageClient
   */
  public readonly credential: StorageSharedKeyCredential | AnonymousCredential | TokenCredential;
  /**
   * StorageClient is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator.
   *
   * @protected
   * @type {StorageClientContext}
   * @memberof StorageClient
   */
  protected readonly storageClientContext: StorageClientContext;
  /**
   * @protected
   * @type {boolean}
   * @memberof StorageClient
   */
  protected readonly isHttps: boolean;

  /**
   * Creates an instance of StorageClient.
   * @param {string} url url to resource
   * @param {Pipeline} pipeline request policy pipeline.
   * @memberof StorageClient
   */
  protected constructor(url: string, pipeline: Pipeline) {
    // URL should be encoded and only once, protocol layer shouldn't encode URL again
    this.url = escapeURLPath(url);
    this.blobEndpointUrl = toBlobEndpointUrl(this.url);
    this.dfsEndpointUrl = toDfsEndpointUrl(this.url);
    this.accountName = getAccountNameFromUrl(this.blobEndpointUrl);
    this.pipeline = pipeline;
    this.storageClientContext = new StorageClientContext(
      this.dfsEndpointUrl,
      pipeline.toServiceClientOptions()
    );

    this.isHttps = iEqual(getURLScheme(this.url) || "", "https");

    this.credential = new AnonymousCredential();
    for (const factory of this.pipeline.factories) {
      if (
        (isNode && factory instanceof StorageSharedKeyCredential) ||
        factory instanceof AnonymousCredential ||
        isTokenCredential(factory)
      ) {
        this.credential = factory;
      }
    }

    // Override protocol layer's default content-type
    const storageClientContext = this.storageClientContext as any;
    storageClientContext.requestContentType = undefined;
  }
}
