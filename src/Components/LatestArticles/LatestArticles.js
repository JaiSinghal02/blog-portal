import React,{useState} from 'react'
import './LatestArticles.css'
import Image from '../../image.png'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Minimize } from '@material-ui/icons';

export default function LatestArticles(props){
    const [likedHeart,setLikedHeart]=useState(Array(20).fill(false))
    let receivedData=[]
    
    for(let i=0;i<20;i++){
        receivedData.push({'user': `user-${i+1}`,'title': `title-${i+1}`,'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`})
    }
    let data=[]
    const start=props.articleNumber*10
    const end=Math.min(start+10,receivedData.length)
    for(let j=start;j<end;++j){
        data.push(receivedData[j])
    }
    const toggleHeart=(index)=>{
        let arr=[...likedHeart]
        arr[index]=!arr[index]
        setLikedHeart(arr)
    }
    let articles=data.map((article,index)=>{
        return(
            <div className="la-article-container" key={index}>
                <div className="la-article-image-div"><img src={Image} alt="article" className="la-article-image"/></div>
                <div className="la-article-body">

                <div className="la-article-user">{article["user"]}</div>
                <div className="la-article-title">{article["title"]}</div>
                <div className="la-article-content">{article["description"].substr(0,520)}{article["description"].length>520?"....":""}</div>
                </div>
                <div className="la-article-readmore-div">
                    <p className="la-article-readmore">Read More</p>
                    {!likedHeart[index]?<FavoriteBorderIcon onClick={()=>toggleHeart(index)} htmlColor="red" style={{width:'15px',marginLeft: '8px'}} className="la-like-icon"/>:
                        <FavoriteIcon onClick={()=>toggleHeart(index)} htmlColor="red" style={{width:'15px',marginLeft: '8px'}} className="la-like-icon"/>
                    }
                        
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