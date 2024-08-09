import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="sign-in-container">
      <SignedOut>
        <h1>Welcome to <span>FinYojak</span></h1>
        <h2>Your Personal Finance Tracker</h2>
        <div className="signup">
          <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
        </div>
      </SignedOut>
      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </div>
  );
};
