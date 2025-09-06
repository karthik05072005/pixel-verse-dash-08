// Sample product data for ToyVerse
// Edit this file to modify the product catalog

import robotToy from '../assets/robot-toy.jpg';
import handheldConsole from '../assets/handheld-console.jpg';
import actionFigure from '../assets/action-figure.jpg';
import cyberCity from '../assets/cyber-city.jpg';
import holoCube from '../assets/holo-cube.jpg';
import spaceship from '../assets/spaceship.jpg';

export const products = [
  {
    id: 1,
    name: "Neon Guardian Robot",
    price: 149.99,
    category: "Robots",
    image: robotToy,
    description: "A futuristic robot companion with programmable LED patterns and voice commands. Features cyberpunk-inspired design with reactive lighting.",
    inStock: true,
    featured: true,
    tags: ["cyberpunk", "interactive", "LED"]
  },
  {
    id: 2,
    name: "Holo-Console X1",
    price: 299.99,
    category: "Gaming",
    image: handheldConsole,
    description: "Next-gen handheld gaming console with holographic display technology. Play retro and modern games in stunning visual quality.",
    inStock: true,
    featured: true,
    tags: ["gaming", "holographic", "portable"]
  },
  {
    id: 3,
    name: "Cyber Warrior Elite",
    price: 89.99,
    category: "Action Figures",
    image: actionFigure,
    description: "Highly detailed action figure with interchangeable weapons and glowing armor pieces. Perfect for collectors and display.",
    inStock: true,
    featured: false,
    tags: ["collectible", "detailed", "warrior"]
  },
  {
    id: 4,
    name: "Neo Tokyo Diorama",
    price: 199.99,
    category: "Dioramas",
    image: cyberCity,
    description: "Miniature cyberpunk city with working LED lights and moving parts. Create your own futuristic metropolis.",
    inStock: true,
    featured: true,
    tags: ["diorama", "cyberpunk", "interactive"]
  },
  {
    id: 5,
    name: "Quantum Puzzle Cube",
    price: 59.99,
    category: "Puzzles",
    image: holoCube,
    description: "Mind-bending holographic puzzle that changes patterns as you solve it. Test your spatial reasoning skills.",
    inStock: false,
    featured: false,
    tags: ["puzzle", "holographic", "challenging"]
  },
  {
    id: 6,
    name: "Stellar Interceptor",
    price: 119.99,
    category: "Vehicles",
    image: spaceship,
    description: "Retro-futuristic spaceship model with light-up engines and authentic space battle sounds.",
    inStock: true,
    featured: false,
    tags: ["spaceship", "retro", "sounds"]
  }
];

export const categories = [
  "All",
  "Robots",
  "Gaming",
  "Action Figures",
  "Dioramas",
  "Puzzles",
  "Vehicles"
];