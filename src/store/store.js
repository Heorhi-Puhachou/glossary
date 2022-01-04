import {createStore} from "redux";
import {LACINK_TAG, NARKAM_TAG, TARASK_TAG} from "../base/constant";
import {NARKAM} from "../styles/be-1959acad";
import {LACINK} from "../styles/be-lacinka";
import {TARASK} from "../styles/be-tarask";

const styleGuideMap = new Map();

const styleReducer = (state = {style: TARASK_TAG, labels: TARASK, ruleGroups: []}, action) => {
    if (action.type === NARKAM_TAG) {
        return {
            style: NARKAM_TAG,
            labels: NARKAM,
            ruleGroups: styleGuideMap.get(action.type) ? styleGuideMap.get(action.type) : []
        };
    }
    if (action.type === LACINK_TAG) {
        return {
            style: LACINK_TAG,
            labels: LACINK,
            ruleGroups: styleGuideMap.get(action.type) ? styleGuideMap.get(action.type) : []
        };
    }
    if (action.type === TARASK_TAG) {
        return {
            style: TARASK_TAG,
            labels: TARASK,
            ruleGroups: styleGuideMap.get(action.type) ? styleGuideMap.get(action.type) : []
        };
    }
    if (action.type === 'addR') {
        styleGuideMap.set(NARKAM_TAG, action.rulesMap.get(NARKAM_TAG));
        styleGuideMap.set(TARASK_TAG, action.rulesMap.get(TARASK_TAG));
        styleGuideMap.set(LACINK_TAG, action.rulesMap.get(LACINK_TAG));
        return {
            style: state.style,
            labels: state.labels,
            ruleGroups: styleGuideMap.get(state.style)
        };
    }

    return state;


};

const store = createStore(styleReducer);

export default store;