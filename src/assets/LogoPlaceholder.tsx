// Placeholder logo — replace with the actual official logo file
// Place your logo file at: src/assets/logo.png (or .svg)
// Then update the imports in Header.tsx, Hero.tsx and Footer.tsx

const LogoPlaceholder = ({ variant = 'light', className = '' }: { variant?: 'light' | 'dark', className?: string }) => {
  const textColor = variant === 'light' ? '#C0C0C0' : '#5C1228'
  const subColor = variant === 'light' ? '#A8A8A8' : '#7A1835'

  return (
    <svg
      viewBox="0 0 220 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Hermano Sousa Advogados Associados"
      role="img"
    >
      {/* Scales icon */}
      <g transform="translate(0, 6)">
        <line x1="24" y1="8" x2="24" y2="42" stroke={textColor} strokeWidth="1.5"/>
        <line x1="10" y1="8" x2="38" y2="8" stroke={textColor} strokeWidth="1.5"/>
        {/* Left pan */}
        <line x1="10" y1="8" x2="4" y2="22" stroke={textColor} strokeWidth="1.2"/>
        <line x1="10" y1="8" x2="16" y2="22" stroke={textColor} strokeWidth="1.2"/>
        <path d="M4 22 Q10 28 16 22" fill="none" stroke={textColor} strokeWidth="1.2"/>
        {/* Right pan */}
        <line x1="38" y1="8" x2="32" y2="22" stroke={textColor} strokeWidth="1.2"/>
        <line x1="38" y1="8" x2="44" y2="22" stroke={textColor} strokeWidth="1.2"/>
        <path d="M32 22 Q38 28 44 22" fill="none" stroke={textColor} strokeWidth="1.2"/>
        {/* Base */}
        <line x1="16" y1="42" x2="32" y2="42" stroke={textColor} strokeWidth="1.5"/>
      </g>
      {/* Text */}
      <text x="54" y="26" fontFamily="'Playfair Display', serif" fontSize="15" fontWeight="600" fill={textColor} letterSpacing="0.5">
        HERMANO SOUSA
      </text>
      <text x="54" y="42" fontFamily="'Inter', sans-serif" fontSize="8" fontWeight="400" fill={subColor} letterSpacing="2.5">
        ADVOGADOS ASSOCIADOS
      </text>
      {/* Decorative line */}
      <line x1="54" y1="30" x2="214" y2="30" stroke={subColor} strokeWidth="0.5" opacity="0.5"/>
    </svg>
  )
}

export default LogoPlaceholder
