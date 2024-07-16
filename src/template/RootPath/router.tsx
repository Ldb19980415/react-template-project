import { Link } from "react-router-dom";
import { CSSProperties, ReactNode } from "react";
import { Button } from "antd";
import { handlePageParams } from "@/utils/common";


const pageUrl = '/Config/Metrics'
const pageMenuName = '指标配置'
export interface ConfigMetricsUrlProps {
  text?: ReactNode;
}
export interface RouterConfig<T extends ConfigMetricsUrlProps> {
  urlPrams: T;

  isBlank?: boolean;
  isButton?: boolean;
  style?: CSSProperties;
}
export const linkToAboutFunc = <T extends ConfigMetricsUrlProps, _>(
  params: RouterConfig<T>
) => {
  const {
    urlPrams,

    isBlank,
    isButton = true,
    style = {},
  } = params;

  if (isButton) {
    return (
      <Link
        to={handlePageParams(pageUrl, urlPrams)}
        target={isBlank ? "_blank" : "_self"}
      >
        <Button type="primary" style={style}>
          {urlPrams.text ?? pageMenuName}
        </Button>
      </Link>
    );
  } else {
    return (
      <Link
        to={handlePageParams(pageUrl, urlPrams)}
        target={isBlank ? "_blank" : "_self"}
        style={style}
      >
        {urlPrams.text ?? pageMenuName}
      </Link>
    );
  }
};
