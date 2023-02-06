import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import ArrowButton from "@site/src/components/ArrowButton";
import CustomFooter from "../theme/CustomFooter";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <header className={clsx("hero hero--primary")}>
        <div className="container">
          <div className="row">
            <h1 className="hero__title">Documentation</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
          <div className="row row-landing margin-top--lg">
            <div className="col column--6 padding-left--none padding-right--none">
              <h2>A new way to store web3 data</h2>
              <p>
                Build applications on your chain of choice while adding
                Tableland to your stack, allowing developers to:
              </p>
              <ul>
                <li>
                  Stop storing data in contracts that doesn't belong there, and
                  offload it to a decentralized database with native SQL
                  queries.
                </li>
                <li>
                  Eliminate centralized server dependence, or complex
                  decentralized storage workflows (static JSON files) but
                  without database features.
                </li>
                <li>
                  Use on-chain rules to control who or what can change certain
                  table data, such as gating with NFT ownership or an account's
                  balance.
                </li>
              </ul>{" "}
              <p></p>
              <p>
                Write SQL to EVM chains and <i>openly</i> read table data
                off-chain within your application. Tableland validator nodes
                listen to events at registry smart contracts, process SQL
                queries, and store data in SQLite—enabling
                <b> mutable</b> data with <b>immutable</b> rules.
              </p>
              <ArrowButton text="Get started" to="sdk/getting-started" />
            </div>
            <div
              className="col column--6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <img
                alt="Tableland code snippet"
                className={clsx(styles.landingImage)}
                src={useBaseUrl("/img/tableland/landing-image.png")}
              ></img>
            </div>
          </div>
        </div>
      </header>
      <main className={clsx(styles.containerMain)}>
        <HomepageFeatures />
      </main>
      <CustomFooter />
    </Layout>
  );
}
