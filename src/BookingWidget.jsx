import { useContext, useEffect, useState } from "react"
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSackDollar
} from "@fortawesome/free-solid-svg-icons";



export default function BookingWidget({ place }) {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [redirect, setRedirect] = useState('');
    const { user } = useContext(UserContext);
    let numberOfNights = 0;
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    }

    useEffect(() => {
        setName(user?.name);
    }, [user])

    async function bookThisPlace() {
        const data = {
            checkIn, checkOut, numberOfGuests,
            name, phone, place: place._id,
            price: numberOfNights * place.price,
        }
        const response = await axios.post('/bookings', data);
        const bookingId = response.data._id;
        setRedirect(`/account/bookings/${bookingId}`);
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }
    return (
        <div className="bg-white shadow p-4 rounded-2xl">
            <div className="text-2xl">
                <span className="font-bold text-pink-700"><FontAwesomeIcon icon={faSackDollar} className="text-xl mr-2" />Price:</span> <span className="font-bold">{place.price}</span>   / per night
            </div>
            <div className="border rounded-xl mt-4">
                <div className="flex flex-wrap">
                    <div className="py-3 px-4 w-full">
                        <label>Check in: </label>
                        <input type="date"
                            value={checkIn}
                            onChange={ev => setCheckIn(ev.target.value)} />
                    </div>
                    <div className="py-3 px-4 w-full border-t">
                        <label>Check out: </label>
                        <input type="date"
                            value={checkOut}
                            onChange={ev => setCheckOut(ev.target.value)} />
                    </div>
                </div>
                <div>
                    <div className="py-3 px-4 border-t ">
                        <label>Number of guests: </label>
                        <input type="number"
                            value={numberOfGuests}
                            onChange={ev => setNumberOfGuests(ev.target.value)} className="border border-gray-700 w-full rounded-md px-2" />
                    </div>
                </div>
                {numberOfNights > 0 && (
                    <div className="py-3 px-4 border-t ">
                        <div>
                            <label>Your full name: </label>
                            <input type="text"
                                value={name}
                                onChange={ev => setName(ev.target.value)} className="border border-gray-700 w-full rounded-md px-2" />
                        </div>
                        <div>
                            <label>Phone number: </label>
                            <input type="tel"
                                value={phone}
                                onChange={ev => setPhone(ev.target.value)} className="border border-gray-700 w-full rounded-md px-2" />
                        </div>
                    </div>
                )}
            </div>
            <button onClick={bookThisPlace} className="primary mt-4">
                Book this place
                {numberOfNights > 0 && (
                    <>
                        <span> ${numberOfNights * place.price}</span>
                    </>
                )}
            </button>
        </div>
    )
};