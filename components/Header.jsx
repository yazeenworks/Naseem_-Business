"use client";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap nav">
        <Brand />
        <button
          className="menu"
          aria-expanded={open}
          aria-controls="navigation"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="navigation"
          className={open ? "opened" : ""}
          onClick={() => setOpen(false)}
        >
          {[
            ["Home", "home"],
            ["Services", "services"],
            ["Our Process", "process"],
            ["Contact", "contact"],
          ].map(([name, id]) => (
            <a key={id} href={"#" + id}>
              {name}
            </a>
          ))}
        </nav>
        <a className="btn primary nav-cta" href="#inquiry">
          Get Free Consultation <ArrowUpRight size={17} />
        </a>
      </div>
    </header>
  );
}
