import UsersDeatilItem from '@/components/UsersPage/UsersDeatilItem'
import React from 'react'

const UserDetail = async ({params} : {params: {id: string}} ) => {
    const id = params.id
     console.log(id)
       const data = await fetch(`https://dummyjson.com/users/${id}`)
      const usersDetail = await data.json()
  return (
    <div>
        <UsersDeatilItem data={usersDetail}/>
    </div>
  )
}

export default UserDetail