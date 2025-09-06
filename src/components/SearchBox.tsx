import { Search } from "lucide-react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBox = ({ value, onChange, placeholder = "Search toys..." }: SearchBoxProps) => {
  return (
    <div className="relative flex-1 max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5" style={{ color: 'hsl(var(--foreground) / 0.5)' }} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input-neon pl-10 pr-4"
        aria-label="Search products"
      />
    </div>
  );
};

export default SearchBox;