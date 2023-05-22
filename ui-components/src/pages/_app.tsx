import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useState, useCallback, useMemo } from "react";
import { LeftPannelChildrenInterface } from "../../components/left-pannel/left-pannel";

const Header = dynamic(() => import("../../components/header/header"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const LeftPannel = dynamic(
  () => import("../../components/left-pannel/left-pannel"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

const pannelMenu: LeftPannelChildrenInterface[] = [
  {
    id: "1",
    name: "Date",
    children: [],
    isActive: false,
    navigate: "",
    icon: "date",
  },
];

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pannelItem = useMemo(() => {
    return pannelMenu;
  }, [pannelMenu]);

  const toggleLeftPannel = useCallback(() => {
    setIsOpen((o) => !o);
  }, [isOpen]);

  return (
    <>
      <Header MenuBarClick={toggleLeftPannel} />
      <div className="flex">
        <LeftPannel isOpen={isOpen} children={pannelItem} />
        <div className="main-container">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
