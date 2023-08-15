/**
 * 用于大标题，分别输出lg，md，sm三种规格
 * lg大小为1 md为 3/4 sm为 1/2
 * @param number
 * @param responsive
 * @returns {string}
 * @constructor
 */
const TitleSizeTransform = (number, responsive = 'lg') => {
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
const DescSizeTransform = (number, responsive='lg') => {
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


const LeadingTransform = DescSizeTransform;


class Creator{
    /*constructor(path, type, sm, lg, theme) {
        this.path = path;
        this.type = type;
        this.sm = sm;
        this.lg = lg;
        this.theme = theme;
    }*/

}




class CreatorBuilder {
    /**
     * 模板所在的文件夹
     * @param path
     * @param type
     * @returns {CreatorBuilder}
     */
    withStaticAssets(path, type){
        this.path = path;
        this.type = type;
        return this;
    }


    /**
     * 三级响应式 lg - PC md - Tablet sm - Mobile
     * 只需要输入两个值， md介于 sm ~ lg 之间
     * @param sm mobile设备宽度
     * @param lg PC设备宽度
     * @returns {CreatorBuilder}
     */
    withResponsive(sm = '675', lg = '1440'){
        this.sm = sm;
        this.lg = lg;
        return this;
    }

    withTheme(theme = true){
        this.theme = theme;
        return this;
    }

    build(){
        return new Creator({
            path: this.path,
            type: this.type,
            sm: this.sm,
            lg: this.lg,
            theme: this.theme
        })
    }



}



class Node{

    constructor() {
        this.lg = window.matchMedia('screen and (min-width: 1440px)');
        this.md = window.matchMedia('screen and (min-width:675px) and (max-width:1440px)');
        this.sm = window.matchMedia('screen and (max-width: 675px');
    }

}

/**
 * Wrapper类
 */
class Wrapper extends Node{
    constructor() {
        super();
        this.padding = [80, 64, 48];
    }


    generateResponsive(node) {
        const arr = ['lg', 'md', 'sm']
        // 初次加载
        window.addEventListener('load', () => {
            let index = 0;
            if(this.md.matches){
                index = 1;
            }
            else if(this.sm.matches){
                index = 2;
            }

            node.style.paddingBottom = `${this.padding[index]}px`;
            node.style.paddingTop = `${this.padding[index]}px`;
        })


        // 批量添加媒体查询
        arr.map((item, index) => {
            this[item].addEventListener('change', () => {
                if(this[item].matches){
                    node.style.paddingTop = `${this.padding[index]}px`;
                    node.style.paddingBottom = `${this.padding[index]}px`;
                }
            })
        })
    }

    generateWrapperNode(){
        const wrapperNode = document.createElement('div');
        wrapperNode.className = 'mx-auto w-full relative';
        wrapperNode.style.margin = '0 auto';

        // 为wrapper添加顶部和底部margin,规定只有wrapperNode才会在生成的时候默认提供margin，
        // 元件的上下边距默认由最外层wrapper填充
        this.generateResponsive(wrapperNode);

        return this;
    }

    generate(){
        let elementById = document.getElementById('test');
        elementById.appendChild(this.wrapper)
    }

}


/**
 * TitleNode类
 * @type {Wrapper}
 */
class Title extends Node{
    constructor() {
        super();

        this.titleDefaultSize = 48;
        this.titleDefaultLeading = 56;
        this.marginTop = [80, 64, 48];
        this.maxWidth = [740, 450, 345]
    }

    generateWithDom() {
        const dom  = {
            wrapper: {
                image: {},
                title: {
                    class: '',
                    text: 'Speed Up Your Design Process with CaLan',
                    css: {
                        fontWeight: 700,
                        fontStyle: 'normal',
                        color: '#12022F',
                        textAlign: 'center',
                        letterSpacing: '-1.2px',
                    },
                    sm: {
                    },
                    default: {

                        maxWidth: [740, 450, 345]
                    }
                },
                desc: {},
                wrapper: [
                    {
                        secondTitle: {},
                        desc: {}
                    },
                    {
                        secondTitle: {},
                        desc: {}
                    },
                ]
            }
        }

        const lg = window.matchMedia('screen and (min-width: 1440px)');
        const md = window.matchMedia('screen and (min-width:675px) and (max-width:1440px)');
        const sm = window.matchMedia('screen and (max-width: 675px');

        this.lg = lg;
        this.md = md;
        this.sm = sm;


        // 遍历dom字段, 规定json的第一个节点肯定是wrapper
        const wrapperList = dom.wrapper;

        const wrapper = document.createElement('div');
        wrapper.className = 'mx-auto w-full relative';

        this.generateResponsive({
            margin: [80, 64, 48]
        }, wrapper)

        this.setWrapper(wrapper);

        // 判断当前wrapper是否有嵌套结构
        if(Array.isArray(wrapperList)){
            console.log('arr')
        }
        else{
            // 无嵌套结构则直接添加节点
            for(const key in wrapperList){

                switch (key){
                    case 'title':
                        this.generateTitleNode(wrapperList.title);
                        break;
                    default:
                        break;
                }

            }
        }

    }

    arrIsExist(arr, obj, index = 0){
        if(arr === undefined || arr[obj] === undefined || arr[obj][0] === undefined)
            return false;
        return true;
    }

    generateTitleNode(node){
        const wrapper = this.wrapper;
        const titleDom = document.createElement('div');
        // 生成默认的样式
        {
            titleDom.style.margin = '0 auto';
            titleDom.style.fontStyle = 'normal';
            titleDom.style.textAlign = 'center';
            titleDom.style.color = '#12022F';
        }

        // 添加响应式媒体查询
        this.generateResponsive(node, titleDom);


        // 批量添加css
        titleDom.innerText = node.text;
        for(let cssKey in node.css){
            titleDom.style[cssKey] = node.css[cssKey]
        }

        // 添加class
        titleDom.className = node.class;

        // wrapper.appendChild(titleDom);
    }

    /**
     * 添加媒体查询监听函数，让每个节点相应默认自定义的断点
     * @param node json数据中对应的数据
     * @param target dom节点，须要添加媒体查询的节点
     */
    generateResponsive(node, target){
        window.addEventListener('load', () => {
            let index = 0;
            let flag = 'lg';
            if (this.md.matches){
                index = 1;
                flag = 'md';
            }
            else if (this.sm.matches){
                index = 2;
                flag = 'sm';
            }

            target.style.marginTop = `${ this.arrIsExist(node, 'margin', index) ? node.default.margin[index] : 80}px`;
            target.style.marginBottom = `${ this.arrIsExist(node, 'margin', index) ? node.default.margin[index] : 80}px`;
            target.style.fontSize = TitleSizeTransform(48, flag);
            target.style.lineHeight = LeadingTransform(56, flag);
            target.style.maxWidth = `${ this.arrIsExist(node, 'maxWidth', index) ? node.default.maxWidth[index] : 740}px`;

            // 批量添加响应式样式
            for (let key in node[flag]){
                target.style[key] = node[flag][key];
            }
        })

        const arr = ['lg', 'md', 'sm'];
        arr.map((item, index) => {
            this[item].addEventListener('change', () => {
                if(this[item].matches){

                    console.log(item)

                    target.style.marginTop = `${ this.arrIsExist(node, 'margin', index) ? node.default.margin[index] : this.marginTop[index]}px`;
                    target.style.marginBottom = `${ this.arrIsExist(node, 'margin', index) ? node.default.margin[index] : this.marginTop[index]}px`;
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
        let elementById = document.getElementById('test');

        let node = document.createElement('div');
        node.innerText = 'Text Node';
        this.wrapper.appendChild(node);

        elementById.appendChild(this.wrapper)
    }

}


const wrapper = new Wrapper();
wrapper.generateWrapperNode().generate();

