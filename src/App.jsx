import "./App.css";
import AddInstallment from "./component/AddInstallment";
import AdminNavbar from "./component/AdminNavbar";
import Hero from "./component/Hero";
import ListCustomer from "./component/ListCustomer";
import ListTransaction from "./component/ListTransaction";
import Login from "./component/Login";
import MoreInformation from "./component/MoreInfor";
import PayTrasaction from "./component/PayTransaction";
import PendingAdmin from "./component/PendingAdmin";
import PendingTransaction from "./component/PendingTransaction";
import Profile from "./component/Profile";
import Register from "./component/Register";
import Transaction from "./component/Transaction";
import UpdateProfile from "./component/UpdateProfile";


function App() {
  return (
    <>

    {/* tanpa side navbar */}
      <Hero />
      <Login />
      <Register />

      {/* side navbar customer */}
      <Profile />
      <Transaction />
      <PendingTransaction />
      <UpdateProfile />
      <PayTrasaction />
      <MoreInformation />

      {/* side navbar admin */}
      <ListCustomer />
      <ListTransaction />
      <PendingAdmin />
      <AddInstallment />
    </>
  );
}

export default App;
