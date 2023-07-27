import React from "react";
import Button from "./Button";

type Props = {};

const Searchbar = (props: Props) => {
  return (
    <form action="">
      <label htmlFor="search" className="hidden">
        Search user
      </label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Seach user"
        className=""
      />
      <Button text="Search" variant="primary" type="submit" />
    </form>
  );
};

export default Searchbar;
