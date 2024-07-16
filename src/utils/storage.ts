/**
 * 与存储相关的工具
 *
 */

export const removeStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const getStorage = (key: string): any => {
  return localStorage.getItem(key);
};

export function setCookie(name: string, value: string, hours = 24) {
  let str = name + "=" + value;
  const time = new Date(
    new Date().getTime() + hours * 3600 * 1000
  ).toUTCString(); // toGMTstring将时间转换成字符串
  str += "; expires=" + time;
  // 写入Cookie
  document.cookie = str;
}
