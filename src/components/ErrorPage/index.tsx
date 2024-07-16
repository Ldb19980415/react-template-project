import { Empty } from "antd";

export const ErrorPage = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Empty
        description={
          <span style={{ color: "red" }}>页面错误，请联系管理员</span>
        }
      ></Empty>
    </div>
  );
};
