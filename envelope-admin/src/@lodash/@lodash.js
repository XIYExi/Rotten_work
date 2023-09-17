import __ from 'lodash';

const _ = __.runInContext();

_.mixin({
    setIn: (state, name, value) => {
        return _.setWith(_.clone(state), name, value, _.clone());
    },
});

export default _;