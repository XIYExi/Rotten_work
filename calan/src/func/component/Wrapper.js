const Node = require('./Node');

/**
 * Wrapper类
 */
class Wrapper extends Node{
    constructor() {
        super();
        this.padding = [80, 64, 48];
        this.paddingInner = [24, 16, 12];
    }


    generateResponsive(node, inner) {
        const arr = ['lg', 'md', 'sm'];

        // 判断是否为最外层wrapper， 规定只有最外层wrapper才会设置大尺寸的padding
        const padding = inner ? this.paddingInner : this.padding;

        // 初次加载
        (async() => {
            let index = 0;
            if(this.md.matches){
                index = 1;
            }
            else if(this.sm.matches){
                index = 2;
            }

            node.style.paddingBottom = `${padding[index]}px`;
            if(!inner){
                node.style.paddingTop = `${padding[index]}px`;
            }
        })()


        // 批量添加媒体查询
        arr.map((item, index) => {
            this[item].addEventListener('change', () => {
                if(this[item].matches){
                    if(!inner){
                        node.style.paddingTop = `${this.padding[index]}px`;
                    }
                    node.style.paddingBottom = `${this.padding[index]}px`;
                }
            })
        })
    }

    generateWrapperNode(inner = false){
        const wrapperNode = document.createElement('div');
        wrapperNode.className = 'mx-auto w-full relative';
        wrapperNode.style.margin = '0 auto';

        // 为wrapper添加顶部和底部margin,规定只有wrapperNode才会在生成的时候默认提供margin，
        // 元件的上下边距默认由最外层wrapper填充
        this.generateResponsive(wrapperNode, inner);

        this.wrapper = wrapperNode;

        return this;
    }

    generate(){
        return this.wrapper;
    }

}


module.exports = Wrapper;
