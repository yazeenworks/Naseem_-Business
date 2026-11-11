"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  MapPin,
  Layers3,
  Route,
  Landmark,
} from "lucide-react";
export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <motion.div initial={false} animate={{ y: 0 }} className="hero-copy">
            <div className="badge">
              <i />
              QATAR BUSINESS CONSULTANCY
            </div>
            <h1>
              Your business,
              <br />
              <em>rooted in Qatar.</em>
            </h1>
            <p>
              From company formation to corporate clearance, our local team
              helps you set up and operate with confidence.
            </p>
            <div className="buttons">
              <a className="btn primary" href="#inquiry">
                Get Free Consultation <ArrowUpRight size={18} />
              </a>
              <a className="btn secondary" href="#services">
                Explore Services <ArrowDown size={16} />
              </a>
            </div>
          </motion.div>
          <div className="photo-label">
            <MapPin size={15} />
            <span>WEST BAY · DOHA, QATAR</span>
          </div>
          {!reduce && (
            <div className="particles" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          )}
        </div>
      </section>
      <div className="facts">
        <div className="wrap facts-inner">
          {[
            [Layers3, "06", "Core services"],
            [Route, "01", "Single-window approach"],
            [Landmark, "Qatar", "Local expertise"],
          ].map(([Icon, val, label]) => (
            <div className="fact" key={label}>
              <Icon />
              <strong>{val}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
