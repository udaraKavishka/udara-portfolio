import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <section id="home"><Hero /></section>
            <section id="about" className="section-padding"><About /></section>
            <section id="projects" className="section-padding bg-white"><Projects /></section>
            <section id="contact" className="section-padding"><Contact /></section>
        </motion.div>
    );
}