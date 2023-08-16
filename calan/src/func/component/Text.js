const Node = require("./Node");


class Text extends Node{
    constructor() {
        super();

        this.margin = [20, 16, 10];
        this.textDefaultSize = 20;
        this.textDefaultLeading = 28;
    }


    generateResponsive(data, targetDom){

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


        // 添加文本
        textNode.innerText = data.text;
        // 添加类命
        textNode.className = data.class;
        // 批量添加css
        for(const key in data.css){
            textNode.style[key] = data.css[key];
        }


        return this;
    }

    generate(){
        return this.textNode;
    }



}


module.exports = Text;
