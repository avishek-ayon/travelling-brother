import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AddService from './components/AddService/AddService';
import Services from './components/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import BookingService from './components/BookingService/BookingService';
import BookingHotel from './components/BookingHotel/BookingHotel';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrder from './components/Manage Orders/ManageOrder';
import UpdateStatus from './components/UpdateStatus/UpdateStatus';
import About from './components/About/About';
import AddHotel from './components/AddHotels/AddHotels';
import Hotels from './components/Hotels/Hotels';
import DashBoard from './components/DashBoard/DashBoard';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/addService'>
              <AddService></AddService>
            </Route>

            <Route path='/services'>
              <Services></Services>
            </Route>

            <PrivateRoute path='/bookingService/:serviceId'>
              <BookingService></BookingService>
            </PrivateRoute>

            <PrivateRoute path='/bookingHotel/:hotelId'>
              <BookingHotel></BookingHotel>
            </PrivateRoute>

            <Route path='/myOrders'>
              <MyOrders></MyOrders>
            </Route>

            <Route path='/manageOrder'>
              <ManageOrder></ManageOrder>

            </Route>

            <Route path='/updateStatus/:statusId'>
              <UpdateStatus></UpdateStatus>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>

            <Route path='/addHotel'>
              <AddHotel></AddHotel>
            </Route>
            <Route path='/hotels'>
              <Hotels></Hotels>
            </Route>
            <Route path='/dashBoard'>
              <DashBoard></DashBoard>
            </Route>

            <Route path='/footer'>
              <Footer></Footer>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>



          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
