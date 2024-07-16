import { emptyValue } from "@/pagesUtils/common";
import { Tag } from "antd";

export enum ApprovalResultEnum {
  agree=1,
  suspend,
  stop,
  reject,
  finish,
  repeal
}


export const approvalResultOptions = [
  {
    label: "同意",
    value: ApprovalResultEnum.agree,
  },
  {
    label: "中止",
    value: ApprovalResultEnum.suspend,
  },
  {
    label: "暂停",
    value: ApprovalResultEnum.stop,
  },
  {
    label: "驳回",
    value: ApprovalResultEnum.reject,
  },
  {
    label: "结束",
    value: ApprovalResultEnum.finish,
  },
  {
    label: "撤销",
    value: ApprovalResultEnum.repeal,
  },
];

export const renderApprovalResult = (v?: ApprovalResultEnum) => {
  switch (v) {
    case ApprovalResultEnum.agree:
      return <Tag color="success">同意</Tag>;
    case ApprovalResultEnum.suspend:
      return <Tag color="warning">中止</Tag>;
    case ApprovalResultEnum.stop:
      return <Tag color="default">暂停</Tag>;
    case ApprovalResultEnum.reject:
      return <Tag color="warning">驳回</Tag>;
    case ApprovalResultEnum.finish:
      return <Tag color="warning">结束</Tag>;
    case ApprovalResultEnum.repeal:
      return <Tag color="warning">撤销</Tag>;
    default:
      return emptyValue;
  }
};
