import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import FormAddingUser from "./FormAddingUser";

const UserAddModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <button onClick={toggle} type="button" className="btn btn-outline-primary">Add User</button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Model User</ModalHeader>
                <ModalBody>
                    <FormAddingUser/>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default UserAddModal;