'use client'

import LogoutButton from "@/app/Components/Logout";
import { useContext } from "react";
import { AuthContext } from "@/Context/contrext";

const SalesPerson = () => {
// Access user and token from AuthContext
const { user, setUser, setToken, setSession } = useContext(AuthContext);
console.log("User:" , user);


    return (
      <div>
        <h1>This is Sales Person DASHBOARD</h1>
        <LogoutButton/>
      </div>
    );
  };
  
  export default SalesPerson;
  