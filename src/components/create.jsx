"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteCreate = () => {
  const [name, setNama] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const router = useRouter();

  async function handleAddNote() {
    await fetch("https://v1.appbackend.io/v1/rows/4CBZlmClgygT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ name, gender, phone, city }]),
    });

    setNama("");
    setGender("");
    setPhone("");
    setCity("");
    router.refresh();
  }
  return (
    <div className="container flex max-w-md flex-col gap-2 px-5 py-5">
      <div></div>
      <input
        name="name"
        id="name"
        placeholder="Name"
        className="input-text"
        onChange={(e) => {
          setNama(e.target.value);
        }}
      ></input>

      <select
        name="gender"
        id="gender"
        className="input-text lec bg-transparent"
        onChange={(e) => {
          setGender(e.target.value);
          // console.log(gender);
        }}
      >
        <option value="">Choice Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input
        name="phone"
        id="phone"
        placeholder="Phone Number"
        className="input-text"
        type="tel"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      ></input>
      <input
        name="city"
        id="city"
        placeholder="City "
        className="input-text"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      ></input>

      <button className="button-primary" onClick={handleAddNote}>
        Add to Contact
      </button>
    </div>
  );
};
