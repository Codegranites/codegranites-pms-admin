import Modal from '@ui/Modal';
import React from 'react';
interface MessageModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function MessageModal({ isOpen, onClose }: MessageModalProps) {
	return (
		<Modal isOpen={isOpen} closeModal={onClose} closeOnOverlayClick title={'New message'} size="sm" isCloseIconPresent>
			MessageModal
		</Modal>
	);
}
