import {forwardRef} from "react";
import {NavLink as BaseNavLink} from "react-router-dom";

/*此组件重写了NavLink的选中样式*/
const NavLinkAdapter = forwardRef(({activeClassName, activeStyle, ...props}, ref) => {
    return(
        <BaseNavLink
            ref={ref}
            {...props}
            className={({ isActive }) =>
                [props.className, isActive ? activeClassName : null].filter(Boolean).join(' ')
                /*filter(Boolean)用于移除false，null，undefined，0，NaN和空字符串*/
            }
            style={({isActive}) => ({
                ...props.style,
                ...(isActive ? activeStyle : null),
            })}
        />
    );
});

export default NavLinkAdapter;