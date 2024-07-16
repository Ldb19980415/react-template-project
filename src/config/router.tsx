import {
  FundOutlined,
  HomeOutlined,
  StepBackwardOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

export interface ResponseRespMenus {
  /** 子菜单 */
  children?: ResponseRespMenus[];
  /** 是否在列表隐藏 */
  hidden?: boolean;
  /** 路由path */
  key: string;
  /** 路由name */
  label?: string;
  /** 父菜单UUID */
  parent?: string;
  /** 排序标记 */
  sort?: number;
  /** 菜单UUID */
  uuid?: string;
}

export const routesData: ResponseRespMenus[] = [
  {
    label: "系统首页",
    key: "/",
  },
  {
    label: "pageA",
    key: "/pageA",
  },
  {
    label: "pageB",
    key: "/pageB",
  },
];

export const matchMenuIcon = (key: string) => {
  switch (key) {
    case "/":
      return <HomeOutlined />;
    case "/pageA":
      return <WarningOutlined />;
    case "/pageB":
      return <FundOutlined />;

    default:
      return <div></div>;
  }
};


