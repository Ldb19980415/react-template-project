import { useRequest } from "ahooks";
import { AntdFormUtils } from "ahooks/lib/useAntdTable/types";
import { Options, Result } from "ahooks/lib/useRequest/src/types";

interface UseUpdateRequestParams<TData, TParams extends any[]> {
  options?: Options<TData, TParams>;
  handleFormData?: (formData: any) => Object;
}

export const useUpdateRequest = <TData, TParams extends any[]>(
  func: (params?: any) => Promise<TData>,
  form?: AntdFormUtils,
  config?: UseUpdateRequestParams<TData, TParams>
): Result<TData, TParams> => {
  const getParams = () => {
    if (form) {
      const values = form.getFieldsValue();
      if (config?.handleFormData) {
        return config.handleFormData(values);
      }
      return values;
    }
    return undefined;
  };
  const result = useRequest<TData, TParams>(
    async () => func(getParams()),
    config?.options
  );
  return result;
};
