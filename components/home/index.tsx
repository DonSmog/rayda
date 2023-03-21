import { TopNav } from "@components/nav";

import styles from "./index.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <TopNav />

      <div className={styles.content}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </div>
  );
};
