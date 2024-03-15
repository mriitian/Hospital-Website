import React from "react";
import BlogSection from "../components/BlogSection";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blogs() {
  const showExplore = false;

  return (
    <div>
      <NavBar showExplore={showExplore} />
      <BlogSection />
      <hr />
      <Footer />
    </div>
  );
}
