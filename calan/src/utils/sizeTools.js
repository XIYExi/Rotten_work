/**
 * 用于大标题，分别输出lg，md，sm三种规格
 * lg大小为1 md为 3/4 sm为 1/2
 * @param number
 * @param responsive
 * @returns {string}
 * @constructor
 */
export const TitleSizeTransform = (number, responsive = 'lg') => {
  switch (responsive){
    case 'lg':
      return number + 'px';
    case 'md':
      return number / 4 * 3 + 'px';
    case 'sm':
      return number / 2 + 'px';
    default:
      return number + 'px';
  }
}

/**
 * 用于输出‘描述’内容，分别输出lg，md，sm三种规格
 * 每种规格大小分别 -2px
 * @param number
 * @param responsive
 * @returns {string}
 * @constructor
 */
export const DescSizeTransform = (number, responsive='lg') => {
  switch(responsive){
    case 'lg':
      return number + 'px';
    case 'md':
      return number - 2 + 'px';
    case 'sm':
      return number -4 + 'px';
    default:
      return number + 'px';
  }
}


export const LeadingTransform = DescSizeTransform;
