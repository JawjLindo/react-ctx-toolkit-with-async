import { Reducer, ReducerState, useReducer } from 'react';
import { ContextMiddleware } from './contextMiddleware';
export declare const useEnhancedReducer: <R extends Reducer<any, any>>(reducer: R, initState: ReducerState<R>, initializer?: Parameters<typeof useReducer>[2], middlewares?: ContextMiddleware<R>[]) => any[];
