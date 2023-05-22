import styles from "./date.module.scss";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { DateFormatOptions } from "@progress/kendo-react-intl";
import "@progress/kendo-theme-default/dist/all.css";

export interface DateInterface {
  label: string;
  defaultValue?: Date | null | undefined;
  defaultShow?: boolean | undefined;
  format?: string | DateFormatOptions | undefined;
  disabled?: boolean | undefined;
  show?: boolean | undefined;
  focusedDate?: Date | undefined;
  adaptive?: boolean | undefined;
  size?: "small" | "medium" | "large" | null | undefined;
  fillMode?: "solid" | "flat" | "outline" | null | undefined;
  rounded?: "small" | "medium" | "large" | "full" | null | undefined;
  min?: Date | undefined;
  max?: Date | undefined;
}

export default function DatePickerPage({
  defaultValue,
  defaultShow,
  label,
  format,
  disabled,
  show,
  focusedDate,
  adaptive,
  size = "large",
  fillMode = "outline",
  rounded = "large",
  min,
  max,
}: DateInterface) {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <DatePicker
        defaultValue={defaultValue}
        defaultShow={defaultShow}
        className={styles.date}
        format={format}
        disabled={disabled}
        show={show}
        focusedDate={focusedDate}
        adaptive={adaptive}
        size={size}
        fillMode={fillMode}
        rounded={rounded}
        min={min}
        max={max}
      />
    </>
  );
}
