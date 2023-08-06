"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { UserType } from "@/types";
import axios from "axios";

type Props = {};

const Searchbar = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<UserType[] | string>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (search.length > 0) {
      const searchResult: UserType[] | string = await axios
        .post("/api/search-user", { search })
        .then((response) => response.data);

      setSearchResult(searchResult);
    }

    return;
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="relative w-full text-sm lg:w-auto">
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
      <input type="submit" hidden />
    </form>
  );
};

export default Searchbar;
