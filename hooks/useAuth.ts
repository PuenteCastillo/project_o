import axios from "axios";
import { getCookie, deleteCookie } from "cookies-next";
import { useContext } from "react";
import { AuthenticationContext } from "../src/app/context/AuthContext";
import { set } from "date-fns";

const userAuth = () => {
  const { setAuthState } = useContext(AuthenticationContext);

  const signIn = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    try {
      const response = await axios.post("/api/auth/signin", {
        email: email,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    handleResponse: (response: any) => void
  ) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      });
      console.log(response);
      handleResponse({ success: true, data: response });
    } catch (error) {
      // console.log(error);
      handleResponse({ success: false, data: error });
    }
  };

  const signOut = () => {
    deleteCookie("jwt");

    setAuthState({
      data: null,
      error: null,
      loading: false,
    });
  };
  return {
    signIn,
    signUp,
    signOut,
  };
};

export default userAuth;
