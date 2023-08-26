    import React, { useState } from 'react';
    import Modal from './Modal';
    import PersonIcon from '@mui/icons-material/Person';
    import FavoriteIcon from '@mui/icons-material/Favorite';
    import BookmarkIcon from '@mui/icons-material/Bookmark';

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
                    <div className="modal-grid">
                        <div className="modal-text">
                            <h1>대한민국 서울</h1>
                            <h3>SEOUL</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <PersonIcon sx={{ fontSize: 45, mt: 3, ml: 10, mr: 8 }} />
                            <FavoriteIcon sx={{ fontSize: 45, mr: 8 }} />
                            <BookmarkIcon sx={{ fontSize: 45 }} />
                        </div>
                        <div className="modal-image">
                            <img src="https://picsum.photos/350/350" alt="aaa" />
                        </div>
                    </div>
                </Modal>
            </>
        );
    }

    export default ModalItem;