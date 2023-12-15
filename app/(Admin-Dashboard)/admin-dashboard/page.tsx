'use client';

import React, { useState } from 'react';
import DashNav from '../../../components/dashboard/navs/dashnav';
import Project from './components/project';
import Transction from './components/transaction';
import History from './components/history';

const AdminDashboard = () => {
	return (
		<section className="min-h-[1140px] justify-start pt-8 h-full">
			<div className="px-8">
				<DashNav />
			</div>
			<div className="flex-col flex lg:flex-row  w-full sm:px-3 mt-8 py-6 mb-6 justify-start h-full">
				<div className="lg:w-[60%] w-full h-full">
					<Project />
				</div>
				<div className="flex-col lg:w-[40%] w-full h-full">
					<History />
					<Transction />
				</div>
			</div>
		</section>
	);
};

export default AdminDashboard;
