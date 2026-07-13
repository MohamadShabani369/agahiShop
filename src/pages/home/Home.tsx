import Container from "../../components/container/Container"
import CTA from "./CTA"
import FeaturedProducts from "./FeaturedProducts"
import Features from "./Features"
import Hero from "./Hero"
import WhyChoose from "./WhyChoose"


function Home() {
  return (
    <Container>
      <Hero/>
      <Features/>
      <FeaturedProducts/>
      <WhyChoose/>
      <CTA/>
    </Container>
  )
}

export default Home