export default function Layout({ children, className = "" }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-12">
        <div className={`w-full max-w-md bg-white rounded-2xl shadow-lg p-8 ${className}`}>
            {children}
        </div>
    </div>
  )
}
