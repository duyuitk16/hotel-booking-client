import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import HeaderList from "./components/HeaderList";
import SearchBar from "./components/SearchBar";
export default function Header() {
    const { user } = useContext(UserContext);
    const { id } = useParams();
    return (
        <div>
            <div style={{
                background: `rgb(238, 174, 202)`,
                backgroundImage: `radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(191, 181, 219, 1) 50%, rgba(193, 181, 218, 1) 50%, rgba(148, 187, 233, 1) 100%)`
            }}
            >
                <header className='flex flex-wrap justify-center items-center p-2 gap-2 max-w-7xl mx-auto'
                >
                    {/* Logo */}
                    <Link to={'/'} className='flex items-center gap-1' style={{ minWidth: '123px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        <span className='font-bold text-xl'>Duy Múp</span>
                    </Link>

                    <SearchBar />

                    {/* Account */}
                    <Link to={user ? '/account/places' : '/login'} className='flex items-center gap-2 borderrounded-xl p-3 h-fit'>
                        {/* <div className="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div> */}

                        <div className='bg-black text-white rounded-full p-1 flex justify-center items-center' >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                        </div>
                        {!!user && (
                            <div className="font-bold">
                                {user?.data?.name || user?.name}
                            </div>
                        )}
                    </Link>
                </header>
            </div>

            <div>
                <HeaderList />
            </div>
        </div>
    )
}