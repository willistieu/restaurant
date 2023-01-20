import React from 'react';
import { About } from "./content/About"
// eslint-disable-next-line
import { Book } from "./content/Book"
import { Chefs } from "./content/Chefs"
import { Contact } from "./content/Contact"
// eslint-disable-next-line
import { Events } from "./content/Events"
import { Gallery } from "./content/Gallery"
import { Menu } from "./content/Menu"
// eslint-disable-next-line
import { Specials } from "./content/Specials"
// eslint-disable-next-line
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