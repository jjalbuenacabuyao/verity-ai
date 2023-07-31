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
    <form onSubmit={handleSubmit} role="search" className="relative text-sm">
      <label htmlFor="search" className="hidden">
        Search user
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Seach user"
        className="h-11 rounded-full border border-blue-500 pl-4 pr-9 focus:outline-2 focus:outline-offset-1 focus:outline-blue-500"
        onChange={handleChange}
      />
      <BiSearch size={20} className="absolute right-3 top-3" />
      <input type="submit" hidden />
    </form>
  );
};

export default Searchbar;
