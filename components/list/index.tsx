import { ImageRatio } from "@components/widgets/imageRatio";
import Avatar from "@mui/material/Avatar";
import { useFetchData } from "api/data";

import styles from "./index.module.scss";

interface Data {
  bid: string;
  name: string;
  title: string;
  image: string;
}

export const ListItems = () => {
  const { data, isLoading } = useFetchData<Data[]>();

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        fontSize: "14px",
        fontWeight: "600",
        height: "32px",
        width: "32px",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <div className={styles.list}>
      <div className={styles.list_top}>
        <h1>Featured Items</h1>
        <button>View Auction</button>
      </div>

      {isLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <>
          {data ? (
            <div className={styles.list_items}>
              {data.data?.map((item, index) => {
                const { bid, name, image, title } = item;
                return (
                  <div key={index} className={styles.item}>
                    <ImageRatio
                      src={image}
                      unoptimized
                      className={styles.img}
                    />
                    <div className={styles.name}>
                      <Avatar {...stringAvatar(name)} />
                      <p>
                        {name} <span>(Highest Bidder)</span>
                      </p>
                    </div>
                    <h2>{title}</h2>
                    <p>
                      Current Bid: <span>{bid}</span>
                    </p>

                    <div className={styles.item_button}>
                      <button>Add to wishlist</button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>No Data</p>
          )}
        </>
      )}
    </div>
  );
};
