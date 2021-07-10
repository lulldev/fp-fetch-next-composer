
import { pipe } from 'fp-ts/function';
import { fetcherNext } from '../core/fetch';

export const getAllProducts = () =>
  pipe(
    fetcherNext('all_products'),
  );
