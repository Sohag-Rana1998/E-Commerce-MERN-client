import CommonForm from "@/components/common/CommonForm";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/authslice";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      console.log(data);
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
        navigate("/admin/dashboard");
      } else {
        toast.error(data?.payload?.message);
      }
    });
  };
  return (
    <div className="max-w-md w-full mx-auto space-y-6">
      <div className="">
        <h1 className="text-4xl text-center font-bold tracking-tight text-foreground">
          Sign In To Your Account
        </h1>
        <div className="flex justify-center items-center  mt-3">
          <p className=""> Don't have an account?</p>
          <Link
            className="font-bold hover:underline ml-2"
            to={"/auth/register"}
          >
            Register
          </Link>
        </div>
        <div className="mt-5">
          <CommonForm
            formControls={loginFormControls}
            buttonText={"Sign In"}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
