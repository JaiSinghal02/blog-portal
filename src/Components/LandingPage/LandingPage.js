import React,{useState,useEffect} from 'react'
import './LandingPage.css'
import LatestArticles from '../LatestArticles/LatestArticles'
import TopArticles from '../TopArticles/TopArticles'
import Stepper from '../UI/Stepper/Stepper'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actions'

function LandingPage(props){
    const [stepValue,setStepValue]=useState(0)
    let receivedData=[]
    for(let i=0;i<20;i++){
        receivedData.push({'user': `user-${i+1}`,'title': `title-${i+1}`,'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`})
    }
    let data=[]
    const start=stepValue*10
    const end=Math.min(start+10,receivedData.length)
    for(let j=start;j<end;++j){
        data.push(receivedData[j])
    }
    function stepperClick(i){
        setStepValue(i)
    }
    function viewArticle(index,caller){
        let mul
        if(caller==="la"){
            mul=10
        }
        else if(caller==="ta"){
            mul=0
        }
        const pos=mul*stepValue+index
        console.log("Selected->",receivedData[pos])
        props.setArticleData(receivedData[pos])
        props.history.push('/viewarticle')
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
      }, [stepValue])
    return(
        <>
        <div className="landing-page-container">
            <div className="landing-page-la-container">
                <LatestArticles data={data} viewArticle={(i,c)=>viewArticle(i,c)} articleNumber={stepValue}/>
            </div>

            <div className="landing-page-ta-container">
                <div  className="landing-page-ta-top">
            <div className="landingpage-ta-line"><hr></hr></div>
            <div className="landingpage-ta-head">
            <h4>Top Articles</h4>

            </div>

                <div className="landingpage-ta-line"><hr></hr></div>
                </div>
                <div className="landing-page-ta-article-container">
                <TopArticles data={receivedData} viewArticle={(i,c)=>viewArticle(i,c)}/>
                </div>
                
                
            </div>
        </div>
        <div className="landing-page-footer">
            <Stepper length={20} divider={10} stepperClick={stepperClick}/>
        </div>
        </>
    )
}
const mapDispatchToProps = dispatch =>{
    return{
        setArticleData: (data)=> dispatch({type: actionTypes.SET_ARTICLE_DATA,articleData:data})
    }
}
export default connect(null,mapDispatchToProps)(LandingPage)