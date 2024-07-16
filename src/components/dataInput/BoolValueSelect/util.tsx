import { emptyValue } from "@/utils/const";
import { SelectProps, Tag } from "antd";

export enum BoolEnum {
  yes = 1,
  no,
}

export const boolValueOptions: SelectProps["options"] = [
  {
    label: "是",
    value: BoolEnum.yes,
  },
  {
    label: "否",
    value: BoolEnum.no,
  },
];

export const renderBoolValueWithTag = (
  v?: BoolEnum,
  trueText: string = "是",
  falseText: string = "否"
) => {
  switch (v) {
    case BoolEnum.yes:
      return <Tag color="success">{trueText}</Tag>;
    case BoolEnum.no:
      return <Tag color="error">{falseText}</Tag>;
    default:
      return emptyValue;
  }
};

export const renderBoolValue = (
  v?: BoolEnum,
  trueText: string = "是",
  falseText: string = "否"
) => {
  switch (v) {
    case BoolEnum.yes:
      return <span style={{ color: "#52c41a" }}>{trueText}</span>;
    case BoolEnum.no:
      return <span style={{ color: "#ff4d4f" }}>{falseText}</span>;
    default:
      return emptyValue;
  }
};
