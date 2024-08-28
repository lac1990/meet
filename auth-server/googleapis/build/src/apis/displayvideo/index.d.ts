/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { displayvideo_v1 } from '.bin/googleapis/build/src/apis/displayvideo/v1';
import { displayvideo_v1beta } from '.bin/googleapis/build/src/apis/displayvideo/v1beta';
import { displayvideo_v1beta2 } from '.bin/googleapis/build/src/apis/displayvideo/v1beta2';
import { displayvideo_v1dev } from '.bin/googleapis/build/src/apis/displayvideo/v1dev';
import { displayvideo_v2 } from '.bin/googleapis/build/src/apis/displayvideo/v2';
export declare const VERSIONS: {
    v1: typeof displayvideo_v1.Displayvideo;
    v1beta: typeof displayvideo_v1beta.Displayvideo;
    v1beta2: typeof displayvideo_v1beta2.Displayvideo;
    v1dev: typeof displayvideo_v1dev.Displayvideo;
    v2: typeof displayvideo_v2.Displayvideo;
};
export declare function displayvideo(version: 'v1'): displayvideo_v1.Displayvideo;
export declare function displayvideo(options: displayvideo_v1.Options): displayvideo_v1.Displayvideo;
export declare function displayvideo(version: 'v1beta'): displayvideo_v1beta.Displayvideo;
export declare function displayvideo(options: displayvideo_v1beta.Options): displayvideo_v1beta.Displayvideo;
export declare function displayvideo(version: 'v1beta2'): displayvideo_v1beta2.Displayvideo;
export declare function displayvideo(options: displayvideo_v1beta2.Options): displayvideo_v1beta2.Displayvideo;
export declare function displayvideo(version: 'v1dev'): displayvideo_v1dev.Displayvideo;
export declare function displayvideo(options: displayvideo_v1dev.Options): displayvideo_v1dev.Displayvideo;
export declare function displayvideo(version: 'v2'): displayvideo_v2.Displayvideo;
export declare function displayvideo(options: displayvideo_v2.Options): displayvideo_v2.Displayvideo;
declare const auth: AuthPlus;
export { auth };
export { displayvideo_v1 };
export { displayvideo_v1beta };
export { displayvideo_v1beta2 };
export { displayvideo_v1dev };
export { displayvideo_v2 };
export { AuthPlus, GlobalOptions, APIRequestContext, GoogleConfigurable, StreamMethodOptions, GaxiosPromise, MethodOptions, BodyResponseCallback, } from 'googleapis-common';
