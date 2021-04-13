import React,{useState} from 'react'
import './LandingPage.css'
import LatestArticles from '../LatestArticles/LatestArticles'
import TopArticles from '../TopArticles/TopArticles'
import Stepper from '../UI/Stepper/Stepper'

export default function LandingPage(props){
    const [stepValue,setStepValue]=useState(0)
    function stepperClick(i){
        setStepValue(i)
    }
    return(
        <>
        <div className="landing-page-container">
            <div className="landing-page-la-container">
                <LatestArticles articleNumber={stepValue}/>
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
                <TopArticles/>
                </div>
                
                
            </div>
        </div>
        <div className="landing-page-footer">
            <Stepper length={20} stepperClick={stepperClick}/>
        </div>
        </>
    )
}