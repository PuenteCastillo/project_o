import axios from "axios";

const userAuth = () => {
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

  const signUp = async (email: string, password: string) => {};

  return {
    signIn,
    signUp,
  };
};

export default userAuth;
