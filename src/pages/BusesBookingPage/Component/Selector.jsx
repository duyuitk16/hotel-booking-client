import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Selector = ({ selected, setSelected }) => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  function show(s) {
    if (s === '')
      return "Please select your place"
    if (s.length > 25)
      return s.substring(0, 25) + "..."
    return s
  }
  return (
    <div className="w-72 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded cursor-pointer ${!selected && "text-gray-700"
          }`}>
        {show(selected)}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>

      {/* Dropdown Menu */}
      <ul className={`bg-white shadow-2xl  mt-2 overflow-y-auto absolute ${open ? "max-h-60" : "max-h-0"} `} style={{ minWidth: '288px', maxWidth: '288px' }}>
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Select or Enter your place"
            className="placeholder:text-red-700 outline-none rounded-none text-center"
          />
        </div>
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white shadow-2xl
            ${country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
              }
            ${country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
              }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setPlace(country?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;


