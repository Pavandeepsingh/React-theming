import styles from "./left-pannel.module.scss";
import Image from "next/image";
export interface LeftPannelInterface {
  isOpen: boolean;
  children: LeftPannelChildrenInterface[];
}

export interface LeftPannelChildrenInterface {
  id: string;
  name: string;
  children?: LeftPannelChildrenInterface[];
  isActive: boolean;
  navigate?: string;
  icon?: string;
}

export default function LeftPannel({ isOpen, children }: LeftPannelInterface) {
  return (
    <>
     {isOpen ? <div className={`${styles.pannel}`}>
        {children &&
          children.map((c) => (
            <LeftPannelChildren
              key={c.id}
              id={c.id}
              name={c.name}
              isActive={c.isActive}
              navigate={c.navigate}
              icon={c.icon}
              children={c.children}
            />
          ))}
      </div>:null}
    </>
  );
}

function LeftPannelChildren({
  id,
  name,
  children,
  isActive,
  navigate,
  icon,
}: LeftPannelChildrenInterface) {
  return (
    <>
      <div
        id={id}
        className={`${styles.menu}  ${isActive ? styles["active"] : ""}`}
      >
        <div className={`${styles.name}`}>
          <Image
            src={`/svg/${icon}.svg`}
            width={25}
            height={30}
            alt={name + " icon"}
            className={styles.iconCss}
          />
          {name}
        </div>
       {children && children.length > 0 && <Image
            src={`/svg/arrow.svg`}
            width={15}
            height={15}
            alt={"arrow icon"}
            className={styles.iconCss}
          />}
      </div>
    </>
  );
}
