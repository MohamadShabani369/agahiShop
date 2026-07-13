import { Search, X } from "lucide-react";

type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <div className="relative mb-10">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search products..."
        className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-sky-800"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-white"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default SearchBox;
