'use client'

//src/context/context.jsx
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import AppRouts from "@/Constant/Constant";

// Create a context
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // Initialize user state
  const [token, setToken] = useState(Cookies.get("token") || null); // Initialize token state
  const [session, setSession] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("tokenForSessionStorage") || null;
    }
    return null;
  }); // Initialize session storage token
  const [loading, setLoading] = useState(true); // Handle loading state

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);

      try {
        let activeToken = session || token;

        if (!activeToken && typeof window !== "undefined") {
          activeToken = sessionStorage.getItem("tokenForSessionStorage") || Cookies.get("token");
        }

        if (activeToken) {
          if (typeof window !== "undefined") {
            sessionStorage.setItem("tokenForSessionStorage", activeToken);
          }
          setSession(activeToken);
          await getUserInfo(activeToken);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error in fetchUserData:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token, session]);

  const getUserInfo = async (currentUserToken) => {
    try {
      const response = await axios.get(AppRouts.getCurrentUserInfo, {
        headers: {
          Authorization: `Bearer ${currentUserToken}`,
        },
      });
      console.log("User Info Response:", response);
      setUser(response.data.data);
    } catch (err) {
      console.error("Error fetching user info:", err);
    }
  };

  console.log("Current User:", user);

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, session, setSession, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

// ---------------------------------------------------------------

// 'use client'

// import { createContext, useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// import AppRouts from "@/Constant/Constant";

// // Create a context
// export const AuthContext = createContext();

// function AuthContextProvider({ children }) {
//   const [user, setUser] = useState(null); // Initialize user state
//   const [token, setToken] = useState(Cookies.get("token") || null); // Initialize token state
//   const [session, setSession] = useState(null); // Initialize session as null
//   const [loading, setLoading] = useState(true); // Handle loading state

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Access sessionStorage only on client-side
//       setSession(sessionStorage.getItem("tokenForSessionStorage") || null);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (session) {
//         await getUserInfo(session);
//       } else if (!session && token) {
//         sessionStorage.setItem("tokenForSessionStorage", token); // Update session storage
//         setSession(token); // Update session state
//         await getUserInfo(token); // Use token directly
//       } else if (!session && !token) {
//         setUser(null);
//         setLoading(false);
//       }
//     };

//     if (session !== null) {
//       fetchUserData(); // Call fetchUserData only after session is set
//     }
//   }, [token, session]); // Dependencies: token and session

//   const getUserInfo = async (currentUserToken) => {
//     try {
//       setLoading(true);
//       const response = await axios.get(AppRouts.getCurrentUserInfo, {
//         headers: {
//           Authorization: `Bearer ${currentUserToken}`,
//         },
//       });
//       setUser(response.data.data); // Setting user data as global state
//     } catch (err) {
//       console.error("Error fetching user info: ", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, setUser, token, setToken, session, setSession, loading }}
//     >    
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthContextProvider;
