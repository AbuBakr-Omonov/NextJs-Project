import { Loader2 } from "lucide-react" 

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-gray-600 dark:text-gray-400" />
      </div>
    </div>
  )
}

export default Loading