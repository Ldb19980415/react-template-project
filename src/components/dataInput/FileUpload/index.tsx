import { FC, ReactNode, memo, useMemo, useState } from "react";
import { UploadFileStatus } from "antd/es/upload/interface";
import { Button, Upload } from "antd";
import type { UploadFile, UploadProps } from "antd";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { getStorage } from "@/utils/storage";

/**
 *
 * fileName和fileUuid必填
 */
export interface SimpleFileInfo {
  fileName: string;
  fileUuid: string;
  uid?: string;
  percent?: number;
  status?: UploadFileStatus;
}

interface Props {
  value?: SimpleFileInfo[];
  onChange?: (v: SimpleFileInfo[]) => void;
  disabled?: boolean;
  children?: ReactNode;
  maxCount?: number;
  accept?: string;
}

const uploadFileToSimpleFileInfo = (value?: UploadFile[]): SimpleFileInfo[] => {
  const res: SimpleFileInfo[] =
    value?.map((item) => ({
      fileName: item.name,
      fileUuid: item?.response?.data,
      status: item.status,
      percent: item.percent,
      uid: item.uid,
    })) ?? [];
  return res;
};
const simpleFileInfoToUploadFile = (value?: SimpleFileInfo[]): UploadFile[] => {
  const res: UploadFile[] =
    value?.map((item) => {
      const { fileName, fileUuid, status, percent, uid } = item;
      return {
        name: fileName,
        uid: uid ?? fileUuid,
        status: status ?? "done",
        percent: percent ?? 100,
        response: {
          data: fileUuid,
        },
      };
    }) ?? [];
  return res;
};
export const FileUpload: FC<Props> = memo((props) => {
  const [innerValue, setInnerValue] = useState<SimpleFileInfo[]>();
  const { onChange, disabled, children, maxCount = 1, accept } = props;
  const value = useMemo((): UploadFile[] => {
    return "value" in props
      ? simpleFileInfoToUploadFile(props.value)
      : simpleFileInfoToUploadFile(innerValue);
  }, [props.value, innerValue]);
  const propsUp: UploadProps = {
    fileList: value,
    maxCount,
    name: "file",
    multiple: false,
    action: "/api/base/upload",
    disabled,
    accept,
    //   listType: "picture-card",
    headers: {
      "X-Token": getStorage("X-Token"),
    },
    showUploadList: {
      showDownloadIcon: disabled ? false : true,
      downloadIcon: (file) => (
        <DownloadOutlined
          onClick={() => {
            window.location.href = `/api/base/download?name=${
              file.response.data
            }&token=${getStorage("X-Token")}`;
          }}
        />
      ),
      showRemoveIcon: disabled ? false : true,
    },
    onChange({ fileList }) {
      const returnValue = uploadFileToSimpleFileInfo(fileList);
      onChange?.(returnValue);
      setInnerValue(returnValue);
    },
  };
  return (
    <div>
      <Upload {...propsUp}>
        {disabled ? null : (
          <Button icon={<UploadOutlined />}>{children ?? "文件上传"}</Button>
        )}
      </Upload>
    </div>
  );
});
