/**
 * @Description: handle Responsive
 * @Author: xiye
 * @date: 2023/7/6
 */

export type ResponsiveType = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface ResponsiveProps {
  // 640 ~ 768px
  sm: string[];
  // 768 ~ 1024PX
  md:string[];
  // 1024 ~ 1280PX
  lg:string[];
  // 1028px ~ 1536px
  xl:string[];
  // 1536px ~ ?
  "2xl": string[];
}

export const ResponsiveAttr = (attr: Partial<ResponsiveProps>) => {
  let res:string = '';
  for (const key in attr){
    let temp:string = '';
    (attr as any)[key].map((item:string) => {
      temp += `${key}:${item} `;
    })
    res += `${temp} `;
  }
  return res;
}

/**
 *
 * @param when 触发时机
 * @param show 在 ${when} 屏幕下是显示还是隐藏
 * @constructor
 */
export const ResponsiveShow = (when: ResponsiveType | Exclude<string, ResponsiveType>, show: boolean) => {
  switch (when){
    case 'sm':
      break;
    case 'md':
      break;
    case 'lg':
      break;
    case 'xl':
      break;
    case'2xl':
      break;
    default:
      return `${show ? 'hidden' : 'block'} ${when}`;
  }
  return `${show ? 'hidden' : 'block'} ${when}:${show ? 'block' : 'hidden'}`;
}






