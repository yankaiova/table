// import axios from "axios";
// import { useEffect } from "react";
// import { createContext, useState } from "react";

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const signin = (login, password, cb) => {
//     axios
//       .post(
//         `${process.env["REACT_APP_HOST"]}/api/v1/auth`,
//         {
//           password: password,
//           username: login,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((res) => {
//         sessionStorage.setItem("jwt", res["data"]["jwt"]);
//         cb();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const signout = (cb) => {
//     sessionStorage.setItem("jwt", null);

//     cb();
//   };
//   const value = { signin, signout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
