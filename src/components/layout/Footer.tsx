import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoImg from '@/assets/logo/logo-sembg.png'

const SocialInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)



const ShieldIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      sessionStorage.setItem('homeScrollTarget', href)
      navigate('/')
    }
  }

  return (
    <footer className="bg-[#4D0000] text-white/80 select-text border-t border-white/5" role="contentinfo">
      
      {/* Main Grid Area */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Column 1: Brand & Description (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            {/* Logo + wordmark — mesma estrutura da navbar, cores invertidas para fundo escuro */}
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="HS"
                className="h-11 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <div className="flex flex-col select-none">
                <span className="font-display text-sm font-semibold tracking-wide leading-tight text-white">
                  HERMANO SOUSA
                </span>
                <div className="h-px w-full my-0.5 bg-white/20" />
                <span className="font-sans text-[8px] tracking-[0.2em] font-light leading-none text-white/50">
                  ADVOGADOS ASSOCIADOS
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-200/80 font-light leading-relaxed pr-6 text-justify">
              Advocacia de excelência fundada no rigor técnico e na defesa intransigente dos direitos sociais. Oferecemos patrocínio estratégico com foco em segurança jurídica e transparência operacional.
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-medium">
              Advocacia · Ética · Excelência
            </p>
          </div>

          {/* Column 2: Navigation Links (2 Columns) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-white text-xs font-semibold tracking-wider uppercase">
              Navegação
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Navegação secundária">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre Nós', href: '#sobre' },
                { label: 'Áreas de Atuação', href: '#areas' },
                { label: 'Diferenciais', href: '#diferenciais' },
                { label: 'Corpo Técnico', href: '#equipe' },
                { label: 'Nossa Sede', href: '#localizacao' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm text-neutral-200/80 hover:text-white transition-colors duration-300 font-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Practice Areas (3 Columns) */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-white text-xs font-semibold tracking-wider uppercase">
              Especialidades
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Direito Previdenciário', slug: 'direito-previdenciario' },
                { label: 'Direito Trabalhista', slug: 'direito-trabalhista' },
                { label: 'Direito do Consumidor', slug: 'direito-do-consumidor' },
                { label: 'Direito Civil', slug: 'direito-civil' },
                { label: 'Direito Empresarial', slug: 'direito-empresarial' }
              ].map((area) => (
                <Link
                  key={area.slug}
                  to={`/areas/${area.slug}`}
                  className="text-sm text-neutral-200/80 hover:text-white transition-colors duration-300 font-light"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Certifications (3 Columns) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xs font-semibold tracking-wider uppercase">
                Escritório
              </h4>
              <p className="text-sm text-neutral-200/80 font-light leading-relaxed">
                R. Contôrno de Centro Administrativo, 02<br />
                Loja 2 - Dois de Julho<br />
                Camaçari - BA, 42800-610
              </p>
              <a
                href="mailto:advogadohermano@gmail.com"
                className="text-sm text-neutral-200/80 hover:text-white transition-colors duration-300 font-light"
              >
                advogadohermano@gmail.com
              </a>
            </div>

            <div className="border-t border-white/10 pt-5 flex flex-col gap-1.5">
              <p className="text-xs text-white/50 font-medium">SÓCIO FUNDADOR</p>
              <p className="text-sm text-white font-semibold tracking-wide">
                Dr. Hermano Sousa · OAB/BA 31.575
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#330000] select-none">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-2 items-start">
            <div className="flex flex-wrap gap-4 text-xs text-white/50 items-center">
              <span>© {year} Hermano Sousa Advogados Associados.</span>
              <span>Todos os direitos reservados.</span>
              <span className="hidden sm:inline">·</span>
              <Link to="/cookies" className="hover:text-white transition-colors">Política de Cookies</Link>
              <span>·</span>
              <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
              <span className="hidden sm:inline">·</span>
              <span className="text-[11px] font-light text-neutral-300/70 select-text">
                Desenvolvido por{' '}
                <a 
                  href="https://studiooryon.pro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors font-medium"
                >
                  Studio Oryon
                </a>
              </span>
            </div>
            
            {/* Security Shield Seal */}
            <div className="flex items-center gap-1.5 text-[10px] text-white/40 tracking-wide select-none pointer-events-none pl-1">
              <ShieldIcon className="w-3.5 h-3.5 text-white/30 shrink-0" />
              <span>Ambiente seguro com criptografia de ponta a ponta (SSL).</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/drhermanosousaadv/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-white/10 hover:border-white hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Instagram institucional"
            >
              <SocialInstagram />
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
