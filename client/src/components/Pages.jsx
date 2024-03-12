import {useLocation} from "react-router-dom"
import Navbar from "./Navbar"
import Products from "./Products"
import Dog from "./Dog"
import Cat from "./Cat"
import Fish from "./Fish"
import Bird from "./Bird"
import Faqs from "./Faqs"
import About from "./About"
import Contact from "./Contact"
import HeroSection from "./HeroSection"
import Footer from "./Footer"

export function Homepage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Footer />

        </div>
    )
}

export function ProductsPage() {
    return (
        <div>
            <Navbar />
            <Products />
            <Footer />
        </div>
    )
}

export function DogPage() {
    return (
        <div>
            <Navbar />
            <Dog />
            <Footer />
        </div>
    )
}
export function CatPage() {
    return (
        <div>
            <Navbar />
            <Cat />
            <Footer />
        </div>
    )
}
export function FishPage() {
    return (
        <div>
            <Navbar />
            <Fish />
            <Footer />
        </div>
    )
}
export function BirdPage() {
    return (
        <div>
            <Navbar />
            <Bird />
            <Footer />
        </div>
    )
}

export function AboutPage() {
    return (
        <div>
            <Navbar />
            <About />
            <Footer />
        </div>
    )
}

export function ContactPage() {
    return (
        <div>
            <Navbar />
            <Contact />
            <Footer />
        </div>
    )
}

export function FaqsPage() {
    return (
        <div>
            <Navbar />
            <Faqs />
            <Footer />
        </div>
    )
}

export function Error404() {

    let location = useLocation();
    console.log(location);

    return (
        <div>
            <Navbar />
            <h1>Error 404: The URL {location.pathname} does not exist</h1>
        </div>
    )
}