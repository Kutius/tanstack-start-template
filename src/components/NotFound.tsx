import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">You are lost</h1>
      <p className="text-gray-500">The page you are looking for does not exist.</p>
      <button type="button">
        <Link to="/">Go back to the home page</Link>
      </button>
    </div>
  )
}
