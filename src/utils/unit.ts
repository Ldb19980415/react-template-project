const gap = 1 << 10;
type UnitType = "B" | "KB" | "MB" | "GB" | "TB";
enum UnitEnum {
  B = 1,
  KB,
  MB,
  GB,
  TB,
}
const getUnitEnumNum = (value?: string): number => {
  switch (value) {
    case "B":
      return UnitEnum.B;
    case "KB":
      return UnitEnum.KB;
    case "MB":
      return UnitEnum.MB;
    case "GB":
      return UnitEnum.GB;
    case "TB":
      return UnitEnum.TB;
    default:
      return 0;
  }
};

interface FormatResType {
  resNum: number;
  unit?: string;
}
/**
 *
 * @param value 数值
 * @param unit 当前数值对应的单位
 * @returns
 *
 * 这里巧妙的使用了Enum的反向映射
 */
export const formatUnit = (
  value?: number | string,
  unit?: UnitType
): FormatResType => {
  if (!value) {
    return {
      resNum: 0,
      unit,
    };
  }
  let unitNum = getUnitEnumNum(unit);
  if (!unitNum) {
    return {
      resNum: Number(value),
      unit,
    };
  }
  let resNum = Number(value);
  while (resNum >= gap && unitNum < 5) {
    unitNum += 1;
    resNum /= gap;
  }
  while (resNum < 1 && unitNum > 1) {
    unitNum -= 1;
    resNum *= gap;
  }
  return {
    resNum,
    unit: UnitEnum[unitNum],
  };
};
