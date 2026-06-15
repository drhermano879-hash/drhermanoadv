import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AreaDetail from './pages/AreaDetail'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import PoliticaCookies from './pages/PoliticaCookies'
import WhatsAppFloat from './components/ui/WhatsAppFloat'
import BackToTop from './components/ui/BackToTop'

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    if (pathname === '/') {
      const savedScroll = sessionStorage.getItem('homeScrollPosition')
      if (savedScroll) {
        const scrollY = parseInt(savedScroll, 10)
        setTimeout(() => {
          window.scrollTo({ top: scrollY, behavior: 'instant' })
        }, 50)
        sessionStorage.removeItem('homeScrollPosition')
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/areas/:slug" element={<AreaDetail />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/cookies" element={<PoliticaCookies />} />
      </Routes>
      <WhatsAppFloat />
      <BackToTop />
    </BrowserRouter>
  )
}

export default App
