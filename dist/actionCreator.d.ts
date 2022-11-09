import React from 'react';
export declare type ActionCreator<Arg extends any = undefined, SyncDispatch extends React.Dispatch<any> = React.Dispatch<any>> = (dispatch: SyncDispatch, arg: Arg) => void;
