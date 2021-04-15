import React from 'react'
import './YourArticle.css'
import Image from '../../../image.png'
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Tooltip from '@material-ui/core/Tooltip';


export default function YourArticle(props) {
    let articleContent=props.data.map((article,index)=>{
        let img=Image
        if(article["articleImage"]){
            img=`http://localhost:5000/${article["articleImage"].replace("\\","/")}`
        }
        return(
            <div key={index} className="ya-article-content" >
            <div className="ya-article-image-container">
                <div className="ya-article-image-body">
                    <img src={img} alt="article" className="ya-article-image"/>
                </div>
            </div>
            <div className="ya-article-text-container" onClick={(e)=>props.articleClicked(index)}>
                <div className="ya-article-text-body">
                    <div className="ya-article-text-title"><p>{article["title"]}</p></div>
                    <div className="ya-article-text-desc"><p>{article["description"].substr(0,100)+(article["description"].length>100?"...":"")}</p></div>
                </div>
            </div>
            <div className="ya-article-icons-container">
                <div className="ya-article-icons-body">
                    <Tooltip title="Update feature Coming Soon.." arrow>
                    <NoteAddOutlinedIcon color="disabled" className="ya-article-icon-addnote"/>
                    </Tooltip>
                    <Tooltip title="Delete feature Coming Soon.." arrow>
                    <DeleteOutlinedIcon color="disabled" className="ya-article-icon-deletenote"/>
                    </Tooltip>
                    </div>
            </div>
        </div>
        )
    })
    return (
        <>
        {articleContent}
        </>
    )
}