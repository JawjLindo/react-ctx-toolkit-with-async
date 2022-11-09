import React, { Reducer } from 'react';
import { Action } from 'react-ctx-toolkit';
import { ContextMiddleware } from './contextMiddleware';
export declare type CreateContextOptions<S, A> = {
    displayName: string;
    initialState: S;
    actions: A;
};
declare type TContext<S, A> = {
    state: S;
    dispatch: React.Dispatch<Action<any>>;
    actions: A;
};
export declare function createContext<S, A>({ displayName, initialState, actions }: CreateContextOptions<S, A>, reducer: (state: S, action: Action<any>) => S, middleware?: ContextMiddleware<Reducer<S, Action<any>>>[]): {
    readonly Provider: ({ children }: {
        children: React.ReactNode;
    }) => React.FunctionComponentElement<React.ProviderProps<TContext<S, A> | undefined>>;
    readonly context: React.Context<TContext<S, A> | undefined>;
    readonly hooks: readonly [() => S, () => React.Dispatch<Action<any>>, () => A];
};
export {};
