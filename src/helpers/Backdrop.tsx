import React from 'react';
import {useDispatch} from "react-redux";
import ModalAction from "stores/modal/ModalAction";

interface BackdropProps {
    show: boolean | undefined,
}

const Backdrop = (props: BackdropProps) => {
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(ModalAction.closeModal());
    }

    return (
        props.show ? <div className="Backdrop" onClick={closeModalHandler}></div> : null
    );
};

export default Backdrop;