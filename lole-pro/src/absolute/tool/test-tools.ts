/**
 * @Description: test tools
 * @Author: xiye
 * @date: 2023/7/7
 */

export const IsPassed = (T: any) => {
  return T !== undefined && T !== null;
};


/**
 * 后缀组合，根据传递的后缀进行组合，规则为 decorate:prefix-suffix
 * 如果后缀未被传递，则不生成class
 *  hover:bg-white
 * @param prefix 前缀，一般固定，如bg，text等
 * @param suffix 后缀，一般为props中可选项，用于判断是否被传递
 * @param decorate 修饰词 如hover等
 */
export const ComposeSuffix = (prefix: string, suffix: any, decorate?:string) => {
  return IsPassed(suffix) && (
    ( IsPassed(decorate) && `${decorate}:${prefix}-${suffix}` ) || `${prefix}-${suffix}`
  );
}


/**
 * attr存在得情况下就使用attr，否则就用defaultAttr
 * @param attr 可选值
 * @param defaultAttr 默认值
 * @constructor
 */
export const JudgeAttr = (attr: any, defaultAttr: any) => {
  return !IsPassed(attr) && defaultAttr || attr;
}

