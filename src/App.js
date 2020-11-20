import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component';


const HatsPage=()=>{
  return(
    <h1>Hats Page</h1>
  )
  
}
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
