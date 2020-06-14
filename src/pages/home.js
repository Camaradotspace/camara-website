import React from "react";
import Layout from "@theme/Layout";
import styles from "./home.module.css";

const logoUrl =
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/248/peacock_1f99a.png";

export default function Homepage() {
  return (
    <Layout>
      <div className={styles.heroSection}>
        <img src={logoUrl} alt="Camara's logo" />
        <h1 className={styles.heading}>Camara</h1>
        <p className={styles.tagline}>
          Build your ideas quickly and with less code.
        </p>
        <p>
          Camara is a design system that helps you build your ideas quickly and
          with less code. It's an open source project, and it's available to
          anyone who wants to build with it.
        </p>
        <p>
          Not much new ideas in it but it will be easy to use and with a
          reasonable amount of flexibility. Straight up, we are not embarking on
          building the most robust and flexible UI component library ever. What
          we are building is a simple UI component library that has been
          thoughtfully designed and implemented, to scratch our own itch of
          having to avoid build the same stuffs over again when working on our
          simple side projects.
        </p>
        <div>
          <p>License: MIT</p>
          <p className={styles.cta}>
            <a href="">View Docs</a>
            <a href="">Learn More</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
