"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Minus, ArrowRight } from "lucide-react";
import { services } from "../lib/content";
export default function Services({ onInquiry }) {
  const [active, setActive] = useState(-1);
  const reduce = useReducedMotion();
  return (
    <section className="section wrap" id="services">
      <div className="eyebrow">
        <i />
        OUR SERVICES
      </div>
      <div className="section-head">
        <h2>
          Business services<span>.</span>
        </h2>
        <p>
          Specialist support for every stage of
          <br className="desktop" /> your business in Qatar.
        </p>
      </div>
      <div className="cards">
        {services.map(({ name, icon: Icon, text, detail }, i) => (
          <motion.article
            key={name}
            className={"card " + (active === i ? "active" : "")}
            initial={false}
            whileInView={reduce ? undefined : { y: [5, 0] }}
            viewport={{ once: true, amount: 0.15 }}
            whileHover={reduce ? undefined : { y: -4 }}
          >
            <button
              className="card-control"
              aria-expanded={active === i}
              aria-controls={"detail-" + i}
              onClick={() => setActive(active === i ? -1 : i)}
            >
              <span className="card-top">
                <span className="icon-box">
                  <Icon size={24} />
                </span>
                <span className="circle">
                  {active === i ? (
                    <Minus size={17} />
                  ) : (
                    <ArrowUpRight size={17} />
                  )}
                </span>
              </span>
              <h3>{name}</h3>
              <span className="card-text">{text}</span>
            </button>
            <div id={"detail-" + i} hidden={active !== i} className="detail">
              <p>{detail}</p>
              <a href="#inquiry" onClick={() => onInquiry(name)}>
                Discuss this service <ArrowRight size={15} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
