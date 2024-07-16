import launch from "@/api/service";
import {
  RequestCert,
  RequestCertDetail,
  RequestPaginationInfo,
  ResponseCert,
  ResponseCertList,
} from "../data-contracts";
const baseUrl = "/api/cert/";

// add alertPolicy
const delCert = async (params: RequestCertDetail) => {
  const res = await launch<RequestCertDetail, string>(
    baseUrl + "del",
    "delete",
    params
  );
  return res?.data;
};

const certDetail = async (params: RequestCertDetail) => {
  const res = await launch<RequestCertDetail, ResponseCert>(
    baseUrl + "detail",
    "get",
    params
  );
  return res?.data;
};

const certList = async (params: RequestPaginationInfo) => {
  const res = await launch<RequestPaginationInfo, ResponseCertList>(
    baseUrl + "list",
    "get",
    params
  );
  const { total = 0, list = [] } = res.data.data || {};
  return {
    total,
    list,
  };
};

const saveCert = async (params: RequestCert) => {
  const res = await launch<RequestCert, string>(
    baseUrl + "save",
    "post",
    params
  );
  return res?.data;
};

 export const certApi = {
  delCert,
  certDetail,
  certList,
  saveCert,
};