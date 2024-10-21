import React from 'react';

const Page = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen ">
      <div className="w-full px-10 md:w-[550px] shadow-md rounded-xl py-5 bg-white">
        <div>
          <h1 className="text-4xl text-center font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
           Niyokta
          </h1>
          <h1 className="text-3xl font-bold">Register</h1>
          <p>Start Niyokta now</p>
        </div>
        {/* <Register /> */}
        <p className="text-center mt-2">
          Already have an account ?{" "}
          <strong>
            {/* <Link href="/login">Login</Link> */}
          </strong>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Page;
