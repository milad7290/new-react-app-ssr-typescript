/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { RootState } from '../rootTypes';
import { AppState, Locale } from './types';

export const app = (state: RootState): AppState => state.app;

export const getLocale = createSelector([app], (app): Locale => app.locale);
