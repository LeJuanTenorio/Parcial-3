import { Actions, CellAction } from "../types/store"
import { appState } from "./index"
import { AppState } from "../types/store"

export const reducer = (currentAction:Actions,currentState:AppState):AppState => {
    const {action,payload} = currentAction;

    switch (action) {
        case CellAction.ADDCELL:
            return{
                ...currentState,
                STORE: payload,
            }
        default:
            return currentState
    }
}