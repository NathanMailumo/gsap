import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import './index.css'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return( 
  <main>
    <Navbar/>
    <Hero/>
    
  </main>
  );
};

export default App;
