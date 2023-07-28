"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "./Button";
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
    <form onSubmit={handleSubmit} role="search">
      <label htmlFor="search" className="hidden">
        Search user
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Seach user"
        className=""
        onChange={handleChange}
      />
      <Button text="Search" variant="primary" type="submit" />
    </form>
  );
};

export default Searchbar;
