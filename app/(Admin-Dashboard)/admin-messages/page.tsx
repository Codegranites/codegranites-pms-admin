'use client';
import React, { useState } from 'react';
import MessageModal from '../../../components/messages/MessageModal';
import Button from '@ui/Button';
import { Add } from 'iconsax-react';
import Table from './[message]/table';

const MessageAdmin = () => {
	const [selectedTab, setSelectedTab] = useState('all');
	const [openMessageModal, setOpenMessageModal] = useState<boolean>(false);

	const handleTabChange = (tab) => {
		setSelectedTab(tab);
	};

	return (
		<div className="p-6">
			<Table />
			{/* <Button leftIcon={<Add />} onClick={() => setOpenMessageModal(true)}>
				New Messages
			</Button> */}

			{/* <div className="flex gap-8">
				<button onClick={() => handleTabChange('all')}>All Messages</button>
				<button onClick={() => handleTabChange('inbox')}>Inbox</button>
				<button onClick={() => handleTabChange('sent')}>Sent</button>
				<button onClick={() => handleTabChange('drafts')}>Drafts</button>
				<button onClick={() => handleTabChange('archived')}>Archived</button>
			</div>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Stack</th>
						<th>Date</th>
						<th>Time</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{selectedTab === 'all' ? (
						<tr>
							<td>John Doe</td>
							<td>React</td>
							<td>2023-01-01</td>
							<td>10:00 AM</td>
							<td>All Messages Status</td>
						</tr>
					) : selectedTab === 'benz' ? (
						<tr>
							<td>Jane Doe</td>
							<td>Node.js</td>
							<td>2023-01-02</td>
							<td>2:30 PM</td>
							<td>Inbox Status</td>
						</tr>
					) : selectedTab === 'sent' ? (
						<tr>
							<td>Bob Smith</td>
							<td>Angular</td>
							<td>2023-01-03</td>
							<td>4:45 PM</td>
							<td>Sent Status</td>
						</tr>
					) : selectedTab === 'drafts' ? (
						<tr>
							<td>Alice Johnson</td>
							<td>Vue.js</td>
							<td>2023-01-04</td>
							<td>8:15 AM</td>
							<td>Drafts Status</td>
						</tr>
					) : (
						<tr>
							<td>Charlie Brown</td>
							<td>Express</td>
							<td>2023-01-05</td>
							<td>12:00 PM</td>
							<td>Archived Status</td>
						</tr>
					)}
				</tbody>
			</table> */}
			{/* {openMessageModal && <MessageModal isOpen={openMessageModal} onClose={() => setOpenMessageModal(false)} />} */}
		</div>
	);
};

export default MessageAdmin;
