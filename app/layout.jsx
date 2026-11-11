import "./globals.css";
export const metadata = {
  title: "Naseem Business Services | Business Setup in Qatar",
  description:
    "Company formation, Single Window business setup, PRO services and corporate document clearance in New Rayyan Al Shafi, Qatar.",
  icons: { icon: "/mark.png" },
};
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
