import UsersDeatilItem from '@/components/UsersPage/UsersDeatilItem'
import React from 'react'
interface Props{
  params:{
    id:string
  }
}
const UserDetail = async ({params} :Props) => {
    const id = await params.id
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