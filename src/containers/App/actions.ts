import { Action } from '../../common/types';

import { DEFAULT_ACTION } from './constants';

export function defaultAction(): Action {
  return {
    type: DEFAULT_ACTION,
    payload: 'Hello world',
  };
}
