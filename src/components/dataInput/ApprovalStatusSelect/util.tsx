import { emptyValue } from "@/pagesUtils/common";
import { Tag } from "antd";


export enum ApprovalStatusEnum {
  approvalSuccess = 1,
  approvalProcessing,
  approvalUnSubmit
}

export const approvalStatusOptions = [
  {
    label: "审批完成",
    value: ApprovalStatusEnum.approvalSuccess,
  },
  {
    label: "审批中",
    value: ApprovalStatusEnum.approvalProcessing,
  },
  {
    label: "未提交",
    value: ApprovalStatusEnum.approvalUnSubmit,
  },
];

export const renderApprovalStatus = (v?: ApprovalStatusEnum) => {
  switch (v) {
    case ApprovalStatusEnum.approvalSuccess:
      return <Tag color="success">审批完成</Tag>;
    case ApprovalStatusEnum.approvalProcessing:
      return <Tag color="processing">审批中</Tag>;
    case ApprovalStatusEnum.approvalUnSubmit:
      return <Tag color="default">未提交</Tag>;
    default:
      return emptyValue;
  }
};
