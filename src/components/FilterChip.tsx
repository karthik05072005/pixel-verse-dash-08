interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterChip = ({ label, active, onClick }: FilterChipProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
        active
          ? 'bg-primary/20 border-2 border-primary text-primary'
          : 'bg-surface border-2 border-border-muted text-foreground hover:border-primary/50'
      }`}
      style={{ fontFamily: 'var(--font-body)' }}
      aria-pressed={active}
    >
      {label}
    </button>
  );
};

export default FilterChip;