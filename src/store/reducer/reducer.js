import * as actionTypes from '../actions/actions'

const intialState={
    articleData: {}
}
const reducer=(state=intialState,action)=>{
    switch(action.type){
        case actionTypes.SET_ARTICLE_DATA:
            console.log("SETTING DATA-->",action.articleData)
            return{
                ...state,
                articleData: action.articleData
            }
        default:
            return state
    }
}

export default reducer