import Hero from "./pages/hero"
import BarLogo from "./pages/barLogo"
import Projects from "./pages/project"
import Skill from "./pages/skill"
import Certificate from "./pages/certificate"
import Music from "./pages/music"
import Tools from "./pages/tools"
import Rewards from "./pages/reward"
import Youtube from "./pages/ytApi"
import Medsos from "./pages/medsos"
import Contact from "./pages/contact"
import Footer from "./pages/footer"

export default function Home() {
  return (
    <main className="flex flex-col mx-auto  flex-wrap items-center justify-center  py-2  px-5 lg:px-10  ">
      <Hero/>
      <BarLogo/>
      <Projects />
      <Skill />
      <Music />
      <Certificate />
      <Tools />
      <Rewards />
      <Youtube />
      <Medsos />
      <Contact />
      <Footer />
    </main>
  )
}
