import {createStore} from "redux";
import {LACINK_TAG, NARKAM_TAG, TARASK_TAG} from "../base/constant";
import {NARKAM} from "../styles/be-1959acad";
import {LACINK} from "../styles/be-lacinka";
import {TARASK} from "../styles/be-tarask";

const styleReducer = (state = {style: TARASK_TAG}, action) => {
    if(action.type===NARKAM_TAG){
        return {
            style: NARKAM_TAG,
            labels: NARKAM
        };
    }

    if(action.type===LACINK_TAG){
        return {
            style: LACINK_TAG,
            labels: LACINK
        };
    }

    return {
        style: TARASK_TAG,
        labels: TARASK
    };
};

const store = createStore(styleReducer);

export default store;