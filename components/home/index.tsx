import { CaretDownIcon } from "@components/icons/CaretDownIcon";
import { ImageRatio } from "@components/widgets/imageRatio";
import { FC } from "react";

import styles from "./index.module.scss";

export const Home: FC = () => {
  return (
    <div className={styles.exampleComponentCover}>
      <ImageRatio
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        }
        priority={true}
        unoptimized={true}
        className={styles.img}
      />
      <CaretDownIcon className={styles.icon} primaryColor={"#ffffff"} />
    </div>
  );
};
