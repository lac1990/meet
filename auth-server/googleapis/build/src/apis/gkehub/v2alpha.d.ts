/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace gkehub_v2alpha {
    export interface Options extends GlobalOptions {
        version: 'v2alpha';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | BaseExternalAccountClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * GKE Hub API
     *
     *
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const gkehub = google.gkehub('v2alpha');
     * ```
     */
    export class Gkehub {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * The request message for Operations.CancelOperation.
     */
    export interface Schema$CancelOperationRequest {
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    export interface Schema$GoogleRpcStatus {
        /**
         * The status code, which should be an enum value of google.rpc.Code.
         */
        code?: number | null;
        /**
         * A list of messages that carry the error details. There is a common set of message types for APIs to use.
         */
        details?: Array<{
            [key: string]: any;
        }> | null;
        /**
         * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
         */
        message?: string | null;
    }
    /**
     * The response message for Locations.ListLocations.
     */
    export interface Schema$ListLocationsResponse {
        /**
         * A list of locations that matches the specified filter in the request.
         */
        locations?: Schema$Location[];
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for Operations.ListOperations.
     */
    export interface Schema$ListOperationsResponse {
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string | null;
        /**
         * A list of operations that matches the specified filter in the request.
         */
        operations?: Schema$Operation[];
    }
    /**
     * A resource that represents Google Cloud Platform location.
     */
    export interface Schema$Location {
        /**
         * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
         */
        displayName?: string | null;
        /**
         * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * The canonical id for this location. For example: `"us-east1"`.
         */
        locationId?: string | null;
        /**
         * Service-specific metadata. For example the available capacity at the given location.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
         */
        name?: string | null;
    }
    /**
     * This resource represents a long-running operation that is the result of a network API call.
     */
    export interface Schema$Operation {
        /**
         * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
         */
        done?: boolean | null;
        /**
         * The error result of the operation in case of failure or cancellation.
         */
        error?: Schema$GoogleRpcStatus;
        /**
         * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
         */
        name?: string | null;
        /**
         * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
         */
        response?: {
            [key: string]: any;
        } | null;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        locations: Resource$Projects$Locations;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Locations {
        context: APIRequestContext;
        operations: Resource$Projects$Locations$Operations;
        constructor(context: APIRequestContext);
        /**
         * Gets information about a location.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/gkehub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const gkehub = google.gkehub('v2alpha');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await gkehub.projects.locations.get({
         *     // Resource name for the location.
         *     name: 'projects/my-project/locations/my-location',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "labels": {},
         *   //   "locationId": "my_locationId",
         *   //   "metadata": {},
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Get, options?: MethodOptions): GaxiosPromise<Schema$Location>;
        get(params: Params$Resource$Projects$Locations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Get, options: MethodOptions | BodyResponseCallback<Schema$Location>, callback: BodyResponseCallback<Schema$Location>): void;
        get(params: Params$Resource$Projects$Locations$Get, callback: BodyResponseCallback<Schema$Location>): void;
        get(callback: BodyResponseCallback<Schema$Location>): void;
        /**
         * Lists information about the supported locations for this service.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/gkehub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const gkehub = google.gkehub('v2alpha');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await gkehub.projects.locations.list({
         *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
         *     filter: 'placeholder-value',
         *     // The resource that owns the locations collection, if applicable.
         *     name: 'projects/my-project',
         *     // The maximum number of results to return. If not set, the service selects a default.
         *     pageSize: 'placeholder-value',
         *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
         *     pageToken: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "locations": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$List, options?: MethodOptions): GaxiosPromise<Schema$ListLocationsResponse>;
        list(params: Params$Resource$Projects$Locations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$List, options: MethodOptions | BodyResponseCallback<Schema$ListLocationsResponse>, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$List, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Get extends StandardParameters {
        /**
         * Resource name for the location.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$List extends StandardParameters {
        /**
         * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
         */
        filter?: string;
        /**
         * The resource that owns the locations collection, if applicable.
         */
        name?: string;
        /**
         * The maximum number of results to return. If not set, the service selects a default.
         */
        pageSize?: number;
        /**
         * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
         */
        pageToken?: string;
    }
    export class Resource$Projects$Locations$Operations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/gkehub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const gkehub = google.gkehub('v2alpha');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await gkehub.projects.locations.operations.cancel({
         *     // The name of the operation resource to be cancelled.
         *     name: 'projects/my-project/locations/my-location/operations/my-operation',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {}
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: StreamMethodOptions): GaxiosPromise<Readable>;
        cancel(params?: Params$Resource$Projects$Locations$Operations$Cancel, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/gkehub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const gkehub = google.gkehub('v2alpha');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await gkehub.projects.locations.operations.get({
         *     // The name of the operation resource.
         *     name: 'projects/my-project/locations/my-location/operations/my-operation',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Operations$Get, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        get(params: Params$Resource$Projects$Locations$Operations$Get, callback: BodyResponseCallback<Schema$Operation>): void;
        get(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/gkehub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const gkehub = google.gkehub('v2alpha');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await gkehub.projects.locations.operations.list({
         *     // The standard list filter.
         *     filter: 'placeholder-value',
         *     // The name of the operation's parent resource.
         *     name: 'projects/my-project/locations/my-location',
         *     // The standard list page size.
         *     pageSize: 'placeholder-value',
         *     // The standard list page token.
         *     pageToken: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "operations": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Operations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Operations$List, options?: MethodOptions): GaxiosPromise<Schema$ListOperationsResponse>;
        list(params: Params$Resource$Projects$Locations$Operations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Operations$List, options: MethodOptions | BodyResponseCallback<Schema$ListOperationsResponse>, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Operations$List, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Operations$Cancel extends StandardParameters {
        /**
         * The name of the operation resource to be cancelled.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CancelOperationRequest;
    }
    export interface Params$Resource$Projects$Locations$Operations$Get extends StandardParameters {
        /**
         * The name of the operation resource.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Operations$List extends StandardParameters {
        /**
         * The standard list filter.
         */
        filter?: string;
        /**
         * The name of the operation's parent resource.
         */
        name?: string;
        /**
         * The standard list page size.
         */
        pageSize?: number;
        /**
         * The standard list page token.
         */
        pageToken?: string;
    }
    export {};
}
