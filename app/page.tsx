import CardStack from "@/components/portfolio-card-stack"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
            <Navbar />
            <main>
                <HeroSection />

                <section id="about" className="py-16 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">À Propos</h2>
                        <AboutSection />
                    </div>
                </section>

                <section id="skills" className="bg-white py-16 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Compétences
                        </h2>
                        <SkillsSection />
                    </div>
                </section>

                <section id="projects" className="py-16 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Projets</h2>
                        <div className="mx-auto max-w-5xl">
                            <CardStack />
                        </div>
                    </div>
                </section>

                <section id="resume" className="bg-white py-16 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">CV</h2>
                        <ResumeSection />
                    </div>
                </section>

                <section id="contact" className="py-16 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact</h2>
                        <ContactSection />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

