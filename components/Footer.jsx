import Brand from "./Brand";
export default function Footer() {
  const socials = [
    ["Instagram", process.env.NEXT_PUBLIC_INSTAGRAM_URL],
    ["LinkedIn", process.env.NEXT_PUBLIC_LINKEDIN_URL],
  ].filter(([, url]) => url?.startsWith("https://"));
  return (
    <footer>
      <div className="wrap footer-inner">
        <Brand />
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#process">Our Process</a>
          <a href="#contact">Contact</a>
          {socials.map(([label, url]) => (
            <a key={label} href={url} rel="noreferrer" target="_blank">
              {label}
            </a>
          ))}
        </div>
        <small>© {new Date().getFullYear()} Naseem Business Services.</small>
      </div>
    </footer>
  );
}
