import * as TE from 'fp-ts/TaskEither';
import { pipe } from 'fp-ts/function';
import { nextEventEmitter, NextEvent } from './next-composer';

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
              "type": "redirect",
              "code": "some-code",
              "params": {
                "url": "http://google.com/"
              }
            }
          }`));
        }, 100);
      }),
      (reason: unknown) => reason as Error,
  );
}

export const fetcherNext = <T>(method: FetchMethod): TE.TaskEither<Error, T> => pipe(
  fetcher(method),
  TE.map((response) => {
    const next = (response as any).next as NextEvent;
    if (next) {
      nextEventEmitter.emit(next.type, next);
    }
    return response;
  }),
  (response: any) => {
    return response;
  }
);
