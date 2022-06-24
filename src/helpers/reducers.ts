import {combineReducers} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import ModalAction from "stores/modal/ModalAction";
import TestReducer from "stores/test/TestReducer";

function modal(state: null | any, action: any) {
    if (typeof state === "undefined") {
        return {
            component: null,
        };
    }
    if (action.type === ModalAction.SET_OPEN_MODAL) {
        if (action.toggle) {
            if (state && state.component && state.component === action.component) {
                return {
                    component: null,
                    props: {
                        ...state.props,
                        ...(action.props || {}),
                    },
                    isOpen: !state.isOpen,
                };
            }
        }
        const newState = action.component
            ? {
                isOpen: true,
                ...action,
            }
            : {
                component: null,
                props: {},
            };

        return newState;
    } else {
        return state;
    }
}

const reducers = combineReducers({
    modal,
    test: new TestReducer().reducer
});

export type RootState = ReturnType<typeof reducers>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default reducers;