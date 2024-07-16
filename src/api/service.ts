import { getStorage, removeStorage } from "@/utils/storage";
import { message } from "antd";
import axios, { AxiosResponse } from "axios";

// const service = axios.create({
//   timeout: 6000,
// });

declare module "axios" {
  interface AxiosResponse<T = any> {
    // responseData:any
    // 这里追加你的参数
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}

axios.defaults.timeout = 30000;

axios.interceptors.request.use(
  (config) => {
    if (config.url !== "/user/login") {
      config.headers["X-Token"] = getStorage("X-Token");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use((res) => {
  let curData = JSON.parse(JSON.stringify(res?.data));
  if (curData.code !== 0 && curData.code < 10000) {
    message.error(curData.msg);
  } else if (res.data.code > 10000) {
    const obj = JSON.parse(JSON.stringify(res.data.errorData));
    for (let key in obj) {
      message.error(obj[key]);
    }
  }
  return res;
});

type Methods = "get" | "post" | "put" | "delete";

export interface ResponseDataType<D, H> {
  code: number;
  data: D;
  convertData?: H;
  msg: string;
}

interface OtherType {
  responseType?: ResponseType;
}

const launch = async <T, D, H = any>(
  url: string,
  method: Methods,
  data: T,
  cb?: (data: D) => H,
  otherConfig?: OtherType
) => {
  return axios({
    url: url,
    method: method,
    data: method === "put" || method === "post" ? data : null,
    params: method === "get" || method === "delete" ? data : null,
    ...(otherConfig as any),
  })
    .then((res) => {
      if (res.data.code === 0) {
        if (cb) {
          res.data.convertData = cb(res.data.data);
        }
      }
      // 最好不要在这如此处理
      // if ((otherConfig?.responseType as responseTypeValue) === "arraybuffer") {
      //   downloadStream(res);
      // }
      return res as AxiosResponse<ResponseDataType<D, H>>;
    })
    .catch((error) => {
      if (error.response) {
        // 请求已发出，但服务器返回非 2xx 的状态码
        message.error(error.message);
        // console.error('请求失败，状态码：', error.response.status);
        // console.error('错误信息：', error.response.data);
      } else if (error.request) {
        // 请求发出了，但是没有收到响应
        message.error(`请求发出了，但没有收到响应：${error.request}`);
      } else {
        // 其他错误
        message.error(`错误：${error.message}`);
      }
      if (error?.response?.status === 401) {
        window.location.href = "/login";
        removeStorage("X-Token");
        removeStorage("userInfo");
        removeStorage("isLogin");
      }
      // 这里只是为了逃过ts检查
      var a;
      return a as unknown as AxiosResponse<ResponseDataType<D, H>>;
    });
};

export default launch;

export interface PageResult<T> {
  list: T;
  page: number;
  pageSize: number;
  total: number;
}
