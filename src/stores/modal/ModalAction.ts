import {createAction} from "helpers/createAction";

class ModalAction {
    static readonly SET_OPEN_MODAL = "ModalAction.SetOpenModal";
    static readonly SET_CLOSE_MODAL = "ModalAction.SetCloseModal";
    static readonly INIT_MODAL = "ModalAction.InitModal";

    static openModal(component: any) {
        return createAction(ModalAction.SET_OPEN_MODAL, component)
    }

    static closeModal() {
        return createAction(ModalAction.SET_CLOSE_MODAL, null);
    }

    static initModal = () => {
        return createAction(ModalAction.INIT_MODAL, {component: null, isOpen: false})
    }
}

export default ModalAction;