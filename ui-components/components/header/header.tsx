import styles from "./header.module.scss";
import Image from "next/image";

export interface LeftPannelInterface {
  MenuBarClick: () => void;
}

export default function Header({ MenuBarClick }: LeftPannelInterface) {
  const MenuBarOnClick = () => {
    MenuBarClick && MenuBarClick();
  };

  return (
    <>
      <div className={`${styles.header}`}>
        <div className={`${styles.menu}`}>
          <Image
            src="/svg/menu.svg"
            width={30}
            height={25}
            alt="menu"
            onClick={MenuBarOnClick}
          />
          <Image src="/svg/koch.svg" width={160} height={200} alt="Koch Logo" />
        </div>
      </div>
    </>
  );
}
