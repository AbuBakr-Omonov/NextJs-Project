import UsersDeatilItem from '@/components/UsersPage/UsersDeatilItem';
import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

const UserDetail = async ({ params }: PageProps) => {
  const id = params.id;

  const data = await fetch(`https://dummyjson.com/users/${id}`);
  const usersDetail = await data.json();

  return (
    <div>
      <UsersDeatilItem data={usersDetail} />
    </div>
  );
};

export default UserDetail;
