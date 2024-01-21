import React from 'react';
import ClientProfileContent from './ClientProfileContent';

interface ProfilePageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const ClientProfilePage = ({
  searchParams: { client_id, client_name }
}: ProfilePageProps) => {
  return (
    <ClientProfileContent client_id={client_id} client_name={client_name} />
  );
};

export default ClientProfilePage;
