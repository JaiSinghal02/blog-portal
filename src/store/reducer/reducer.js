import * as actionTypes from '../actions/actions'

const intialState={
    publishData: {
        title: "",
        description: "",
        articleImage: ""
    }
}
const reducer=(state=intialState,action)=>{
    switch(action.type){
        case actionTypes.SET_PUBLISH_DATA:
            const key=Object.keys(action.data)
            return{
                ...state,
                publishData: {
                    ...state.publishData,
                    [key]: action.data[key]
                }
            }
        case actionTypes.UNSET_PUBLISH_DATA:
            return{
                ...state,
                publishData: {
                    title: "",
                    description: "",
                    articleImage: ""
                }
            }
        default:
            return state
    }
}

export default reducer