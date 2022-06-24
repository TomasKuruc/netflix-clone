import React, {useEffect, useState} from 'react';
import Backdrop from "helpers/Backdrop";
import CloseModal from "assets/icons/close.svg";
import clsx from "clsx";
import {useTypedSelector} from "helpers/reducers";
import {useDispatch} from "useDispatch";
import ModalAction from "stores/modal/ModalAction";

interface ModalProps {}

const Modal = (props: ModalProps) => {
    const modal = useTypedSelector(state => state.modal);
    const dispatch = useDispatch();
    const [height, setHeight] = useState(0);
    const [disableClose, setDisableClose] = useState(false);
    let style;
    let translation;
    const [reload, setReload] = useState(performance.navigation.type);

    useEffect(() => {
        setReload(0);
    }, [performance.navigation.type]);


    useEffect(() => {
        if (modal.props?.disableClose) {
            setDisableClose(true);
        }
    }, []);

    // alert(modal.component?.props);

    useEffect(() => {
        const documentHeight = document.documentElement.offsetHeight;
        setHeight(documentHeight);
    }, []);

    if (document.documentElement.offsetWidth < 585) {
        // let heightOptions = (height / 2) * 0.9;
        style = 'translate(0%, 0%)';
        // style = 'translate(-50%, -50%)';
        translation = 'translate(0%,-250vh)';

    } else {
        style = 'translate(-50%, -50%)';
        translation = 'translate(-50%,-250vh)'
    }

    if (window.performance) {
        if (reload === 1) {
            dispatch(ModalAction.closeModal());
        }
    }


    return (
        <>
            <Backdrop show={modal.isOpen}/>
            <div
                className={clsx("Modal", modal.props?.className, modal.isOpen && 'showModal')}
                style={{
                    // transform: modal.isOpen ? style : translation,
                    opacity: modal.isOpen ? '1' : '0',
                }}
            >
                <div className="summary-login summary-forgotPassword summary-addDays">
                    {!disableClose && (
                        <div className="modal__header">
                            <img src={CloseModal} className="closeModal" onClick={() => dispatch(ModalAction.closeModal())} alt=""/>
                        </div>
                    )}
                    <div className="modal__body">
                        {modal.component}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;