import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {
  className: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

/**
 * Renders a search input field with a search icon.
 * Allows users to enter a search query and updates the search value using the `setSearch` function passed as a prop.
 *
 * @component
 *
 * @param {string} props.className - The CSS class name for the search bar component.
 * @param {function} props.setSearch - The function to update the search value.
 * @returns {JSX.Element} - The rendered search bar component.
 */
const Searchbar = ({ className, setSearch }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <form
      role="search"
      className={`relative w-full text-sm lg:w-auto ${className}`}
    >
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
