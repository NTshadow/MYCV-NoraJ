import Header from './components/Header';
import Scroll from './components/Scroll';
import About from './components/About';   
import Skills from './components/Skills'; 
import Contact from './components/Contact';



export default function Home() {
  return (
    <>
       <Header />
       <Scroll />
    <main className="p-8">
      <h1 className="text-8xl font-heading text-center">Nora Jellum</h1>
       <About />
       <Skills />
       <Contact />

    </main>
  </>
  );
}