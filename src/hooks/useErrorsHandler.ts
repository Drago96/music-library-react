import { useCallback, useState } from 'react';
import { ApolloError } from 'apollo-boost';
import { head, get, flatten, map, values } from 'lodash';

type UseErrorsHandlerHook = () => [string[], (errors: any) => void];

export const useErrorsHandler: UseErrorsHandlerHook = () => {
  const [errors, setErrors] = useState<string[]>([]);

  const parseGraphQLValidationErrors = useCallback(
    validationErrors =>
      flatten(
        map(validationErrors, error => values(get(error, 'constraints')))
      ),
    []
  );

  const translateGraphQLErrors = useCallback(
    (graphQLErrors: ApolloError) => {
      const errorsObject = head(graphQLErrors.graphQLErrors);

      const translatedErrors =
        errorsObject.extensions.code === 'BAD_USER_INPUT'
          ? parseGraphQLValidationErrors(
              get(errorsObject, 'extensions.exception.errors')
            )
          : [errorsObject.message];

      setErrors(translatedErrors);
    },
    [errors, setErrors]
  );

  return [errors, translateGraphQLErrors];
};
