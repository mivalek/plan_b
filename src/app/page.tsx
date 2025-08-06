"use client";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import ParallaxBackground from "@/components/ParallaxBackground";
import ParallaxForeground from "@/components/ParallaxForeground";
import PriceList from "@/components/PriceList";
import SectionImage from "@/components/SectionImage";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  function closeNavOnClickOut() {
    if (!navMenuOpen) return;
    setNavMenuOpen(false);
  }

  return (
    <div id="page-wrapper" onClick={closeNavOnClickOut}>
      <Header
        primary={true}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
      />
      <div className="parallax">
        <ParallaxBackground />
        <Header
          primary={false}
          navMenuOpen={navMenuOpen}
          setNavMenuOpen={setNavMenuOpen}
        />
        <div className="hero">
          <h1 className="text-6xl md:text-8xl">
            <div className="relative w-full text-end text-[.5em] text-[rgb(var(--primary))]">
              Welcome to
            </div>
            <div>
              Plan&nbsp;
              <span style={{ color: "rgb(var(--primary))" }}>B</span>
            </div>
          </h1>
          <div className="subtitle text-sm sm:text-lg md:text-2xl">
            Thuringia&apos;s largest bouldering gym
          </div>
        </div>
        <ParallaxForeground />
      </div>
      <section id="climb">
        <div className="section-content">
          <div className="blurb">
            <h2>Climb</h2>
            <p>
              Choose from around 100 fun boulders of all levels of difficulty in
              our two rooms with a combined wall area of ...m<sup>2</sup>.
              Overhang, slab, dynos, we have it all!
            </p>
            <p>
              The boulders are regularly changed by our creative team of
              setters. For an up-to-date list of boulders, see our&nbsp;
              <Link href="/boulders">interactive gym map</Link>.
            </p>
          </div>
        </div>
      </section>
      <section id="train">
        <SectionImage
          navMenuOpen={navMenuOpen}
          setNavMenuOpen={setNavMenuOpen}
          imageUrl="/assets/gym.webp"
        />
        <div className="section-content">
          <div className="blurb">
            <h2>Train</h2>
            <p>
              Our mezzanine training area features a Moon board, a set of hang
              boards and campus boards, well as a mini gym. We also have a
              dedicated warmup/cooldown area at the back of the large room.
            </p>
          </div>
        </div>
      </section>
      <section id="eat">
        <SectionImage
          navMenuOpen={navMenuOpen}
          setNavMenuOpen={setNavMenuOpen}
          imageUrl="/assets/food.jpg"
        />
        <div className="section-content">
          <div className="blurb">
            <h2>Dig in</h2>
            <p>
              We serve delicious hot food, cold salads and snacks, cake, and
              artisan ice cream. Whether you just need an extra sugar kick to
              keep your session going or want a full mean, you&apos;ll find it
              all.
            </p>
            <p>Drinks and coffee go without saying...</p>
          </div>
        </div>
      </section>
      <section id="celebrate">
        <SectionImage
          navMenuOpen={navMenuOpen}
          setNavMenuOpen={setNavMenuOpen}
          imageUrl="/assets/celebrate.jpg"
        />
        <div className="section-content">
          <div className="blurb">
            <h2>Celebrate</h2>
            <p>
              Plan B is a great place for kids to celebrate their birthdays and
              other joyful occasions with their friends and family.
            </p>
            <p>
              You can book a weekend spot in our{" "}
              <Link href="/events">events section</Link>.
            </p>
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <section id="opening-times">
        <div className="section-content">
          <h2>Opening times</h2>
          <table>
            <tbody>
              <tr>
                <th scope="row">Mo &ndash; Sun</th>
                <td>10:00 &ndash; 23:00</td>
              </tr>
              <tr>
                <th scope="row">Holidays</th>
                <td>10:00 &ndash; 23:00</td>
              </tr>
              <tr>
                <th scope="row">24 &ndash; 25.12.</th>
                <td>Closed</td>
              </tr>
              <tr>
                <th scope="row">31.12 &ndash; 01.01.</th>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="divider"></div>
      <PriceList />
      <div className="divider"></div>
      <section id="contact">
        <div className="section-content">
          <h2>Contact</h2>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="grid w-fit mx-auto">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
                </svg>
              </div>
              <div>
                <div>Plan B Jena GmbH</div>
                <div>Boulderhalle</div>
                <div>Carl-Pulfrich-Str. 4</div>
                <div>07745 Jena</div>
                <a
                  className="button"
                  target="_blank"
                  href="https://www.google.de/maps/dir//Plan+B+Boulderhalle,+Carl-Pulfrich-Stra%C3%9Fe+4,+07745+Jena/@50.9208545,11.5698159,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47a6a8949570137f:0x91ce5f78db25274f!2m2!1d11.5717385!2d50.9208263?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D"
                >
                  Directions
                </a>
              </div>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                </svg>
              </div>
              <div>
                <a href="tel:+4936412787596">03641 278 75 96</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
