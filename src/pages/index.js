import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
// import CamaraLogo from "@site/static/img/logo.png";
// import DesignSystemIllustration from "../../static/img/design.svg";

const logoUrl =
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/248/peacock_1f99a.png";

export default function Homepage() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description={`Description will go into a meta tag in <head/>`}
    >
      <main className={classnames("container", styles.heroSection)}>
        <img src={logoUrl} alt="Camara's logo" />
        <h1 className={styles.heading}>{siteConfig.title}</h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.details}>
          <div className={styles.bio}>
            <p>
              Camara is a design system that helps you build your ideas quickly
              and with less code. It's an open source project, and it's
              available to anyone who wants to build with it.
            </p>
            <p>
              Not much new ideas in it but it will be easy to use and with a
              reasonable amount of flexibility. Straight up, we are not
              embarking on building the most robust and flexible UI component
              library ever. What we are building is a simple UI component
              library that has been thoughtfully designed and implemented, to
              scratch our own itch of having to avoid build the same stuffs over
              again when working on our simple side projects.
            </p>
          </div>
          <div className={styles.design}>
            <img
              src="../../static/img/design.svg"
              alt="illustration of design system"
            />
          </div>
        </div>
        <div>
          <p>License: MIT</p>
          <p className={styles.cta}>
            <Link href={useBaseUrl("docs/")}>View Docs</Link>
            <Link href="">Learn More</Link>
          </p>
        </div>
      </main>
    </Layout>
  );
}
