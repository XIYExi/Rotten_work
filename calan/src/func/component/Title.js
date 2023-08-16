const {TitleSizeTransform, LeadingTransform} = require('../tools');
const Node = require('./Node');



/**
 * TitleNode类
 * @type {Wrapper}
 */
class Title extends Node{
    constructor() {
        super();

        this.titleDefaultSize = 48;
        this.titleDefaultLeading = 56;
        this.margin = [40, 30, 12];
        this.maxWidth = [740, 450, 345];
    }



    generateTitleNode(data){
        // 创建title最外层div
        const titleDom = document.createElement('div');

        // 生成默认的样式
        {
            titleDom.style.margin = '0 auto';
            titleDom.style.fontStyle = 'normal';
            titleDom.style.textAlign = 'center';
            titleDom.style.color = '#12022F';
        }

        // 添加响应式媒体查询
        this.generateResponsive(data, titleDom);

        // 批量添加css
        titleDom.innerText = data.text;
        for(let cssKey in data.css){
            titleDom.style[cssKey] = data.css[cssKey]
        }

        // 添加class
        titleDom.className = data.class;

        // 保存title节点
        this.titleDom = titleDom;

        return this;
    }

    /**
     * 添加媒体查询监听函数，让每个节点相应默认自定义的断点
     * @param node json数据中对应的数据
     * @param target dom节点，须要添加媒体查询的节点
     */
    generateResponsive(node, target){

        // 原先写在window.addEventListener load里面，但是在react页面中load不会被触发
        // 事实上load只需要判断首屏打开的时候page宽度就行，所以不需要使用监听器
        (async () => {
            const that = this;
            let index = 0;
            let flag = 'lg';
            // 匿名函数，这样index和flag的值肯定是更新过的
            await function(){

                if (that.md.matches){
                    index = 1;
                    flag = 'md';
                }
                else if (that.sm.matches){
                    index = 2;
                    flag = 'sm';
                }
            }()

            console.log('update', index, flag)
            target.style.marginBottom = `${ this.arrIsExist(node, 'margin', index) ? node.default.margin[index] : this.margin[index]}px`;
            target.style.fontSize = TitleSizeTransform(this.titleDefaultSize, flag);
            target.style.lineHeight = LeadingTransform(this.titleDefaultLeading, flag);
            target.style.maxWidth = `${ this.arrIsExist(node, 'maxWidth', index) ? node.default.maxWidth[index] : this.maxWidth[index]}px`;

            // 批量添加响应式样式
            for (let key in node[flag]){
                target.style[key] = node[flag][key];
            }
        })()

        const arr = ['lg', 'md', 'sm'];
        arr.map((item, index) => {
            this[item].addEventListener('change', () => {
                if(this[item].matches){
                    target.style.marginBottom = `${ this.arrIsExist(node, 'margin', index) ? node.default.margin[index] : this.margin[index]}px`;
                    target.style.fontSize = TitleSizeTransform(this.titleDefaultSize, item);
                    target.style.lineHeight = LeadingTransform(this.titleDefaultLeading, item);
                    target.style.maxWidth = `${ this.arrIsExist(node, 'maxWidth', index) ? node.default.maxWidth[index] : this.maxWidth[index]}px`;

                    // 批量添加响应式样式
                    for (let Key in node[item]){
                        target.style[Key] = node[item][Key];
                    }
                }
            })
        })
    }

    generate(){
        /*let elementById = document.getElementById('test');
        let node = document.createElement('div');
        node.innerText = 'Text Node';
        this.wrapper.appendChild(node);
        elementById.appendChild(this.wrapper)*/
        return this.titleDom;
    }
}


module.exports = Title;
