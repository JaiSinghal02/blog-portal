import * as actionTypes from '../actions/actions'

const intialState={
    articleData: {},
    publishData: {
        title: "",
        description: "",
        image: ""
    }
}
const reducer=(state=intialState,action)=>{
    switch(action.type){
        case actionTypes.SET_ARTICLE_DATA:
            console.log("SETTING DATA-->",action.articleData)
            return{
                ...state,
                articleData: action.articleData
            }
        case actionTypes.SET_PUBLISH_DATA:
            //console.log("key-->",Object.keys(action.data))
            const key=Object.keys(action.data)
            // console.log("value-->",action.data[key])
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
                    image: ""
                }
            }
        default:
            return state
    }
}

export default reducer