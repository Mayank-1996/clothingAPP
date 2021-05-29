import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component'
import SignInSIgnUp from './pages/singin-and-signup/singin-and-signup.component'
import {useEffect,useState} from 'react'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'



function App(props) {

  const {setCurrentUser} = props

  useEffect(()=>{
    const logOutUser=auth.onAuthStateChanged(async (user)=>{
      if(user){
      const userRef = await createUserProfileDocument(user)
      
      userRef.onSnapshot(snapshot=>{
        setCurrentUser({id:snapshot.id,...snapshot.data()})
      })
      await console.log("user",user)
      }else{
        setCurrentUser(user)
      }

      return ()=>{
        logOutUser()
      }
    })
  },[])

  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
      <Route path="/signin" component={SignInSIgnUp}></Route>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser :user=>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
