import { createFeatureSelector, createSelector } from "@ngrx/store";
import { countReducer, CountState } from "./app.reducer";

export const selectCountFeature = createFeatureSelector<CountState>("exampleCount");

export const selectCount = createSelector(
  selectCountFeature,
  (state: CountState): number => state.count
);

export const selectUpdateAt = createSelector(
  selectCountFeature,
  (state:CountState): number => state.updateAt
);
