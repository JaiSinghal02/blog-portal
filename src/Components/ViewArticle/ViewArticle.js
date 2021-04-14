import React,{useEffect} from 'react'
import './ViewArticle.css'
import Image from '../../image.png'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {connect} from 'react-redux'


function ViewArticle(props){
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
      }, [])
    return(
        <div className="va-container">
            <div className="va-body">
                <div className="va-article-image-container">
                        <div className="va-article-image-body">
                                <img src={Image} alt="article" className="va-article-image"/>
                        </div>
                </div>
                <div className="va-article-head-container">
                        <div className="va-article-head-body">
                                <div className="va-article-head-title">
                                    <h3>{props.articleData["title"]}</h3>
                                </div>
                                <div className="va-article-head-date">
                                    <h5>Apr 16</h5>
                                </div>
                        </div>
                        <div className="va-article-head-hr">
                                <hr/>
                        </div>
                </div>
                <div className="va-article-content-container">
                    <div className="va-article-content-body">
                        <div className="va-article-content">
                                <p>{props.articleData["description"]}</p>
                        </div>       
                    </div>       
                </div>
                <div className="va-article-footer">
                    <div className="va-article-footer-body">
                        <AccountCircleOutlinedIcon/>
                              <p>{props.articleData["user"]}</p>  
                    </div>  
                </div>  
                <div className="va-empty-space">

            </div>
            </div>
            

        </div>
    )
}
const mapStateToProps = state=>{
    return{
        articleData: state.articleData
    }
}
export default connect(mapStateToProps)(ViewArticle)