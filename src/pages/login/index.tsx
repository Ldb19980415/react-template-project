import { pageConfig } from "@/config/layoutConfig";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const { websiteName } = pageConfig;
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 500,
          height: 250,
          margin: 0,
          boxShadow: "0 0 2px rgba(0,0,0,0.5)",
          background: "#fff",
          padding: 10,
        }}
      >
        <div>
          <div style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>
            欢迎访问{websiteName}
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
