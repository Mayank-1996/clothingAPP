import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component'
import SignInSIgnUp from './pages/singin-and-signup/singin-and-signup.component'
import {useEffect,useState} from 'react'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'




function App() {

  const [user,setUser] = useState(null)

  useEffect(()=>{
    const logOutUser=auth.onAuthStateChanged(async (user)=>{
      if(user){
      const userRef = await createUserProfileDocument(user)
      
      userRef.onSnapshot(snapshot=>{
        setUser({id:snapshot.id,...snapshot.data()})
      })
      await console.log("user",user)
      }else{
        setUser(user)
      }

      return ()=>{
        logOutUser()
      }
    })
  },[])

  return (
    <div className="App">
      <Header user={user}/>
      <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
      <Route path="/signin" component={SignInSIgnUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
