"use client";

import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { UserType } from "@/types";
import axios from "axios";

type Props = {
  className: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const Searchbar = ({ className, setSearch }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  return (
    <form
      role="search"
      className={`relative w-full text-sm lg:w-auto ${className}`}>
      <label htmlFor="search" className="hidden">
        Search user
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Seach user"
        className="w-full rounded-full border border-blue-500 py-2 pl-9 pr-10 focus:outline-2 focus:outline-offset-1 focus:outline-blue-500 lg:w-72"
        onChange={handleChange}
      />
      <BiSearch size={18} className="absolute left-3 top-2.5" />
      <span className="absolute right-3 top-2.5 block rounded border p-1 text-[8px] font-semibold leading-none">
        Enter
      </span>
    </form>
  );
};

export default Searchbar;
