import React, { useState, useCallback } from 'react'
import Modal from "../../universal-components/Modal/components/Modal";
import ModalBody from "../../universal-components/Modal/components/ModalBody";
import ModalHeader from "../../universal-components/Modal/components/ModalHeader";
import ModalFooter from "../../universal-components/Modal/components/ModalFooter";

const EditProfileModal = (props) => {
    return (
        <Modal>
            <ModalHeader>
            <h3>Test Modal #1</h3>
            </ModalHeader>
            <ModalBody>
            <p>Body of modal #1</p>
            </ModalBody>
            <ModalFooter>
            <button onClick={props.close} className="btn btn-primary">Close Modal</button>
            </ModalFooter>
        </Modal>
    )
}

export default EditProfileModal