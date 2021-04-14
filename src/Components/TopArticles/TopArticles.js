import React,{useState} from 'react'
import './TopArticles.css'
import Image from '../../image.png'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default function TopArticle(props){
    const [likedHeart,setLikedHeart]=useState(Array(20).fill(false))
    const toggleHeart=(index)=>{
        let arr=[...likedHeart]
        arr[index]=!arr[index]
        setLikedHeart(arr)
    }
    let articles=props.data.map((article,index)=>{
        if(index<5){
        return(
            <div className="ta-article-container" key={index}>
                
                <div className="ta-article-cont">
                    <div className="ta-article-body" onClick={(e)=>{props.viewArticle(index,"ta")}}>
                    <div className="ta-article-user">{article["user"]}</div>
                    <div className="ta-article-title">{article["title"]}</div>
                <div className="ta-article-readmore-div">
                    <p className="ta-article-date">Apr 16</p>
                    {!likedHeart[index]?<FavoriteBorderIcon onClick={()=>toggleHeart(index)} htmlColor="red" style={{width:'12px',marginLeft: '8px'}} className="ta-like-icon"/>:
                        <FavoriteIcon onClick={()=>toggleHeart(index)} htmlColor="red" style={{width:'12px',marginLeft: '8px'}} className="ta-like-icon"/>
                    }
                        
                </div>

                    </div>

                </div>
                <div className="ta-article-image-cont">
                    <div className="ta-article-image-div">

                    </div>
                    <img src={Image} alt="article" className="ta-article-image"/>
                    </div>
            </div>
        )}
        else{
            return null
        }
    })
    return(
        <div className="ta-container">
            {articles}
        </div>
    )
}