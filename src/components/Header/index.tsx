"use client";
import Link from "next/link";
import Logo from "../Logo";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import useTheme from "@/hooks/useTheme";

function Header({
  navMenuOpen,
  primary,
  setNavMenuOpen,
}: {
  navMenuOpen: boolean;
  primary: boolean;
  setNavMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [theme, setTeme] = useTheme();

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <header aria-hidden={!primary} tabIndex={primary ? 0 : -1}>
      <nav>
        <div className="nav__left">
          <Link id="home" href="/" aria-label="Go home" title="home">
            <Logo />
          </Link>
        </div>
        <div className="nav__right flex gap-2 md:gap-0">
          <button
            className="icon md:hidden cursor-pointer"
            onClick={() => setNavMenuOpen((prev) => !prev)}
            aria-labelledby="menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="pointer-events-none"
              aria-label="Plan B logo"
            >
              <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
            </svg>
          </button>
          <ul
            id="menu"
            className={twMerge(
              "absolute flex flex-col right-0 items-end border top-full pb-4 md:relative md:flex-row md:items-center md:border-0 transition-all md:pb-0",
              navMenuOpen ? "right-0" : "-right-full md:right-0"
            )}
            aria-label="menu"
            title="menu"
          >
            <li aria-labelledby="boulders-link">
              <Link id="boulders-link" href="/boulders">
                Boulders
              </Link>
            </li>
            <li aria-labelledby="prices-link">
              <Link id="prices-link" href="/#prices">
                Prices
              </Link>
            </li>
            <li aria-labelledby="opening-times-link">
              <Link id="opening-times-link" href="/#opening-times">
                Opening times
              </Link>
            </li>
            <li aria-labelledby="contact-link">
              <Link id="contact-link" href="/#contact">
                Contact
              </Link>
            </li>
            <li aria-labelledby="instagram-link">
              <a
                href="https://www.instagram.com/planb_jena/"
                target="_blank"
                className="py-0.5"
                id="instagram-link"
                aria-label="instagram"
              >
                <div id="instagram" className="icon">
                  <svg
                    aria-label="instagram icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                  </svg>
                </div>
              </a>
            </li>
          </ul>
          <label
            htmlFor="theme-toggle"
            className="focus-within:outline-2 outline-offset-2 outline-sky-500 cursor-pointer flex px-2 py-1.5 hover:bg-[rgb(var(--primary))]"
          >
            <div id="theme-toggle-label" className="invisible size-0">
              Switch to {theme == "dark" ? "light" : "dark"} mode
            </div>
            <div className="icon !size-6  hover:!fill-[rgb(var(--blurb-heading-color))]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                {theme === "dark" ? (
                  <path d="M210.2 53.9C217.6 50.8 226 51.7 232.7 56.1L320.5 114.3L408.3 56.1C415 51.7 423.4 50.9 430.8 53.9C438.2 56.9 443.4 63.5 445 71.3L465.9 174.5L569.1 195.4C576.9 197 583.5 202.4 586.5 209.7C589.5 217 588.7 225.5 584.3 232.2L526.1 320L584.3 407.8C588.7 414.5 589.5 422.9 586.5 430.3C583.5 437.7 576.9 443.1 569.1 444.6L465.8 465.4L445 568.7C443.4 576.5 438 583.1 430.7 586.1C423.4 589.1 414.9 588.3 408.2 583.9L320.4 525.7L232.6 583.9C225.9 588.3 217.5 589.1 210.1 586.1C202.7 583.1 197.3 576.5 195.8 568.7L175 465.4L71.7 444.5C63.9 442.9 57.3 437.5 54.3 430.2C51.3 422.9 52.1 414.4 56.5 407.7L114.7 320L56.5 232.2C52.1 225.5 51.3 217.1 54.3 209.7C57.3 202.3 63.9 196.9 71.7 195.4L175 174.6L195.9 71.3C197.5 63.5 202.9 56.9 210.2 53.9zM239.6 320C239.6 275.6 275.6 239.6 320 239.6C364.4 239.6 400.4 275.6 400.4 320C400.4 364.4 364.4 400.4 320 400.4C275.6 400.4 239.6 364.4 239.6 320zM448.4 320C448.4 249.1 390.9 191.6 320 191.6C249.1 191.6 191.6 249.1 191.6 320C191.6 390.9 249.1 448.4 320 448.4C390.9 448.4 448.4 390.9 448.4 320z" />
                ) : (
                  <path d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C388.8 576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6 478.8 463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4 382.1 115.2C391.2 110.7 396.4 100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2 339.4 64 320 64z" />
                )}
              </svg>
            </div>
            <input
              className="invisible size-0"
              type="checkbox"
              name="theme"
              id="theme-toggle"
              checked={theme === "dark"}
              onChange={() => {
                console.log("checkbox change");
                setTeme((prev) => (prev === "dark" ? "light" : "dark"));
              }}
            ></input>
          </label>
        </div>
      </nav>
    </header>
  );
}

export default Header;
