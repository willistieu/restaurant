import { About } from "./content/About"
import { Book } from "./content/Book"
import { Chefs } from "./content/Chefs"
import { Contact } from "./content/Contact"
import { Events } from "./content/Events"
import { Gallery } from "./content/Gallery"
import { Menu } from "./content/Menu"
import { Specials } from "./content/Specials"
import { Testimonials } from "./content/Testimonials"
import { Whyus } from "./content/Whyus"

export const Main = () => {
    return (
        <>
            <main id="main">
                <About />
                <Whyus />
                <Menu />
                {/* <Specials /> */}
                {/* <Events /> */}
                {/* <Book /> */}
                {/* <Testimonials /> */}
                <Gallery />
                <Chefs />
                <Contact />
            </main>
        </>
    )
}