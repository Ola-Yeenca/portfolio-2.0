/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Link from 'next/dist/client/link';


export default function Home() {
  return (
    <div className='
    bg-[rgb(36,36,36)]
    text-white
    h-screen
    snap-y
    snap-mandatory
    overflow-y-scroll
    z-0 overflow-x-hidden
    scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#53B3CB]/80
    '>
      <Head>
        <title>Ola Yinka Portfolio</title>
      </Head>

    <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className='snap-center'>
        <Experience/>
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <Contact />
      </section>

      {/* Footer */}
        <Link href={'#hero'}>
        <footer className='sticky bottom-5 w-full cursor'>
          <div className='flex items-center justify-center'>
            <img
            className='
            h-20 w-20 rounded-full
            filter graycale hover:graycale-0'
            src="/Image/logo.png" alt="" />
          </div>
        </footer>
        </Link>
    </div>
  )
}
