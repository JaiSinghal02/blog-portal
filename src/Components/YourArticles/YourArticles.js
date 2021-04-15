import React,{useState,useEffect} from 'react'
import './YourArticles.css'
import YourArticle from './YourArticle/YourArticle'
import Stepper from '../UI/Stepper/Stepper'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actions'


function YourArticles(props) {
    const [stepValue,setStepValue]=useState(0)
    function stepperClick(i){
        setStepValue(i)
    }
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
      }, [stepValue])
      let receivedData=[]
      for(let i=0;i<15;i++){
          receivedData.push({'user': `user-${i+1}`,'title': `title-${i+1}`,'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`})
      }
      let data=[]
      const start=stepValue*5
      const end=Math.min(start+5,receivedData.length)
      for(let j=start;j<end;++j){
          data.push(receivedData[j])
      }
      function articleClicked(i){
          let pos=stepValue*5+i
        props.setArticleData(receivedData[pos])
        props.history.push('/viewarticle')
    }
    return (
        <>
        <div className="ya-container">
            <div className="ya-body">
                <div className="ya-head">
                    <div  className="ya-head-body">
                        <div className="ya-head-line"><hr></hr></div>
                        <div className="ya-head-tag">
                            <h4>Your Submitted Articles</h4>
                        </div>
                        <div className="ya-head-line"><hr></hr></div>
                    </div>
                </div>

                <div className="ya-article-container">
                    <div className="ya-article-body">
                        <YourArticle data={data}articleNumber={stepValue} articleClicked={(i)=>articleClicked(i)}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="ya-footer">

        <Stepper length={15} divider={5} stepperClick={stepperClick}/>
        </div>
        </>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        setArticleData: (data)=> dispatch({type: actionTypes.SET_ARTICLE_DATA, articleData: data})
    }
}

export default connect(null,mapDispatchToProps)(YourArticles)