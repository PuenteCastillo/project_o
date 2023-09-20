"use client";

import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import userAuth from "../../../hooks/useAuth";
import { getCookie } from "cookies-next";

interface User {
  id: number;
  firsr_name: string;
  last_name: string;
  email: string;
}

interface State {
  loading: boolean;
  error: string | null;
  data: User | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    data: null,
    error: null,
  });

  // fetch existing user
  const fetchUser = async () => {
    setAuthState({
      error: null,
      loading: true,
      data: null,
    });
    try {
      const jwt = getCookie("jwt");
      if (!jwt) {
        return setAuthState({
          error: null,
          loading: false,
          data: null,
        });
      }
      const response = await axios.get("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      setAuthState({
        error: null,
        loading: false,
        data: response.data,
      });
    } catch (error: any) {
      console.log(error);
      setAuthState({
        error: error.response.data.errorMessages,
        loading: false,
        data: null,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        ...authState,
        setAuthState,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
