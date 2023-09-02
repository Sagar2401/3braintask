import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";

const Header = () => {
  const [active, setActive] = useState("");
  const menu = [
    {
      name: "Portfolio",
      href: "#portfolio",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const navbarShrink = () => {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };
  // Shrink the navbar
  navbarShrink();
  // Shrink the navbar when page is scrolled
  useEffect(() => {
    window.addEventListener("scroll", navbarShrink);
    return () => {
      window.removeEventListener("scroll", navbarShrink);
    };
  }, []);

  // Collapse responsive navbar when toggler is visible
  useEffect(() => {
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = Array.from(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.forEach((responsiveNavItem) => {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });
  }, []);
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            {menu.map((items, index) => {
              return (
                <ListItem
                  items={items}
                  active={active}
                  setActive={setActive}
                  index={index}
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
