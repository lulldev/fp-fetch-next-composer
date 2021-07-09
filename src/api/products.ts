
import { pipe } from 'fp-ts/function';
import { fetcher } from '../core/fetch';

export const getAllProducts = () =>
  pipe(
    fetcher('all_products'),
  );
