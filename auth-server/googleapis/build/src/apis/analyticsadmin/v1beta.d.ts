/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace analyticsadmin_v1beta {
    export interface Options extends GlobalOptions {
        version: 'v1beta';
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
     * Google Analytics Admin API
     *
     *
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const analyticsadmin = google.analyticsadmin('v1beta');
     * ```
     */
    export class Analyticsadmin {
        context: APIRequestContext;
        accounts: Resource$Accounts;
        accountSummaries: Resource$Accountsummaries;
        properties: Resource$Properties;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * A resource message representing a Google Analytics account.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaAccount {
        /**
         * Output only. Time when this account was originally created.
         */
        createTime?: string | null;
        /**
         * Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List results unless specifically requested.
         */
        deleted?: boolean | null;
        /**
         * Required. Human-readable display name for this account.
         */
        displayName?: string | null;
        /**
         * Output only. Resource name of this account. Format: accounts/{account\} Example: "accounts/100"
         */
        name?: string | null;
        /**
         * Country of business. Must be a Unicode CLDR region code.
         */
        regionCode?: string | null;
        /**
         * Output only. Time when account payload fields were last updated.
         */
        updateTime?: string | null;
    }
    /**
     * A virtual resource representing an overview of an account and all its child GA4 properties.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaAccountSummary {
        /**
         * Resource name of account referred to by this account summary Format: accounts/{account_id\} Example: "accounts/1000"
         */
        account?: string | null;
        /**
         * Display name for the account referred to in this account summary.
         */
        displayName?: string | null;
        /**
         * Resource name for this account summary. Format: accountSummaries/{account_id\} Example: "accountSummaries/1000"
         */
        name?: string | null;
        /**
         * List of summaries for child accounts of this account.
         */
        propertySummaries?: Schema$GoogleAnalyticsAdminV1betaPropertySummary[];
    }
    /**
     * Request message for AcknowledgeUserDataCollection RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest {
        /**
         * Required. An acknowledgement that the caller of this method understands the terms of user data collection. This field must contain the exact value: "I acknowledge that I have the necessary privacy disclosures and rights from my end users for the collection and processing of their data, including the association of such data with the visitation information Google Analytics collects from my site and/or app property."
         */
        acknowledgement?: string | null;
    }
    /**
     * Response message for AcknowledgeUserDataCollection RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse {
    }
    /**
     * Request message for ArchiveCustomDimension RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequest {
    }
    /**
     * Request message for ArchiveCustomMetric RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest {
    }
    /**
     * A description of a change to a single Google Analytics resource.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaChangeHistoryChange {
        /**
         * The type of action that changed this resource.
         */
        action?: string | null;
        /**
         * Resource name of the resource whose changes are described by this entry.
         */
        resource?: string | null;
        /**
         * Resource contents from after the change was made. If this resource was deleted in this change, this field will be missing.
         */
        resourceAfterChange?: Schema$GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;
        /**
         * Resource contents from before the change was made. If this resource was created in this change, this field will be missing.
         */
        resourceBeforeChange?: Schema$GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource;
    }
    /**
     * A snapshot of a resource as before or after the result of a change in change history.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource {
        /**
         * A snapshot of an Account resource in change history.
         */
        account?: Schema$GoogleAnalyticsAdminV1betaAccount;
        /**
         * A snapshot of a ConversionEvent resource in change history.
         */
        conversionEvent?: Schema$GoogleAnalyticsAdminV1betaConversionEvent;
        /**
         * A snapshot of a data retention settings resource in change history.
         */
        dataRetentionSettings?: Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings;
        /**
         * A snapshot of a DataStream resource in change history.
         */
        dataStream?: Schema$GoogleAnalyticsAdminV1betaDataStream;
        /**
         * A snapshot of a FirebaseLink resource in change history.
         */
        firebaseLink?: Schema$GoogleAnalyticsAdminV1betaFirebaseLink;
        /**
         * A snapshot of a GoogleAdsLink resource in change history.
         */
        googleAdsLink?: Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink;
        /**
         * A snapshot of a MeasurementProtocolSecret resource in change history.
         */
        measurementProtocolSecret?: Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;
        /**
         * A snapshot of a Property resource in change history.
         */
        property?: Schema$GoogleAnalyticsAdminV1betaProperty;
    }
    /**
     * A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaChangeHistoryEvent {
        /**
         * The type of actor that made this change.
         */
        actorType?: string | null;
        /**
         * A list of changes made in this change history event that fit the filters specified in SearchChangeHistoryEventsRequest.
         */
        changes?: Schema$GoogleAnalyticsAdminV1betaChangeHistoryChange[];
        /**
         * If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event.
         */
        changesFiltered?: boolean | null;
        /**
         * Time when change was made.
         */
        changeTime?: string | null;
        /**
         * ID of this change history event. This ID is unique across Google Analytics.
         */
        id?: string | null;
        /**
         * Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error.
         */
        userActorEmail?: string | null;
    }
    /**
     * A conversion event in a Google Analytics property.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaConversionEvent {
        /**
         * Output only. Time when this conversion event was created in the property.
         */
        createTime?: string | null;
        /**
         * Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom conversion events that may be created per property.
         */
        custom?: boolean | null;
        /**
         * Output only. If set, this event can currently be deleted via DeleteConversionEvent.
         */
        deletable?: boolean | null;
        /**
         * Immutable. The event name for this conversion event. Examples: 'click', 'purchase'
         */
        eventName?: string | null;
        /**
         * Output only. Resource name of this conversion event. Format: properties/{property\}/conversionEvents/{conversion_event\}
         */
        name?: string | null;
    }
    /**
     * A definition for a CustomDimension.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaCustomDimension {
        /**
         * Optional. Description for this custom dimension. Max length of 150 characters.
         */
        description?: string | null;
        /**
         * Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently only supported by user-scoped custom dimensions.
         */
        disallowAdsPersonalization?: boolean | null;
        /**
         * Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.
         */
        displayName?: string | null;
        /**
         * Output only. Resource name for this CustomDimension resource. Format: properties/{property\}/customDimensions/{customDimension\}
         */
        name?: string | null;
        /**
         * Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. May only contain alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40 characters for event-scoped dimensions.
         */
        parameterName?: string | null;
        /**
         * Required. Immutable. The scope of this dimension.
         */
        scope?: string | null;
    }
    /**
     * A definition for a custom metric.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaCustomMetric {
        /**
         * Optional. Description for this custom dimension. Max length of 150 characters.
         */
        description?: string | null;
        /**
         * Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.
         */
        displayName?: string | null;
        /**
         * Required. The type for the custom metric's value.
         */
        measurementUnit?: string | null;
        /**
         * Output only. Resource name for this CustomMetric resource. Format: properties/{property\}/customMetrics/{customMetric\}
         */
        name?: string | null;
        /**
         * Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics.
         */
        parameterName?: string | null;
        /**
         * Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit.
         */
        restrictedMetricType?: string[] | null;
        /**
         * Required. Immutable. The scope of this custom metric.
         */
        scope?: string | null;
    }
    /**
     * Settings values for data retention. This is a singleton resource.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings {
        /**
         * The length of time that event-level data is retained.
         */
        eventDataRetention?: string | null;
        /**
         * Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property\}/dataRetentionSettings
         */
        name?: string | null;
        /**
         * If true, reset the retention period for the user identifier with every event from that user.
         */
        resetUserDataOnNewActivity?: boolean | null;
    }
    /**
     * A resource message representing data sharing settings of a Google Analytics account.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaDataSharingSettings {
        /**
         * Output only. Resource name. Format: accounts/{account\}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
         */
        name?: string | null;
        /**
         * Allows any of Google sales to access the data in order to suggest configuration changes to improve results.
         */
        sharingWithGoogleAnySalesEnabled?: boolean | null;
        /**
         * Allows Google sales teams that are assigned to the customer to access the data in order to suggest configuration changes to improve results. Sales team restrictions still apply when enabled.
         */
        sharingWithGoogleAssignedSalesEnabled?: boolean | null;
        /**
         * Allows Google to use the data to improve other Google products or services.
         */
        sharingWithGoogleProductsEnabled?: boolean | null;
        /**
         * Allows Google support to access the data in order to help troubleshoot issues.
         */
        sharingWithGoogleSupportEnabled?: boolean | null;
        /**
         * Allows Google to share the data anonymously in aggregate form with others.
         */
        sharingWithOthersEnabled?: boolean | null;
    }
    /**
     * A resource message representing a data stream.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaDataStream {
        /**
         * Data specific to Android app streams. Must be populated if type is ANDROID_APP_DATA_STREAM.
         */
        androidAppStreamData?: Schema$GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData;
        /**
         * Output only. Time when this stream was originally created.
         */
        createTime?: string | null;
        /**
         * Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units.
         */
        displayName?: string | null;
        /**
         * Data specific to iOS app streams. Must be populated if type is IOS_APP_DATA_STREAM.
         */
        iosAppStreamData?: Schema$GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData;
        /**
         * Output only. Resource name of this Data Stream. Format: properties/{property_id\}/dataStreams/{stream_id\} Example: "properties/1000/dataStreams/2000"
         */
        name?: string | null;
        /**
         * Required. Immutable. The type of this DataStream resource.
         */
        type?: string | null;
        /**
         * Output only. Time when stream payload fields were last updated.
         */
        updateTime?: string | null;
        /**
         * Data specific to web streams. Must be populated if type is WEB_DATA_STREAM.
         */
        webStreamData?: Schema$GoogleAnalyticsAdminV1betaDataStreamWebStreamData;
    }
    /**
     * Data specific to Android app streams.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData {
        /**
         * Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated.
         */
        firebaseAppId?: string | null;
        /**
         * Immutable. The package name for the app being measured. Example: "com.example.myandroidapp"
         */
        packageName?: string | null;
    }
    /**
     * Data specific to iOS app streams.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData {
        /**
         * Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp"
         */
        bundleId?: string | null;
        /**
         * Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated.
         */
        firebaseAppId?: string | null;
    }
    /**
     * Data specific to web streams.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaDataStreamWebStreamData {
        /**
         * Immutable. Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com"
         */
        defaultUri?: string | null;
        /**
         * Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated.
         */
        firebaseAppId?: string | null;
        /**
         * Output only. Analytics "Measurement ID", without the "G-" prefix. Example: "G-1A2BCD345E" would just be "1A2BCD345E"
         */
        measurementId?: string | null;
    }
    /**
     * A link between a GA4 property and a Firebase project.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaFirebaseLink {
        /**
         * Output only. Time when this FirebaseLink was originally created.
         */
        createTime?: string | null;
        /**
         * Output only. Example format: properties/1234/firebaseLinks/5678
         */
        name?: string | null;
        /**
         * Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number\}' Example: 'projects/1234'
         */
        project?: string | null;
    }
    /**
     * A link between a GA4 property and a Google Ads account.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink {
        /**
         * Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true.
         */
        adsPersonalizationEnabled?: boolean | null;
        /**
         * Output only. If true, this link is for a Google Ads manager account.
         */
        canManageClients?: boolean | null;
        /**
         * Output only. Time when this link was originally created.
         */
        createTime?: string | null;
        /**
         * Output only. Email address of the user that created the link. An empty string will be returned if the email address can't be retrieved.
         */
        creatorEmailAddress?: string | null;
        /**
         * Immutable. Google Ads customer ID.
         */
        customerId?: string | null;
        /**
         * Output only. Format: properties/{propertyId\}/googleAdsLinks/{googleAdsLinkId\} Note: googleAdsLinkId is not the Google Ads customer ID.
         */
        name?: string | null;
        /**
         * Output only. Time when this link was last updated.
         */
        updateTime?: string | null;
    }
    /**
     * Request message for ListAccounts RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaListAccountsResponse {
        /**
         * Results that were accessible to the caller.
         */
        accounts?: Schema$GoogleAnalyticsAdminV1betaAccount[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListAccountSummaries RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaListAccountSummariesResponse {
        /**
         * Account summaries of all accounts the caller has access to.
         */
        accountSummaries?: Schema$GoogleAnalyticsAdminV1betaAccountSummary[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListConversionEvents RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaListConversionEventsResponse {
        /**
         * The requested conversion events
         */
        conversionEvents?: Schema$GoogleAnalyticsAdminV1betaConversionEvent[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListCustomDimensions RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaListCustomDimensionsResponse {
        /**
         * List of CustomDimensions.
         */
        customDimensions?: Schema$GoogleAnalyticsAdminV1betaCustomDimension[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListCustomMetrics RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaListCustomMetricsResponse {
        /**
         * List of CustomMetrics.
         */
        customMetrics?: Schema$GoogleAnalyticsAdminV1betaCustomMetric[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListDataStreams RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaListDataStreamsResponse {
        /**
         * List of DataStreams.
         */
        dataStreams?: Schema$GoogleAnalyticsAdminV1betaDataStream[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListFirebaseLinks RPC
     */
    export interface Schema$GoogleAnalyticsAdminV1betaListFirebaseLinksResponse {
        /**
         * List of FirebaseLinks. This will have at most one value.
         */
        firebaseLinks?: Schema$GoogleAnalyticsAdminV1betaFirebaseLink[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListGoogleAdsLinks RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse {
        /**
         * List of GoogleAdsLinks.
         */
        googleAdsLinks?: Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListMeasurementProtocolSecret RPC
     */
    export interface Schema$GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse {
        /**
         * A list of secrets for the parent stream specified in the request.
         */
        measurementProtocolSecrets?: Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListProperties RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaListPropertiesResponse {
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
        /**
         * Results that matched the filter criteria and were accessible to the caller.
         */
        properties?: Schema$GoogleAnalyticsAdminV1betaProperty[];
    }
    /**
     * A secret value used for sending hits to Measurement Protocol.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret {
        /**
         * Required. Human-readable display name for this secret.
         */
        displayName?: string | null;
        /**
         * Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
         */
        name?: string | null;
        /**
         * Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement Protocol API when sending hits to this secret's parent property.
         */
        secretValue?: string | null;
    }
    /**
     * A resource message representing a Google Analytics GA4 property.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaProperty {
        /**
         * Immutable. The resource name of the parent account Format: accounts/{account_id\} Example: "accounts/123"
         */
        account?: string | null;
        /**
         * Output only. Time when the entity was originally created.
         */
        createTime?: string | null;
        /**
         * The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY"
         */
        currencyCode?: string | null;
        /**
         * Output only. If set, the time at which this property was trashed. If not set, then this property is not currently in the trash can.
         */
        deleteTime?: string | null;
        /**
         * Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units.
         */
        displayName?: string | null;
        /**
         * Output only. If set, the time at which this trashed property will be permanently deleted. If not set, then this property is not currently in the trash can and is not slated to be deleted.
         */
        expireTime?: string | null;
        /**
         * Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK
         */
        industryCategory?: string | null;
        /**
         * Output only. Resource name of this property. Format: properties/{property_id\} Example: "properties/1000"
         */
        name?: string | null;
        /**
         * Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account\}, properties/{property\} Example: "accounts/100", "properties/101"
         */
        parent?: string | null;
        /**
         * Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. "SUBPROPERTY" and "ROLLUP_PROPERTY" types cannot yet be created via Google Analytics Admin API.
         */
        propertyType?: string | null;
        /**
         * Output only. The Google Analytics service level that applies to this property.
         */
        serviceLevel?: string | null;
        /**
         * Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles"
         */
        timeZone?: string | null;
        /**
         * Output only. Time when entity payload fields were last updated.
         */
        updateTime?: string | null;
    }
    /**
     * A virtual resource representing metadata for a GA4 property.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaPropertySummary {
        /**
         * Display name for the property referred to in this property summary.
         */
        displayName?: string | null;
        /**
         * Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account\}, properties/{property\} Example: "accounts/100", "properties/200"
         */
        parent?: string | null;
        /**
         * Resource name of property referred to by this property summary Format: properties/{property_id\} Example: "properties/1000"
         */
        property?: string | null;
        /**
         * The property's property type.
         */
        propertyType?: string | null;
    }
    /**
     * Request message for ProvisionAccountTicket RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest {
        /**
         * The account to create.
         */
        account?: Schema$GoogleAnalyticsAdminV1betaAccount;
        /**
         * Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Developers Console as a Redirect URI
         */
        redirectUri?: string | null;
    }
    /**
     * Response message for ProvisionAccountTicket RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse {
        /**
         * The param to be passed in the ToS link.
         */
        accountTicketId?: string | null;
    }
    /**
     * Request message for SearchChangeHistoryEvents RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest {
        /**
         * Optional. If set, only return changes that match one or more of these types of actions.
         */
        action?: string[] | null;
        /**
         * Optional. If set, only return changes if they are made by a user in this list.
         */
        actorEmail?: string[] | null;
        /**
         * Optional. If set, only return changes made after this time (inclusive).
         */
        earliestChangeTime?: string | null;
        /**
         * Optional. If set, only return changes made before this time (inclusive).
         */
        latestChangeTime?: string | null;
        /**
         * Optional. The maximum number of ChangeHistoryEvent items to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
         */
        pageSize?: number | null;
        /**
         * Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchChangeHistoryEvents` must match the call that provided the page token.
         */
        pageToken?: string | null;
        /**
         * Optional. Resource name for a child property. If set, only return changes made to this property or its child resources.
         */
        property?: string | null;
        /**
         * Optional. If set, only return changes if they are for a resource that matches at least one of these types.
         */
        resourceType?: string[] | null;
    }
    /**
     * Response message for SearchAccounts RPC.
     */
    export interface Schema$GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse {
        /**
         * Results that were accessible to the caller.
         */
        changeHistoryEvents?: Schema$GoogleAnalyticsAdminV1betaChangeHistoryEvent[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$GoogleProtobufEmpty {
    }
    export class Resource$Accounts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks, Streams, UserLinks) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.accounts.delete({
         *     // Required. The name of the Account to soft-delete. Format: accounts/{account\} Example: "accounts/100"
         *     name: 'accounts/my-account',
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
        delete(params: Params$Resource$Accounts$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Accounts$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Accounts$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Accounts$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Accounts$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Lookup for a single Account.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.accounts.get({
         *     // Required. The name of the account to lookup. Format: accounts/{account\} Example: "accounts/100"
         *     name: 'accounts/my-account',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "createTime": "my_createTime",
         *   //   "deleted": false,
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "regionCode": "my_regionCode",
         *   //   "updateTime": "my_updateTime"
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
        get(params: Params$Resource$Accounts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Accounts$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaAccount>;
        get(params: Params$Resource$Accounts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Accounts$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaAccount>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaAccount>): void;
        get(params: Params$Resource$Accounts$Get, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaAccount>): void;
        get(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaAccount>): void;
        /**
         * Get data sharing settings on an account. Data sharing settings are singletons.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.accounts.getDataSharingSettings({
         *     // Required. The name of the settings to lookup. Format: accounts/{account\}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
         *     name: 'accounts/my-account/dataSharingSettings',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "sharingWithGoogleAnySalesEnabled": false,
         *   //   "sharingWithGoogleAssignedSalesEnabled": false,
         *   //   "sharingWithGoogleProductsEnabled": false,
         *   //   "sharingWithGoogleSupportEnabled": false,
         *   //   "sharingWithOthersEnabled": false
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
        getDataSharingSettings(params: Params$Resource$Accounts$Getdatasharingsettings, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getDataSharingSettings(params?: Params$Resource$Accounts$Getdatasharingsettings, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaDataSharingSettings>;
        getDataSharingSettings(params: Params$Resource$Accounts$Getdatasharingsettings, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getDataSharingSettings(params: Params$Resource$Accounts$Getdatasharingsettings, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataSharingSettings>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataSharingSettings>): void;
        getDataSharingSettings(params: Params$Resource$Accounts$Getdatasharingsettings, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataSharingSettings>): void;
        getDataSharingSettings(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataSharingSettings>): void;
        /**
         * Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.accounts.list({
         *     // The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
         *     pageSize: 'placeholder-value',
         *     // A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
         *     pageToken: 'placeholder-value',
         *     // Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
         *     showDeleted: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accounts": [],
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
        list(params: Params$Resource$Accounts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accounts$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaListAccountsResponse>;
        list(params: Params$Resource$Accounts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accounts$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListAccountsResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListAccountsResponse>): void;
        list(params: Params$Resource$Accounts$List, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListAccountsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListAccountsResponse>): void;
        /**
         * Updates an account.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.accounts.patch({
         *     // Output only. Resource name of this account. Format: accounts/{account\} Example: "accounts/100"
         *     name: 'accounts/my-account',
         *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "createTime": "my_createTime",
         *       //   "deleted": false,
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "regionCode": "my_regionCode",
         *       //   "updateTime": "my_updateTime"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "createTime": "my_createTime",
         *   //   "deleted": false,
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "regionCode": "my_regionCode",
         *   //   "updateTime": "my_updateTime"
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
        patch(params: Params$Resource$Accounts$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Accounts$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaAccount>;
        patch(params: Params$Resource$Accounts$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Accounts$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaAccount>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaAccount>): void;
        patch(params: Params$Resource$Accounts$Patch, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaAccount>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaAccount>): void;
        /**
         * Requests a ticket for creating an account.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.accounts.provisionAccountTicket({
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "account": {},
         *       //   "redirectUri": "my_redirectUri"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountTicketId": "my_accountTicketId"
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
        provisionAccountTicket(params: Params$Resource$Accounts$Provisionaccountticket, options: StreamMethodOptions): GaxiosPromise<Readable>;
        provisionAccountTicket(params?: Params$Resource$Accounts$Provisionaccountticket, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse>;
        provisionAccountTicket(params: Params$Resource$Accounts$Provisionaccountticket, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        provisionAccountTicket(params: Params$Resource$Accounts$Provisionaccountticket, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse>): void;
        provisionAccountTicket(params: Params$Resource$Accounts$Provisionaccountticket, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse>): void;
        provisionAccountTicket(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse>): void;
        /**
         * Searches through all changes to an account or its children given the specified set of filters.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.accounts.searchChangeHistoryEvents({
         *     // Required. The account resource for which to return change history resources.
         *     account: 'accounts/my-account',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "action": [],
         *       //   "actorEmail": [],
         *       //   "earliestChangeTime": "my_earliestChangeTime",
         *       //   "latestChangeTime": "my_latestChangeTime",
         *       //   "pageSize": 0,
         *       //   "pageToken": "my_pageToken",
         *       //   "property": "my_property",
         *       //   "resourceType": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "changeHistoryEvents": [],
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
        searchChangeHistoryEvents(params: Params$Resource$Accounts$Searchchangehistoryevents, options: StreamMethodOptions): GaxiosPromise<Readable>;
        searchChangeHistoryEvents(params?: Params$Resource$Accounts$Searchchangehistoryevents, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse>;
        searchChangeHistoryEvents(params: Params$Resource$Accounts$Searchchangehistoryevents, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        searchChangeHistoryEvents(params: Params$Resource$Accounts$Searchchangehistoryevents, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse>): void;
        searchChangeHistoryEvents(params: Params$Resource$Accounts$Searchchangehistoryevents, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse>): void;
        searchChangeHistoryEvents(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse>): void;
    }
    export interface Params$Resource$Accounts$Delete extends StandardParameters {
        /**
         * Required. The name of the Account to soft-delete. Format: accounts/{account\} Example: "accounts/100"
         */
        name?: string;
    }
    export interface Params$Resource$Accounts$Get extends StandardParameters {
        /**
         * Required. The name of the account to lookup. Format: accounts/{account\} Example: "accounts/100"
         */
        name?: string;
    }
    export interface Params$Resource$Accounts$Getdatasharingsettings extends StandardParameters {
        /**
         * Required. The name of the settings to lookup. Format: accounts/{account\}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"
         */
        name?: string;
    }
    export interface Params$Resource$Accounts$List extends StandardParameters {
        /**
         * The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
         */
        showDeleted?: boolean;
    }
    export interface Params$Resource$Accounts$Patch extends StandardParameters {
        /**
         * Output only. Resource name of this account. Format: accounts/{account\} Example: "accounts/100"
         */
        name?: string;
        /**
         * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaAccount;
    }
    export interface Params$Resource$Accounts$Provisionaccountticket extends StandardParameters {
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest;
    }
    export interface Params$Resource$Accounts$Searchchangehistoryevents extends StandardParameters {
        /**
         * Required. The account resource for which to return change history resources.
         */
        account?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest;
    }
    export class Resource$Accountsummaries {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Returns summaries of all accounts accessible by the caller.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.accountSummaries.list({
         *     // The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
         *     pageSize: 'placeholder-value',
         *     // A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
         *     pageToken: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "accountSummaries": [],
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
        list(params: Params$Resource$Accountsummaries$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Accountsummaries$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaListAccountSummariesResponse>;
        list(params: Params$Resource$Accountsummaries$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Accountsummaries$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListAccountSummariesResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListAccountSummariesResponse>): void;
        list(params: Params$Resource$Accountsummaries$List, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListAccountSummariesResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListAccountSummariesResponse>): void;
    }
    export interface Params$Resource$Accountsummaries$List extends StandardParameters {
        /**
         * The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
         */
        pageToken?: string;
    }
    export class Resource$Properties {
        context: APIRequestContext;
        conversionEvents: Resource$Properties$Conversionevents;
        customDimensions: Resource$Properties$Customdimensions;
        customMetrics: Resource$Properties$Custommetrics;
        dataStreams: Resource$Properties$Datastreams;
        firebaseLinks: Resource$Properties$Firebaselinks;
        googleAdsLinks: Resource$Properties$Googleadslinks;
        constructor(context: APIRequestContext);
        /**
         * Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or via this API) before MeasurementProtocolSecret resources may be created.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.acknowledgeUserDataCollection({
         *     // Required. The property for which to acknowledge user data collection.
         *     property: 'properties/my-propertie',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "acknowledgement": "my_acknowledgement"
         *       // }
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
        acknowledgeUserDataCollection(params: Params$Resource$Properties$Acknowledgeuserdatacollection, options: StreamMethodOptions): GaxiosPromise<Readable>;
        acknowledgeUserDataCollection(params?: Params$Resource$Properties$Acknowledgeuserdatacollection, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse>;
        acknowledgeUserDataCollection(params: Params$Resource$Properties$Acknowledgeuserdatacollection, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        acknowledgeUserDataCollection(params: Params$Resource$Properties$Acknowledgeuserdatacollection, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse>): void;
        acknowledgeUserDataCollection(params: Params$Resource$Properties$Acknowledgeuserdatacollection, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse>): void;
        acknowledgeUserDataCollection(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse>): void;
        /**
         * Creates an "GA4" property with the specified location and attributes.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.create({
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "account": "my_account",
         *       //   "createTime": "my_createTime",
         *       //   "currencyCode": "my_currencyCode",
         *       //   "deleteTime": "my_deleteTime",
         *       //   "displayName": "my_displayName",
         *       //   "expireTime": "my_expireTime",
         *       //   "industryCategory": "my_industryCategory",
         *       //   "name": "my_name",
         *       //   "parent": "my_parent",
         *       //   "propertyType": "my_propertyType",
         *       //   "serviceLevel": "my_serviceLevel",
         *       //   "timeZone": "my_timeZone",
         *       //   "updateTime": "my_updateTime"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "account": "my_account",
         *   //   "createTime": "my_createTime",
         *   //   "currencyCode": "my_currencyCode",
         *   //   "deleteTime": "my_deleteTime",
         *   //   "displayName": "my_displayName",
         *   //   "expireTime": "my_expireTime",
         *   //   "industryCategory": "my_industryCategory",
         *   //   "name": "my_name",
         *   //   "parent": "my_parent",
         *   //   "propertyType": "my_propertyType",
         *   //   "serviceLevel": "my_serviceLevel",
         *   //   "timeZone": "my_timeZone",
         *   //   "updateTime": "my_updateTime"
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
        create(params: Params$Resource$Properties$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Properties$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaProperty>;
        create(params: Params$Resource$Properties$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Properties$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>): void;
        create(params: Params$Resource$Properties$Create, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>): void;
        create(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>): void;
        /**
         * Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams, UserLinks) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found, or is not a GA4 Property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.delete({
         *     // Required. The name of the Property to soft-delete. Format: properties/{property_id\} Example: "properties/1000"
         *     name: 'properties/my-propertie',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "account": "my_account",
         *   //   "createTime": "my_createTime",
         *   //   "currencyCode": "my_currencyCode",
         *   //   "deleteTime": "my_deleteTime",
         *   //   "displayName": "my_displayName",
         *   //   "expireTime": "my_expireTime",
         *   //   "industryCategory": "my_industryCategory",
         *   //   "name": "my_name",
         *   //   "parent": "my_parent",
         *   //   "propertyType": "my_propertyType",
         *   //   "serviceLevel": "my_serviceLevel",
         *   //   "timeZone": "my_timeZone",
         *   //   "updateTime": "my_updateTime"
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
        delete(params: Params$Resource$Properties$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Properties$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaProperty>;
        delete(params: Params$Resource$Properties$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Properties$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>): void;
        delete(params: Params$Resource$Properties$Delete, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>): void;
        /**
         * Lookup for a single "GA4" Property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.get({
         *     // Required. The name of the property to lookup. Format: properties/{property_id\} Example: "properties/1000"
         *     name: 'properties/my-propertie',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "account": "my_account",
         *   //   "createTime": "my_createTime",
         *   //   "currencyCode": "my_currencyCode",
         *   //   "deleteTime": "my_deleteTime",
         *   //   "displayName": "my_displayName",
         *   //   "expireTime": "my_expireTime",
         *   //   "industryCategory": "my_industryCategory",
         *   //   "name": "my_name",
         *   //   "parent": "my_parent",
         *   //   "propertyType": "my_propertyType",
         *   //   "serviceLevel": "my_serviceLevel",
         *   //   "timeZone": "my_timeZone",
         *   //   "updateTime": "my_updateTime"
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
        get(params: Params$Resource$Properties$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Properties$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaProperty>;
        get(params: Params$Resource$Properties$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Properties$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>): void;
        get(params: Params$Resource$Properties$Get, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>): void;
        get(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>): void;
        /**
         * Returns the singleton data retention settings for this property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.getDataRetentionSettings({
         *     // Required. The name of the settings to lookup. Format: properties/{property\}/dataRetentionSettings Example: "properties/1000/dataRetentionSettings"
         *     name: 'properties/my-propertie/dataRetentionSettings',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "eventDataRetention": "my_eventDataRetention",
         *   //   "name": "my_name",
         *   //   "resetUserDataOnNewActivity": false
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
        getDataRetentionSettings(params: Params$Resource$Properties$Getdataretentionsettings, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getDataRetentionSettings(params?: Params$Resource$Properties$Getdataretentionsettings, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings>;
        getDataRetentionSettings(params: Params$Resource$Properties$Getdataretentionsettings, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getDataRetentionSettings(params: Params$Resource$Properties$Getdataretentionsettings, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings>): void;
        getDataRetentionSettings(params: Params$Resource$Properties$Getdataretentionsettings, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings>): void;
        getDataRetentionSettings(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings>): void;
        /**
         * Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.list({
         *     // Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```
         *     filter: 'placeholder-value',
         *     // The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
         *     pageSize: 'placeholder-value',
         *     // A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
         *     pageToken: 'placeholder-value',
         *     // Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
         *     showDeleted: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "properties": []
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
        list(params: Params$Resource$Properties$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Properties$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaListPropertiesResponse>;
        list(params: Params$Resource$Properties$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Properties$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListPropertiesResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListPropertiesResponse>): void;
        list(params: Params$Resource$Properties$List, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListPropertiesResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListPropertiesResponse>): void;
        /**
         * Updates a property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.patch({
         *     // Output only. Resource name of this property. Format: properties/{property_id\} Example: "properties/1000"
         *     name: 'properties/my-propertie',
         *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "account": "my_account",
         *       //   "createTime": "my_createTime",
         *       //   "currencyCode": "my_currencyCode",
         *       //   "deleteTime": "my_deleteTime",
         *       //   "displayName": "my_displayName",
         *       //   "expireTime": "my_expireTime",
         *       //   "industryCategory": "my_industryCategory",
         *       //   "name": "my_name",
         *       //   "parent": "my_parent",
         *       //   "propertyType": "my_propertyType",
         *       //   "serviceLevel": "my_serviceLevel",
         *       //   "timeZone": "my_timeZone",
         *       //   "updateTime": "my_updateTime"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "account": "my_account",
         *   //   "createTime": "my_createTime",
         *   //   "currencyCode": "my_currencyCode",
         *   //   "deleteTime": "my_deleteTime",
         *   //   "displayName": "my_displayName",
         *   //   "expireTime": "my_expireTime",
         *   //   "industryCategory": "my_industryCategory",
         *   //   "name": "my_name",
         *   //   "parent": "my_parent",
         *   //   "propertyType": "my_propertyType",
         *   //   "serviceLevel": "my_serviceLevel",
         *   //   "timeZone": "my_timeZone",
         *   //   "updateTime": "my_updateTime"
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
        patch(params: Params$Resource$Properties$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Properties$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaProperty>;
        patch(params: Params$Resource$Properties$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Properties$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>): void;
        patch(params: Params$Resource$Properties$Patch, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaProperty>): void;
        /**
         * Updates the singleton data retention settings for this property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.updateDataRetentionSettings({
         *     // Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property\}/dataRetentionSettings
         *     name: 'properties/my-propertie/dataRetentionSettings',
         *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "eventDataRetention": "my_eventDataRetention",
         *       //   "name": "my_name",
         *       //   "resetUserDataOnNewActivity": false
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "eventDataRetention": "my_eventDataRetention",
         *   //   "name": "my_name",
         *   //   "resetUserDataOnNewActivity": false
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
        updateDataRetentionSettings(params: Params$Resource$Properties$Updatedataretentionsettings, options: StreamMethodOptions): GaxiosPromise<Readable>;
        updateDataRetentionSettings(params?: Params$Resource$Properties$Updatedataretentionsettings, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings>;
        updateDataRetentionSettings(params: Params$Resource$Properties$Updatedataretentionsettings, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        updateDataRetentionSettings(params: Params$Resource$Properties$Updatedataretentionsettings, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings>): void;
        updateDataRetentionSettings(params: Params$Resource$Properties$Updatedataretentionsettings, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings>): void;
        updateDataRetentionSettings(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings>): void;
    }
    export interface Params$Resource$Properties$Acknowledgeuserdatacollection extends StandardParameters {
        /**
         * Required. The property for which to acknowledge user data collection.
         */
        property?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest;
    }
    export interface Params$Resource$Properties$Create extends StandardParameters {
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaProperty;
    }
    export interface Params$Resource$Properties$Delete extends StandardParameters {
        /**
         * Required. The name of the Property to soft-delete. Format: properties/{property_id\} Example: "properties/1000"
         */
        name?: string;
    }
    export interface Params$Resource$Properties$Get extends StandardParameters {
        /**
         * Required. The name of the property to lookup. Format: properties/{property_id\} Example: "properties/1000"
         */
        name?: string;
    }
    export interface Params$Resource$Properties$Getdataretentionsettings extends StandardParameters {
        /**
         * Required. The name of the settings to lookup. Format: properties/{property\}/dataRetentionSettings Example: "properties/1000/dataRetentionSettings"
         */
        name?: string;
    }
    export interface Params$Resource$Properties$List extends StandardParameters {
        /**
         * Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```
         */
        filter?: string;
        /**
         * The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
         */
        showDeleted?: boolean;
    }
    export interface Params$Resource$Properties$Patch extends StandardParameters {
        /**
         * Output only. Resource name of this property. Format: properties/{property_id\} Example: "properties/1000"
         */
        name?: string;
        /**
         * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaProperty;
    }
    export interface Params$Resource$Properties$Updatedataretentionsettings extends StandardParameters {
        /**
         * Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property\}/dataRetentionSettings
         */
        name?: string;
        /**
         * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaDataRetentionSettings;
    }
    export class Resource$Properties$Conversionevents {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a conversion event with the specified attributes.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.conversionEvents.create({
         *     // Required. The resource name of the parent property where this conversion event will be created. Format: properties/123
         *     parent: 'properties/my-propertie',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "createTime": "my_createTime",
         *       //   "custom": false,
         *       //   "deletable": false,
         *       //   "eventName": "my_eventName",
         *       //   "name": "my_name"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "createTime": "my_createTime",
         *   //   "custom": false,
         *   //   "deletable": false,
         *   //   "eventName": "my_eventName",
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
        create(params: Params$Resource$Properties$Conversionevents$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Properties$Conversionevents$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaConversionEvent>;
        create(params: Params$Resource$Properties$Conversionevents$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Properties$Conversionevents$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaConversionEvent>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaConversionEvent>): void;
        create(params: Params$Resource$Properties$Conversionevents$Create, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaConversionEvent>): void;
        create(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaConversionEvent>): void;
        /**
         * Deletes a conversion event in a property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.conversionEvents.delete({
         *     // Required. The resource name of the conversion event to delete. Format: properties/{property\}/conversionEvents/{conversion_event\} Example: "properties/123/conversionEvents/456"
         *     name: 'properties/my-propertie/conversionEvents/my-conversionEvent',
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
        delete(params: Params$Resource$Properties$Conversionevents$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Properties$Conversionevents$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Properties$Conversionevents$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Properties$Conversionevents$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Properties$Conversionevents$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Retrieve a single conversion event.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.conversionEvents.get({
         *     // Required. The resource name of the conversion event to retrieve. Format: properties/{property\}/conversionEvents/{conversion_event\} Example: "properties/123/conversionEvents/456"
         *     name: 'properties/my-propertie/conversionEvents/my-conversionEvent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "createTime": "my_createTime",
         *   //   "custom": false,
         *   //   "deletable": false,
         *   //   "eventName": "my_eventName",
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
        get(params: Params$Resource$Properties$Conversionevents$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Properties$Conversionevents$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaConversionEvent>;
        get(params: Params$Resource$Properties$Conversionevents$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Properties$Conversionevents$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaConversionEvent>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaConversionEvent>): void;
        get(params: Params$Resource$Properties$Conversionevents$Get, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaConversionEvent>): void;
        get(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaConversionEvent>): void;
        /**
         * Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.conversionEvents.list({
         *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
         *     pageSize: 'placeholder-value',
         *     // A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.
         *     pageToken: 'placeholder-value',
         *     // Required. The resource name of the parent property. Example: 'properties/123'
         *     parent: 'properties/my-propertie',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "conversionEvents": [],
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
        list(params: Params$Resource$Properties$Conversionevents$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Properties$Conversionevents$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaListConversionEventsResponse>;
        list(params: Params$Resource$Properties$Conversionevents$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Properties$Conversionevents$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListConversionEventsResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListConversionEventsResponse>): void;
        list(params: Params$Resource$Properties$Conversionevents$List, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListConversionEventsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListConversionEventsResponse>): void;
    }
    export interface Params$Resource$Properties$Conversionevents$Create extends StandardParameters {
        /**
         * Required. The resource name of the parent property where this conversion event will be created. Format: properties/123
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaConversionEvent;
    }
    export interface Params$Resource$Properties$Conversionevents$Delete extends StandardParameters {
        /**
         * Required. The resource name of the conversion event to delete. Format: properties/{property\}/conversionEvents/{conversion_event\} Example: "properties/123/conversionEvents/456"
         */
        name?: string;
    }
    export interface Params$Resource$Properties$Conversionevents$Get extends StandardParameters {
        /**
         * Required. The resource name of the conversion event to retrieve. Format: properties/{property\}/conversionEvents/{conversion_event\} Example: "properties/123/conversionEvents/456"
         */
        name?: string;
    }
    export interface Params$Resource$Properties$Conversionevents$List extends StandardParameters {
        /**
         * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The resource name of the parent property. Example: 'properties/123'
         */
        parent?: string;
    }
    export class Resource$Properties$Customdimensions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Archives a CustomDimension on a property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.customDimensions.archive({
         *     // Required. The name of the CustomDimension to archive. Example format: properties/1234/customDimensions/5678
         *     name: 'properties/my-propertie/customDimensions/my-customDimension',
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
        archive(params: Params$Resource$Properties$Customdimensions$Archive, options: StreamMethodOptions): GaxiosPromise<Readable>;
        archive(params?: Params$Resource$Properties$Customdimensions$Archive, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        archive(params: Params$Resource$Properties$Customdimensions$Archive, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        archive(params: Params$Resource$Properties$Customdimensions$Archive, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        archive(params: Params$Resource$Properties$Customdimensions$Archive, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        archive(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Creates a CustomDimension.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.customDimensions.create({
         *     // Required. Example format: properties/1234
         *     parent: 'properties/my-propertie',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "description": "my_description",
         *       //   "disallowAdsPersonalization": false,
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "parameterName": "my_parameterName",
         *       //   "scope": "my_scope"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "disallowAdsPersonalization": false,
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "parameterName": "my_parameterName",
         *   //   "scope": "my_scope"
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
        create(params: Params$Resource$Properties$Customdimensions$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Properties$Customdimensions$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaCustomDimension>;
        create(params: Params$Resource$Properties$Customdimensions$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Properties$Customdimensions$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomDimension>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomDimension>): void;
        create(params: Params$Resource$Properties$Customdimensions$Create, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomDimension>): void;
        create(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomDimension>): void;
        /**
         * Lookup for a single CustomDimension.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.customDimensions.get({
         *     // Required. The name of the CustomDimension to get. Example format: properties/1234/customDimensions/5678
         *     name: 'properties/my-propertie/customDimensions/my-customDimension',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "disallowAdsPersonalization": false,
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "parameterName": "my_parameterName",
         *   //   "scope": "my_scope"
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
        get(params: Params$Resource$Properties$Customdimensions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Properties$Customdimensions$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaCustomDimension>;
        get(params: Params$Resource$Properties$Customdimensions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Properties$Customdimensions$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomDimension>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomDimension>): void;
        get(params: Params$Resource$Properties$Customdimensions$Get, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomDimension>): void;
        get(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomDimension>): void;
        /**
         * Lists CustomDimensions on a property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.customDimensions.list({
         *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
         *     pageSize: 'placeholder-value',
         *     // A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.
         *     pageToken: 'placeholder-value',
         *     // Required. Example format: properties/1234
         *     parent: 'properties/my-propertie',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "customDimensions": [],
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
        list(params: Params$Resource$Properties$Customdimensions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Properties$Customdimensions$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaListCustomDimensionsResponse>;
        list(params: Params$Resource$Properties$Customdimensions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Properties$Customdimensions$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListCustomDimensionsResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListCustomDimensionsResponse>): void;
        list(params: Params$Resource$Properties$Customdimensions$List, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListCustomDimensionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListCustomDimensionsResponse>): void;
        /**
         * Updates a CustomDimension on a property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.customDimensions.patch({
         *     // Output only. Resource name for this CustomDimension resource. Format: properties/{property\}/customDimensions/{customDimension\}
         *     name: 'properties/my-propertie/customDimensions/my-customDimension',
         *     // Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "description": "my_description",
         *       //   "disallowAdsPersonalization": false,
         *       //   "displayName": "my_displayName",
         *       //   "name": "my_name",
         *       //   "parameterName": "my_parameterName",
         *       //   "scope": "my_scope"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "disallowAdsPersonalization": false,
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "parameterName": "my_parameterName",
         *   //   "scope": "my_scope"
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
        patch(params: Params$Resource$Properties$Customdimensions$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Properties$Customdimensions$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaCustomDimension>;
        patch(params: Params$Resource$Properties$Customdimensions$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Properties$Customdimensions$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomDimension>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomDimension>): void;
        patch(params: Params$Resource$Properties$Customdimensions$Patch, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomDimension>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomDimension>): void;
    }
    export interface Params$Resource$Properties$Customdimensions$Archive extends StandardParameters {
        /**
         * Required. The name of the CustomDimension to archive. Example format: properties/1234/customDimensions/5678
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequest;
    }
    export interface Params$Resource$Properties$Customdimensions$Create extends StandardParameters {
        /**
         * Required. Example format: properties/1234
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaCustomDimension;
    }
    export interface Params$Resource$Properties$Customdimensions$Get extends StandardParameters {
        /**
         * Required. The name of the CustomDimension to get. Example format: properties/1234/customDimensions/5678
         */
        name?: string;
    }
    export interface Params$Resource$Properties$Customdimensions$List extends StandardParameters {
        /**
         * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. Example format: properties/1234
         */
        parent?: string;
    }
    export interface Params$Resource$Properties$Customdimensions$Patch extends StandardParameters {
        /**
         * Output only. Resource name for this CustomDimension resource. Format: properties/{property\}/customDimensions/{customDimension\}
         */
        name?: string;
        /**
         * Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaCustomDimension;
    }
    export class Resource$Properties$Custommetrics {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Archives a CustomMetric on a property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.customMetrics.archive({
         *     // Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678
         *     name: 'properties/my-propertie/customMetrics/my-customMetric',
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
        archive(params: Params$Resource$Properties$Custommetrics$Archive, options: StreamMethodOptions): GaxiosPromise<Readable>;
        archive(params?: Params$Resource$Properties$Custommetrics$Archive, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        archive(params: Params$Resource$Properties$Custommetrics$Archive, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        archive(params: Params$Resource$Properties$Custommetrics$Archive, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        archive(params: Params$Resource$Properties$Custommetrics$Archive, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        archive(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Creates a CustomMetric.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.customMetrics.create({
         *     // Required. Example format: properties/1234
         *     parent: 'properties/my-propertie',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "description": "my_description",
         *       //   "displayName": "my_displayName",
         *       //   "measurementUnit": "my_measurementUnit",
         *       //   "name": "my_name",
         *       //   "parameterName": "my_parameterName",
         *       //   "restrictedMetricType": [],
         *       //   "scope": "my_scope"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "measurementUnit": "my_measurementUnit",
         *   //   "name": "my_name",
         *   //   "parameterName": "my_parameterName",
         *   //   "restrictedMetricType": [],
         *   //   "scope": "my_scope"
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
        create(params: Params$Resource$Properties$Custommetrics$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Properties$Custommetrics$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaCustomMetric>;
        create(params: Params$Resource$Properties$Custommetrics$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Properties$Custommetrics$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomMetric>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomMetric>): void;
        create(params: Params$Resource$Properties$Custommetrics$Create, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomMetric>): void;
        create(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomMetric>): void;
        /**
         * Lookup for a single CustomMetric.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.customMetrics.get({
         *     // Required. The name of the CustomMetric to get. Example format: properties/1234/customMetrics/5678
         *     name: 'properties/my-propertie/customMetrics/my-customMetric',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "measurementUnit": "my_measurementUnit",
         *   //   "name": "my_name",
         *   //   "parameterName": "my_parameterName",
         *   //   "restrictedMetricType": [],
         *   //   "scope": "my_scope"
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
        get(params: Params$Resource$Properties$Custommetrics$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Properties$Custommetrics$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaCustomMetric>;
        get(params: Params$Resource$Properties$Custommetrics$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Properties$Custommetrics$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomMetric>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomMetric>): void;
        get(params: Params$Resource$Properties$Custommetrics$Get, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomMetric>): void;
        get(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomMetric>): void;
        /**
         * Lists CustomMetrics on a property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.customMetrics.list({
         *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
         *     pageSize: 'placeholder-value',
         *     // A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.
         *     pageToken: 'placeholder-value',
         *     // Required. Example format: properties/1234
         *     parent: 'properties/my-propertie',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "customMetrics": [],
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
        list(params: Params$Resource$Properties$Custommetrics$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Properties$Custommetrics$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaListCustomMetricsResponse>;
        list(params: Params$Resource$Properties$Custommetrics$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Properties$Custommetrics$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListCustomMetricsResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListCustomMetricsResponse>): void;
        list(params: Params$Resource$Properties$Custommetrics$List, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListCustomMetricsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListCustomMetricsResponse>): void;
        /**
         * Updates a CustomMetric on a property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.customMetrics.patch({
         *     // Output only. Resource name for this CustomMetric resource. Format: properties/{property\}/customMetrics/{customMetric\}
         *     name: 'properties/my-propertie/customMetrics/my-customMetric',
         *     // Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "description": "my_description",
         *       //   "displayName": "my_displayName",
         *       //   "measurementUnit": "my_measurementUnit",
         *       //   "name": "my_name",
         *       //   "parameterName": "my_parameterName",
         *       //   "restrictedMetricType": [],
         *       //   "scope": "my_scope"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "description": "my_description",
         *   //   "displayName": "my_displayName",
         *   //   "measurementUnit": "my_measurementUnit",
         *   //   "name": "my_name",
         *   //   "parameterName": "my_parameterName",
         *   //   "restrictedMetricType": [],
         *   //   "scope": "my_scope"
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
        patch(params: Params$Resource$Properties$Custommetrics$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Properties$Custommetrics$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaCustomMetric>;
        patch(params: Params$Resource$Properties$Custommetrics$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Properties$Custommetrics$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomMetric>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomMetric>): void;
        patch(params: Params$Resource$Properties$Custommetrics$Patch, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomMetric>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaCustomMetric>): void;
    }
    export interface Params$Resource$Properties$Custommetrics$Archive extends StandardParameters {
        /**
         * Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest;
    }
    export interface Params$Resource$Properties$Custommetrics$Create extends StandardParameters {
        /**
         * Required. Example format: properties/1234
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaCustomMetric;
    }
    export interface Params$Resource$Properties$Custommetrics$Get extends StandardParameters {
        /**
         * Required. The name of the CustomMetric to get. Example format: properties/1234/customMetrics/5678
         */
        name?: string;
    }
    export interface Params$Resource$Properties$Custommetrics$List extends StandardParameters {
        /**
         * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. Example format: properties/1234
         */
        parent?: string;
    }
    export interface Params$Resource$Properties$Custommetrics$Patch extends StandardParameters {
        /**
         * Output only. Resource name for this CustomMetric resource. Format: properties/{property\}/customMetrics/{customMetric\}
         */
        name?: string;
        /**
         * Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaCustomMetric;
    }
    export class Resource$Properties$Datastreams {
        context: APIRequestContext;
        measurementProtocolSecrets: Resource$Properties$Datastreams$Measurementprotocolsecrets;
        constructor(context: APIRequestContext);
        /**
         * Creates a DataStream.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.dataStreams.create({
         *     // Required. Example format: properties/1234
         *     parent: 'properties/my-propertie',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "androidAppStreamData": {},
         *       //   "createTime": "my_createTime",
         *       //   "displayName": "my_displayName",
         *       //   "iosAppStreamData": {},
         *       //   "name": "my_name",
         *       //   "type": "my_type",
         *       //   "updateTime": "my_updateTime",
         *       //   "webStreamData": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "androidAppStreamData": {},
         *   //   "createTime": "my_createTime",
         *   //   "displayName": "my_displayName",
         *   //   "iosAppStreamData": {},
         *   //   "name": "my_name",
         *   //   "type": "my_type",
         *   //   "updateTime": "my_updateTime",
         *   //   "webStreamData": {}
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
        create(params: Params$Resource$Properties$Datastreams$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Properties$Datastreams$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaDataStream>;
        create(params: Params$Resource$Properties$Datastreams$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Properties$Datastreams$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataStream>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataStream>): void;
        create(params: Params$Resource$Properties$Datastreams$Create, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataStream>): void;
        create(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataStream>): void;
        /**
         * Deletes a DataStream on a property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.dataStreams.delete({
         *     // Required. The name of the DataStream to delete. Example format: properties/1234/dataStreams/5678
         *     name: 'properties/my-propertie/dataStreams/my-dataStream',
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
        delete(params: Params$Resource$Properties$Datastreams$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Properties$Datastreams$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Properties$Datastreams$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Properties$Datastreams$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Properties$Datastreams$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Lookup for a single DataStream.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.dataStreams.get({
         *     // Required. The name of the DataStream to get. Example format: properties/1234/dataStreams/5678
         *     name: 'properties/my-propertie/dataStreams/my-dataStream',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "androidAppStreamData": {},
         *   //   "createTime": "my_createTime",
         *   //   "displayName": "my_displayName",
         *   //   "iosAppStreamData": {},
         *   //   "name": "my_name",
         *   //   "type": "my_type",
         *   //   "updateTime": "my_updateTime",
         *   //   "webStreamData": {}
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
        get(params: Params$Resource$Properties$Datastreams$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Properties$Datastreams$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaDataStream>;
        get(params: Params$Resource$Properties$Datastreams$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Properties$Datastreams$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataStream>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataStream>): void;
        get(params: Params$Resource$Properties$Datastreams$Get, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataStream>): void;
        get(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataStream>): void;
        /**
         * Lists DataStreams on a property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.dataStreams.list({
         *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
         *     pageSize: 'placeholder-value',
         *     // A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token.
         *     pageToken: 'placeholder-value',
         *     // Required. Example format: properties/1234
         *     parent: 'properties/my-propertie',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "dataStreams": [],
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
        list(params: Params$Resource$Properties$Datastreams$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Properties$Datastreams$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaListDataStreamsResponse>;
        list(params: Params$Resource$Properties$Datastreams$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Properties$Datastreams$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListDataStreamsResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListDataStreamsResponse>): void;
        list(params: Params$Resource$Properties$Datastreams$List, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListDataStreamsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListDataStreamsResponse>): void;
        /**
         * Updates a DataStream on a property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.dataStreams.patch({
         *     // Output only. Resource name of this Data Stream. Format: properties/{property_id\}/dataStreams/{stream_id\} Example: "properties/1000/dataStreams/2000"
         *     name: 'properties/my-propertie/dataStreams/my-dataStream',
         *     // Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "androidAppStreamData": {},
         *       //   "createTime": "my_createTime",
         *       //   "displayName": "my_displayName",
         *       //   "iosAppStreamData": {},
         *       //   "name": "my_name",
         *       //   "type": "my_type",
         *       //   "updateTime": "my_updateTime",
         *       //   "webStreamData": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "androidAppStreamData": {},
         *   //   "createTime": "my_createTime",
         *   //   "displayName": "my_displayName",
         *   //   "iosAppStreamData": {},
         *   //   "name": "my_name",
         *   //   "type": "my_type",
         *   //   "updateTime": "my_updateTime",
         *   //   "webStreamData": {}
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
        patch(params: Params$Resource$Properties$Datastreams$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Properties$Datastreams$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaDataStream>;
        patch(params: Params$Resource$Properties$Datastreams$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Properties$Datastreams$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataStream>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataStream>): void;
        patch(params: Params$Resource$Properties$Datastreams$Patch, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataStream>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaDataStream>): void;
    }
    export interface Params$Resource$Properties$Datastreams$Create extends StandardParameters {
        /**
         * Required. Example format: properties/1234
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaDataStream;
    }
    export interface Params$Resource$Properties$Datastreams$Delete extends StandardParameters {
        /**
         * Required. The name of the DataStream to delete. Example format: properties/1234/dataStreams/5678
         */
        name?: string;
    }
    export interface Params$Resource$Properties$Datastreams$Get extends StandardParameters {
        /**
         * Required. The name of the DataStream to get. Example format: properties/1234/dataStreams/5678
         */
        name?: string;
    }
    export interface Params$Resource$Properties$Datastreams$List extends StandardParameters {
        /**
         * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. Example format: properties/1234
         */
        parent?: string;
    }
    export interface Params$Resource$Properties$Datastreams$Patch extends StandardParameters {
        /**
         * Output only. Resource name of this Data Stream. Format: properties/{property_id\}/dataStreams/{stream_id\} Example: "properties/1000/dataStreams/2000"
         */
        name?: string;
        /**
         * Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaDataStream;
    }
    export class Resource$Properties$Datastreams$Measurementprotocolsecrets {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a measurement protocol secret.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await analyticsadmin.properties.dataStreams.measurementProtocolSecrets.create(
         *       {
         *         // Required. The parent resource where this secret will be created. Format: properties/{property\}/dataStreams/{dataStream\}
         *         parent: 'properties/my-propertie/dataStreams/my-dataStream',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "displayName": "my_displayName",
         *           //   "name": "my_name",
         *           //   "secretValue": "my_secretValue"
         *           // }
         *         },
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "secretValue": "my_secretValue"
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
        create(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>;
        create(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>): void;
        create(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>): void;
        create(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>): void;
        /**
         * Deletes target MeasurementProtocolSecret.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await analyticsadmin.properties.dataStreams.measurementProtocolSecrets.delete(
         *       {
         *         // Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
         *         name: 'properties/my-propertie/dataStreams/my-dataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
         *       }
         *     );
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
        delete(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Lookup for a single "GA4" MeasurementProtocolSecret.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await analyticsadmin.properties.dataStreams.measurementProtocolSecrets.get({
         *       // Required. The name of the measurement protocol secret to lookup. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
         *       name: 'properties/my-propertie/dataStreams/my-dataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
         *     });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "secretValue": "my_secretValue"
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
        get(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>;
        get(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>): void;
        get(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>): void;
        get(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>): void;
        /**
         * Returns child MeasurementProtocolSecrets under the specified parent Property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await analyticsadmin.properties.dataStreams.measurementProtocolSecrets.list(
         *       {
         *         // The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
         *         pageSize: 'placeholder-value',
         *         // A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
         *         pageToken: 'placeholder-value',
         *         // Required. The resource name of the parent stream. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets
         *         parent: 'properties/my-propertie/dataStreams/my-dataStream',
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "measurementProtocolSecrets": [],
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
        list(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse>;
        list(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse>): void;
        list(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse>): void;
        /**
         * Updates a measurement protocol secret.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res =
         *     await analyticsadmin.properties.dataStreams.measurementProtocolSecrets.patch(
         *       {
         *         // Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
         *         name: 'properties/my-propertie/dataStreams/my-dataStream/measurementProtocolSecrets/my-measurementProtocolSecret',
         *         // The list of fields to be updated. Omitted fields will not be updated.
         *         updateMask: 'placeholder-value',
         *
         *         // Request body metadata
         *         requestBody: {
         *           // request body parameters
         *           // {
         *           //   "displayName": "my_displayName",
         *           //   "name": "my_name",
         *           //   "secretValue": "my_secretValue"
         *           // }
         *         },
         *       }
         *     );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "displayName": "my_displayName",
         *   //   "name": "my_name",
         *   //   "secretValue": "my_secretValue"
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
        patch(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>;
        patch(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>): void;
        patch(params: Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret>): void;
    }
    export interface Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Create extends StandardParameters {
        /**
         * Required. The parent resource where this secret will be created. Format: properties/{property\}/dataStreams/{dataStream\}
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;
    }
    export interface Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Delete extends StandardParameters {
        /**
         * Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
         */
        name?: string;
    }
    export interface Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Get extends StandardParameters {
        /**
         * Required. The name of the measurement protocol secret to lookup. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
         */
        name?: string;
    }
    export interface Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$List extends StandardParameters {
        /**
         * The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The resource name of the parent stream. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets
         */
        parent?: string;
    }
    export interface Params$Resource$Properties$Datastreams$Measurementprotocolsecrets$Patch extends StandardParameters {
        /**
         * Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property\}/dataStreams/{dataStream\}/measurementProtocolSecrets/{measurementProtocolSecret\}
         */
        name?: string;
        /**
         * The list of fields to be updated. Omitted fields will not be updated.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;
    }
    export class Resource$Properties$Firebaselinks {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a FirebaseLink. Properties can have at most one FirebaseLink.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.firebaseLinks.create({
         *     // Required. Format: properties/{property_id\} Example: properties/1234
         *     parent: 'properties/my-propertie',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "createTime": "my_createTime",
         *       //   "name": "my_name",
         *       //   "project": "my_project"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "createTime": "my_createTime",
         *   //   "name": "my_name",
         *   //   "project": "my_project"
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
        create(params: Params$Resource$Properties$Firebaselinks$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Properties$Firebaselinks$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaFirebaseLink>;
        create(params: Params$Resource$Properties$Firebaselinks$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Properties$Firebaselinks$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaFirebaseLink>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaFirebaseLink>): void;
        create(params: Params$Resource$Properties$Firebaselinks$Create, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaFirebaseLink>): void;
        create(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaFirebaseLink>): void;
        /**
         * Deletes a FirebaseLink on a property
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.firebaseLinks.delete({
         *     // Required. Format: properties/{property_id\}/firebaseLinks/{firebase_link_id\} Example: properties/1234/firebaseLinks/5678
         *     name: 'properties/my-propertie/firebaseLinks/my-firebaseLink',
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
        delete(params: Params$Resource$Properties$Firebaselinks$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Properties$Firebaselinks$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Properties$Firebaselinks$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Properties$Firebaselinks$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Properties$Firebaselinks$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.firebaseLinks.list({
         *     // The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
         *     pageSize: 'placeholder-value',
         *     // A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token.
         *     pageToken: 'placeholder-value',
         *     // Required. Format: properties/{property_id\} Example: properties/1234
         *     parent: 'properties/my-propertie',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "firebaseLinks": [],
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
        list(params: Params$Resource$Properties$Firebaselinks$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Properties$Firebaselinks$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaListFirebaseLinksResponse>;
        list(params: Params$Resource$Properties$Firebaselinks$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Properties$Firebaselinks$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListFirebaseLinksResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListFirebaseLinksResponse>): void;
        list(params: Params$Resource$Properties$Firebaselinks$List, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListFirebaseLinksResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListFirebaseLinksResponse>): void;
    }
    export interface Params$Resource$Properties$Firebaselinks$Create extends StandardParameters {
        /**
         * Required. Format: properties/{property_id\} Example: properties/1234
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaFirebaseLink;
    }
    export interface Params$Resource$Properties$Firebaselinks$Delete extends StandardParameters {
        /**
         * Required. Format: properties/{property_id\}/firebaseLinks/{firebase_link_id\} Example: properties/1234/firebaseLinks/5678
         */
        name?: string;
    }
    export interface Params$Resource$Properties$Firebaselinks$List extends StandardParameters {
        /**
         * The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. Format: properties/{property_id\} Example: properties/1234
         */
        parent?: string;
    }
    export class Resource$Properties$Googleadslinks {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a GoogleAdsLink.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.googleAdsLinks.create({
         *     // Required. Example format: properties/1234
         *     parent: 'properties/my-propertie',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "adsPersonalizationEnabled": false,
         *       //   "canManageClients": false,
         *       //   "createTime": "my_createTime",
         *       //   "creatorEmailAddress": "my_creatorEmailAddress",
         *       //   "customerId": "my_customerId",
         *       //   "name": "my_name",
         *       //   "updateTime": "my_updateTime"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "adsPersonalizationEnabled": false,
         *   //   "canManageClients": false,
         *   //   "createTime": "my_createTime",
         *   //   "creatorEmailAddress": "my_creatorEmailAddress",
         *   //   "customerId": "my_customerId",
         *   //   "name": "my_name",
         *   //   "updateTime": "my_updateTime"
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
        create(params: Params$Resource$Properties$Googleadslinks$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Properties$Googleadslinks$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink>;
        create(params: Params$Resource$Properties$Googleadslinks$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Properties$Googleadslinks$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink>): void;
        create(params: Params$Resource$Properties$Googleadslinks$Create, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink>): void;
        create(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink>): void;
        /**
         * Deletes a GoogleAdsLink on a property
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.googleAdsLinks.delete({
         *     // Required. Example format: properties/1234/googleAdsLinks/5678
         *     name: 'properties/my-propertie/googleAdsLinks/my-googleAdsLink',
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
        delete(params: Params$Resource$Properties$Googleadslinks$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Properties$Googleadslinks$Delete, options?: MethodOptions): GaxiosPromise<Schema$GoogleProtobufEmpty>;
        delete(params: Params$Resource$Properties$Googleadslinks$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Properties$Googleadslinks$Delete, options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(params: Params$Resource$Properties$Googleadslinks$Delete, callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
        /**
         * Lists GoogleAdsLinks on a property.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/analytics.edit',
         *       'https://www.googleapis.com/auth/analytics.readonly',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.googleAdsLinks.list({
         *     // The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
         *     pageSize: 'placeholder-value',
         *     // A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
         *     pageToken: 'placeholder-value',
         *     // Required. Example format: properties/1234
         *     parent: 'properties/my-propertie',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "googleAdsLinks": [],
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
        list(params: Params$Resource$Properties$Googleadslinks$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Properties$Googleadslinks$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse>;
        list(params: Params$Resource$Properties$Googleadslinks$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Properties$Googleadslinks$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse>): void;
        list(params: Params$Resource$Properties$Googleadslinks$List, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse>): void;
        /**
         * Updates a GoogleAdsLink on a property
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const analyticsadmin = google.analyticsadmin('v1beta');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await analyticsadmin.properties.googleAdsLinks.patch({
         *     // Output only. Format: properties/{propertyId\}/googleAdsLinks/{googleAdsLinkId\} Note: googleAdsLinkId is not the Google Ads customer ID.
         *     name: 'properties/my-propertie/googleAdsLinks/my-googleAdsLink',
         *     // Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "adsPersonalizationEnabled": false,
         *       //   "canManageClients": false,
         *       //   "createTime": "my_createTime",
         *       //   "creatorEmailAddress": "my_creatorEmailAddress",
         *       //   "customerId": "my_customerId",
         *       //   "name": "my_name",
         *       //   "updateTime": "my_updateTime"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "adsPersonalizationEnabled": false,
         *   //   "canManageClients": false,
         *   //   "createTime": "my_createTime",
         *   //   "creatorEmailAddress": "my_creatorEmailAddress",
         *   //   "customerId": "my_customerId",
         *   //   "name": "my_name",
         *   //   "updateTime": "my_updateTime"
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
        patch(params: Params$Resource$Properties$Googleadslinks$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Properties$Googleadslinks$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink>;
        patch(params: Params$Resource$Properties$Googleadslinks$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Properties$Googleadslinks$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink>, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink>): void;
        patch(params: Params$Resource$Properties$Googleadslinks$Patch, callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink>): void;
    }
    export interface Params$Resource$Properties$Googleadslinks$Create extends StandardParameters {
        /**
         * Required. Example format: properties/1234
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink;
    }
    export interface Params$Resource$Properties$Googleadslinks$Delete extends StandardParameters {
        /**
         * Required. Example format: properties/1234/googleAdsLinks/5678
         */
        name?: string;
    }
    export interface Params$Resource$Properties$Googleadslinks$List extends StandardParameters {
        /**
         * The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. Example format: properties/1234
         */
        parent?: string;
    }
    export interface Params$Resource$Properties$Googleadslinks$Patch extends StandardParameters {
        /**
         * Output only. Format: properties/{propertyId\}/googleAdsLinks/{googleAdsLinkId\} Note: googleAdsLinkId is not the Google Ads customer ID.
         */
        name?: string;
        /**
         * Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleAnalyticsAdminV1betaGoogleAdsLink;
    }
    export {};
}
