import "./App.css";
import Hero from "./component/Hero";
import Login from "./component/Login";
import MoreInformation from "./component/MoreInfor";
import PayTrasaction from "./component/PayTransaction";
import PendingTransaction from "./component/PendingTransaction";
import Profile from "./component/Profile";
import Register from "./component/Register";
import Transaction from "./component/Transaction";
import UpdateProfile from "./component/UpdateProfile";

function App() {
  return (
    <>
      <Hero />
      <Login />
      <Register />
      <Profile />
      <Transaction />
      <PendingTransaction />
      <UpdateProfile />
      <PayTrasaction />
      <MoreInformation />
    </>
  );
}

export default App;
