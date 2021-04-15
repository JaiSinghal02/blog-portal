import React,{useState} from 'react'
import './LatestArticles.css'
import Image from '../../image.png'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actions'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

function LatestArticles(props){
    const [likedHeart,setLikedHeart]=useState(Array(props.data.length).fill(false))
    const [img,setRef]=useState(React.createRef())
    let token=localStorage.getItem("token")
    const toggleHeart=(index)=>{
        if(!likedHeart[index]){
            axios.post('/api/article/like',{ _id: props.data[index]["_id"]})
            .then(res=>{})
            .catch(err=>{})
        }
        else{
            axios.post('/api/article/dislike',{ _id: props.data[index]["_id"]})
            .then(res=>{})
            .catch(err=>{})
        }
        let arr=[...likedHeart]
        arr[index]=!arr[index]
        setLikedHeart(arr)
    }
    let articles=props.data.map((article,index)=>{
        let img=Image
        if(article["articleImage"]){
            img=`http://localhost:5000/${article["articleImage"].replace("\\","/")}`
        }
        return(
            <div className="la-article-container" key={index}>
                <div className="la-article-image-div">
                    <img 
                    src={img}
                    alt="article" 
                    className="la-article-image"/>
                    </div>
                
                <div className="la-article-info-div">
                <div className="la-article-info">

                <div className="la-article-body">
                    <div className="la-article-user-body">
                    <InfoOutlinedIcon style={{width:'20px',marginRight: '4px',paddingTop: '1px'}}/>
                    <div className="la-article-user">{article["user"]["name"]}</div>
                    </div>
                    <div className="la-article-title">{article["title"]}</div>
                    <div className="la-article-content">{article["description"].substr(0,520)}{article["description"].length>520?"....":""}</div>
                </div>
                <div className="la-article-readmore-div">
                    <p className="la-article-readmore" onClick={(e)=>props.viewArticle(index,"la")}>Read More</p>
                    {!likedHeart[index]?<FavoriteBorderIcon onClick={()=>toggleHeart(index)} htmlColor="red" style={{width:'15px',marginLeft: '8px'}} className="la-like-icon"/>:
                        <FavoriteIcon onClick={()=>toggleHeart(index)} htmlColor="red" style={{width:'15px',marginLeft: '8px'}} className="la-like-icon"/>
                    }    
                </div>
                </div>
                </div>
            </div>
        )
    })
    return(
        <div className="la-container">
            {articles}
        </div>
    )
}
export default (withRouter(LatestArticles))