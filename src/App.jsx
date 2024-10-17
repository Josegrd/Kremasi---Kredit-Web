import "./App.css";
import AddInstallment from "./component/AddInstallment";
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerNavbar from "./component/CustomerNavbar";
import AdminNavbar from "./component/AdminNavbar";
import { useState, useEffect } from "react";
import RegisterAddIdentity from "./component/RegisterAddIdentitity";
import MakeLoan from "./component/MakeLoan";
import ProtectedRoute from "./component/ProtectedRoute";
import { jwtDecode } from "jwt-decode";
import { apiFetch } from "./api/api";
import React from "react";

function App() {
  const [userData, setUserData] = useState(null);
  const [nasabahId, setNasabahId] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        const nasabahId = decodedToken.nasabahId;

        setNasabahId(nasabahId);

        const result = await apiFetch(`/nasabah/${nasabahId}`, "GET");
        const data = result.data;
        // console.log("ini function fetchData : ", data);
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addIdentity" element={<RegisterAddIdentity />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <WithCustomerNavbar>
                <Profile />
              </WithCustomerNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/make-loan"
          element={
            <ProtectedRoute>
              <WithCustomerNavbar>
                <MakeLoan userData={userData} />
              </WithCustomerNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/transaction"
          element={
            <ProtectedRoute>
              <WithCustomerNavbar>
                <Transaction userData={userData} />
              </WithCustomerNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pending-transaction"
          element={
            <ProtectedRoute>
              <WithCustomerNavbar>
                <PendingTransaction />
              </WithCustomerNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-profile"
          element={
            <ProtectedRoute>
              <WithCustomerNavbar>
                <UpdateProfile nasabahId={nasabahId} />
              </WithCustomerNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pay-transaction"
          element={
            <ProtectedRoute>
              <WithCustomerNavbar>
                <PayTrasaction />
              </WithCustomerNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/more-information"
          element={
            <ProtectedRoute>
              <WithCustomerNavbar>
                <MoreInformation />
              </WithCustomerNavbar>
            </ProtectedRoute>
          }
        />

        <Route
          path="/list-customer"
          element={
            <ProtectedRoute>
              <WithAdminNavbar>
                <ListCustomer />
              </WithAdminNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/list-transaction"
          element={
            <ProtectedRoute>
              <WithAdminNavbar>
                <ListTransaction />
              </WithAdminNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pending-admin"
          element={
            <ProtectedRoute>
              <WithAdminNavbar>
                <PendingAdmin />
              </WithAdminNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-installment"
          element={
            <ProtectedRoute>
              <WithAdminNavbar>
                <AddInstallment />
              </WithAdminNavbar>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

function WithCustomerNavbar({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [userData, setUserData] = useState(null); // State untuk menampung data user

  const handleToggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        const nasabahId = decodedToken.nasabahId;

        const result = await apiFetch(`/nasabah/${nasabahId}`, "GET");
        const data = result.data;
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);
  return (
    <div className="flex">
      <CustomerNavbar
        isNavOpen={isNavOpen}
        toggleNavbar={handleToggleNavbar}
        userData={userData}
      />
      <div
        className={`content transition-all duration-300 ${
          isNavOpen
            ? "lg:ml-[500px] md:ml-[350px]  w-[calc(100%-300px)]"
            : "ml-[130px] w-[calc(100%-60px)]"
        }`}
      >
        {children}
        {/* {React.cloneElement(children, { userData })} */}
      </div>
    </div>
  );
}

function WithAdminNavbar({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const handleToggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="flex">
      <AdminNavbar isNavOpen={isNavOpen} toggleNavbar={handleToggleNavbar} />
      <div
        className={`content transition-all duration-300 ${
          isNavOpen
            ? "lg:ml-[500px] md:ml-[350px]  w-[calc(100%-300px)]"
            : "ml-[130px] w-[calc(100%-60px)]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default App;

// notes
// {/* tanpa side navbar */}
//   <Hero />
//   <Login />
//   <Register />

//   {/* side navbar customer */}
//   <Profile />
//   <Transaction />
//   <PendingTransaction />
//   <UpdateProfile />
//   <PayTrasaction />
//   <MoreInformation />

//   {/* side navbar admin */}
//   <ListCustomer />
//   <ListTransaction />
//   <PendingAdmin />
//   <AddInstallment />
