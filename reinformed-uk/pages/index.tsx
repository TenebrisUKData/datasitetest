import LogoMarquee from '../components/LogoMarquee'
import MainMenu from '../components/MainMenu'
import PoliticsSection from '../components/PoliticsSection'
import EconomySection from '../components/EconomySection'
import AdPlaceholder from '../components/AdPlaceholder'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <LogoMarquee />
      <MainMenu />
      <PoliticsSection />
      <AdPlaceholder id="AD1" />
      <EconomySection />
      <AdPlaceholder id="AD2" />
      <ContactSection />
      <Footer />
    </div>
  )
}
