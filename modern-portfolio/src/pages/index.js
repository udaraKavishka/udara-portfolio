import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <section id="home"><Hero /></section>
            <section id="about" className="py-16 md:py-24"><About /></section>
            <section id="projects" className="py-16 md:py-24 bg-white"><Projects /></section>
            <section id="contact" className="py-16 md:py-24"><Contact /></section>
        </motion.div>
    );
}