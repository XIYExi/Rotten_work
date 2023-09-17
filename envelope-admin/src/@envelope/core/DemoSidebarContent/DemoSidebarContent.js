import _ from '@lodash';

import {cloneElement, memo} from "react";

const DemoSidebarContent = () => {
    function generate(element) {
        return _(30).times((value) => cloneElement(element, {key: value}))
    }

    return(
        <div>

        </div>
    )
}


export default memo(DemoSidebarContent);