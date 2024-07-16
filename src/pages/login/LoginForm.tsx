import { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
// import { useRequest } from "ahooks";
import { formItemRules, pleaseInput } from "@/utils/dataInput";
import { useMessageApi } from "@/hooks/useMessageApi";

interface FormValueType {
  captcha: string;
  password: string;
  username: string;
}

const LoginForm = () => {
  const [form] = Form.useForm<FormValueType>();
  const [message] = useMessageApi();
  // const [codeTimes, setCodeTimes] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClickRest = () => {
    form.resetFields();

    // todo 重新获取验证码
  };
  const handleClickLogin = () => {
    form.validateFields().then((v) => {
      setLoading(true);
      if (v.username === "admin" && v.password === "123456") {
        // 登录成功

        localStorage.setItem("token", "this is token");
        window.location.href = "/";
      } else {
        message.error("登录失败，请检查后再提交");
        // 重新获取验证码
      }
      setLoading(false);
    });
  };

  // const handleChangeCaptcha = () => {
  //   setCodeTimes(codeTimes + 1);
  // };

  // const { data: captchaObj } = useRequest(
  //   async () => {
  //     return await getCaptcha();
  //   },
  //   {
  //     refreshDeps: [codeTimes],
  //   }
  // );

  return (
    <div>
      <Form form={form}>
        <div>{/* <img src={logo} /> */}</div>
        <Form.Item name="username" rules={formItemRules.usernameRule}>
          <Input prefix={<UserOutlined />} {...pleaseInput("用户名")} />
        </Form.Item>
        <Form.Item name="password" rules={formItemRules.passwordRule}>
          <Input.Password prefix={<LockOutlined />} {...pleaseInput("密码")} />
        </Form.Item>

        {/* <Form.Item>
          <Row gutter={20}>
            <Col span={12}>
              <FormItemInput name="captcha" required={true} message="请输入验证码!" placeholder="验证码" minLength={6} maxLength={6} />
            </Col>
            <Col span={12}>
              {captchaObj && captchaObj?.picPath ? (<img className="captcha-img" src={captchaObj?.picPath} onClick={handleChangeCaptcha} />) : null}
            </Col>
          </Row>
        </Form.Item> */}
        <Form.Item style={{ textAlign: "right" }}>
          <Space>
            <Button loading={loading} onClick={handleClickRest}>重置</Button>
            <Button type="primary" loading={loading} onClick={handleClickLogin}>
              登录
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;

export function setCookie(name: string, value: string, hours = 24) {
  let str = name + "=" + value;
  const time = new Date(
    new Date().getTime() + hours * 3600 * 1000
  ).toUTCString(); // toGMTstring将时间转换成字符串
  str += "; expires=" + time;
  // 写入Cookie
  document.cookie = str;
}
