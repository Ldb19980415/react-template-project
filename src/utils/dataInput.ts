import { FormItemProps } from "antd";

/**
 * 把所有简单检验都写到这里来，如果是联动检验，请在联动的地方自定义，这种属于特殊需求
 */
const getFormItemRule = (
  message: string,
  required = true
): FormItemProps["rules"] => {
  return [{ required, message }];
};
const passwordRule = getFormItemRule("请输入密码!");
const usernameRule = getFormItemRule("请输入用户名!");
const captchaRule = getFormItemRule("请输入验证码!");
const oldPasswordRule = getFormItemRule("请输入旧密码!");
const newPasswordRule = getFormItemRule("请输入新密码!");
const roleIdRule = getFormItemRule("请输入角色ID!");
const roleNameRule = getFormItemRule("请输入角色名称!");




export const formItemRules = {
  getFormItemRule,
  passwordRule,
  usernameRule,
  captchaRule,
  oldPasswordRule,
  newPasswordRule,
  roleIdRule,
  roleNameRule,

};


export const pleaseInput = (v: string) => ({placeholder :`请输入${v}`});
export const pleaseSelect = (v: string) =>  ({placeholder :`请选择${v}`});