import JoinUs from "@/components/joinUs";

/**
 * Home Page Component
 * 
 * Main landing page for the AstroTech application.
 * Renders the JoinUs component which contains the complete landing page experience.
 * 
 * @page
 * 
 * @route /
 * 
 * @components
 * - JoinUs: Main landing page with planets, content, and CTA
 * 
 * @example
 * // Automatically rendered for root route
 * export default Home
 */
export default function Home() {
  return (
   <div >
    <JoinUs />
  </div>
  )
}
