import React,{useState,useEffect} from 'react'
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import SideDrawer from '../UI/SideDrawer/SideDrawer'
import './NavBar.css'

function NavBar(props){
    const path=props.history.location.pathname
    const boolWriteBar=path==="/writearticle"
    const navlist=[{"name":"WRITE","path":"/writearticle"},{"name":"YOUR ARTICLE","path":"/yourarticles"},{"name":"LOGOUT","path":"/landingpage"}]
    if(boolWriteBar){
        navlist.splice(0,1)
    }
    const [publishBar,setWriteBar]=useState(false)
    
    useEffect(()=>{
        setWriteBar(boolWriteBar)
        props.clearPublishData()
    },[path])
    function publishArticle(){
        props.publishArticle();
    }
    return(
        <div className="navbar-container">
            <div className="navbar-info">
                <h2>FATMUG | Greetings{"<name>"}</h2>
            </div>
            {/* secondary publish button for mobile device */}
            <div className="navbar-secondary-publish-button"> 
            {publishBar?
                    <Button variant="outlined" onClick={()=>publishArticle()}classes={{label: "navbar-button-label"}} style={{marginRight: '8px',padding: '4px 5px',backgroundColor: 'grey'}} >Publish</Button>
                    :null }
            </div>
            
            <div className="navbar-buttons-container">
                <div className="navbar-sidedrawer">
                    <SideDrawer list={navlist}/>
                </div>
                <div className="navbar-buttons-div">
                    {publishBar?
                    <Button variant="outlined" onClick={()=>publishArticle()}classes={{label: "navbar-button-label"}} style={{marginRight: '8px',padding: '4px 5px',backgroundColor: 'grey'}} >Publish</Button>
                    :
                    <NavLink activeClassName="active-link" to="/writearticle" style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" classes={{label: "navbar-button-label"}} style={{marginRight: '8px',padding: '4px 5px'}} >Write</Button>
                    </NavLink>
                    }
                    <NavLink activeClassName="active-link" exact to="/yourarticles" style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" classes={{label: "navbar-button-label"}} style={{marginRight: '8px',padding: '4px 5px'}} >Your Article</Button>
                    </NavLink>
                    <NavLink exact to="/" style={{ textDecoration: 'none' }}>
                    <Button classes={{label: "navbar-button-label"}} style={{padding: '4px 5px'}} >Logout</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NavBar)