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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/privateEndpointConnectionsMappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClientContext } from "../eventGridManagementClientContext";

/** Class representing a PrivateEndpointConnections. */
export class PrivateEndpointConnections {
  private readonly client: EventGridManagementClientContext;

  /**
   * Create a PrivateEndpointConnections.
   * @param {EventGridManagementClientContext} client Reference to the service client.
   */
  constructor(client: EventGridManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a specific private endpoint connection under a topic or domain.
   * @summary Get a specific private endpoint connection.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param parentType The type of the parent resource. This can be either \'topics\' or \'domains\'.
   * @param parentName The name of the parent resource (namely, either, the topic name or domain
   * name).
   * @param privateEndpointConnectionName The name of the private endpoint connection connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsGetResponse>
   */
  get(resourceGroupName: string, parentType: string, parentName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param parentType The type of the parent resource. This can be either \'topics\' or \'domains\'.
   * @param parentName The name of the parent resource (namely, either, the topic name or domain
   * name).
   * @param privateEndpointConnectionName The name of the private endpoint connection connection.
   * @param callback The callback
   */
  get(resourceGroupName: string, parentType: string, parentName: string, privateEndpointConnectionName: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param parentType The type of the parent resource. This can be either \'topics\' or \'domains\'.
   * @param parentName The name of the parent resource (namely, either, the topic name or domain
   * name).
   * @param privateEndpointConnectionName The name of the private endpoint connection connection.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, parentType: string, parentName: string, privateEndpointConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  get(resourceGroupName: string, parentType: string, parentName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnection>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnection>): Promise<Models.PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        parentType,
        parentName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsGetResponse>;
  }

  /**
   * Update a specific private endpoint connection under a topic or domain.
   * @summary Update a specific private endpoint connection.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param parentType The type of the parent resource. This can be either \'topics\' or \'domains\'.
   * @param parentName The name of the parent resource (namely, either, the topic name or domain
   * name).
   * @param privateEndpointConnectionName The name of the private endpoint connection connection.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsUpdateResponse>
   */
  update(resourceGroupName: string, parentType: string, parentName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,parentType,parentName,privateEndpointConnectionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PrivateEndpointConnectionsUpdateResponse>;
  }

  /**
   * Delete a specific private endpoint connection under a topic or domain.
   * @summary Delete a specific private endpoint connection.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param parentType The type of the parent resource. This can be either \'topics\' or \'domains\'.
   * @param parentName The name of the parent resource (namely, either, the topic name or domain
   * name).
   * @param privateEndpointConnectionName The name of the private endpoint connection connection.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, parentType: string, parentName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,parentType,parentName,privateEndpointConnectionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Get all private endpoint connections under a topic or domain.
   * @summary Lists all private endpoint connections under a resource.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param parentType The type of the parent resource. This can be either \'topics\' or \'domains\'.
   * @param parentName The name of the parent resource (namely, either, the topic name or domain
   * name).
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsListByResourceResponse>
   */
  listByResource(resourceGroupName: string, parentType: string, parentName: string, options?: Models.PrivateEndpointConnectionsListByResourceOptionalParams): Promise<Models.PrivateEndpointConnectionsListByResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param parentType The type of the parent resource. This can be either \'topics\' or \'domains\'.
   * @param parentName The name of the parent resource (namely, either, the topic name or domain
   * name).
   * @param callback The callback
   */
  listByResource(resourceGroupName: string, parentType: string, parentName: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param parentType The type of the parent resource. This can be either \'topics\' or \'domains\'.
   * @param parentName The name of the parent resource (namely, either, the topic name or domain
   * name).
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResource(resourceGroupName: string, parentType: string, parentName: string, options: Models.PrivateEndpointConnectionsListByResourceOptionalParams, callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): void;
  listByResource(resourceGroupName: string, parentType: string, parentName: string, options?: Models.PrivateEndpointConnectionsListByResourceOptionalParams | msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): Promise<Models.PrivateEndpointConnectionsListByResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        parentType,
        parentName,
        options
      },
      listByResourceOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsListByResourceResponse>;
  }

  /**
   * Update a specific private endpoint connection under a topic or domain.
   * @summary Update a specific private endpoint connection.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param parentType The type of the parent resource. This can be either \'topics\' or \'domains\'.
   * @param parentName The name of the parent resource (namely, either, the topic name or domain
   * name).
   * @param privateEndpointConnectionName The name of the private endpoint connection connection.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, parentType: string, parentName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        parentType,
        parentName,
        privateEndpointConnectionName,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Delete a specific private endpoint connection under a topic or domain.
   * @summary Delete a specific private endpoint connection.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param parentType The type of the parent resource. This can be either \'topics\' or \'domains\'.
   * @param parentName The name of the parent resource (namely, either, the topic name or domain
   * name).
   * @param privateEndpointConnectionName The name of the private endpoint connection connection.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, parentType: string, parentName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        parentType,
        parentName,
        privateEndpointConnectionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Get all private endpoint connections under a topic or domain.
   * @summary Lists all private endpoint connections under a resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionsListByResourceNextResponse>
   */
  listByResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionsListByResourceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): void;
  listByResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnectionListResult>): Promise<Models.PrivateEndpointConnectionsListByResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceNextOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionsListByResourceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/{parentType}/{parentName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.parentType,
    Parameters.parentName,
    Parameters.privateEndpointConnectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/{parentType}/{parentName}/privateEndpointConnections",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.parentType,
    Parameters.parentName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/{parentType}/{parentName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.parentType,
    Parameters.parentName,
    Parameters.privateEndpointConnectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    201: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/{parentType}/{parentName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.parentType,
    Parameters.parentName,
    Parameters.privateEndpointConnectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
