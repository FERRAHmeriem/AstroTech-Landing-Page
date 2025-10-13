# AstroTech Landing Page - Component Documentation

## Overview
This document provides detailed documentation for all components in the AstroTech Landing Page application.

---

## Table of Contents
1. [JoinUs Component](#joinus-component)
2. [Planet Component](#planet-component)
3. [MyPlanet Component](#myplanet-component)
4. [Background Component](#background-component)
5. [Usage Examples](#usage-examples)

---

## JoinUs Component

**File:** `src/components/joinUs.js`

### Description
Main landing page component featuring responsive planet decorations, centered content, countdown timer, and call-to-action button.

### Features
- ✨ Responsive planet sizes that scale with screen dimensions
- 🌌 Space-themed background with animated planets
- 🌙 Moon planet positioned at middle-left
- 🪐 Jupiter planet positioned at bottom-right
- 📱 Fully responsive layout
- 🎨 Custom fonts (Nasalization, MADE TOMMY)
- ✨ Gradient text effects
- 🖱️ Hover transitions on button

### Responsive Behavior
- **Moon size:** `min(15% of screen width, 18% of screen height)`
- **Jupiter size:** `min(25% of screen width, 25% of screen height)`
- Automatically updates on window resize

### Props
None - Self-contained component

### Usage
```jsx
import JoinUs from '@/components/joinUs';

export default function Page() {
  return <JoinUs />;
}
```

### Structure
```
JoinUs
├── Space background (space.png)
├── Moon planet (left side)
│   └── Planet component with gray glow
├── Jupiter planet (right side)
│   └── Planet component with orange glow
└── Content section
    ├── Heading: "Join us"
    ├── Description text
    ├── Countdown timer
    └── CTA button
```

---

## Planet Component

**File:** `src/components/planet.js`

### Description
2D rotating planet component with customizable lightning/glow effects. Uses CSS animation for smooth horizontal scrolling to simulate rotation.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | string\|number | `"300px"` | Width of planet container |
| `height` | string\|number | `"300px"` | Height of planet container |
| `imageUrl` | string | `"/planet.svg"` | Path to planet texture |
| `lightningColor` | string | `"135, 206, 250"` | RGB values for glow (comma-separated) |

### Lightning Color Examples
- **Blue (default):** `"135, 206, 250"`
- **Orange (Jupiter):** `"255, 140, 66"`
- **Gray (Moon):** `"192, 192, 192"`
- **Purple:** `"138, 43, 226"`
- **Green:** `"50, 205, 50"`

### Features
- 🔄 Seamless rotating animation (20s duration)
- ✨ Multi-layer glow effects
- 🎨 Customizable lightning color
- 📦 Static (no pulsing) for performance
- 🌐 Circular mask with overflow handling

### Usage Examples

```jsx
// Basic usage
<Planet imageUrl="/earth.svg" width={300} height={300} />

// Jupiter with orange glow
<Planet 
  imageUrl="/jupiter.svg" 
  width={400} 
  height={400} 
  lightningColor="255, 140, 66" 
/>

// Moon with gray glow
<Planet 
  imageUrl="/moon.svg" 
  width={250} 
  height={250} 
  lightningColor="192, 192, 192" 
/>

// Responsive sizing
<Planet 
  imageUrl="/planet.svg" 
  width={screenWidth * 0.2} 
  height={screenWidth * 0.2} 
/>
```

### Technical Implementation
- **Outer glow:** Radial gradient with blur
- **Lightning effect:** Multiple box-shadows at increasing distances
- **Rotation:** CSS keyframe animation with dual backgrounds
- **Performance:** Hardware-accelerated transforms

---

## MyPlanet Component

**File:** `src/components/myPlanet.js`

### Description
3D rotating planet component using React Three Fiber and Three.js with WebGL rendering and post-processing bloom effects.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `imageUrl` | string | `"/earth.svg"` | Path to planet texture |
| `size` | number | `300` | Canvas size in pixels |
| `rotationSpeed` | number | `0.4` | Rotation speed multiplier |
| `glowColor` | string\|null | `null` | Hex color for emissive glow |

### Features
- 🎮 Full 3D WebGL rendering
- 🔄 Smooth rotation animation using useFrame
- ✨ Bloom post-processing effects
- 💡 Ambient + directional lighting
- 🌟 Emissive material for planet glow
- 🎨 Customizable glow color

### Dependencies
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/postprocessing` - Post-processing effects
- `three` - 3D graphics library

### Usage Examples

```jsx
// Basic Earth
<MyPlanet 
  imageUrl="/earth.png" 
  size={300} 
  rotationSpeed={0.5} 
/>

// Jupiter with orange glow
<MyPlanet 
  imageUrl="/jupiter.png" 
  size={400} 
  rotationSpeed={0.2} 
  glowColor="#ff8c42" 
/>

// Moon with silver glow
<MyPlanet 
  imageUrl="/moon.png" 
  size={250} 
  rotationSpeed={0.3} 
  glowColor="#c0c0c0" 
/>
```

### Technical Details
- **Renderer:** WebGL via React Three Fiber
- **Geometry:** SphereGeometry (64x64 segments for smoothness)
- **Material:** MeshStandardMaterial with texture mapping
- **Lighting:** 
  - AmbientLight: intensity 2
  - DirectionalLight: position [5,5,5], intensity 0.8
- **Post-processing:** Bloom effect with customizable parameters
- **Animation:** 60fps rotation via useFrame hook

### Performance Notes
- Requires WebGL support
- GPU-accelerated rendering
- May impact performance on low-end devices
- Consider using Planet component for better performance

---

## Background Component

**File:** `src/components/background.js`

### Description
Animated starfield background with physics-based movement. Stars bounce within confined spaces for realistic ambient motion.

### Props
None - Self-contained component

### Features
- ⭐ 20 animated stars
- 🎯 Each star confined to 20x20% area
- ⚡ Physics-based bounce mechanics
- 🎲 Random sizes for depth
- 🖼️ Space.png background image
- ⚙️ Optimized with direct DOM manipulation

### Algorithm
1. Generate 20 stars with random center positions (10-90% of screen)
2. Each star has ±10% movement range from center
3. Stars move with random velocity (very slow)
4. Velocity reverses on boundary collision
5. Position clamped to prevent overshooting

### Performance
- Uses `useRef` to avoid re-renders
- Direct DOM manipulation for smooth 60fps
- Single `requestAnimationFrame` loop
- Automatic cleanup on unmount

### Usage
```jsx
import Background from '@/components/background';

export default function Page() {
  return (
    <Background>
      {/* Your content here */}
    </Background>
  );
}
```

### Technical Implementation
```javascript
// Star movement algorithm
if (newX <= minX || newX >= maxX) {
  star.speedX *= -1; // Reverse direction
  newX = Math.max(minX, Math.min(maxX, newX)); // Clamp position
}
```

---

## Usage Examples

### Complete Landing Page
```jsx
import JoinUs from '@/components/joinUs';

export default function Home() {
  return <JoinUs />;
}
```

### Custom Planet Layout
```jsx
import Planet from '@/components/planet';

export default function CustomPage() {
  return (
    <div className="relative min-h-screen">
      {/* Left planet */}
      <div className="absolute left-10 top-1/4">
        <Planet 
          imageUrl="/mars.svg"
          width={300}
          height={300}
          lightningColor="255, 99, 71"
        />
      </div>
      
      {/* Right planet */}
      <div className="absolute right-10 bottom-1/4">
        <Planet 
          imageUrl="/saturn.svg"
          width={400}
          height={400}
          lightningColor="255, 215, 0"
        />
      </div>
      
      {/* Your content */}
    </div>
  );
}
```

### 3D Planet Showcase
```jsx
import MyPlanet from '@/components/myPlanet';

export default function PlanetShowcase() {
  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      <MyPlanet 
        imageUrl="/earth.png" 
        size={200} 
        rotationSpeed={0.5}
      />
      <MyPlanet 
        imageUrl="/mars.png" 
        size={200} 
        rotationSpeed={0.6}
        glowColor="#ff6347"
      />
      <MyPlanet 
        imageUrl="/jupiter.png" 
        size={200} 
        rotationSpeed={0.3}
        glowColor="#ff8c42"
      />
    </div>
  );
}
```

### Animated Background
```jsx
import Background from '@/components/background';

export default function ContentPage() {
  return (
    <Background>
      <div className="container mx-auto p-8">
        <h1>Your Content Here</h1>
      </div>
    </Background>
  );
}
```

---

## Component Comparison

### Planet vs MyPlanet

| Feature | Planet | MyPlanet |
|---------|--------|----------|
| **Rendering** | CSS/2D | WebGL/3D |
| **Performance** | ⚡ Fast | 🐌 GPU-intensive |
| **Glow Effect** | Box-shadow | Bloom post-processing |
| **Rotation** | CSS animation | 3D rotation |
| **Browser Support** | ✅ Universal | ⚠️ Requires WebGL |
| **File Size** | Small | Large (Three.js) |
| **Use Case** | Production/decorative | Showcase/hero sections |

**Recommendation:** Use `Planet` for most cases, `MyPlanet` for hero sections or 3D showcases.

---

## File Structure

```
src/
├── app/
│   ├── page.js                 # Home page (uses JoinUs)
│   ├── layout.js               # Root layout with fonts
│   └── globals.css             # Global styles + font definitions
├── components/
│   ├── joinUs.js               # Main landing page component
│   ├── planet.js               # 2D rotating planet with glow
│   ├── myPlanet.js             # 3D WebGL planet
│   └── background.js           # Animated starfield
└── assets/
    └── (planet images, fonts)

public/
├── space.png                   # Background image
├── star.svg                    # Star icon for background
├── moon.svg                    # Moon texture
├── jupyter.svg                 # Jupiter texture
└── (other planet textures)
```

---

## Dependencies

### Production
```json
{
  "@react-three/fiber": "^9.3.0",
  "@react-three/postprocessing": "latest",
  "next": "15.5.4",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "three": "^0.180.0"
}
```

### Development
```json
{
  "@tailwindcss/postcss": "^4",
  "tailwindcss": "^4"
}
```

---

## Best Practices

### Performance
1. ✅ Use `Planet` component for multiple planets on a page
2. ✅ Limit `MyPlanet` usage to 1-2 instances per page
3. ✅ Optimize planet texture sizes (use compressed formats)
4. ✅ Consider lazy loading for off-screen planets

### Accessibility
1. ✅ Add `alt` text for decorative elements
2. ✅ Ensure sufficient color contrast for text
3. ✅ Make buttons keyboard-accessible
4. ✅ Test with reduced motion preferences

### Responsive Design
1. ✅ Use percentage-based sizing for planets
2. ✅ Test on various screen sizes (mobile, tablet, desktop)
3. ✅ Adjust text sizes with Tailwind responsive classes
4. ✅ Consider hiding decorative planets on mobile

---

## Troubleshooting

### Planet not rotating
- **Cause:** Missing animation keyframes
- **Solution:** Ensure `@keyframes scrollBg` is defined in styled-jsx

### WebGL errors (MyPlanet)
- **Cause:** Browser doesn't support WebGL
- **Solution:** Fall back to `Planet` component or show static image

### Stars not animating (Background)
- **Cause:** `useEffect` cleanup or missing `requestAnimationFrame`
- **Solution:** Verify `useEffect` return function cancels animation

### Responsive sizing not working
- **Cause:** Window resize listener not attached
- **Solution:** Check `useEffect` dependencies array is empty `[]`

---

## License
MIT License - AstroTech Landing Page

## Contributors
- Development Team: AstroTech

---

*Last Updated: October 13, 2025*
