import { PoweroffOutlined, UserOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import {  Dropdown, Space, message } from "antd";
import { useNavigate } from "react-router-dom";
import { getStorage, removeStorage } from "@/utils/storage.ts";

const logoutSystem = () => {
  return {
    code:0
  }
}
const HeaderRight: React.FC = () => {


  const navigate = useNavigate();


  const handleLogout = async () => {
    const logoutRes = await logoutSystem();
    console.log("loginRes", logoutRes);
    if (!logoutRes.code) {
      message.success("退出登录");
      removeStorage("isLogin");
      removeStorage("X-Token");
      removeStorage("userInfo");
      navigate("/login");
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div onClick={()=>{}}>修改密码</div>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: <div onClick={handleLogout}>退出登录</div>,
      icon: <PoweroffOutlined />,
    },
  ];

  // const { user: userInfo } = JSON.parse(getStorage("userInfo")[0] || "{}");

  return (
    <Space style={{ marginRight: 20 }}>
     

      <div style={{ margin: "0 12px 0 20px" }}>V1.4</div>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {/* <IconFont type="icon-avatar" className="icon-avatar" /> */}
            {/* <span className="icon-avatar">{userInfo?.nickName}</span> */}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </Space>
  );
};

export default HeaderRight;
