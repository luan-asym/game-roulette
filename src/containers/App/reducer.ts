import produce from 'immer';

import { Action } from '../../common/types';

import { DEFAULT_ACTION } from './constants';
import { ContainerState } from './types';

export const initialState: ContainerState = {
  container: 'App',
};

const appReducer = (state = initialState, action: Action) =>
  produce(state, (draft: ContainerState) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.message = action.payload;
        break;
      default:
        break;
    }
  });

export default appReducer;
