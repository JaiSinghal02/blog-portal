import React,{useState,useEffect} from 'react'
import './ViewArticle.css'
import Image from '../../image.png'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import dateConverter from '../../functions/dateConverter'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios';


function ViewArticle(props){
    const [article,setArticle]= useState(null)
    useEffect(() => {
        const articleId= localStorage.getItem("articleId")
        if(!articleId){
            props.history.goBack()
        }
        axios.get(`/api/article/id/${articleId}`)
        .then(res=>{
            setArticle(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
      }, [])
    let img=Image
    return(
        <>
        {article?
        <div className="va-container">
            <div className="va-body">
                <div className="va-article-image-container">
                        <div className="va-article-image-body">
                                <img src={img} alt="article" className="va-article-image"/>
                        </div>
                </div>
                <div className="va-article-head-container">
                        <div className="va-article-head-body">
                                <div className="va-article-head-title">
                                    <h3>{article["title"]}</h3>
                                </div>
                                <div className="va-article-head-date">
                                    <h5>{dateConverter(article["date"])}</h5>
                                </div>
                        </div>
                        <div className="va-article-head-hr">
                                <hr/>
                        </div>
                </div>
                <div className="va-article-content-container">
                    <div className="va-article-content-body">
                        <div className="va-article-content">
                                <p>{article["description"]}</p>
                        </div>       
                    </div>       
                </div>
                <div className="va-article-footer">
                    <div className="va-article-footer-body">
                        <AccountCircleOutlinedIcon/>
                              <p><span style={{fontStyle: 'italic'}}>by </span><span style={{fontWeight: '600'}}>{article["user"]["name"]}</span></p>  
                    </div>  
                </div>  
                <div className="va-empty-space">

            </div>
            </div>
            

        </div>:null}
        </>
    )
}
const mapStateToProps = state=>{
    return{
        articleData: state.articleData
    }
}
export default connect(mapStateToProps)(withRouter(ViewArticle))