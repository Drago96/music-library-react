import { useState, useCallback, useReducer } from 'react';
import {
  useMutation as useHookMutation,
  MutationFn,
  MutationHookOptions
} from 'react-apollo-hooks';
import { OperationVariables } from 'apollo-boost';

type UseMutationHook = (
  mutation: any,
  {
    onCompleted,
    onError,
    ...options
  }: {
    onCompleted?: (data?: any) => void;
    onError?: (error?: any) => void;
  } & MutationHookOptions<{}, OperationVariables, object>
) => [
  MutationFn<{}, OperationVariables>,
  { loading: boolean; called: boolean; error: any; data: any }
];

export const useMutation: UseMutationHook = (
  mutation,
  { onCompleted, onError, ...options } = {}
) => {
  const mutate = useHookMutation(mutation, options);

  const [mutationState, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'start':
          return {
            loading: true,
            called: true,
            error: null
          };
        case 'success':
          return {
            ...state,
            loading: false,
            data: action.payload.data
          };
        case 'error':
          return {
            ...state,
            loading: false,
            error: action.payload.error
          };
        default:
          return state;
      }
    },
    {
      loading: false,
      called: false,
      error: null,
      data: null
    }
  );

  const handler: MutationFn<any, OperationVariables> = useCallback(
    async (...args) => {
      dispatch({ type: 'start' });

      try {
        const { data } = await mutate(...args);

        dispatch({ type: 'success', payload: { data } });

        if (onCompleted) {
          onCompleted(data);
        }

        return { data };
      } catch (error) {
        dispatch({ type: 'error', payload: { error } });

        if (onError) {
          onError(error);
        } else {
          throw error;
        }
      }
    },
    [mutate, onCompleted, onError]
  );

  return [handler, { ...mutationState }];
};
