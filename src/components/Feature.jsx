import useFetch from "../hooks/useFetch";
const Featured = () => {
    const { data, loading, error } = useFetch(
        "/hotels/countByCity?cities=berlin,madrid,london"
    );

    return (
        <div className="w-full flex flex-wrap justify-center gap-6 px-2">
            {loading ? (
                "Loading... Please wait!!!"
            ) : (
                <>
                    <div className="grid relative cursor-pointer">
                        <img
                            src="https://owa.bestprice.vn/images/destinations/uploads/trung-tam-thanh-pho-ha-noi-603da1f235b38.jpg"
                            alt=""
                            className="w-96 h-60 rounded-2xl"
                        />
                        <div className="absolute text-white font-bold bottom-5 left-5 text-xl">
                            <h1 className="text-white">Ha Noi</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="grid relative cursor-pointer">
                        <img
                            src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
                            alt=""
                            className="w-96 h-60 rounded-2xl"
                        />
                        <div className="absolute text-white bottom-5 left-5 font-bold text-xl">
                            <h1>Da Nang</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="grid relative cursor-pointer">
                        <img
                            src="https://previews.123rf.com/images/dimaberkut/dimaberkut1603/dimaberkut160300269/54609784-ho-chi-minh-city-vietnam-circa-jan-2016-top-view-of-saigon-river-at-night-time-saigon-river-the.jpg"
                            alt=""
                            className="w-96 h-60 rounded-2xl"
                        />
                        <div className="absolute text-white bottom-5 left-5 font-bold text-xl">
                            <h1>Ho Chi Minh</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Featured;
