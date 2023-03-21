import { ListItems } from "@components/list";
import { TopNav } from "@components/nav";
import { TopDisplay } from "@components/top-display";

import styles from "./index.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <TopNav />

      <div className={styles.content}>
        <div className={styles.card}>
          <TopDisplay />
        </div>
        <div className={styles.card}>
          <ListItems />
        </div>
      </div>
    </div>
  );
};
