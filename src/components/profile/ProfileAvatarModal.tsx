import React, {useState} from 'react';
import Modal from 'react-modal';
import httpService from '../../services/httpService';
import {Avatar, User} from '../../pages/ProfilePage';

interface AvatarModalProps {
    avatars: Avatar[];
    user: User;
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export default function AvatarModal({avatars, user, isOpen, onRequestClose}: AvatarModalProps) {
    const avatarUrl = 'http://127.0.0.1:8080/avatars/';
    const [selectedAvatar, setSelectedAvatar] = useState<string>('');

    const handleAvatarClick = (avatar: string) => {
        setSelectedAvatar(avatar);
    };

    const handleUpdateUser = () => {
        if (!selectedAvatar) {
            alert('Please select an avatar');
            return;
        }

        httpService
            .put(`http://localhost:8080/api/user/${user.id}`, {avatar: selectedAvatar})
            .then(() => {
                alert('User updated successfully!');
                onRequestClose();
            })
            .catch((error) => console.error(error));
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Avatar Modal"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <div className="avatar-modal">
                <h1>Select Your Avatar</h1>

                <div className="avatar-container">
                    {avatars.map((avatar, index) => (
                        <img
                            key={index}
                            src={avatarUrl + avatar.filename}
                            alt="Avatar"
                            className={selectedAvatar === avatarUrl + avatar.filename ? 'selected' : ''}
                            onClick={() => handleAvatarClick(avatarUrl + avatar.filename)}
                        />
                    ))}
                </div>

                <button onClick={handleUpdateUser}>Update User</button>
            </div>
        </Modal>
    );
};
