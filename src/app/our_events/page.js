import Header from '@/components/header'
import OldestEvents from '@/components/oldestEvents'
import OurEventsHeroSection from '@/components/ourEventsHeroSection'
import UpcomingEvents from '@/components/upcomingEvents'

export default function Page() {
  return (
    <div className="relative overflow-x-hidden"> 
        <Header page="events" />
        <OurEventsHeroSection/>
        <OldestEvents/>
        <UpcomingEvents/>
    </div>
  )
}
