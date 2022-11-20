import React from 'react';
import { PayloadActionCreator } from 'react-ctx-toolkit';
import { ActionCreator } from './actionCreator';
declare type AsyncAction<Returned extends any = any> = {
    pending: PayloadActionCreator;
    fulfilled: PayloadActionCreator<Returned>;
    rejected: PayloadActionCreator<string>;
};
export declare const createAsyncThunk: <Returned extends unknown = any, Arg extends unknown = undefined>(actionPrefix: string, func: (arg: Arg) => Promise<Returned>, errorHandler: (reason: any) => string) => [action: AsyncAction<Returned>, creator: ActionCreator<Arg, React.Dispatch<any>>];
export {};
