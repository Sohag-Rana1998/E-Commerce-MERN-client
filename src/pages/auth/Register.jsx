import CommonForm from "@/components/common/CommonForm";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/authslice";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const initialState = {
  userName: "",
  email: "",
  password: "",
};
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
        navigate("/auth/login");
      } else {
        toast.error(data?.payload?.message);
      }
    });
  };
  return (
    <div className="max-w-md w-full mx-auto space-y-6">
      <div className="">
        <h1 className="text-4xl text-center font-bold tracking-tight text-foreground">
          Create New Account
        </h1>
        <div className="flex justify-center items-center  mt-3">
          <p className=""> Already have an account?</p>
          <Link className="font-bold hover:underline ml-2" to={"/auth/login"}>
            Sign In
          </Link>
        </div>
        <div className="mt-5">
          <CommonForm
            formControls={registerFormControls}
            buttonText={"Sign Up"}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
