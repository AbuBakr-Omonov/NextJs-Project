import UsersDeatilItem from '@/components/UsersPage/UsersDeatilItem';
import React from 'react';



export default async function UserDetail({ params }: { params: Promise<{ id: string }>}) {
  const {id} = await params;

  const data = await fetch(`https://dummyjson.com/users/${id}`);
  const usersDetail = await data.json();

  return (
    <div>
      <UsersDeatilItem data={usersDetail} />
    </div>
  );
};

