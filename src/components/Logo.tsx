interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-8 h-8 relative">
        <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
        <div className="absolute inset-1 bg-primary"></div>
        <div className="absolute inset-2 bg-background"></div>
        <div className="absolute inset-3 bg-primary"></div>
      </div>
      <span 
        className="text-xl font-bold tracking-wider text-primary"
        style={{ fontFamily: 'var(--font-pixel)', textShadow: '0 0 10px hsl(var(--neon-teal) / 0.6)' }}
      >
        ToyVerse
      </span>
    </div>
  );
};

export default Logo;