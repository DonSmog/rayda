import { ThumbsUpIcon } from "@components/icons/ThumbsUpIcon";
import { ImageRatio } from "@components/widgets/imageRatio";

import styles from "./index.module.scss";

export const TopDisplay = () => {
  return (
    <div className={styles.top_display}>
      <ImageRatio
        src="/assets/image1.png"
        unoptimized
        priority
        className={styles.image}
      />
      <div className={styles.texts}>
        <ImageRatio
          src="/assets/image2.png"
          unoptimized
          priority
          className={styles.avatar}
        />

        <div className={styles.content}>
          <div className={styles.content_texts}>
            <h1>Starts in: 3 days : 2 hours : 24 minutes </h1>
            <div className={styles.content_texts_item}>
              <button>
                <span></span>
                Not Live
              </button>

              <p>Layers Auction </p>
            </div>
          </div>

          <button className={styles.content_button}>
            <ThumbsUpIcon />
            Accept Invite
          </button>
        </div>
      </div>
    </div>
  );
};
