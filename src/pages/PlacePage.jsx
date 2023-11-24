import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";
import Comments from "../components/CommentSection/Comments";
import {
    faMagnifyingGlass, faCircleInfo, faClipboard
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function PlacePage() {
    const { id } = useParams();
    const [place, setPlace] = useState(null);
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/places/${id}`).then(response => {
            setPlace(response.data);
        });
    }, [id])
    if (!place) return '';


    return (
        <div className="bg-gray-100 px-4 pt-8">
            <h1 className="text-2xl text-pink-700 font-bold border-b border-gray-700"><FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl mr-2" />{place.title}</h1>
            <AddressLink children={place.address} />
            <PlaceGallery place={place} />
            <div>
                <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
                    <div>
                        <h2 className="font-bold text-2xl  text-pink-700 border-b border-gray-700"><FontAwesomeIcon icon={faClipboard} className="text-xl mr-2" />Description</h2>
                        <p className="py-4 text-xl">
                            {place.description}
                        </p>
                        <p className="py-4 text-xl">
                            Check-in: {place.checkIn}
                        </p>
                        <p className="py-4 text-xl">
                            Check-out: {place.checkOut}
                        </p>
                        <p className="py-4 text-xl">
                            Max number of guests : {place.maxGuests}
                        </p>
                    </div>
                    <div>
                        <BookingWidget place={place} />
                    </div>
                </div>
                <div className="py-8">
                    <div>
                        <h2 className="font-bold text-2xl text-pink-700  border-b border-gray-700"><FontAwesomeIcon icon={faCircleInfo} className="text-xl mr-2" />Extra info</h2>
                    </div>
                    <div className="mt-4 text-xl text-black">{place.extraInfo}</div>
                </div>
                <Comments />
            </div>
        </div>
    )
}