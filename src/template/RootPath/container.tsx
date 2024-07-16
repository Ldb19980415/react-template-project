import React, { createContext, useContext, useState } from "react";
import useUrlState from "@ahooksjs/use-url-state";
import { ConfigMetricsUrlProps } from "./router";
import { ErrorPage } from "@/components";

// 定义一个 Context
interface ContainerContextProps {
  pageLoading: Boolean;
  setPageLoading: (v: Boolean) => void;
  pageError: Boolean;
  setPageError: (v: Boolean) => void;
  urlParams: Partial<ConfigMetricsUrlProps>;
}

export const ContainerContext = createContext<Partial<ContainerContextProps>>(
  {}
);

interface Props {
  children: any;
}
// 定义一个容器组件，提供共享的状态
export const ContainerProvider: React.FC<Props> = (props) => {
  const [urlParams, _] = useUrlState<ConfigMetricsUrlProps>();
  const [pageLoading, setPageLoading] = useState<Boolean>(false);
  const [pageError, setPageError] = useState<Boolean>(false);

  const contextValue = {
    urlParams,
    pageLoading,
    setPageLoading,
    pageError,
    setPageError,
  };

  if (pageError) {
    return <ErrorPage />;
  }
  return (
    <ContainerContext.Provider value={contextValue}>
      {props.children}
    </ContainerContext.Provider>
  );
};

// 定义一个自定义 Hook，用于在组件中访问共享的状态
export const useContainer = () => {
  const context = useContext(ContainerContext);
  if (!context) {
    return {} as ContainerContextProps;
    // throw new Error('useContainer must be used within a ContainerProvider')
  }
  return context;
};
