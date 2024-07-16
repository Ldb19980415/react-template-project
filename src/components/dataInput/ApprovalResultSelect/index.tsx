import { Select } from "antd";
import { FC, memo, useMemo, useState } from "react";
import { approvalResultOptions } from "./util";

export { renderApprovalResult,ApprovalResultEnum } from "./util";


/**
 * 审批状态
 */
interface Props<T = any> {
  value?: T;
  onChange?: (v: T) => void;
}

export const ApprovalResultSelect: FC<Props<number>> = memo((props) => {
  const { onChange } = props;
  const [innerValue, setInnerValue] = useState<number>();
  const value = useMemo(() => {
    return "value" in props ? props.value : innerValue;
  }, [props.value, innerValue]);
  return (
    <div>
      <Select
        options={approvalResultOptions}
        value={value}
        onChange={(v) => {
          onChange?.(v);
          setInnerValue(v);
        }}
      />
    </div>
  );
});

