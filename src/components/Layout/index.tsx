import { FC, useState, CSSProperties, useEffect } from "react";
import { Button, Layout, Menu, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import LoginPage from "@/pages/login/index.tsx";
import HeaderRight from "./HeaderRight.tsx";
import { useNavigate } from "react-router-dom";
// import logo from "@/assets/logo.svg";
import { getStorage } from "@/utils/storage.ts";
import { pageConfig } from "@/config/layoutConfig.ts";
import useLocalStorage from "@/hooks/useLocalStorage.ts";

const Header = Layout.Header;
const Sider = Layout.Sider;
const Content = Layout.Content;
// const Footer = Layout.Footer;

const siderStyle: CSSProperties = {
  overflow: "auto",
  height: "100vh",
};

const headerStyle: CSSProperties = {
  height: pageConfig.layout.header.height,
  padding: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems:'center'
};

interface Props {
  menuItems: any;
  children?: any;
}
export const LayoutPage: FC<Props> = (props) => {
  const { menuItems, children } = props;
  const { websiteMenuName } = pageConfig;
  const [token, setToken, removeToken] = useLocalStorage('token')
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const logoStyle: CSSProperties = {
    margin: "16px",
    color: "white",
    borderRadius: "6px",
    fontSize: "18px",
    fontWeight: 500,
    padding: "10px 0 0px 14px",
    display: "flex",
    alignItems: "center",
  };

  const processUrlArray = (urlArr: string[]) => {
    const processedArray = urlArr.reduce((acc, current, index) => {
      if (index === 0) {
        // 对于第一个元素，直接将其推入结果数组
        acc.push(current);
      } else {
        // 对于后续元素，将前一个累积的值与当前值相加后推入结果数组
        acc.push(acc[index - 1] + current);
      }
      return acc;
    }, [] as string[]);
    return processedArray;
  };

  const handleDefaultOpenAndSelectedKeys = () => {
    const urlArr = window.location.pathname
      .split("/")
      .filter((item) => item)
      .slice(0, -1)
      .map((item) => "/" + item);

    const defaultOpenKeys: string[] = processUrlArray(urlArr);
    setOpenKeys(defaultOpenKeys);
    let tmpSelectedKeys = window.location.pathname;
    setSelectedKeys([tmpSelectedKeys]);
  };

  useEffect(() => {
    // 没有登录，且不处于登录页，强制跳转到登录页
    if (!token && window.location?.pathname !== "login") {
      setToken("");
      removeToken()
      navigate("/login");
    }
  }, [window.location.pathname, token]);
  useEffect(handleDefaultOpenAndSelectedKeys, []);

  return (
    <Layout>
      {token ? (
        <>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={siderStyle}
            width={pageConfig.layout.sider.width}
          >
            <div style={logoStyle}>
              {collapsed ? null : <span>{websiteMenuName}</span>}
            </div>
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={selectedKeys}
              openKeys={openKeys}
              items={menuItems}
              onClick={(v) => {
                navigate(v.key);
                setSelectedKeys([v.key]);
              }}
              onOpenChange={(e) => {
                setOpenKeys(e);
              }}
            />
          </Sider>
          <Layout>
            <Header style={{ ...headerStyle, background: colorBgContainer }}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              />
              <HeaderRight />
            </Header>
            <Content
              style={{
                margin: "24px 16px ",
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                height: `calc(100vh - ${pageConfig.layout.header.height}px - 48px)`,
                overflow: "auto",
              }}
            >
              {children}
            </Content>
          </Layout>
        </>
      ) : (
        <LoginPage />
      )}
    </Layout>
  );
};
export default LayoutPage;
