/**
 * @Description: handle color to style
 * @Author: xiye
 * @date: 2023/7/6
 */

export const Arr2Rgba = (arr:number[]) => {
  return `rgba(${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[4]})`;
}

export const Hex2Rgb = (hex: string) => {
  return 'rgb(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5))
    + ',' + parseInt('0x' + hex.slice(5, 7)) + ')';
}

export const Hex2Rgba = (hex:string, opacity:number) => {
  return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ','
    + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')';
}

