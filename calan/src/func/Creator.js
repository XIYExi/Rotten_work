const Title = require('./component/Title');
const Wrapper = require('./component/Wrapper');

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

class Creator{
    constructor() {
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
                        letterSpacing: '-1.2px',
                    },
                    sm: {
                    },
                    default: {
                        maxWidth: [740, 450, 345]
                    }
                },
                text: {
                    class:'',
                    text: 'We\'ve done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.',
                    css:{

                    },
                    default: {

                    },
                },
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

        // 遍历dom字段, 规定json的第一个节点肯定是wrapper
        const wrapperList = dom.wrapper;

        // 生成最外层wrapper
        this.wrapper = new Wrapper().generateWrapperNode().generate();
        // console.log(this.wrapper)

        // 判断当前wrapper是否有嵌套结构
        if(Array.isArray(wrapperList)){
            console.log('arr')
        }
        else{
            // 无嵌套结构则直接添加节点
            for(const key in wrapperList){

                switch (key){
                    case 'title':
                        const titleDom = new Title().generateTitleNode(wrapperList.title).generate();
                        this.wrapper.appendChild(titleDom);
                        console.log(this.wrapper);
                        //this.generateTitleNode(wrapperList.title);
                        break;
                    default:
                        break;
                }

            }
        }

        return this;
    }


    generate(id){
        let elementById = document.getElementById(id);
        elementById.appendChild(this.wrapper);
    }
}


// new Creator().generateWithDom().generate('test');


module.exports = Creator;

