import React from 'react';
import Profile from '../../../../components/settings/Profile';
import UpdateForm from '../../../../components/settings/UpdateForm';

const ProfileSettings = () => {
	return (
		<div className="flex-col space-y-[80px]">
			<Profile />
			<UpdateForm />
		</div>
	);
};

export default ProfileSettings;
