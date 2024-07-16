import {
  DeleteOutlined,
  EditOutlined,
  FileTextOutlined,
  PlusOutlined,
  SearchOutlined,
  RestOutlined,
  SyncOutlined,
  StopOutlined,
  FormOutlined,
  UploadOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { Button, Popconfirm, PopconfirmProps } from "antd";
import { ButtonProps } from "antd/es/button/button";
import { CSSProperties, FC, ReactNode } from "react";

const btnStyle: CSSProperties = {};
// 按钮类型为link
// 表格内使用的
export const EditBtn: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <Button style={btnStyle} type="link" icon={<EditOutlined />} {...props}>
      {children ?? "编辑"}
    </Button>
  );
};
export const DetailBtn: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <Button style={btnStyle} type="link" icon={<FileTextOutlined />} {...props}>
      {children ?? "详情"}
    </Button>
  );
};
export const StartBtn: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <Button
      style={{ cursor: "pointer" }}
      type="link"
      icon={<SyncOutlined />}
      {...props}
    >
      {children ?? "启动"}
    </Button>
  );
};

export const StopBtn: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <Button style={btnStyle} type="link" icon={<StopOutlined />} {...props}>
      {children ?? "停止"}
    </Button>
  );
};
interface DeleteBtnProps {
  onConfirm: PopconfirmProps["onConfirm"];
  description?: string;
  children?: ReactNode;
  className?: string;
}
export const DeleteBtn: FC<DeleteBtnProps> = ({
  children,
  onConfirm,
  description = "确认删除吗？",
  className,
}) => {
  return (
    <Popconfirm
      title="删除"
      description={description}
      className={className}
      onConfirm={onConfirm}
    >
      <Button style={btnStyle} type="link" danger icon={<DeleteOutlined />}>
        {children ?? "删除"}
      </Button>
    </Popconfirm>
  );
};

export const InputInfoBtn: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <Button style={btnStyle} type="link" icon={<FormOutlined />} {...props}>
      {children ?? "信息录入"}
    </Button>
  );
};

// 按钮带外边框
// 表格外使用的
export const AddBtn: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <Button style={btnStyle} type="primary" icon={<PlusOutlined />} {...props}>
      {children ?? "新增"}
    </Button>
  );
};

export const SearchBtn: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <Button
      style={btnStyle}
      type="primary"
      icon={<SearchOutlined />}
      {...props}
    >
      {children ?? "查询"}
    </Button>
  );
};

export const ResetBtn: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <Button style={btnStyle} icon={<RestOutlined />} {...props}>
      {children ?? "重置"}
    </Button>
  );
};

export const ImportBtn: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <Button type="primary" icon={<UploadOutlined />} {...props}>
      {children ?? "导入"}
    </Button>
  );
};

export const ExportBtn: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <Button type="primary" icon={<ExportOutlined />} {...props}>
      {children ?? "导出"}
    </Button>
  );
};

export const AddTableLineBtn: FC<ButtonProps> = (props) => {
  const { children } = props;

  return (
    <Button type="dashed" block icon={<PlusOutlined />} {...props}>
      {children ?? "添加"}
    </Button>
  );
};
