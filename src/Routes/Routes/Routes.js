import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main.js/Main";
import Appointment from "../../Pages/Appointment/Appointment";
import AddDoctors from "../../Pages/DashBoard/AddDoctors/AddDoctors";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import ManageDoctors from "../../Pages/DashBoard/ManageDoctors/ManageDoctors";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../PrivetRoutes/AdminRoute";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivetRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctors",
        element: (
          <AdminRoute>
            <AddDoctors></AddDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
    ],
  },
]);
