"use client";
import React, { useState } from "react";

type UserType = {
  sessionId: number;
  name: string;
}

const UseStateExample = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    })
  }

  return (
    <div className="useStateExample">
      {user ? (`
        ${user.name} logged in      
      `) : (
        <form>
          <input type="text" placeholder="username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>

      )}
      {/* Beware can use question mark */}
      {user?.name}
    </div>
  );
};

export default UseStateExample;
