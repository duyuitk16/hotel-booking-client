import {
    faCalendarDays,
    faPerson,
    faPlus,
    faMinus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import Selector from "./Selector";


export default function SearchBar() {
    const [openDate, setOpenDate] = useState(false);
    const [openOption, setOpenOption] = useState(false);
    const [placeFrom, setPlaceFrom] = useState("");
    const [placeTo, setPlaceTo] = useState("");

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

    const handleSwitchPlace = (ev) => {
        ev.preventDefault();
        let from = placeFrom;
        let to = placeTo;
        setPlaceFrom(to);
        setPlaceTo(from);
    }

    return (
        <>
            <div className="flex mt-5 pb-5 gap-3 justify-center flex-wrap px-2">
                <div className="flex flex-wrap gap-2">
                    <div className="bg-white h-10 rounded-l-lg">
                        <Selector selected={placeFrom} setSelected={setPlaceFrom} />
                    </div>
                    <div className="bg-white h-10 flex items-center justify-center" onClick={handleSwitchPlace}>
                        <svg className=" rotate-90 h-5 w-5 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M3 9l4-4l4 4m-4 -4v14" />
                            <path d="M21 15l-4 4l-4-4m4 4v-14" />
                        </svg>
                    </div>
                    <div className="bg-white h-10 rounded-r-lg">
                        <Selector selected={placeTo} setSelected={setPlaceTo} />
                    </div>
                </div >

                {/*Calendar  */}
                <div onClick={() => setOpenDate(!openDate)} className="grid">
                    {/* Hiện thị */}
                    <div className="flex gap-2  bg-white items-center rounded-lg h-10 cursor-pointer" style={{ minWidth: '234px' }}>
                        <FontAwesomeIcon icon={faCalendarDays} className="ml-3" />
                        <span className="mr-3">
                            {`${format(date[0].startDate, 'dd-MM-yyyy')} to ${format(date[0].endDate, 'dd-MM-yyyy')}`}
                        </span>
                    </div>
                    {openDate && (
                        <div className="mt-11 absolute shadow-2xl">
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className=""
                            />
                        </div>
                    )}
                </div>

                {/*Passengers  */}
                <div className="grid gap-y-1">
                    {/* Hiện thị */}
                    <div onClick={() => setOpenOption(!openOption)} className="flex gap-2 bg-white items-center justify-center rounded-lg h-10 cursor-pointer" style={{
                        minWidth: '140px'
                    }}>
                        <FontAwesomeIcon icon={faPerson} className="" />
                        <span className="">{` ${options.adult} passengers`}</span>
                    </div>

                    {openOption && (
                        <div className="absolute mt-12 bg-white shadow-2xl w-40 h-16 rounded-lg flex">
                            <div className="flex items-center justify-around w-full">
                                <span className="mr-1">ADULT</span>
                                <div className="flex items-center gap-3">
                                    <button disabled={options.adult <= 1}
                                        className="w-5 h-5  rounded-lg flex items-center justify-center text-xs"
                                        onClick={() => handleOption("adult", "d")}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <span className="">{options.adult}</span>
                                    <button
                                        className="w-5 h-5  rounded-lg flex items-center justify-center text-xs"
                                        onClick={() => handleOption("adult", "i")} >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Xong button find  */}
                <button style={{ minWidth: '130px' }} className="flex px-2 h-10 justify-center items-center bg-sky-400 rounded-lg" >
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <div className="ml-2">Find tickets</div>
                </button>
            </div >
        </>
    )
}