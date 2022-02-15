import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { CountActions, countActionsType } from "./app.actions";

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

export const countReducer = (state = initialState, action: CountActions)=>{
  switch(action.type){
    case countActionsType.increase:
      return {
        ...state,
        count: state.count + 1
      };
      case countActionsType.decrease:
        return {
          ...state,
          updateAt: state.count - 1
        };
      case countActionsType.clear:
        return {
             ...state,
             count: 0
        };
default:
  return state;
    }
}





export const reducers: ActionReducerMap<State>={
    count: countReducer
}
