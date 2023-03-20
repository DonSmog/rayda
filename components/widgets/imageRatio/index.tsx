import Image from "next/image";
import { FC } from "react";

import styles from "./index.module.scss";

interface Props {
  src: string;
  className?: string;
  priority?: boolean;
  unoptimized?: boolean;
}

export const ImageRatio: FC<Props> = ({
  src,
  className,
  priority,
  unoptimized,
}) => {
  return (
    <div className={`${styles.imageCover} ${className ?? ""}`}>
      <Image
        src={src}
        layout={"fill"}
        alt={"Image"}
        className={styles.img}
        priority={priority}
        unoptimized={unoptimized}
      />
    </div>
  );
};
