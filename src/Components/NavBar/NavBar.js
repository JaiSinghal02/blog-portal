import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import SideDrawer from '../UI/SideDrawer/SideDrawer'
import './NavBar.css'

export default function NavBar(props){
    return(
        <div className="navbar-container">
            <div className="navbar-info">
                <h2>FATMUG | Greetings{"<name>"}</h2>
            </div>
            
            <div className="navbar-buttons-container">
                <div className="navbar-sidedrawer">
                    <SideDrawer/>
                </div>
                <div className="navbar-buttons-div">
                        
                    <Link to="/">
                    <Button variant="outlined" classes={{label: "navbar-button-label"}} style={{marginRight: '8px',padding: '4px 5px'}} >Write</Button>
                    </Link>
                    <Link to="/">
                    <Button variant="outlined" classes={{label: "navbar-button-label"}} style={{marginRight: '8px',padding: '4px 5px'}} >Your Article</Button>
                    </Link>
                    <Link to="/">
                    <Button classes={{label: "navbar-button-label"}} style={{padding: '4px 5px'}} >Logout</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}