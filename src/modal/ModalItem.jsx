    import React, { useState } from 'react';
    import Modal from './Modal';
   

    function ModalItem() {
        const [modalOpen, setModalOpen] = useState(false);
        const openModal = () => {
            setModalOpen(true);
        };

        const closeModal = () => {
            setModalOpen(false);
        };

        return (
            <>
                <button onClick={openModal}>456</button>
                <Modal isOpen={modalOpen} onClose={closeModal}>
                </Modal>
            </>
        );
    }

    export default ModalItem;