import styles from "@/styles/date-page.module.scss";
import dynamic from "next/dynamic";
import { Head } from "next/document";

const Date = dynamic(() => import("../../components/date/date"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function DatePage() {
  return (
    <>
      <h2 className={styles.title}>Date Component</h2>
      <Date label="From Date:" />
      <a
        href="https://www.telerik.com/kendo-react-ui/components/dateinputs/get-started/"
        target="_blank"
      ></a>
    </>
  );
}
