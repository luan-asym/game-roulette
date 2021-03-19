import { createSelector } from 'reselect';
import { State } from '../../redux/types';

export const selectApp = (state: State) => state.app;

export const selectMessage = createSelector(selectApp, (app) => app.message);
