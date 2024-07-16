import { Select, SelectProps } from "antd";
import { FC, memo, useMemo, useState } from "react";
import { boolValueOptions } from "./util";

export { renderBoolValue, renderBoolValueWithTag, BoolEnum } from "./util";

/**
 * 布尔值的select，支持传入自定义options，否则使用默认的1代表true，2代表false
 */
interface Props<T = any> {
  value?: T;
  onChange?: (v: T) => void;
  options?: SelectProps["options"];
}

export const BoolValueSelect: FC<Props<number>> = memo((props) => {
  const { onChange, options } = props;
  const [innerValue, setInnerValue] = useState<number>();
  const value = useMemo(() => {
    return "value" in props ? props.value : innerValue;
  }, [props.value, innerValue]);
  return (
    <div>
      <Select
        options={options ?? boolValueOptions}
        value={value}
        onChange={(v) => {
          onChange?.(v);
          setInnerValue(v);
        }}
      />
    </div>
  );
});
