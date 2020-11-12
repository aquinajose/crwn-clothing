import React from 'react';
import './App.css';
import { Route, Switch ,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignPage from './pages/signpage/signpage.component';
import CheckOut from './pages/checkout/checkout.component';
import { auth ,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';


class App extends React.Component {


  unsubscribeFromAuth = null
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
     setCurrentUser(userAuth)

    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (

      <div>
        <Header  />
        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/sign" render={()=>{
            return this.props.currentUser?(<Redirect to="/" />):(<SignPage />)}} />
          <Route exact path="/checkout" component={CheckOut}/>
        </Switch>
      </div>

    );
  }

}
const mapStateToPrps =(state)=>({
  currentUser :state.user.currentUser
})
const mapDispatchToProps=(dispatch)=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToPrps,mapDispatchToProps)(App);
