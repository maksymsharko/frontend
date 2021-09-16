import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import FormAddingGroup from "./FormAddingGroup"

const UserAddModal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <button onClick={toggle} type="button" className="btn btn-outline-primary">Add Group</button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal Group</ModalHeader>
                <ModalBody>
                    <FormAddingGroup/>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default UserAddModal;