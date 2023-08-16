const Node = require("./Node");
const {LeadingTransform, DescSizeTransform, TitleSizeTransform} = require("../tools");


class Text extends Node{
    constructor() {
        super();

        this.margin = [20, 16, 10];
        this.textDefaultSize = 18;
        this.textDefaultLeading = 28;
        this.maxWidth = [740, 540, 350]
    }


    generateResponsive(data, targetDom){
        const arr = ['lg', 'md', 'sm'];
        const that = this;

        // 初次加载
        (async() => {
            let index = 0;
            let flag = 'lg';
            await function(){
                if(that.md.matches){
                    index = 1;
                    flag = 'md';
                }
                else if(that.sm.matches){
                    index = 2;
                    flag = 'sm';
                }
            }()

            // 添加marginBottom
            targetDom.style.marginBottom = `${ this.arrIsExist(data, 'margin', index) ? data.default.margin[index] : this.margin[index]}px`;
            targetDom.style.fontSize = DescSizeTransform(this.textDefaultSize, flag);
            targetDom.style.lineHeight = LeadingTransform(this.textDefaultLeading, flag);
            targetDom.style.maxWidth = `${ this.arrIsExist(data, 'maxWidth', index) ? data.default.maxWidth[index] : this.maxWidth[index]}px`;
        })()


        // 批量添加媒体查询
        arr.map((item, index) => {
            this[item].addEventListener('change', () => {
                if(this[item].matches){
                    targetDom.style.marginBottom = `${ this.arrIsExist(data, 'margin', index) ? data.default.margin[index] : this.margin[index]}px`;
                    targetDom.style.fontSize = DescSizeTransform(this.textDefaultSize, item);
                    targetDom.style.lineHeight = LeadingTransform(this.textDefaultLeading, item);
                    targetDom.style.maxWidth = `${ this.arrIsExist(data, 'maxWidth', index) ? data.default.maxWidth[index] : this.maxWidth[index]}px`;
                }
            })
        })
    }


    generateTextNode(data){


        // 创建节点
        const textNode = document.createElement('div');

        // 添加默认样式
        {
            textNode.style.textAlign = 'center';
            textNode.style.margin = '0 auto';
            textNode.style.color = '#594D6D';
            textNode.style.fontStyle = 'normal';
        }

        // 处理响应式
        this.generateResponsive(data, textNode)


        // 添加文本
        textNode.innerText = data.text;
        // 添加类命
        textNode.className = data.class;
        // 批量添加css
        for(const key in data.css){
            textNode.style[key] = data.css[key];
        }

        this.textNode = textNode;

        return this;
    }

    generate(){
        return this.textNode;
    }
}


module.exports = Text;
