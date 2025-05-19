import { ProfileForm } from "@/components/ProfileForm";
import { SignupForm } from "@/components/SignUpForm";
import { FaStore } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="rounded-3xl bg-white flex gap-5 m-10 overflow-hidden min-h-screen">
      <div className="bg-teal-950 w-full flex flex-col justify-center items-center p-10 pb-0">
        <div className="flex flex-col h-full justify-evenly items-center">
          <h1 className="text-white text-5xl text-center font-extrabold tracking-tighter">
            We bring the store to your door
          </h1>
          <p className="text-center text-base text-slate-300 tracking-tight w-4/5 font-semibold">
            Get organic produce and sustainably sourced groceries delivery at up
            to 4% off grocery.
          </p>
        </div>
        <img className="w-3/5 pt-4 mt-auto" src="images/img_foods.png" alt="" />
      </div>
      <div className="flex w-full flex-col gap-4 flex-grow bg-white py-10 px-20">
        <h2 className="flex justify-center text-lg items-center gap-1.5 tracking-tighter font-semibold">
          <FaStore className="text-amber-300 text-2xl" />
          Let's Picnic
        </h2>
        {showLogin ? (
          <>
            <h3 className="text-center text-3xl font-bold tracking-tight">
              Hello Again!
            </h3>
            <p className="text-center text-gray-600 pb-4">
              Welcome back to your favorite online store
            </p>
            <div className="flex flex-col gap-5">
              <ProfileForm />
              <Button
                className="w-full bg-teal-950 hover:bg-teal-900"
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-5">
              <SignupForm setShowLogin={setShowLogin} />
              <Button
                className="w-full bg-teal-950 hover:bg-teal-900"
                onClick={() => setShowLogin(true)}
              >
                Back to Log In
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
