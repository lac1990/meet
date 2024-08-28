/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { policytroubleshooter_v1 } from '.bin/googleapis/build/src/apis/policytroubleshooter/v1';
import { policytroubleshooter_v1beta } from '.bin/googleapis/build/src/apis/policytroubleshooter/v1beta';
export declare const VERSIONS: {
    v1: typeof policytroubleshooter_v1.Policytroubleshooter;
    v1beta: typeof policytroubleshooter_v1beta.Policytroubleshooter;
};
export declare function policytroubleshooter(version: 'v1'): policytroubleshooter_v1.Policytroubleshooter;
export declare function policytroubleshooter(options: policytroubleshooter_v1.Options): policytroubleshooter_v1.Policytroubleshooter;
export declare function policytroubleshooter(version: 'v1beta'): policytroubleshooter_v1beta.Policytroubleshooter;
export declare function policytroubleshooter(options: policytroubleshooter_v1beta.Options): policytroubleshooter_v1beta.Policytroubleshooter;
declare const auth: AuthPlus;
export { auth };
export { policytroubleshooter_v1 };
export { policytroubleshooter_v1beta };
export { AuthPlus, GlobalOptions, APIRequestContext, GoogleConfigurable, StreamMethodOptions, GaxiosPromise, MethodOptions, BodyResponseCallback, } from 'googleapis-common';
