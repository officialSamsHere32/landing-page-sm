export default function TextAreaField({
  id,
  label,
  value,
  onChange,
  error = null,
  placeholder = "",
  rows = 4,}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-3 py-2 rounded-lg border text-sm text-slate-900 resize-none
          focus:outline-none focus:ring-2 transition-colors
          ${error
            ? "border-red-400 focus:ring-red-300 bg-red-50"
            : "border-slate-300 focus:ring-indigo-300 bg-white"
          }`}
      />
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  )
}