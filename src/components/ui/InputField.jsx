export default function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error = "",
  placeholder = "",
  autoComplete,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={` px-3 py-2 rounded-lg border text-sm text-slate-900
          focus:outline-none focus:ring-2 transition-colors
          ${error
            ? "border-red-400 focus:ring-red-300 bg-red-50"
            : "border-slate-300 focus:ring-indigo-300 bg-white"
          }`}
      />
      {error && (
        <p className="text-xs text-red-500 mt-0.5">{error}</p>
      )}
    </div>
  )
}