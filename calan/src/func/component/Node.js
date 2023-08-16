class Node{

    constructor() {
        this.lg = window.matchMedia('screen and (min-width: 1440px)');
        this.md = window.matchMedia('screen and (min-width:675px) and (max-width:1440px)');
        this.sm = window.matchMedia('screen and (max-width: 675px');
    }

    arrIsExist(arr, obj, index = 0){
        if(arr === undefined || arr[obj] === undefined || arr[obj][0] === undefined)
            return false;
        return true;
    }

}


module.exports = Node;
