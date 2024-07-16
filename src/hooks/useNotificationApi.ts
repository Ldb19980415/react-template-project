import { App } from "antd";

export const useMessageApi = () => {
  const staticFunction = App.useApp();
  const notification = staticFunction.notification;
  return [notification];
};
