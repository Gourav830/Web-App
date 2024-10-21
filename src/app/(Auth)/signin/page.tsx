import React from 'react';

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
    <div className="w-full md:w-[550px] shadow-md rounded-xl py-5 px-10 bg-white">
      <div>
        <h1 className="text-4xl text-center font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
        Niyokta
        </h1>
        <h1 className="text-3xl font-bold">Login</h1>
        <p>Welcome back</p>
      </div>
      {/* <Login /> */}
      <p className="text-center mt-2">
        Donot have an account ?{" "}
        <strong>
          {/* <Link href="/register">Register</Link> */}
        </strong>
      </p>
    </div>
  </div>
  );
}

export default Page;
