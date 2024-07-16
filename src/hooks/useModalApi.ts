import { App } from "antd";

export const useMessageApi = () => {
  const staticFunction = App.useApp();
  const modal = staticFunction.modal;
  return [modal];
};
