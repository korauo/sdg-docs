import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Translate from "@docusaurus/Translate";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <br/>
        
        <h1 className="hero__title text"><Translate>Sustainable Development Goals</Translate></h1>
        <p className="hero__subtitle"><Translate>Help make the world a better place for the future.</Translate></p>
        <div className={styles.buttons}>
          <Link className="button button--lg gradient-hover-effect" to="/docs/goals/intro">
            <Translate>Get Started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Main`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <br/>
      <br/>
    </Layout>
  );
}
