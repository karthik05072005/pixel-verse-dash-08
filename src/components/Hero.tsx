import heroBanner from '../assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner}
          alt="Futuristic arcade toy store with neon lights and floating gadgets"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary bounce-in"
          style={{ 
            fontFamily: 'var(--font-pixel)',
            textShadow: '0 0 20px hsl(var(--neon-teal) / 0.8), 0 0 40px hsl(var(--neon-teal) / 0.4)'
          }}
        >
          TOYVERSE
        </h1>
        
        <p 
          className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto fade-in"
          style={{ 
            fontFamily: 'var(--font-body)',
            animationDelay: '0.2s',
            animationFillMode: 'both'
          }}
        >
          Enter the ultimate arcade gaming paradise. Discover futuristic toys, 
          collectibles, and gadgets that blur the line between reality and digital worlds.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in"
          style={{ 
            animationDelay: '0.4s',
            animationFillMode: 'both'
          }}
        >
          <button 
            className="btn-neon px-8 py-4"
            onClick={() => {
              const catalog = document.getElementById('catalog');
              catalog?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            EXPLORE TOYS
          </button>
          
          <button className="btn-neon secondary px-8 py-4">
            FEATURED ITEMS
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-accent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default Hero;