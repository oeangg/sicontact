"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const CardContact = ({ id, name, gender, city, phone }) => {
  const router = useRouter();

  async function handleDeleteContact() {
    await fetch("https://v1.appbackend.io/v1/rows/4CBZlmClgygT", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });

    router.refresh();
    alert("record deleted..");
  }

  return (
    <div className="group flex h-28 w-4/5 flex-row items-center justify-between gap-4 rounded-lg px-5 py-2 duration-300 hover:border-blue-200 hover:bg-blue-100">
      <img
        src={gender === "male" ? "/user-boy.png" : "user-girl.png"}
        alt="gender"
        className="h-16 w-16 rounded-full border-4 border-white bg-blue-400 p-1"
      />
      <div className="flex w-full flex-col justify-start">
        <h1 className="text-lg font-semibold text-blue-400 group-hover:text-blue-500">
          {name}
        </h1>
        <h2 className="text-base font-normal text-blue-300 group-hover:text-blue-400">
          {phone}
        </h2>
        <p className="text-sm font-light italic text-blue-300">{city}</p>
      </div>

      <button
        className="button-secondary cursor-pointer group-hover:border-blue-300 group-hover:text-red-400"
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </div>
  );
};
