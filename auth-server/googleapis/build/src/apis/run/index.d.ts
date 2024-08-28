/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { run_v1 } from '.bin/googleapis/build/src/apis/run/v1';
import { run_v1alpha1 } from '.bin/googleapis/build/src/apis/run/v1alpha1';
import { run_v1beta1 } from '.bin/googleapis/build/src/apis/run/v1beta1';
import { run_v2 } from '.bin/googleapis/build/src/apis/run/v2';
export declare const VERSIONS: {
    v1: typeof run_v1.Run;
    v1alpha1: typeof run_v1alpha1.Run;
    v1beta1: typeof run_v1beta1.Run;
    v2: typeof run_v2.Run;
};
export declare function run(version: 'v1'): run_v1.Run;
export declare function run(options: run_v1.Options): run_v1.Run;
export declare function run(version: 'v1alpha1'): run_v1alpha1.Run;
export declare function run(options: run_v1alpha1.Options): run_v1alpha1.Run;
export declare function run(version: 'v1beta1'): run_v1beta1.Run;
export declare function run(options: run_v1beta1.Options): run_v1beta1.Run;
export declare function run(version: 'v2'): run_v2.Run;
export declare function run(options: run_v2.Options): run_v2.Run;
declare const auth: AuthPlus;
export { auth };
export { run_v1 };
export { run_v1alpha1 };
export { run_v1beta1 };
export { run_v2 };
export { AuthPlus, GlobalOptions, APIRequestContext, GoogleConfigurable, StreamMethodOptions, GaxiosPromise, MethodOptions, BodyResponseCallback, } from 'googleapis-common';
