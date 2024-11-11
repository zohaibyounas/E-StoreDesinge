import Banner from "./components/Banner"
import BlogSection from "./components/BlogSection"
import Catagory from "./components/Catagory"
import FeatureSection from "./components/FeatureSection"
import FeatureSectionBreakFast from "./components/FeatureSectionBreakFast"
import FeatureSectionFruits from "./components/FeatureSectionFruits"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar/Navbar"
import NewsLetter from "./components/NewsLetter"

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Catagory />
      <FeatureSectionFruits />
      <FeatureSectionBreakFast />
      <Banner />
      <BlogSection />
      <NewsLetter />
      <FeatureSection />
      <Footer />
    </main>
  )
}

export default App
