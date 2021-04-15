import './App.css';
import {withRouter,Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionTypes from './store/actions/actions'
import Auth from './Components/Auth/AuthForm'
import LandingPage from './Components/LandingPage/LandingPage'
import NavBar from './Components/NavBar/NavBar'
import WriteArticle from './Components/WriteArticle/WriteArticle'
import YourArticles from './Components/YourArticles/YourArticles'
import ViewArticle from './Components/ViewArticle/ViewArticle'

function App(props) {
  function publishArticle(){
    const data=props.publishData
    console.log("TO publish-->",data)
    if(data["title"] !=="" && data["description"]!==""){
      props.history.push('/landingpage')
      alert("Published/..")
    }
    else{
      alert("please complete")
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar publishArticle={publishArticle} clearPublishData={props.clearPublishData}></NavBar>
        <Switch>
          <Route path="/viewarticle" component={ViewArticle} />
          <Route path="/yourarticles" component={YourArticles} />
          <Route path="/writearticle" component={WriteArticle} />
          <Route path="/landingpage" component={LandingPage} />
          <Route path="/authentication" component={Auth} />
          <Route path="/" />
        </Switch>
      </header>
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
