/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/certificateRegistrationProviderMappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";

/** Class representing a CertificateRegistrationProvider. */
export class CertificateRegistrationProvider {
  private readonly client: WebSiteManagementClientContext;

  /**
   * Create a CertificateRegistrationProvider.
   * @param {WebSiteManagementClientContext} client Reference to the service client.
   */
  constructor(client: WebSiteManagementClientContext) {
    this.client = client;
  }

  /**
   * Description for Implements Csm operations Api to exposes the list of available Csm Apis under
   * the resource provider
   * @summary Implements Csm operations Api to exposes the list of available Csm Apis under the
   * resource provider
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateRegistrationProviderListOperationsResponse>
   */
  listOperations(options?: msRest.RequestOptionsBase): Promise<Models.CertificateRegistrationProviderListOperationsResponse>;
  /**
   * @param callback The callback
   */
  listOperations(callback: msRest.ServiceCallback<Models.CsmOperationCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperations(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CsmOperationCollection>): void;
  listOperations(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CsmOperationCollection>, callback?: msRest.ServiceCallback<Models.CsmOperationCollection>): Promise<Models.CertificateRegistrationProviderListOperationsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationsOperationSpec,
      callback) as Promise<Models.CertificateRegistrationProviderListOperationsResponse>;
  }

  /**
   * Description for Implements Csm operations Api to exposes the list of available Csm Apis under
   * the resource provider
   * @summary Implements Csm operations Api to exposes the list of available Csm Apis under the
   * resource provider
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CertificateRegistrationProviderListOperationsNextResponse>
   */
  listOperationsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CertificateRegistrationProviderListOperationsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listOperationsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CsmOperationCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperationsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CsmOperationCollection>): void;
  listOperationsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CsmOperationCollection>, callback?: msRest.ServiceCallback<Models.CsmOperationCollection>): Promise<Models.CertificateRegistrationProviderListOperationsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listOperationsNextOperationSpec,
      callback) as Promise<Models.CertificateRegistrationProviderListOperationsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.CertificateRegistration/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CsmOperationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listOperationsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CsmOperationCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};
