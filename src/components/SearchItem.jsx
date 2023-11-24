import { Link } from "react-router-dom";



const SearchItem = ({ item }) => {
    return (
        <div className="flex gap-3 items-center justify-between border-2 border-black rounded-xl p-2">
            <div className="w-1/2 md:1/4">
                <img src={item.photos[0]} alt="" className="h-40 w-full" />
                <h1 className=" text-pink-500 font-bold text-xl text-center">{item.name}</h1>
            </div>
            <div className="hidden md:grid">
                <h1 className=" text-pink-500 font-bold text-xl">Note:</h1>
                <span className="">{item.distance}m from center</span>
                <span className="bg-emerald-600 text-white rounded-2xl flex items-center justify-center">Free airport taxi</span>
                <span className="font-bold">
                    Studio Apartment with Air conditioning
                </span>
                <span className="">{item.desc}</span>
                <span className="font-bold text-green-500">Free cancellation </span>
                <span className="text-green-500">
                    You can cancel later, so lock in this great price today!
                </span>

            </div>
            <div className="grid">
                {item.rating && <div className="">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="grid">
                    <span className="flex justify-end font-bold text-2xl sm:text-3xl">${item.cheapestPrice}</span>
                    <span className="flex justify-end py-4">Included taxes and fees</span>
                    <div className="flex justify-end">
                        <Link to={`/hotels/${item._id}`}>
                            <button className=" bg-primary flex items-center p-4 rounded-xl text-white">See availability</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
