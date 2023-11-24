import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import PropertyList from "./../components/PropertyList";
import Featured from "./../components/Feature";

export default function IndexPage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/places').then(response => {
            setPlaces(response.data);
        });
    }, [])
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Featured />
                <div className="text-2xl font-bold my-6 ml-10">Browse by property</div>
                <PropertyList />
                <div className="mt-10 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2">
                    {places.length > 0 && places.map(place => (
                        <Link key={place._id} to={'/place/' + place._id} className="w-50 h-50">
                            <div className="h-50 h-50 mb-2 flex">
                                {place.photos?.[0] && (
                                    <img className="rounded-xl object-cover aspect-square" src={import.meta.env.VITE_BASE_URL + '/uploads/' + place.photos?.[0]} alt="" />
                                )}
                            </div>
                            <div>
                                <h3 className="font-bold">{place.address}</h3>
                                <h2 className="text-sm text-black">{place.title}</h2>
                                <div className="mt-2">
                                    <span className="font-bold"> ${place.price}</span> per night
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}