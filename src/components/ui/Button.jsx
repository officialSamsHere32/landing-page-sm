export default function Button({ children, type = "button", onClick, disabled = false, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` py-2.5 px-4 rounded-lg font-semibold text-sm text-white
        bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800
        focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-1
        disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150
        ${className}`}
    >
      {children}
    </button>
  )
}