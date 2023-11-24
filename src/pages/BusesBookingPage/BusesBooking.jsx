import Header from "./Component/Header";
import danang from "../../../public/da_nang.jpg";
import halong from "../../../public/ha_long.jpg";
import sapa from "../../../public/sa_pa.jpg";
import hochiminh from "../../../public/ho_chi_minh.jpg";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";


export default function BusesBooking() {
    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto">

                {/* Where to go */}
                <div className="w-full">
                    <div className="text-center my-10 font-bold text-2xl">
                        WHERE TO GO
                    </div>
                    <div className="flex w-full justify-between flex-wrap sm:flex-nowrap gap-2 px-1">
                        <Link to={'/detail-booking-car'} className="w-1/4" >
                            <div
                                className=" rounded cursor-pointer shadow-sm hover:-translate-y-5 hover:shadow-md duration-300"
                                style={{
                                    borderWidth: '1px',
                                    // boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                }}>
                                <div className="absolute flex text-white m-2">
                                    VietNam
                                </div>
                                <div>
                                    <img src={danang} alt="DaNang" />
                                </div>

                                <div className="p-2">
                                    <p className="font-bold">Ha noi → Da nang</p>
                                    <p>From 1.875.000đ</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={'/detail-booking-car'} className="w-1/4" >
                            <div
                                className="rounded cursor-pointer shadow-sm hover:-translate-y-5 hover:shadow-md duration-300"
                                style={{
                                    borderWidth: '1px',
                                    // boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                }}>
                                <div className="absolute flex text-white m-2">
                                    VietNam
                                </div>
                                <div>
                                    <img src={halong} alt="HaLong" />
                                </div>

                                <div className="p-2">
                                    <p className="font-bold">Ha noi → Ha Long</p>
                                    <p>From 1.875.000đ</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={'/detail-booking-car'} className="w-1/4" >
                            <div
                                className="rounded cursor-pointer shadow-sm hover:-translate-y-5 hover:shadow-md duration-300"
                                style={{
                                    borderWidth: '1px',
                                    // boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                                }}>
                                <div className="absolute flex text-white m-2">
                                    VietNam
                                </div>
                                <div>
                                    <img src={sapa} alt="SaPa" />
                                </div>

                                <div className="p-2">
                                    <p className="font-bold">Ha noi → Sa Pa</p>
                                    <p>From 1.875.000đ</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={'/detail-booking-car'} className="w-1/4" >   <div
                            className="rounded cursor-pointer shadow-sm hover:-translate-y-5 hover:shadow-md duration-300"
                            style={{
                                borderWidth: '1px',
                                // boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
                            }}>
                            <div className="absolute flex text-white m-2">
                                VietNam
                            </div>
                            <div>
                                <img src={hochiminh} alt="HoChiMinh" />
                            </div>
                            <div className="p-2">
                                <p className="font-bold">Ha noi → Ho Chi Minh</p>
                                <p>From 1.875.000đ</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div >

                {/* Route */}
                <div className="w-full mt-5 bg-white shadow p-4">
                    <div className="border-b-4 border-blue-500 mt-4 text-2xl font-bold text-cyan-400">
                        Popular Route in Thailand
                    </div>
                    <div className="flex justify-between">
                        <div className="grid">
                            <div className="mt-4">
                                Bangkok → Chiang Mai
                            </div>
                            <div className="mt-4">
                                Bangkok → Phuket
                            </div>
                            <div className="mt-4">
                                Bangkok → Krabi
                            </div>
                        </div>
                        <div className="grid">
                            <div className="mt-4">
                                Bangkok → Chiang Mai
                            </div>
                            <div className="mt-4">
                                Bangkok → Phuket
                            </div>
                            <div className="mt-4">
                                Bangkok → Krabi
                            </div>
                        </div>
                        <div className="grid">
                            <div className="mt-4">
                                Bangkok → Chiang Mai
                            </div>
                            <div className="mt-4">
                                Bangkok → Phuket
                            </div>
                            <div className="mt-4">
                                Bangkok → Krabi
                            </div>
                        </div>
                        <div className="grid">
                            <div className="mt-4">
                                Bangkok → Chiang Mai
                            </div>
                            <div className="mt-4">
                                Bangkok → Phuket
                            </div>
                            <div className="mt-4">
                                Bangkok → Krabi
                            </div>
                        </div>

                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}