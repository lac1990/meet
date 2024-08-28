/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { iam_v1 } from '.bin/googleapis/build/src/apis/iam/v1';
import { iam_v2beta } from '.bin/googleapis/build/src/apis/iam/v2beta';
export declare const VERSIONS: {
    v1: typeof iam_v1.Iam;
    v2beta: typeof iam_v2beta.Iam;
};
export declare function iam(version: 'v1'): iam_v1.Iam;
export declare function iam(options: iam_v1.Options): iam_v1.Iam;
export declare function iam(version: 'v2beta'): iam_v2beta.Iam;
export declare function iam(options: iam_v2beta.Options): iam_v2beta.Iam;
declare const auth: AuthPlus;
export { auth };
export { iam_v1 };
export { iam_v2beta };
export { AuthPlus, GlobalOptions, APIRequestContext, GoogleConfigurable, StreamMethodOptions, GaxiosPromise, MethodOptions, BodyResponseCallback, } from 'googleapis-common';
