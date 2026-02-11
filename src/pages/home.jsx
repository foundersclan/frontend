import { AboutUs } from "./about"
import { ContactPage } from "./contact"
import { Faqs } from "./faqs"
import { LandingPage } from "./heroSection"
import { Testimonial } from "./testimonial"
import { Footer } from "./footer"
import { Features } from "./keyfeatures"
import { Insights } from "./insights"
import { TeamIntro } from "./team"
export const Home = () => {
    return (
        <>
            <main>
                <section className="">
                    <LandingPage />
                    <AboutUs />
                    <div className="bg-yellow-500/30 h-0.5 w-full"/>
                    <Features/>
                    <div className="bg-yellow-500/30 h-0.5 w-full"/>
                    <TeamIntro/>
                    <div className="bg-yellow-500/30 h-0.5 w-full"/>
                    <Insights/>
                    <div className="bg-yellow-500/30 h-0.5 w-full"/>
                    <Testimonial/>
                    <div className="bg-yellow-500/30 h-0.5 w-full"/>
                    <ContactPage/>

                </section>
            </main>
        </>
    )
}