import { useCallback, useState } from 'react';

type UseErrorsHandlerHook = () => [string[], (errors: any) => void];

export const useErrorsHandler: UseErrorsHandlerHook = () => {
  const [errors, setErrors] = useState<string[]>([]);

  const translateGraphQLErrors = useCallback(
    graphQLErrors => {
      setErrors(['placeholder errors']);
    },
    [errors, setErrors]
  );

  return [errors, translateGraphQLErrors];
};
