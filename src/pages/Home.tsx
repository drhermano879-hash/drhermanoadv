import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Founder from '@/components/sections/Founder'
import PracticeAreas from '@/components/sections/PracticeAreas'
import Differentials from '@/components/sections/Differentials'
import Process from '@/components/sections/Process'
import Team from '@/components/sections/Team'
import Solutions from '@/components/sections/Solutions'
import Gallery from '@/components/sections/Gallery'
import Location from '@/components/sections/Location'
import Faq from '@/components/sections/Faq'
import CtaFinal from '@/components/sections/CtaFinal'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Founder />
        <PracticeAreas />
        <Differentials />
        <Process />
        <Team />
        <Solutions />
        <Gallery />
        <Location />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
