
import {
    faBed,
    faCalendarDays,
    faMinus,
    faPerson,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { Link } from "react-router-dom";


export default function SearchBar() {
    const [openDate, setOpenDate] = useState(false);
    const [openOption, setOpenOption] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    return (
        <>
            <div className="w-full justify-center sm:w-auto px-2 flex flex-wrap gap-4 headerSearch items-center  border border-gray-400 rounded-md py-2">

                {/* Where */}
                <div className="flex  gap-2 p-1 items-center headerSearchItem bg-white rounded-md h-fit">
                    <FontAwesomeIcon icon={faBed} className="ml-4" />
                    <input type="text"
                        placeholder="Where are you going? "
                        className="border-none p-2 rounded-md block"
                    />
                </div>

                {/*  Calendar */}
                <div className="flex gap-2 items-center bg-white rounded-md p-1"
                >
                    <FontAwesomeIcon icon={faCalendarDays} className="ml-4" />
                    <div>
                        <span
                            className="bg-white flex justify-center items-center h-10 px-2 cursor-pointer"
                            onClick={() => setOpenDate(!openDate)}>{`${format(
                                date[0]?.startDate,
                                "dd/MM/yyyy"
                            )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && (
                            <DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                                className="absolute mt-2 z-50 shadow-lg"
                            />
                        )}
                    </div>
                </div>

                {/* Choose */}
                <div className="flex gap-2 headerSearchItem">
                    <div className="bg-white p-2.5 rounded-md" onClick={() => setOpenOption(!openOption)}>
                        <FontAwesomeIcon icon={faPerson} className="ml-2" />
                        <span className="headerSearchText ml-2">{` ${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                    </div>
                    {openOption && (
                        <div className="options absolute mt-12 bg-white w-48 h-40 rounded-lg z-50 shadow-lg">
                            <div className="optionItem flex p-3 justify-between items-center">
                                <span className="optionText">ADULT</span>
                                <div className="flex gap-4 items-center">
                                    <button disabled={options.adult <= 1}
                                        className="optionCounterButton  w-5 h-5 rounded-lg flex items-center justify-center cursor-pointer"
                                        onClick={() => handleOption("adult", "d")}
                                    ><FontAwesomeIcon icon={faMinus} /></button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton  w-5 h-5  rounded-lg flex items-center justify-center cursor-pointer" onClick={() => handleOption("adult", "i")} > <FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            </div>
                            <div className="optionItem p-3 flex justify-between items-center">
                                <span className="optionText">CHILDREN</span>
                                <div className="flex items-center gap-4">
                                    <button disabled={options.children <= 1}
                                        className="optionCounterButton  w-5 h-5 rounded-lg flex items-center justify-center cursor-pointer"
                                        onClick={() => handleOption("children", "d")}
                                    ><FontAwesomeIcon icon={faMinus} /></button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton  w-5 h-5  rounded-lg flex items-center justify-center cursor-pointer" onClick={() => handleOption("children", "i")}> <FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            </div>
                            <div className="optionItem p-3 flex justify-between items-center">
                                <span className="optionText">ROOM</span>
                                <div className="flex items-center gap-4">
                                    <button disabled={options.room <= 1}
                                        className="ptionCounterButton  w-5 h-5  rounded-lg flex items-center justify-center cursor-pointer"
                                        onClick={() => handleOption("room", "d")}
                                    ><FontAwesomeIcon icon={faMinus} /></button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton  w-5 h-5  rounded-lg flex items-center justify-center cursor-pointer" onClick={() => handleOption("room", "i")}><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Button search */}
                <button className="rounded-full w-8 h-8 bg-black flex items-center justify-center">
                    <Link to={"/hotels"} state={{ destination: "dalat" }}  >
                        {/* <Link to={{ pathname: "/hotels", state: { destination: "dalat" } }} > */}
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </Link>
                </button>
            </div>
        </>
    );
}