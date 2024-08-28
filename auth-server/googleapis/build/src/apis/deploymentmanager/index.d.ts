/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { deploymentmanager_alpha } from '.bin/googleapis/build/src/apis/deploymentmanager/alpha';
import { deploymentmanager_v2 } from '.bin/googleapis/build/src/apis/deploymentmanager/v2';
import { deploymentmanager_v2beta } from '.bin/googleapis/build/src/apis/deploymentmanager/v2beta';
export declare const VERSIONS: {
    alpha: typeof deploymentmanager_alpha.Deploymentmanager;
    v2: typeof deploymentmanager_v2.Deploymentmanager;
    v2beta: typeof deploymentmanager_v2beta.Deploymentmanager;
};
export declare function deploymentmanager(version: 'alpha'): deploymentmanager_alpha.Deploymentmanager;
export declare function deploymentmanager(options: deploymentmanager_alpha.Options): deploymentmanager_alpha.Deploymentmanager;
export declare function deploymentmanager(version: 'v2'): deploymentmanager_v2.Deploymentmanager;
export declare function deploymentmanager(options: deploymentmanager_v2.Options): deploymentmanager_v2.Deploymentmanager;
export declare function deploymentmanager(version: 'v2beta'): deploymentmanager_v2beta.Deploymentmanager;
export declare function deploymentmanager(options: deploymentmanager_v2beta.Options): deploymentmanager_v2beta.Deploymentmanager;
declare const auth: AuthPlus;
export { auth };
export { deploymentmanager_alpha };
export { deploymentmanager_v2 };
export { deploymentmanager_v2beta };
export { AuthPlus, GlobalOptions, APIRequestContext, GoogleConfigurable, StreamMethodOptions, GaxiosPromise, MethodOptions, BodyResponseCallback, } from 'googleapis-common';
