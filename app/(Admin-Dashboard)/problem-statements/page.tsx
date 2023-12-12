"use client"
import React, { useState } from 'react';
import EmptyState from '../../../components/admin/problem-statements/EmptyState';
import NewIdeaModal from '../../../components/admin/problem-statements/NewIdeaModal';
import Problems from '../../../components/admin/problem-statements/Problems';

const ProblemStatements: React.FC = () => {
		const [isIdeaModal, setIsIdeaModal] = useState<boolean>(false)
	return <div>
		{/* <EmptyState openNewIdeaModal={() => setIsIdeaModal(true)} /> */}
		<Problems openNewIdeaModal={() => setIsIdeaModal(true)}/>
		{isIdeaModal && <NewIdeaModal isOpen={isIdeaModal} onClose={() => setIsIdeaModal(false)} />}
	</div>;
};

export default ProblemStatements;
