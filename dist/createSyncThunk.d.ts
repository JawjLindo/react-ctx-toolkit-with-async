import React from 'react';
import { PayloadActionCreator } from 'react-ctx-toolkit';
import { ActionCreator } from './actionCreator';
declare type SyncAction<Returned extends any = any> = PayloadActionCreator<Returned>;
export declare const createSyncThunk: <Returned extends unknown = any>(actionPrefix: string) => [action: import("react-ctx-toolkit/dist/tsHelper").IsAny<Returned, import("react-ctx-toolkit").ActionCreatorWithPayload<Returned, string>, import("react-ctx-toolkit/dist/tsHelper").IsUnknown<Returned, import("react-ctx-toolkit").ActionCreatorWithNonInferrablePayload<string>, import("react-ctx-toolkit/dist/tsHelper").IfVoid<Returned, import("react-ctx-toolkit").ActionCreatorWithoutPayload<string>, import("react-ctx-toolkit/dist/tsHelper").IfMaybeUndefined<Returned, import("react-ctx-toolkit").ActionCreatorWithOptionalPayload<Returned, string>, import("react-ctx-toolkit").ActionCreatorWithPayload<Returned, string>>>>>, creator: ActionCreator<Returned, React.Dispatch<any>>];
export {};
