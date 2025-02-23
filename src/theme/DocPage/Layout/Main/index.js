import React from "react";
import clsx from "clsx";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import styles from "./styles.module.css";
import CustomFooter from "@site/src/theme/CustomFooter";
export default function DocPageLayoutMain({
  hiddenSidebarContainer,
  children,
}) {
  const sidebar = useDocsSidebar();
  return (
    <>
      <main
        className={clsx(
          styles.docMainContainer,
          (hiddenSidebarContainer || !sidebar) &&
            styles.docMainContainerEnhanced
        )}
      >
        <div
          className={clsx(
            "container padding-top--md padding-bottom--md",
            styles.docItemWrapper,
            hiddenSidebarContainer && styles.docItemWrapperEnhanced
          )}
        >
          {children}
          <div>
            <CustomFooter />
          </div>
        </div>
      </main>
    </>
  );
}
