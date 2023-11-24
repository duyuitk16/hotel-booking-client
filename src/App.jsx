import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import AccountPage from './pages/AccountPage';
import ProfilePage from './pages/ProfilePage';
import PlacesPage from './pages/PlacesPage';
import PlacesFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/PlacePage';
import BookingsPage from './pages/BookingsPage';
import BookingPage from './pages/BookingPage';
import BusesBooking from './pages/BusesBookingPage/BusesBooking';
import DetailBusesBooking from './pages/BusesBookingPage/DetailBusesBooking';
import HotelList from '../src/pages/HotelList'
// https://www.youtube.com/watch?v=MpQbwtSiZ7E&t=13572s

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL//'http://localhost:4000'
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/places" element={<PlacesPage />} />

          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
        </Route>

        <Route path="/booking-car" element={<BusesBooking />} />
        <Route path="/detail-booking-car" element={<DetailBusesBooking />} />


        {/* chưa */}
        <Route path="/hotels" element={<HotelList />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
