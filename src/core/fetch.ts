import * as TE from 'fp-ts/TaskEither';

require('isomorphic-fetch');

type FetchMethod = string;

export const fetcher = <T>(method: FetchMethod): TE.TaskEither<Error, T> => {
  return TE.tryCatch(
    () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(JSON.parse(`{
            "products": [
              { "id": 1, "title": "Milk" },
              { "id": 2, "title": "Bred" }
            ],
            "next": {
              "action": {
                "type": "redirect",
                "url": "http://google.com/"
              }
            }
          }`));
        }, 100);
      }),
      (reason: unknown) => reason as Error,
  );
}

// TODO: combine fetch + next handling
// export const fetcherNext = <T>(method: FetchMethod): TE.TaskEither<Error, T> => {
// };
