import { useEffect, useState } from "react";
import axios from "axios";

function testApi() {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get('/booking-car/show').then(response => {
      setBookings(response.data);
    });
  }, [])
  return (
    <div>Nguyen Vu Anh Duy</div>
  )
}

export default testApi