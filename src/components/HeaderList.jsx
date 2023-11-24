import FlightDropdDown from "./DropDown/FlightDropDown";
import TransportDropDown from "./DropDown/TransportDropDown";

export default function HeaderList() {
    return (
        <div>
            <div className="flex my-10 justify-center gap-4 flex-wrap">
                <div className="flex gap-2 rounded-full items-center cursor-pointer px-2 bg-pink-300">
                    <svg className="h-7 w-7 text-black ml-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="5" cy="18" r="3" />
                        <circle cx="19" cy="18" r="3" />
                        <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
                        <circle cx="17" cy="5" r="1" />
                    </svg>
                    <div className="mr-2 text-center flex items-center justify-center">
                        Rental Car
                    </div>
                </div>
                <div>
                    <FlightDropdDown />
                </div>
                <div >
                    <TransportDropDown />
                </div>
            </div>
        </div>
    );
}