import { BellIcon } from "@components/icons/BellIcon";

import styles from "./index.module.scss";

export const TopNav = () => {
  return (
    <div className={styles.topnav}>
      <div className={styles.topnav_text}>
        <h1>Welcome</h1>
        <p>Your current sales auction and activity.</p>
      </div>
      <div className={styles.bell}>
        <BellIcon />
        <span>2</span>
      </div>
    </div>
  );
};
