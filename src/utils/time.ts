import dayjs from "dayjs";

//系统中，默认前后端交互使用的是秒级时间戳
export const timeFormat = "YYYY-MM-DD HH:mm:ss";

// TODO: 正式上线按实际需求设置间隔
export const timeIntervalValue = 10 * 1000; // 定时器的间隔时间

export const renderTableTime = (item?: any) =>
  item ? dayjs(Number(item) * 1000).format(timeFormat) : "-";

export const formatTime = (time?: number | string, format = timeFormat) =>
  time ? dayjs(Number(time) * 1000).format(format) : "";

export const sleep = (ms: number) => {
  return new Promise((resolve: any) => setTimeout(() => resolve(), ms));
};
