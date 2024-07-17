import { useRequest } from "ahooks";
import { AntdFormUtils } from "ahooks/lib/useAntdTable/types";
import { Options, Result } from "ahooks/lib/useRequest/src/types";

interface UseUpdateRequestParams<TData, TParams extends any[]> {
  options?: Options<TData, TParams>;
  handleFormData?: (formData: any) => Object;
  form?: AntdFormUtils;
}

export const useUpdateRequest = <TData, TParams extends any[]>(
  func: (params?: any) => Promise<TData>,
  config?: UseUpdateRequestParams<TData, TParams>
): Result<TData, TParams> => {
  const { form, handleFormData, options } = config ?? {};
  const getParams = () => {
    if (form) {
      const values = form.getFieldsValue();
      if (handleFormData) {
        return handleFormData(values);
      }
      return values;
    }
    return undefined;
  };
  const result = useRequest<TData, TParams>(
    async () => func(getParams()),
    options
  );
  return result;
};
