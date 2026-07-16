import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home'
import AreaDetail from './pages/AreaDetail'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import PoliticaCookies from './pages/PoliticaCookies'

import WhatsAppFloat from './components/ui/WhatsAppFloat'
import BackToTop from './components/ui/BackToTop'
import LuxuryCurtain from './components/ui/LuxuryCurtain'
import PageTransition from './components/ui/PageTransition'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// ─── Scroll reset on route change ────────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      const savedTarget = sessionStorage.getItem('homeScrollTarget')
      if (savedTarget) {
        sessionStorage.removeItem('homeScrollTarget')
        sessionStorage.removeItem('homeScrollPosition') // Descarte a posição anterior ao clicar em um link explícito
        // Aguarda a renderização da Home antes de rolar até a seção alvo
        setTimeout(() => {
          const el = document.querySelector(savedTarget)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }, 480)
        return
      }

      const savedScroll = sessionStorage.getItem('homeScrollPosition')
      if (savedScroll) {
        const scrollY = parseInt(savedScroll, 10)
        sessionStorage.removeItem('homeScrollPosition')
        // Aguarda a LuxuryCurtain cobrir a tela (~380ms) antes de restaurar o
        // scroll — garante que a Home já renderizou sua altura total e o
        // usuário não vê o salto visual.
        setTimeout(() => {
          window.scrollTo({ top: scrollY, behavior: 'instant' })
        }, 480)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// ─── Animated routes ─────────────────────────────────────────────────────────
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>

        <Route
          path="/"
          element={
            <PageTransition variant="silkFade">
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/areas/:slug"
          element={
            <PageTransition variant="softZoom">
              <AreaDetail />
            </PageTransition>
          }
        />

        <Route
          path="/politica-de-privacidade"
          element={
            <PageTransition variant="dissolve">
              <PoliticaPrivacidade />
            </PageTransition>
          }
        />

        <Route
          path="/cookies"
          element={
            <PageTransition variant="dissolve">
              <PoliticaCookies />
            </PageTransition>
          }
        />

      </Routes>
    </AnimatePresence>
  )
}

// ─── App root ─────────────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Header — sempre fixa no topo, nunca quebra com transformações de rota */}
      <Header />

      {/* Luxury Curtain — dispara a cada troca de rota */}
      <LuxuryCurtain />

      <AnimatedRoutes />

      {/* Footer — sempre no rodapé das páginas */}
      <Footer />

      {/* UI global — fora do AnimatePresence para não re-montar */}
      <WhatsAppFloat />
      <BackToTop />
    </BrowserRouter>
  )
}

export default App
