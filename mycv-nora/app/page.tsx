import Header from './components/Header';
import Scroll from './components/Scroll';
import About from './components/About';   
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills'; 



export default function Home() {
  return (
    <>
       <Header />
       <Scroll />
    <main className="p-8">
      <h1 className="text-8xl font-heading text-center">Nora Jellum</h1>
       <About />
       <Skills />
       <Education />
       <Experience />
    </main>
  </>
  );
}