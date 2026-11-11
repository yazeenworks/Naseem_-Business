"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { steps } from "../lib/content";
export default function Process() {
  const [current, select] = useState(0);
  const reduce = useReducedMotion();
  return (
    <section className="process section" id="process">
      <div className="wrap">
        <div className="eyebrow">
          <i />
          OUR PROCESS
        </div>
        <h2>
          How it works<span>.</span>
        </h2>
        <div className="steps">
          {steps.map(([label], i) => (
            <button
              key={label}
              aria-pressed={i === current}
              onClick={() => select(i)}
            >
              <span>0{i + 1}</span>
              {label}
            </button>
          ))}
        </div>
        <motion.div
          key={current}
          initial={reduce ? false : { y: 6 }}
          animate={{ y: 0 }}
          className="step-content"
        >
          <div>
            <h3>{steps[current][1]}</h3>
            <p>{steps[current][2]}</p>
          </div>
          {current < 3 ? (
            <button onClick={() => select(current + 1)}>
              Next step <ArrowRight size={16} />
            </button>
          ) : (
            <a href="#inquiry">
              Get in touch <ArrowRight size={16} />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
