import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
  presetWebFonts,
} from "unocss";
import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerVariantGroup from '@unocss/transformer-variant-group'



export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      /**options */
    }),
    presetAttributify({
      /**options */
    }),
    presetWebFonts({
      /**options */
    }),
    presetRemToPx()
  ],
  rules: [
    // 自定义的className，遵循css属性语法，例如font-weight 而不是 fontWeight
    // 静态规则
    ["m-1", { margin: "0.25rem" }],
    ["font-bold", { "font-weight": 700 }],
    // 动态规则：使用到正则去匹配
    //     [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
    //   [/^p-(\d+)$/, (match) => ({ padding: `${match[1] / 4}rem` })],
  ],
  shortcuts: {
    // 快捷方式：可让你将多个规则组合成一个简写
    btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
    "btn-green": "text-white bg-green-500 hover:bg-green-700",
  },
  //   theme: {},  // 主题：可以简单理解成创建一些unocss的全局变量，在rules和shortcuts中能使用到它生成样式
  transformers: [ // 转换器
    transformerVariantGroup(),
  ],
});
