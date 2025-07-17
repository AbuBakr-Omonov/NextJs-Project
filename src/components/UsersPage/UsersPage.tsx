"use client"
import { IUser } from '@/types/types';
import React from 'react'
import { Mail} from "lucide-react" 

interface Props {
  data: {
    users: IUser[];
  };
}
const UsersPage: React.FC<Props>= ({data}) => {
  return (
    <div>
        <div className='container mx-auto mt-[20px] grid grid-cols-4 gap-4 max-[990px]:grid-cols-3 max-[768px]:grid-cols-2 max-[540px]:grid-cols-1'>

         {
            data?.users?.map((user:IUser) =>(
                <div key={user.id} className=" w-full  bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                   <div className="flex justify-center p-6 pb-2">
                       <img
                         src={user.image || "/placeholder.svg?height=96&width=96"}
                         alt={`${user.firstName} ${user.lastName}'s avatar`}
                         className="h-24 w-24 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
                       />
                   </div>
                   <div className="flex flex-col items-center text-center px-6 pb-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                          {user.firstName} {user.lastName}
                        </h2>
                        <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <Mail className="h-4 w-4" />
                          {user.email}
                        </p>
                   </div>

                   <div className="flex-grow flex flex-col gap-4 p-6 pt-0">
                        <button className="mt-auto w-full py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-400 transition-colors">
                          View Profile
                        </button>
                   </div>
                </div>
            ))
         }
        </div>
    </div>
  )
}

export default UsersPage