'use client';

import React, { useState } from 'react';
import DeleteWorkSpace from '../../../components/admin/modals/delete';
import Button from '@ui/Button';
import useDisclosure from '../../../hooks/useDisclosure';

const AdminDashboard = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleDelete = () => {
		// Implement  delete logic here
		console.log('Workspace deleted');
		// Close the modal after deletion
		setIsModalOpen(false);
	};
	return (
		<div>
			AdminDashboard
			<Button onClick={() => setIsModalOpen(true)} size={'md'}>
				2fa
			</Button>
			<DeleteWorkSpace isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onDelete={handleDelete} />
		</div>
	);
};

export default AdminDashboard;
