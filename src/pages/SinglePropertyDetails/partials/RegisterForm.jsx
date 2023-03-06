import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";

const RegisterForm = (props) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="bg-[#F3FAFF] p-10 border border-[#373F48] rounded-md xl:basis-1/3 text-center">
      <h1 className="font-montserrat text-lg leading-6">
        {props.propertyName} <br /> Register Your Interest
      </h1>
      <form
        action=""
        className="mt-8"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          type="text"
          {...register("name", { required: true })}
          id="name"
          placeholder="Enter Your Name"
          className="w-full border border-[#A8A8A8] px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          id="email"
          placeholder="Enter Your Email"
          className="w-full border border-[#A8A8A8] px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs"
        />
        {/* <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          className="w-full border border-[#A8A8A8] px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className="w-full border border-[#A8A8A8] px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs"
        />
        <textarea
          placeholder="Description"
          name="description"
          id="description"
          cols="30"
          rows="3"
          className="w-full border border-[#A8A8A8] px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs"
        /> */}
        <Button btnText="Submit your Interest" type="submit" />
      </form>
    </div>
  );
};

export default RegisterForm;
