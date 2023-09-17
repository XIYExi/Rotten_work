# 介绍

```js
const json = 
{
    id: uuid(), // 每个组件的id，由uuid v4统一生成
    category: 'wrapper', // 组件的种类，用于区分组件
    title: {
        text: 'Title组件中innerText',
        $color: '#000', //对此组件样式上的约束
        $leading: 30, // 同理
        // ...
    },
    desc: {
        
    },
    child: [
        // 放置需要的组件json信息
        {
            id: uuid(),
            category: 'button',
            title: {
                text: 'Get Started'
            }
        }
    ],
    icon: {
        node: ReactNode, // icon.node 中应该存放ReactNode类型的图标组件，图标组件使用ReactComponent导出
    } , 
    image: {
        src: image-path, // image中存放图片的相对路径,
    },
}
```

组件内部对 key 的顺序有严格要求，和html类似，json schema也是**从上往下**渲染组件，
如上述json schema渲染出来的html格式应该是：

```jsx
<div>
    {/*标题组件*/}
    <div>{title.text}</div>
    
    {/*描述组件*/}
    <div>{desc.text}</div>
    
    {/*child中批量渲染*/}
    <div>
        {
            child.map(item => ({item}))
        }
    </div>
    
    {/*图标*/}
    <div>
        {React.cloneElement(icon.node)}
    </div>
    
    {/*图片*/}
    <div>
        <img src={image.src}/>
    </div>
</div>
```

## wrapper
wrapper就是 ```div```, wrapper是基本元素，所有组件外部都会通过wrapper包裹，
wrapper默认是从上向下添加元素，<del> 但是目前来将json schema设计有点缺陷 </del>,
导致无法快捷添加同类元素，如这段HTML：

```html
<div>
    <img />
    <img />
</div>
```

由于JSON无法添加同名key，所以无法在一个schema中写完，有两种方式：
```js
const js = 
[
    {
        id: uuid(),
        category: 'wrapper',
        image: {
            src: path1
        }
    },
    {
        id: uuid(),
        category: 'wrapper',
        image: {
            src: path2
        }
    }
]
```

第二种方式就是写在child中，child的原理类似于dom中的appendChild，会在当前元素中依次添加其中的组件。
```js
const js =
{
    id: uuid(),
    category: 'wrapper',
    child: [
        {
            id: uuid(),
            category: 'wrapper',
            image: {
                src: path1
            }
        },
        {
            id: uuid(),
            category: 'wrapper',
            image: {
                src: path2
            }
        }
    ]
}
```

可以说child存在的意义就是为了这个，可以在其中无限量的批量添加任何组件，
但是最主要的目的是服务```grid```和```flex```。

## grid flex

```js
const js =
{
    id: uuid(),
    category: 'grid',
    child: [
        {
            id: uuid(),
            category: 'wrapper',
            desc: {
                text: ''
            }
        },
        {
            id: uuid(),
            categoey: 'wrapper',
            desc: {
                text: ''
            }
        }
    ]
}
```
一个grid渲染出来的HTML结构（使用tailwindcss描述）如下：
```jsx
/* className 中的 x 为category：grid 中child列表的长度 */
<div className={`grid grid-cols-${x}`}>
    {
        child.map(item => (
            <div>
                {/*TODO 根据json schema渲染 ...*/}
            </div>
        ))
    }
</div>
```

flex和grid的逻辑同理，都是将child中的元素进行水平排列，不过这里进行简单的规定：
**grid会将内部元素进行均分，而flex只水平弹性排列**

grid和flex本质上是wrapper的变体，所以如果内部没有复数同类型组件的话，
可以通过快捷创建的形式添加，如下述代码：
```js
const json =
{
    id: uuid(),
    category: 'flex',
    icon: {
        svg: <Icon/>
    },
    title: {
        text: '...'
    },
    desc: {
        text: '...'
    },
    image: {
        src: image-path
    }
}
```
将会渲染成：
```jsx
<div class="flex">
    {React.cloneElement(icon.src)}
    <div>{title.text}</div>
    <div>{desc.text}</div>
    <img src={image.src} />
</div>
```




