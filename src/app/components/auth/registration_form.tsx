"use client";

import React, { useState } from "react";
import Image from "next/image";
import GoogleLogo from "../../../images/google_logo.png";
import Link from "next/link";
import { Alert, AlertTitle, AlertDescription } from "../../modules/ui/alert";
import { AlertCircle, FileWarning, Terminal } from "lucide-react";

type FormData = {
  email: string;
  password: string;
  passwordConfirm: string;
  rememberMe: boolean;
};

export default function Registration_form() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    passwordConfirm: "",
    rememberMe: false,
  });
  //   allert toggle
  const [showAlert, setShowAlert] = useState(false);
  // error message
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const newvalue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newvalue,
    });
  };

  const displayError = (message: string) => {
    setErrorMessage(message);
    setShowAlert(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // check if any input is empty
    if (!formData.email || !formData.password) {
      displayError("Please fill all fields");
      return;
    }

    // check if email is valid
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      displayError("Please enter a valid email");
      return;
    }

    // check if password is valid it should be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      displayError(
        "Password should be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      return;
    }

    console.log(formData);
    //todo Add form submission logic here
  };

  return (
    <>
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          {/* alternative login buttons  */}
          <div className="alternative">
            <button className="bg-white w-full hover:bg-gray-100 text-gray-900 font-medium py-2.5 px-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-offset-2 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:focus:border-primary-600">
              <div className="flex items-center justify-center space-x-2">
                <Image
                  src={GoogleLogo}
                  alt="google_logo"
                  width={25}
                  height={25}
                  className=" rounded-full"
                />
                <p>Create an account with Google</p>
              </div>
            </button>

            <div className="flex mt-5">
              <div className="grow h-0.5 bg-slate-500 mt-3 pr-4"> </div>
              <p className="w-6 text-center">or</p>
              <div className="grow  h-0.5 bg-slate-500 mt-3 pl-4"></div>
            </div>
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@gmail.com"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="••••••••"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className=" theme_btn w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick={handleSubmit}
        >
          Sign Up
        </button>

        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign in
          </Link>
        </p>
      </form>
      <Alert variant="destructive" className={showAlert ? "block" : "hidden"}>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Opps!</AlertTitle>
        <AlertDescription>{errorMessage}</AlertDescription>
      </Alert>
    </>
  );
}
