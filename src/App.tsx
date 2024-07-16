import { useEffect } from "react";
import { App, ConfigProvider, theme } from "antd";
import LayoutPage from "@/components/Layout/index.tsx";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import { GlobalContext } from "./config/context.tsx";
import { useRouter } from "./hooks/useRouter.tsx";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");



const PageApp = () => {
  // const [theme, setTheme] = useLocalStorage("antd-theme", "light");
  const [routers, menuItems] = useRouter();

  useEffect(() => {
    // 改变组件库整体的theme
    // todo
  }, [theme]);

  const contextValue = {
    // theme,
    // setTheme,
  };

  return (
    <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }} locale={zhCN}>
      <App>
        <GlobalContext.Provider value={contextValue}>
          <LayoutPage menuItems={menuItems}>{routers}</LayoutPage>
        </GlobalContext.Provider>
      </App>
    </ConfigProvider>
  );
};

export default PageApp