// render序号，可直接用于columns的render
export const renderIndex = (_: any, __: any, index: number) => index + 1;

// 注意索引从0开始的
export const renderIndexWidthPage = (index: number, page: number, pageSize = 10) => (page -1) * pageSize +  index + 1;

export const handlePageParams = (
    pageUrl: string,
    params: { [key: string]: any },
    exceptKeys: string[] = ['text']
  ): string => {
    let res = ''
    Object.entries(params).forEach((item) => {
      if (!exceptKeys.includes(item[0]) && typeof item[1] !== 'undefined') {
        res += `${item[0]}=${item[1]}`
      }
    })
    if (res) {
      res =  '?' + res
    }
    res = pageUrl + res
    return res
  }
  