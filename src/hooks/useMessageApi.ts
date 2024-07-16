import { App } from "antd";

export const useMessageApi = () => {
  const staticFunction = App.useApp();
  const message = staticFunction.message;
  return [message];
};
