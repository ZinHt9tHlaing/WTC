"use client";

import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: input.username,
          email: input.email,
          password: input.password,
        }),
      });
      if (!response.ok) {
        throw new Error("Http server error!");
      }
      const data = await response.json();
      console.log(data);
      navigate("/login");
    } catch (error: any) {
      if (error.message === "Failed to fetch" || error.name === "TypeError") {
        setError("Backend API is not running!");
      } else {
        setError(error.message);
      }
      console.log(error.message);
    }

    // TODO: form ထဲ data ဝင်မဝင် စစ်တာ
    // const data = new FormData();
    // data.append("username", input.username as string);
    // data.append("email", input.email as string);
    // data.append("password", input.password as string);

    // for (const [key, val] of data.entries()) {
    //   console.log(`${key} : ${val}`);
    // }
  };

  return (
    <>
      <form
        className="flex max-w-md m-auto flex-col gap-4 mt-8"
        method="post"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">Register Form</h1>
        <div className="text-center">
          {error && <div className="text-red-600">{error}</div>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            onChange={handleInputChange}
            value={input.username}
            id="username"
            name="username"
            type="text"
            placeholder="your name..."
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            onChange={handleInputChange}
            value={input.email}
            id="email1"
            type="email"
            name="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            onChange={handleInputChange}
            value={input.password}
            id="password1"
            name="password"
            type="password"
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
    </>
  );
}
