import React from "react";
import ModalAction from "stores/modal/ModalAction";
import {ModalView} from "types/entities";
import update from "immutability-helper";

interface ModalReducerSetOpenModalAction {
    payload: React.ReactNode,
    type: typeof ModalAction.SET_OPEN_MODAL
}

interface ModalReducerInitModalAction {
    payload: any,
    type: typeof ModalAction.INIT_MODAL
}

interface ModalReducerCloseModalAction {
    payload: null,
    type: typeof ModalAction.SET_CLOSE_MODAL,
}

type ModalReducerAction =
    ModalReducerSetOpenModalAction
    | ModalReducerCloseModalAction
    | ModalReducerInitModalAction;

interface ModalState {
    modalView: ModalView | null
}

class ModalReducer {
    initialState: ModalState = {
        modalView: null
    };

    reducer = (state: ModalState = this.initialState, action: ModalReducerAction): ModalState => {
        switch (action.type) {
            case ModalAction.INIT_MODAL:
                return update(state, {
                    modalView: {
                        $set: action.payload
                    }
                })

            case ModalAction.SET_OPEN_MODAL:
                return update(state, {
                    modalView: {
                        component: {
                            $set: action.payload
                        },
                        isOpen: {
                            $set: true
                        }
                    }
                })

            case ModalAction.SET_CLOSE_MODAL:
                return update(state, {
                    modalView: {
                        component: {
                            $set: null
                        },
                        isOpen: {
                            $set: false
                        }
                    }
                })

            default: return state;
        }
    }
}

export default ModalReducer;