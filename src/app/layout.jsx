import "../index.css";
import LayoutWrapper from "../components/LayoutWrapper";

export const metadata = {
  title: "Enpii Studio — Web Developer & UI/UX Enthusiast",
  description: "Web Developer & UI/UX Enthusiast",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brand-bg text-brand-text font-body selection:bg-brand-accent/30">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
