import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/singin-and-signup/singin-and-signup.component";
import { useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import CheckoutPage from "./pages/checkout/checkoutpage.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";

function App(props) {
  // const { setCurrentUser } = props;
  const unsubscribeFromAuth = null;

  useEffect(() => {
    // const logOutUser = auth.onAuthStateChanged(async (user) => {
    //   if (user) {
    //     const userRef = await createUserProfileDocument(user);
    //     userRef.onSnapshot((snapshot) => {
    //       setCurrentUser({ id: snapshot.id, ...snapshot.data() });
    //     });
    //   } else {
    //     setCurrentUser(user);
    //   }
    // });
    const { checkUserSession } = props;
    checkUserSession();
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin">
          {props.currentUser ? <Redirect to="/" /> : <SignInSignUp />}
        </Route>
        <Route exact to="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
