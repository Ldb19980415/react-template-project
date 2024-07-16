
const { generateApi } = require('swagger-typescript-api');
const path = require('path');
const outputDir = path.resolve(process.cwd(), './');

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
generateApi({
  // input: path.resolve(__dirname, "./swagger.json"),
  url: 'http://172.16.10.102:20418/api/swagger/doc.json',  // 这里填写后端的swagger地址
  output: outputDir,
  modular: true,
  //   templates: path.resolve(__dirname, './templates'),
  //   axios: true,
  generateClient: false,
  //   routeTypes: true,
});


/**
 * 必须在当前文件夹下执行cmd.ts，从而在当前文件夹下生成data-contracts.ts文件
 * 注意事项：后端的结构体名字最好不要相同，相同的结构体名字会导致冲突，从而导致生成的interface的结构体名称变化
 */