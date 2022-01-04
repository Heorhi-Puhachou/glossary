import {createStore} from "redux";
import {LACINK_TAG, NARKAM_TAG, TARASK_TAG} from "../base/constant";

const styleReducer = (state = {style: TARASK_TAG}, action) => {
    if(action.type===NARKAM_TAG){
        return {style: NARKAM_TAG};
    }

    if(action.type===LACINK_TAG){
        return {style: LACINK_TAG};
    }

    return {style: TARASK_TAG};
};

const store = createStore(styleReducer);

export default store;