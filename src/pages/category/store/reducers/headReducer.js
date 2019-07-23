import {CHANGE_TAB, GET_FILTER_DATA} from './../actions/constants'
import { TABKEY } from "../../config";
let tabs = {};
tabs[TABKEY.cate]={
    key:TABKEY.cate,
    text:'全部分类',
    obj:{}
}
tabs[TABKEY.type]={
    key:TABKEY.type,
    text:'综合排序',
    obj:{}
}
tabs[TABKEY.filter]={
    key:TABKEY.filter,
    text:'筛选',
    obj:{}
}
const initState = {
    tabs,
    activeKey:TABKEY.cate,
    filterData:{}
}
const changeTab = (state,action)=>({
   ...state,
   activeKey:action.obj.activeKey 
})
const getFilterData = (state,action)=>({
    ...state,
    filterData:action.obj.data
})
 const headReducer = (state=initState, action) => {
    switch (action.type) {
        case CHANGE_TAB : return changeTab(state,action)
        case GET_FILTER_DATA :return getFilterData(state,action)
        default:
            return state
    }
}
export default headReducer