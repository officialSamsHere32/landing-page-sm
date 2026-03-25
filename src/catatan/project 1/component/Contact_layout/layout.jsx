export default function Layout({ children, className = "" }) {
  return (
    <div className="min-h-screen background-color: ring-offset-green-800 flex items-center justify-center px-4 py-12">
    <div className={`w-full max-w-md bg-white rounded-2xl shadow-lg p-8 ${className}`}>
        {children}
    </div>
    </div>
  )
}