import React from "react"
import { Mail, Phone, MapPin, Building, Briefcase, User, Calendar, GroupIcon as Gender } from "lucide-react"

import type { IUser } from "@/types/types"

interface Props {
  data: IUser
}

const UsersDetailItem: React.FC<Props> = ({ data }) => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-8 md:p-10">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 items-start">
          <div className="md:col-span-1 flex flex-col items-center text-center gap-6">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src={data.image || "/placeholder.svg?height=192&width=192&query=user profile"}
                alt={`${data.firstName} ${data.lastName}`}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              {data.firstName} {data.lastName}
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              {data.role === "admin" ? "Administrator" : "Foydalanuvchi"}
            </p>
            <div className="w-full h-px bg-gray-200 my-2" />
            <div className="grid gap-3 text-lg text-gray-700 w-full">
              <div className="flex items-center justify-center gap-2">
                <User className="w-5 h-5 text-gray-600" />
                <span>@{data.username}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-gray-600" />
                <span>Yosh: {data.age}</span>
              </div>
              <div className="flex items-center justify-center gap-2 capitalize">
                <Gender className="w-5 h-5 text-gray-600" />
                <span>Jinsi: {data.gender}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-8">
            <div className="grid gap-4">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <Mail className="w-6 h-6 text-blue-600" /> Aloqa
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span>{data.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span>{data.phone}</span>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200" />

            <div className="grid gap-4">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" /> Manzil
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span>
                    {data.address.address}, {data.address.city}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span>
                    {data.address.state}, {data.address.postalCode}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200" />

            <div className="grid gap-4">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <Building className="w-6 h-6 text-blue-600" /> Kompaniya
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-gray-600" />
                  <span>{data.company.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-gray-600" />
                  <span>
                    {data.company.title} ({data.company.department})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(UsersDetailItem)
