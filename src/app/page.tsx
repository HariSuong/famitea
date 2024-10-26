import BestSellersCarousel from '@/components/home/best-sellers-carousel'
import BestSellers from '@/components/home/bestseller'
import FamiStory from '@/components/home/fami-story'
import FeedbackSection from '@/components/home/feedback-section'
import { HeroSection } from '@/components/home/hero-section'
import OrderNowSection from '@/components/home/order-now-section'
import SupportSection from '@/components/home/support-section'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <FamiStory />
      <BestSellers />

      <BestSellersCarousel />
      <OrderNowSection />
      <FeedbackSection />
      <SupportSection />
    </div>
  )
}
