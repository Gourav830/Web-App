import React from "react";

export default function PersonalInfoBox({key1,val1,key2,val2}:{key1:string,val1:string,key2:string,val2:string}){
    return(
        <div className="w-full h-[70px] flex items-center my-[20px] justify-between">
            <span className="w-[50%] hover:bg-[#f7f7f7] p-[20px] rounded-md shadow-sm shadow-[#eeeeee]">
                <p className=" font-bold">{key1}</p>
                <p className="font-medium">{val1}</p>
            </span>
            <span className={`w-[48%] hover:bg-[#f7f7f7] p-[20px] rounded-md ${key2===""?"hidden":"block"} shadow-sm shadow-[#eeeeee]` }>
                <p className="font-bold">{key2}</p>
                <p className="font-medium">{val2}</p>
            </span>
        </div>
    )
}