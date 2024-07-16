import { ContainerProvider } from "./container";

const MetricsPage = () => {
  return <div>系统首页</div>;
};
const Page = () => (
  <ContainerProvider>
    <MetricsPage />
  </ContainerProvider>
);

export default Page;
