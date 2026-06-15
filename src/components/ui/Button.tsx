interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  href?: string
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm'

  const variants = {
    primary: 'bg-[#800000] hover:bg-[#660000] text-white border border-[#660000] hover:border-[#800000] focus-visible:ring-[#800000]',
    secondary: 'bg-transparent hover:bg-[#800000]/10 text-[#800000] border border-[#800000] hover:border-[#660000] focus-visible:ring-[#800000]',
    outline: 'bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white focus-visible:ring-white',
    ghost: 'bg-transparent hover:bg-[#800000]/10 text-[#800000] focus-visible:ring-[#800000]',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
