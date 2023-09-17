import {useLocation, useHistory } from "react-router-dom";

export default function withRouter(Child){
    return(props) => {
        const location = useLocation();
        const history = useHistory();
        return <Child {...props} history={history} location={location}/>
    };
}
