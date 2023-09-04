const css = {
  $id: "http://json-schema.org/draft-04/schema/css.json",
  $schema: "http://json-schema.org/draft-04/schema#",
  title: "css node schema",
  description: "fragment for adjusting css",
  type: "object",
  properties: {
    $bgColor: {
      type: "string",
      description: "控制背景颜色，输入16进制色彩值，或者rgb，rgba",
      pattern: "#.{6}|rgb\\(\\d{0,3},\\d{0,3},\\d{0,3}\\)|rgba\\(\\d{0,3},\\d{0,3},\\d{0,3},\\d{0,3}\\)",
      minLength: 7,
      maxLength: 21
    },
    $bgImage: {
      type: "string",
      description: "控制背景图片"
    },
    $align: {
      type: "string",
      description: "文字对齐方式，默认为center",
      enum: ["left", "center", "right"]
    },
    $weight: {
      type: 'number',
      enum: [100, 200, 300, 400, 500, 600, 700],
      description: "字体粗细"
    },
    $color: {
      type: "string",
      description: "控制字体颜色，输入16进制色彩值，或者rgb，rgba",
      pattern: "#.{6}|rgb\\(\\d{0,3},\\d{0,3},\\d{0,3}\\)|rgba\\(\\d{0,3},\\d{0,3},\\d{0,3},\\d{0,3}\\)",
      minLength: 7,
      maxLength: 21
    },
    $maxw: {
      type: "number",
      minimum: 0,
      exclusiveMinimum: true,
      description: "最大宽度 max-width，单位为px"
    },
    $minw: {
      type: "number",
      minimum: 0,
      exclusiveMinimum: true,
      description: "最小宽度 min-width，单位为px"
    },
    $size: {
      type: "number",
      minimum: 0,
      exclusiveMinimum: true,
      description: "字号大小，一般只需要输入lg模式下的大小，组件会自动调整md和sm下的大小，单位为px"
    },
    $leading: {
      type: "number",
      minimum: 0,
      exclusiveMinimum: true,
      description: "行高(line-height)，一般只需要输入lg模式下的大小，组件会自动调整md和sm下的大小，单位为px"
    },
    $letter: {
      type: "number",
      description: "字间间距(letter-space)，单位为px"
    },
    $m: {
      anyOf:[
        {
          type: "number",
          minimum: 0,
          exclusiveMinimum: true,
          description: "margin，单位为px"
        },
        {
          type: "array",
          items: [
            {type: "number"},
            {type: "number"},
            {type: "number"},
            {type: "number"}
          ]
        },
        {
          type: "array",
          items: [
            {type: "number"},
            {type: "number"}
          ]
        }
      ]
    },
    $mt: {

    },
    $mb: {

    },
    $ml: {

    },
    $mr: {

    },
    $my: {

    },
    $mx: {

    },
    $p: {

    },
    $pt: {

    },
    $pb: {

    },
    $pr: {

    },
    $pl: {

    },
    $py: {

    },
    $px: {

    }
  }
}

module.exports = css;
