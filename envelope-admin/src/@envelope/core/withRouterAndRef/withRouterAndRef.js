import {Component, forwardRef} from "react";
import withRouter from "@envelope/core/withRouter";

/*HOC组件，将接收到的组件先用withRouter包裹，之后在用forwardRef包裹，达到传递ref的效果，最后ref会被传递到*/
const WithRouterAndRef = (WrappedComponent) => {
    class InnerComponentWithRef extends Component {
        render(){
            const {forwardRef: _forwardRef, ...rest} = this.props;
            return <WrappedComponent {...rest} ref={_forwardRef}/>
        }
    }

    const ComponentWithRouter = withRouter(InnerComponentWithRef, {withRef: true});
    /*使用forwardRef包装函数组件，因为函数组件没有实例，但函数式组件只是转发，最后还是需要挂在到class或者HTML元素上。*/
    return forwardRef((props, ref) =>
        <ComponentWithRouter {...props} forwardRef={ref}/>);
}


export default WithRouterAndRef;