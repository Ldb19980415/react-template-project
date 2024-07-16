import { useAntdTable } from "ahooks";
import {
  Data,
  Params,
  AntdTableOptions,
  AntdTableResult,
  AntdFormUtils,
} from "ahooks/lib/useAntdTable/types";

interface UseUpdateAntdTableParams<TData extends Data, TParams extends Params> {
  options?: AntdTableOptions<TData, TParams>;
  handleFormData?: (formData: any) => Object;
}
export const useUpdateAntdTable = <TData extends Data, TParams extends Params>(
  func: (params: any) => Promise<TData>,
  form?: AntdFormUtils,
  config?: UseUpdateAntdTableParams<TData, TParams>
) => {
  const { options = {}, handleFormData } = config ?? {};
  if (form) {
    options.form = form;
  }
  
  const getData = async (...args: TParams) => {
    const { current, pageSize, sorter, filters } = args[0];
    const formData = args[1];
    const handledFormData = formData
      ? handleFormData?.(formData) ?? formData
      : {};
    const innerParams = {
      page: current,
      pageSize,
      sorter,
      filters,
      ...handledFormData,
    };
    const res = await func(innerParams);
    if (!res.list?.length && res.total) {
      handleDeleteRefresh(args, run);
    }
    return res;
  };

  const tableReqInfo = useAntdTable(getData, options);
  const { run } = tableReqInfo;
  return tableReqInfo;
};

// 就这里会用到，不必导出
const handleDeleteRefresh = (
  params: AntdTableResult<any, any>["params"],
  run: AntdTableResult<any, any>["run"]
) => {
  const tmpParams = structuredClone(params);
  if (tmpParams[0].current > 1) {
    tmpParams[0].current = tmpParams[0].current - 1;
  }
  run(tmpParams[0], tmpParams[1]);
};
