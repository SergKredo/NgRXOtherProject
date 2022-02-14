import { ActionReducer, ActionReducerMap } from "@ngrx/store";

export interface State{
   count: CountState;

}


export interface CountState{
  count: number;
  updateAt: number;
};

export const initialState: CountState = {
  count: 0,
  updateAt: Date.now()
}

export const countReducer = (state = initialState, action)=>{
  return state;
}





export const reducers: ActionReducerMap<State>={
    count: countReducer
}
