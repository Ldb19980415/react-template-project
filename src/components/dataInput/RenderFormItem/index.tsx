import { Form, FormItemProps, FormProps, Row, Col } from "antd";
import { FC, ReactNode, useMemo } from "react";
export interface FormListType {
  formItemAttribute: FormItemProps;
  component: ReactNode;
}
interface Props {
  formLists: FormListType[];
  formProps?: FormProps; // 如果withForm为false，则这个参数不用传（传了也没用上
  extraBtn?: ReactNode;
  rowNum?: number /** 一行有几个FormItem,最多三个，最少一个 */;
  alignRight?: boolean;
  withForm?: boolean; // 默认为有Form包裹，设置为false则返回的不包含form包裹
}
export const RenderFormItem: FC<Props> = ({
  formLists,
  extraBtn,
  alignRight,
  formProps={},
  rowNum = 1,
  withForm = true,
}) => {
  const formLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const layout = alignRight ? formLayout : {};
  // 忘记处理需要hidden的了，补回来
  const hiddenList: FormListType[] = [];
  const showList: FormListType[] = [];
  formLists.forEach((item) => {
    if (item.formItemAttribute.hidden) {
      hiddenList.push(item);
    } else {
      showList.push(item);
    }
  });

  if (rowNum === 1) {
    return withForm ? (
      <Form {...formProps} {...layout}>
        {hiddenList.map((item, idx) => (
          <Form.Item key={idx} {...item.formItemAttribute} noStyle>
            {item.component}
          </Form.Item>
        ))}
        {showList.map((item, idx) => (
          <Form.Item key={idx} {...item.formItemAttribute}>
            {item.component}
          </Form.Item>
        ))}
        <div style={{ textAlign: "right" }}> {extraBtn ?? null}</div>
      </Form>
    ) : (
      <>
        {hiddenList.map((item, idx) => (
          <Form.Item key={idx} {...item.formItemAttribute} noStyle>
            {item.component}
          </Form.Item>
        ))}
        {showList.map((item, idx) => (
          <Form.Item key={idx} {...item.formItemAttribute}>
            {item.component}
          </Form.Item>
        ))}
        <div style={{ textAlign: "right" }}> {extraBtn ?? null}</div>
      </>
    );
  }

  const offset = useMemo(() => {
    if (rowNum === 2 || rowNum === 3) {
      const lastRowNum = showList.length % rowNum;
      const colSpan = 24 / rowNum;
      if (lastRowNum === 0) {
        return 24 - colSpan;
      }
      return (rowNum - 1 - lastRowNum) * colSpan;
    } else {
      return 0;
    }
  }, [showList.length, rowNum]);
  if (rowNum === 2 || rowNum === 3) {
    const chunkedArray = showList.reduce(
      (result: FormListType[][], item, index) => {
        // 计算当前元素应该属于哪个子数组
        const chunkIndex = Math.floor(index / rowNum);

        // 如果 result 中对应的子数组不存在，则创建一个空的子数组
        if (!result[chunkIndex]) {
          result[chunkIndex] = [];
        }

        // 将当前元素添加到对应的子数组中
        result[chunkIndex].push(item);

        return result;
      },
      []
    );
    return withForm ? (
      <Form {...formProps} {...layout}>
        {hiddenList.map((item, idx) => (
          <Form.Item key={idx} {...item.formItemAttribute} noStyle>
            {item.component}
          </Form.Item>
        ))}
        <Row gutter={24}>
          {chunkedArray.map((item) => {
            return item.map((childItem, childIdx) => (
              <Col span={24 / rowNum} key={childIdx}>
                <Form.Item {...childItem.formItemAttribute}>
                  {childItem.component}
                </Form.Item>
              </Col>
            ));
          })}
          {
            <Col
              style={{ textAlign: "right" }}
              offset={offset}
              span={24 / rowNum}
            >
              {extraBtn ?? null}
            </Col>
          }
        </Row>
      </Form>
    ) : (
      <>
        {hiddenList.map((item, idx) => (
          <Form.Item key={idx} {...item.formItemAttribute} noStyle>
            {item.component}
          </Form.Item>
        ))}
        <Row gutter={24}>
          {chunkedArray.map((item) => {
            return item.map((childItem, childIdx) => (
              <Col span={24 / rowNum} key={childIdx}>
                <Form.Item {...childItem.formItemAttribute}>
                  {childItem.component}
                </Form.Item>
              </Col>
            ));
          })}
          {
            <Col
              style={{ textAlign: "right" }}
              offset={offset}
              span={24 / rowNum}
            >
              {extraBtn ?? null}
            </Col>
          }
        </Row>
      </>
    );
  }
  return withForm ? (
    <Form {...formProps} {...layout}>
      {hiddenList.map((item, idx) => (
        <Form.Item key={idx} {...item.formItemAttribute} noStyle>
          {item.component}
        </Form.Item>
      ))}
      {showList.map((item, idx) => (
        <Form.Item key={idx} {...item.formItemAttribute}>
          {item.component}
        </Form.Item>
      ))}
      <div style={{ textAlign: "right" }}> {extraBtn ?? null}</div>
    </Form>
  ) : (
    <>
      {hiddenList.map((item, idx) => (
        <Form.Item key={idx} {...item.formItemAttribute} noStyle>
          {item.component}
        </Form.Item>
      ))}
      {showList.map((item, idx) => (
        <Form.Item key={idx} {...item.formItemAttribute}>
          {item.component}
        </Form.Item>
      ))}
      <div style={{ textAlign: "right" }}> {extraBtn ?? null}</div>
    </>
  );
};
