"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  setUser: (username: string) => void;
  setEmail: (email: string) => void;
};

const Login = ({ setUser, setEmail }: LoginProps) => {
  const navigate = useNavigate();
  // const [loginAttempts, setLoginAttempts] = useState<number>(0);
  // const mainAttempts = 3;
  const [error, setError] = useState<string | null>(null);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: input.email,
          password: input.password,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        if (res.status === 401) {
          setError("Password is incorrect");
        } else {
          setError(errorData.message || "Failed to login.");
        }
        return;
      }
      const data = await res.json();
      const token = data.access_token;
      console.log(data);
      localStorage.setItem("token", token);
      const decodedToken = jwtDecode<{ username: string; email: string }>(
        token
      );
      setError(null);
      setUser(decodedToken.username);
      setEmail(decodedToken.email);
      navigate("/");
    } catch (error: any) {
      if (error.message === "Failed to fetch" || error.name === "TypeError") {
        setError("Backend API is not running!");
      } else {
        setError(error.message);
      }
      console.log(error.message);
    }
  };

  return (
    <form
      className="flex max-w-md m-auto flex-col gap-4 mt-8"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="text-center">
        {error && <div className="text-red-600">{error}</div>}
      </div>
      <h1 className="text-2xl font-bold text-center">Login Form</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          name="email"
          // value={input.email}
          onChange={handleInputChange}
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          id="password1"
          name="password"
          type="password"
          // value={input.password}
          onChange={handleInputChange}
          required
          placeholder="••••••••"
        />
      </div>
      {/* <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div> */}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Login;
