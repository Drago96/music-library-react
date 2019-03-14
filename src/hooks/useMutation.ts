import { useState, useCallback } from 'react';
import {
  useMutation as useHookMutation,
  MutationFn,
  MutationHookOptions
} from 'react-apollo-hooks';
import { OperationVariables } from 'apollo-boost';

export const useMutation = (
  mutation: any,
  {
    onCompleted,
    onError,
    ...options
  }: {
    onCompleted?: (data?: any) => void;
    onError?: (error?: any) => void;
  } & MutationHookOptions<{}, OperationVariables, object> = {}
): [
  MutationFn<{}, OperationVariables>,
  { loading: boolean; called: boolean; error: any }
] => {
  const mutate = useHookMutation(mutation, options);

  const [loading, setLoading] = useState(false);
  const [called, setCalled] = useState(false);
  const [error, setError] = useState<any>(null);

  const handler: MutationFn<any, OperationVariables> = useCallback(
    async (...args) => {
      setLoading(true);
      setCalled(true);
      setError(null);

      try {
        const { data } = await mutate(...args);

        setLoading(false);

        if (onCompleted) {
          onCompleted(data);
        }

        return { data };
      } catch (error) {
        setLoading(false);
        setError(error);

        if (onError) {
          onError(error);
        } else {
          throw error;
        }
      }
    },
    [mutate, onCompleted, onError]
  );

  return [handler, { loading, error, called }];
};
