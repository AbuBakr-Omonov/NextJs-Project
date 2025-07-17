import { IPost } from '@/types/types'
import React from 'react'
import { MessageSquare, User } from 'lucide-react'

interface Props {
  data: {
    posts: IPost[]
  }
}

const PostsPage: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.posts?.map((post: IPost) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-200 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <User size={16} />
                <span>User {post.userId}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MessageSquare size={16} />
              </div>
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
              {post.title}
            </h2>

            <p className="text-gray-700 text-sm line-clamp-4 mb-4">
              {post.body}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {post.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(PostsPage)
