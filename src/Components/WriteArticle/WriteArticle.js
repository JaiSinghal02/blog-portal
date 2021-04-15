import React,{useState} from 'react'
import './WriteArticle.css'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actions'
import Image from '../../image.png' //Temporray image replace by user upload image

function WriteArticle(props){
    const [imagePath, setImagePath]=useState("")
    const [image, setImage]=useState("")
    function imageUpload(e){
        if(e.target.value!==""){
            props.changePublishData({"articleImage": e.target.files[0]})
            setImage(URL.createObjectURL(e.target.files[0]))
            setImagePath(e.target.value)
        }
    }
    return(
        <div className="wa-article-container">
        <div className="wa-article-body">
        <div className="wa-article-title-container">
        <InputLabel style={{textAlign: 'left',marginBottom: '20px',paddingLeft: '4px'}} htmlFor="filled-size-small">
          Title
        </InputLabel>
        <TextField
        autoFocus
          label=""
          id="filled-size-small"
          placeholder=""
          variant="filled"
          fullWidth
          onChange={(e)=>props.changePublishData({"title": e.target.value})}
        />
        </div>
        <div className="wa-article-desc-container">
        <InputLabel style={{textAlign: 'left',marginBottom: '20px',paddingLeft: '4px',marginTop: '30px'}} htmlFor="filled-size-small">
        Description
        </InputLabel>
        <TextField
          label=""
          id="filled-size-small"
          placeholder=""
          variant="filled"
          fullWidth
          multiline={true}
          rowsMax={15}
          rows={15}
          onChange={(e)=>props.changePublishData({"description": e.target.value})}
        />
        </div>
        <div className="wa-article-image-container">
            <div className="wa-article-image-fucntions">
                <div className="wa-article-image-button">
                        <Button variant="contained" component="label" size="small" style={{maxWidth:'80%',maxHeight: '80%',height:'40px',fontSize: '10px',width:'110px'}}>
                                Upload Image
                                <input type="file" hidden onChange={(e)=>imageUpload(e)}/>
                        </Button>

                </div>
                <div>

                        <p className="wa-article-image-path"> {imagePath}</p>
                </div>
            </div>
            {imagePath!==""?<div className="wa-article-up-image-container">
                <img src={image} alt="upload" className="wa-article-up-image"/>
            </div>:null}
        </div>
        <div className="wa-empty-space">

</div>
        </div>
        

        </div>
    )
}
const mapDispatchToProps = dispatch=>{
    return{
        changePublishData: (data)=> dispatch({type: actionTypes.SET_PUBLISH_DATA,data:data})
    }
}
export default connect(null,mapDispatchToProps)(WriteArticle)