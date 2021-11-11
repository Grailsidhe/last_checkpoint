import { useState } from "react";
import axios from "axios";
import './css/Admin.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );
    } catch (error) {
      setEmail("");
    }
  };

  return (
    <div className="">

      <form onSubmit={forgotPasswordHandler}>
          <label htmlFor="email">Email: </label>
          <input
            className=""
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        <button className="" type="submit">
          SEND EMAIL
        </button>
      </form>

    </div>
  );
};

export default ForgotPassword;