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
    primary: 'bg-[#5C1228] hover:bg-[#7A1835] text-white border border-[#7A1835] hover:border-[#8B1A3A] focus-visible:ring-[#5C1228]',
    secondary: 'bg-transparent hover:bg-[#5C1228]/10 text-[#5C1228] border border-[#5C1228] hover:border-[#7A1835] focus-visible:ring-[#5C1228]',
    outline: 'bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white focus-visible:ring-white',
    ghost: 'bg-transparent hover:bg-[#5C1228]/10 text-[#5C1228] focus-visible:ring-[#5C1228]',
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
