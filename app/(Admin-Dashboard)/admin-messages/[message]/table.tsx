import Button from '@ui/Button';
import { Add, EmptyWalletAdd } from 'iconsax-react';
import React, { useState } from 'react';
import MessageModal from '../../../../components/messages/MessageModal';
import { Input } from '@ui/Input';

export default function Table() {
	const [openMessageModal, setOpenMessageModal] = useState<boolean>(false);
	const [selectedTab, setSelectedTab] = useState('all');

	// dummy data for the table
	const allMessagesData = [
		{
			id: 1,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Sent'
		},
		{
			id: 2,
			name: 'Boss Doe',
			text: 'this is the message content',

			stack: 'Designer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Received'
		},
		{
			id: 3,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Full stack Dev.',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Draft'
		},
		{
			id: 4,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Designer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'inbox'
		},
		{
			id: 5,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Full stack Dev.',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Sent'
		},
		{
			id: 6,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'inbox'
		},
		{
			id: 7,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Sent'
		}
	];
	const inBoxData = [
		{
			id: 8,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'inbox'
		},
		{
			id: 9,
			name: 'Boss Doe',
			text: 'this is the message content',

			stack: 'Designer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'inbox'
		},
		{
			id: 10,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Full stack Dev.',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'inbox'
		},
		{
			id: 11,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Designer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'inbox'
		},
		{
			id: 12,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Full stack Dev.',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'inbox'
		},
		{
			id: 13,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'inbox'
		},
		{
			id: 14,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'inbox'
		}
	];
	const sentData = [
		{
			id: 15,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'sent'
		},
		{
			id: 16,
			name: 'Boss Doe',
			text: 'this is the message content',

			stack: 'Designer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'sent'
		},
		{
			id: 17,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Full stack Dev.',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'sent'
		},
		{
			id: 18,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Designer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'sent'
		},
		{
			id: 19,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Full stack Dev.',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'sent'
		},
		{
			id: 20,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'sent'
		},
		{
			id: 21,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'sent'
		}
	];

	const receivedData = [
		{
			id: 22,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Received'
		},
		{
			id: 23,
			name: 'Boss Doe',
			text: 'this is the message content',

			stack: 'Designer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Received'
		},
		{
			id: 24,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Full stack Dev.',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Received'
		},
		{
			id: 25,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Designer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Received'
		},
		{
			id: 26,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Full stack Dev.',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Received'
		},
		{
			id: 27,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Received'
		},
		{
			id: 28,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Received'
		}
	];

	const draftData = [
		{
			id: 29,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Draft'
		},
		{
			id: 30,
			name: 'Boss Doe',
			text: 'this is the message content',

			stack: 'Designer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Draft'
		},
		{
			id: 31,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Full stack Dev.',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Draft'
		},
		{
			id: 32,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Designer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Draft'
		},
		{
			id: 33,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'Full stack Dev.',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Draft'
		},
		{
			id: 34,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Draft'
		},
		{
			id: 35,
			name: 'Boss Doe',
			text: 'this is the message content',
			stack: 'App Developer',
			date: '11th, Nov. 2023',
			time: '12:00pm',
			status: 'Draft'
		}
	];
	const dataTable = () => {
		if (selectedTab === 'all') {
			return allMessagesData;
		}
		if (selectedTab === 'inbox') {
			return inBoxData;
		}
		if (selectedTab === 'sent') {
			return sentData;
		}
		if (selectedTab === 'received') {
			return receivedData;
		}
		if (selectedTab === 'draft') {
			return draftData;
		}
	};
	const data = dataTable();
	// end of dummy data

	// style for status

	const statusStyles = {
		sent: { backgroundColor: '#80BD92', color: '#ffffff', width: '80px' },
		inbox: { backgroundColor: '#B493A3', color: '#ffffff', width: '80px' },
		received: { backgroundColor: '#5C5157', color: '#ffffff', width: '80px' },
		draft: { backgroundColor: '#F3DE8A', color: '#ffffff', width: '80px' },
		all: { backgroundColor: '#3498db', color: '#ffffff', width: '80px' }
	};

	// allmessagestyle

	const allMessagesStatusStyles = {
		sent: { backgroundColor: '#80BD92', color: '#ffffff', width: '80px' },
		inbox: { backgroundColor: '#B493A3', color: '#ffffff', height: '20px', width: '80px' },
		received: { backgroundColor: '#5C5157', color: '#ffffff', width: '80px' },
		draft: { backgroundColor: '#F3DE8A', color: '#ffffff', width: '80px' },
		all: { backgroundColor: '#3498db', color: '#ffffff', width: '80px' }
	};
	const getStatusStyles = (status, isAllMessages) => {
		if (isAllMessages) {
			return allMessagesStatusStyles[status.toLowerCase()] || {};
		} else {
			return statusStyles[status.toLowerCase()] || {};
		}
	};

	return (
		<>
			<div className="flex gap-8 py-4 pb-14 border-b-2 border-gray-300">
				<Button
					onClick={() => setSelectedTab('all')}
					className="bg-white text-black border border-current bg-opacity-50"
				>
					All message
				</Button>
				<Button onClick={() => setSelectedTab('inbox')}>Inbox</Button>
				<Button onClick={() => setSelectedTab('sent')}>Sent</Button>
				<Button onClick={() => setSelectedTab('received')}>Received</Button>
				<Button onClick={() => setSelectedTab('draft')}>Draft</Button>
			</div>
			<div className="flex justify-between py-12">
				<Button
					className="bg-white text-black border border-current bg-opacity-50"
					leftIcon={<Add />}
					onClick={() => setOpenMessageModal(true)}
				>
					New Messages
				</Button>

				<Input
					onChange={(e) => {
						console.log(e.target.value);
					}}
					type="email"
					intent={'default'}
					size={'lg'}
					placeHolder="Search"
				/>
			</div>
			{openMessageModal && <MessageModal isOpen={openMessageModal} onClose={() => setOpenMessageModal(false)} />}
			<table className="table-fixed border-collapse w-full">
				<thead>
					<tr className="border-b">
						<th className="w-1/5 border-r">Name</th>
						<th className="w-1/5 border-r">Stack</th>
						<th className="w-1/5 border-r">Date</th>
						<th className="w-1/5 border-r">Time</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{data.map((inputData) => (
						<tr className="border-b" key={inputData.id}>
							<td className="w-1/5 border-r text-center p-4">{inputData.name}</td>
							<td className="w-1/5 border-r text-center p-4">{inputData.stack}</td>
							<td className="w-1/5 border-r text-center p-4">{inputData.date}</td>
							<td className="w-1/5 border-r text-center p-4">{inputData.time}</td>
							<td
								className="w-1/5 border-r text-center p-2"
								style={getStatusStyles(inputData.status, selectedTab === 'all')}
							>
								{inputData.status}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
