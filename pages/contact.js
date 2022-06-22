import React from "react";
import SEO from "@bradgarropy/next-seo";
import Contact from "../components/Contact";

function contact() {
  return (
    <div>
      <SEO
        title="Lia Group International | Contact"
        facebook={{
          image: "/lia.png",
          url: "https://www.liagroupinternational.com/contact",
          type: "website",
        }}
        description="Contact Lia Group International"
      />
      <main>
        <Contact />
      </main>
    </div>
  );
}

export default contact;
