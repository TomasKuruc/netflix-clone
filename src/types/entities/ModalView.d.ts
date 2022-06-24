import React from "react";

export interface ModalView {
    component: React.Component | {} | null,
    isOpen: boolean
}