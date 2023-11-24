




import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Header from "../Header";
import useFetch from "../hooks/useFetch";
import SearchItem from "../components/SearchItem";
import Footer from "../components/Footer";


const HotelList = () => {
    const location = useLocation();

    // const currentDate = new Date();

    // // Get the date components
    // const month = currentDate.getMonth() + 1; // Months are zero-indexed
    // const day = currentDate.getDate();
    // const year = currentDate.getFullYear();

    // // Format the date as "MM/dd/yyyy"
    // const formattedDate = `${month}/${day}/${year}`;

    location.state = {
        destination: "madrid",
        dates: [
            {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection'
            }
        ],
        options: {
            adult: 1,
            children: 0,
            room: 1,
        }
    }

    const [destination, setDestination] = useState(location?.state?.destination);
    const [dates, setDates] = useState(location?.state?.dates);

    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location?.state?.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const { data, loading, error, reFetch } = useFetch(
        `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
        // `/hotels`
    );
    console.log("🚀 ~ file: HotelList.jsx:54 ~ HotelList ~ data:", data)

    const handleClick = () => {
        console.log(destination, min, max)
        reFetch();
    };

    return (
        <div>
            <Header />

            <div className="flex flex-wrap justify-center max-w-7xl mx-auto px-2 gap-4">

                {/* Form search */}
                <div className="shadow-xl rounded-lg p-2 h-fit w-full sm:w-1/3" style={{ backgroundColor: '#94bbe9' }}>
                    <h1 className="text-2xl font-bold text-center mb-2">Search</h1>
                    <div className="lsItem">
                        <label className="font-bold">Destination:</label>
                        <input placeholder={destination} type="text" className="w-full p-2 mt-2 rounded-sm" onChange={(e) => setDestination(e.target.value)} />
                    </div>
                    <div className="grid">
                        <label className="font-bold mt-4 mb-2">Check-in Date:</label>
                        <span
                            className="bg-white flex justify-center  items-center p-2 rounded-sm"
                            onClick={() => setOpenDate(!openDate)}>{`${format(
                                dates[0]?.startDate,
                                "dd/MM/yyyy"
                            )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && (
                            <DateRange
                                onChange={(item) => setDates([item.selection])}
                                minDate={new Date()}
                                ranges={dates}
                                className="absolute mt-24 border border-gray-700 rounded-md"
                            />
                        )}
                    </div>

                    {/* Options */}
                    <div className="mt-4">
                        <label className="font-bold">Options</label>
                        <div className="flex items-center justify-between gap-2 my-2 ml-2">
                            <span className="">
                                Min price:
                            </span>
                            <input
                                type="text"
                                onChange={(e) => setMin(e.target.value)}
                                className="rounded-sm px-2 w-3/4"
                            />
                        </div>
                        <div className="flex items-center justify-between gap-2 my-2 ml-2">
                            <span className="">
                                Max price:
                            </span>
                            <input
                                type="text"
                                onChange={(e) => setMax(e.target.value)}
                                className="rounded-sm px-2 w-3/4"
                            />
                        </div>
                        <div className="flex items-center justify-between gap-2 my-2 ml-2">
                            <span className="">
                                Adult:
                            </span>
                            <input
                                type="number"
                                min={1}
                                // onChange={(e) => setMin(e.target.value)}
                                className="rounded-sm pl-2 w-3/4"
                                placeholder={options.adult}
                            />
                        </div>
                        <div className="flex items-center justify-between gap-2 my-2 ml-2">
                            <span className="">
                                Children:
                            </span>
                            <input
                                type="number"
                                min={0}
                                // onChange={(e) => setMin(e.target.value)}
                                className="rounded-sm pl-2 w-3/4"
                                placeholder={options.children}
                            />
                        </div>
                        <div className="flex items-center justify-between gap-2 my-2 ml-2">
                            <span className="">
                                Room:
                            </span>
                            <input
                                type="number"
                                min={1}
                                // onChange={(e) => setMin(e.target.value)}
                                className="rounded-sm pl-2 w-3/4"
                                placeholder={options.room}
                            />
                        </div>

                        {/* <div className="flex mt-2 mb-2 items-center justify-between">
                            <span className="lsOptionText">Adult</span>
                            <div className="h-10 w-24">
                                <input
                                    type="number"
                                    min={1}
                                    className="lsOptionInput"
                                    placeholder={options.adult}
                                />
                            </div>
                        </div> */}
                        {/* <div className="flex mt-2 mb-2 items-center justify-between">
                            <span className="lsOptionText">Children</span>
                            <div className="h-10 w-24">
                                <input
                                    type="number"
                                    min={0}
                                    className="lsOptionInput"
                                    placeholder={options.children}
                                />
                            </div>
                        </div> */}
                        {/* <div className="flex mt-2 mb-2 items-center justify-between">
                            <span className="lsOptionText">Room</span>
                            <div className="h-10 w-24">
                                <input
                                    type="number"
                                    min={1}
                                    className=""
                                    placeholder={options.room}
                                />
                            </div>
                        </div> */}
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleClick}
                        className="w-full bg-pink-300 p-2 mt-4 mb-2 rounded-xl"
                    >
                        Search
                    </button>
                </div>

                {/* List hotels */}
                <div className="sm:w-3/5">
                    {loading ? (
                        "loading"
                    ) : (
                        <>
                            {data.map((item) => (
                                <div className="mb-4">
                                    <SearchItem item={item} key={item._id} />
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HotelList;
