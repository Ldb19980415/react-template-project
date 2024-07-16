import { DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { CSSProperties, FC, memo, useMemo, useState } from "react";

const { RangePicker } = DatePicker;

export interface DataRangePickerValueType {
  start?: number;
  end?: number;
}
type DisableSelect = "before" | "after" | undefined;
interface Props<T = any> {
  value?: T;
  onChange?: (v: T) => void;
  disableSelect?: DisableSelect;
  limitRangeDays?: number;
  style?: CSSProperties
}

export const DataRangePicker: FC<Props<DataRangePickerValueType>> = memo(
  (props) => {
    const { onChange, limitRangeDays, disableSelect, style={} } = props;
    const [innerValue, setInnerValue] = useState<DataRangePickerValueType>();

    const disabledBeforeDate: RangePickerProps["disabledDate"] = (
      current,
      { from }
    ) => {
      if (from && limitRangeDays) {
        return (
          Math.abs(current.diff(from, "days")) >= limitRangeDays ||
          current < dayjs().add(-1, "day").endOf("day")
        );
      }
      return current < dayjs().add(-1, "day").endOf("day");
    };
    const disabledAfterDate: RangePickerProps["disabledDate"] = (
      current,
      { from }
    ) => {
      if (from && limitRangeDays) {
        return (
          Math.abs(current.diff(from, "days")) >= limitRangeDays ||
          current > dayjs().endOf("day")
        );
      }
      return current > dayjs().endOf("day");
    };
    const justLimitDays: RangePickerProps["disabledDate"] = (
      current,
      { from }
    ) => {
      if (from && limitRangeDays) {
        return Math.abs(current.diff(from, "days")) >= limitRangeDays;
      }
      return false;
    };

    const disabledDate = useMemo(() => {
      switch (disableSelect) {
        case "after":
          return disabledAfterDate;
        case "before":
          return disabledBeforeDate;
        default:
          return justLimitDays;
      }
    }, [disableSelect]);
    const value = useMemo(() => {
      const showValue: RangePickerProps["value"] = [undefined, undefined];

      if ("value" in props) {
        const { start, end } = props.value ?? {};
        if (start) {
          showValue[0] = dayjs(start * 1000);
        }
        if (end) {
          showValue[1] = dayjs(end * 1000);
        }
      } else {
        const { start, end } = innerValue ?? {};
        if (start) {
          showValue[0] = dayjs(start * 1000);
        }
        if (end) {
          showValue[1] = dayjs(end * 1000);
        }
      }
      return showValue;
    }, [props.value, innerValue]);
    return (
      <RangePicker
        style={{ width: "100%", ...style }}
        value={value}
        format="YYYY-MM-DD HH:mm"
        showTime
        onChange={(value) => {
          const resV: Partial<DataRangePickerValueType> = {};
          if (value?.length) {
            resV.start = dayjs(value?.[0]).unix();
            resV.end = dayjs(value?.[1]).unix();
          }
          onChange?.(resV);
          setInnerValue(resV);
        }}
        disabledDate={disabledDate}
      />
    );
  }
);
