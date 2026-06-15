interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  className?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionTitleProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`text-xs font-semibold tracking-[3px] uppercase ${
          light ? 'text-[#C0C0C0]/70' : 'text-[#5C1228]'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl font-semibold leading-tight ${
        light ? 'text-white' : 'text-[#2D2D2D]'
      }`}>
        {title}
      </h2>
      {/* Decorative line */}
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className={`h-px w-12 ${light ? 'bg-[#C0C0C0]/40' : 'bg-[#5C1228]'}`} />
        <span className={`w-2 h-2 rounded-full ${light ? 'bg-[#C0C0C0]/40' : 'bg-[#5C1228]'}`} />
        <span className={`h-px w-12 ${light ? 'bg-[#C0C0C0]/40' : 'bg-[#5C1228]'}`} />
      </div>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
          light ? 'text-[#C0C0C0]/70' : 'text-[#555555]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
