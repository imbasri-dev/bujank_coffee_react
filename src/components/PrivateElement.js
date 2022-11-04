import React from "react";
import { Navigate } from "react-router-dom";
// props.children => akses komponen child
class PrivateElement extends React.Component {
   render() {
      // kondisi,jika true smua akan return komponen child
      // jika false , maka redirect
      //  kondisi 1 = apakah sudah login
      const { allowedRoles = [], children } = this.props;
      const userInfo = JSON.parse(localStorage["userInfo"] || "{}");
      if (!userInfo.token)
         return (
            <Navigate
               to="/"
               replace={true}
               state={{
                  msg: "Silahkan Login Terlebih Dahulu",
                  isRedirected: true,
               }}
            />
         );
      // kondisi 2 = apakaah sesuai dengan role
      if (allowedRoles.length > 0) {
         if (!allowedRoles.includes(userInfo.role))
            return (
               <Navigate
                  to="/"
                  replace={true}
                  state={{
                     msg: "Forbidden",
                     isRedirected: true,
                  }}
               />
            );
      }
      return children;
   }
}

export default PrivateElement;
