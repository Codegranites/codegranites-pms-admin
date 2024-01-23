import React from 'react';
import Profile from '../../../../components/settings/Profile';
import UpdateForm from '../../../../components/settings/UpdateForm';

const ProfileSettings = () => {
  return (
    <div className="flex-col pt-2 pb-8">
      <Profile />
      <UpdateForm />
    </div>
  );
};

export default ProfileSettings;
