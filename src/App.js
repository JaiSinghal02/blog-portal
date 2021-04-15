import './App.css';
import {useState} from 'react'
import {withRouter,Route,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionTypes from './store/actions/actions'
import Auth from './Components/Auth/AuthForm'
import LandingPage from './Components/LandingPage/LandingPage'
import NavBar from './Components/NavBar/NavBar'
import WriteArticle from './Components/WriteArticle/WriteArticle'
import YourArticles from './Components/YourArticles/YourArticles'
import ViewArticle from './Components/ViewArticle/ViewArticle'
import PopUp from './Components/UI/PopUp/PopUp'
import axios from 'axios';

function App(props) {
  const [popup, changePopUp] = useState({ message: "", severity: "" })
  const token= localStorage.getItem("token")
  function publishArticle(){
    const data=props.publishData
    let form = new FormData()
    Object.keys(data).forEach(d=>{
      form.append(d,data[d])
    })
    if(data["title"] !=="" && data["description"]!==""){
      props.history.push('/landingpage')
      axios.post('/api/article/publish',form,{
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res=>{
        changePopUp(prev => ({ ...prev, message: "Published Successfully", severity: "success" }))
      })
      .catch(err=>{
        changePopUp(prev => ({ ...prev, message: `${err.message?err.message:"Some error occured"}`, severity: "error" }))
        console.log(err)
      })
    }
    else{
      changePopUp(prev => ({ ...prev, message: `Cannot publish incomplete article`, severity: "error" }))
    }
  }
  let route=<Switch>
    <Route path="/authentication" component={Auth} />
    <Redirect to="/authentication"/>
  </Switch>
  let navbar=null
  let showPopUp = null;
  if (popup["message"] !== "") {
    showPopUp = <PopUp severity={popup["severity"]} open={true} message={popup["message"]} timer="2000" />
    setTimeout(() => {
      changePopUp(prev => ({ ...prev, message: "", severity: "" }))
    }, 2000)
  }
  if(token){
    navbar=<NavBar publishArticle={publishArticle} clearPublishData={props.clearPublishData}></NavBar>
    route=<Switch>
    <Route path="/viewarticle" component={ViewArticle} />
    <Route path="/yourarticles" component={YourArticles} />
    <Route path="/writearticle" component={WriteArticle} />
    <Route path="/landingpage" component={LandingPage} />
    <Redirect to="/"/>
  </Switch>
  }
  return (
    <div className="App">
      <header className="App-header">
        {navbar}
        {route}
      </header>
      {showPopUp}
    </div>
  );
}
const mapStateToProps = state=>{
  return{
    publishData: state.publishData
  }
}
const mapDispatchToProps = dispatch=>{
  return{
    clearPublishData: ()=> dispatch({type: actionTypes.UNSET_PUBLISH_DATA})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));
