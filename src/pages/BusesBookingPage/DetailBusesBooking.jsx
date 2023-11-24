import Header from "./Component/Header";
import Footer from "../../components/Footer";
import MyGallery from "./Component/MyGallery";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  faBus,
  faRoute,
  faHourglassStart,
  faHourglassEnd
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DetailBusesBooking() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get('/booking-car/show').then(response => {
      setBookings(response.data);
    });
  }, [])
  console.log(bookings)
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        {/* Where to go */}
        <div className="px-2">
          <div className="my-10 font-bold text-2xl">
            Best Options
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Card */}
            <div
              className="w-full sm:w-2/5 flex flex-wrap gap-2 p-5 rounded-lg shadow-sm hover:shadow-md duration-300 "
              style={{
                borderWidth: '1px',
                height: 'fit-content'
              }}>
              {/* Hinh */}
              <div className="w-full xl:w-2/5 flex flex-wrap justify-between gap-1">
                <MyGallery />
              </div>
              {/* Thong tin */}
              <div className="w-full xl:w-auto">
                <p className="font-bold text-lg sm:text-2xl text-pink-500"><FontAwesomeIcon icon={faBus} className="text-lg, text-black sm:text-xl" /> PHƯƠNG TRANG</p>
                <p className="my-2 font-bold text-sm sm:text-xl"><FontAwesomeIcon icon={faRoute} className="text-lg sm:text-xl" /><span className="text-green-500"> Hà Nội</span> → <span className="text-red-500"> Hạ Long</span></p>
                <p className="my-2 text-sm sm:text-xl"><FontAwesomeIcon icon={faHourglassStart} className="text-lg sm:text-xl" /> Xuất phát: 2 AM</p>
                <p className="my-2 text-sm sm:text-xl"><FontAwesomeIcon icon={faHourglassEnd} className="text-lg sm:text-xl" /> Thời gian dự kiến: 5 AM</p>
                <p className="font-bold"><span className="text-gray-500 line-through text-sm sm:text-xl">1.000.000đ</span> <span className="text-red-500  text-xl sm:text-xl"> 200.000đ</span></p>
                <div className="text-center">
                  <button className="mt-8 px-8 py-4 rounded-lg bg-red-500 text-white font-bold hover:bg-red-700 duration-150">Đặt Ngay</button>
                </div>
              </div>
            </div>
            <div
              className="w-full sm:w-2/5 flex flex-wrap gap-2 p-5 rounded-lg shadow-sm hover:shadow-md duration-300 "
              style={{
                borderWidth: '1px',
                height: 'fit-content'
              }}>
              {/* Hinh */}
              <div className="w-full xl:w-2/5 flex flex-wrap justify-between gap-1">
                <MyGallery />
              </div>
              {/* Thong tin */}
              <div className="w-full xl:w-auto">
                <p className="font-bold text-lg sm:text-2xl text-pink-500"><FontAwesomeIcon icon={faBus} className="text-lg, text-black sm:text-xl" /> PHƯƠNG TRANG</p>
                <p className="my-2 font-bold text-sm sm:text-xl"><FontAwesomeIcon icon={faRoute} className="text-lg sm:text-xl" /><span className="text-green-500"> Hà Nội</span> → <span className="text-red-500"> Hạ Long</span></p>
                <p className="my-2 text-sm sm:text-xl"><FontAwesomeIcon icon={faHourglassStart} className="text-lg sm:text-xl" /> Xuất phát: 2 AM</p>
                <p className="my-2 text-sm sm:text-xl"><FontAwesomeIcon icon={faHourglassEnd} className="text-lg sm:text-xl" /> Thời gian dự kiến: 5 AM</p>
                <p className="font-bold"><span className="text-gray-500 line-through text-sm sm:text-xl">1.000.000đ</span> <span className="text-red-500  text-xl sm:text-xl"> 200.000đ</span></p>
                <div className="text-center">
                  <button className="mt-8 px-8 py-4 rounded-lg bg-red-500 text-white font-bold hover:bg-red-700 duration-150">Đặt Ngay</button>
                </div>
              </div>
            </div>
            <div
              className="w-full sm:w-2/5 flex flex-wrap gap-2 p-5 rounded-lg shadow-sm hover:shadow-md duration-300 "
              style={{
                borderWidth: '1px',
                height: 'fit-content'
              }}>
              {/* Hinh */}
              <div className="w-full xl:w-2/5 flex flex-wrap justify-between gap-1">
                <MyGallery />
              </div>
              {/* Thong tin */}
              <div className="w-full xl:w-auto">
                <p className="font-bold text-lg sm:text-2xl text-pink-500"><FontAwesomeIcon icon={faBus} className="text-lg, text-black sm:text-xl" /> PHƯƠNG TRANG</p>
                <p className="my-2 font-bold text-sm sm:text-xl"><FontAwesomeIcon icon={faRoute} className="text-lg sm:text-xl" /><span className="text-green-500"> Hà Nội</span> → <span className="text-red-500"> Hạ Long</span></p>
                <p className="my-2 text-sm sm:text-xl"><FontAwesomeIcon icon={faHourglassStart} className="text-lg sm:text-xl" /> Xuất phát: 2 AM</p>
                <p className="my-2 text-sm sm:text-xl"><FontAwesomeIcon icon={faHourglassEnd} className="text-lg sm:text-xl" /> Thời gian dự kiến: 5 AM</p>
                <p className="font-bold"><span className="text-gray-500 line-through text-sm sm:text-xl">1.000.000đ</span> <span className="text-red-500  text-xl sm:text-xl"> 200.000đ</span></p>
                <div className="text-center">
                  <button className="mt-8 px-8 py-4 rounded-lg bg-red-500 text-white font-bold hover:bg-red-700 duration-150">Đặt Ngay</button>
                </div>
              </div>
            </div>
            <div
              className="w-full sm:w-2/5 flex flex-wrap gap-2 p-5 rounded-lg shadow-sm hover:shadow-md duration-300 "
              style={{
                borderWidth: '1px',
                height: 'fit-content'
              }}>
              {/* Hinh */}
              <div className="w-full xl:w-2/5 flex flex-wrap justify-between gap-1">
                <MyGallery />
              </div>
              {/* Thong tin */}
              <div className="w-full xl:w-auto">
                <p className="font-bold text-lg sm:text-2xl text-pink-500"><FontAwesomeIcon icon={faBus} className="text-lg, text-black sm:text-xl" /> PHƯƠNG TRANG</p>
                <p className="my-2 font-bold text-sm sm:text-xl"><FontAwesomeIcon icon={faRoute} className="text-lg sm:text-xl" /><span className="text-green-500"> Hà Nội</span> → <span className="text-red-500"> Hạ Long</span></p>
                <p className="my-2 text-sm sm:text-xl"><FontAwesomeIcon icon={faHourglassStart} className="text-lg sm:text-xl" /> Xuất phát: 2 AM</p>
                <p className="my-2 text-sm sm:text-xl"><FontAwesomeIcon icon={faHourglassEnd} className="text-lg sm:text-xl" /> Thời gian dự kiến: 5 AM</p>
                <p className="font-bold"><span className="text-gray-500 line-through text-sm sm:text-xl">1.000.000đ</span> <span className="text-red-500  text-xl sm:text-xl"> 200.000đ</span></p>
                <div className="text-center">
                  <button className="mt-8 px-8 py-4 rounded-lg bg-red-500 text-white font-bold hover:bg-red-700 duration-150">Đặt Ngay</button>
                </div>
              </div>
            </div>

          </div>
        </div >
      </div >
      <Footer />
    </>

  )
}

export default DetailBusesBooking