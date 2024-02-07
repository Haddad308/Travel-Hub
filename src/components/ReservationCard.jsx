/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { AvatarWithText } from "./avatar";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function ReservationCard({ AgencyName, AgencyEmail, AgencyContact, status, info1, info2, info3 }) {
    return (
        <div className=" flex flex-col mb-4 rounded-3xl border-grey border-2 " >
            <div className=" flex justify-between p-3">
                {status === "Pending" ? <p className="flex items-center justify-between text-yellow-700" ><ClockIcon className="w-4 h-4" /> &nbsp;Pending</p>
                    : status === "Cancelled" ? <p className="flex items-center justify-between text-red-500" ><ClockIcon className="w-4 h-4" /> &nbsp;Cancelled</p> : <p className="flex items-center justify-between text-green-500" ><ClockIcon className="w-4 h-4" /> &nbsp;Reserved</p>}
                <p>13/1/2024</p>
            </div>
            <div className=" flex justify-between items-center px-6 " >
                <AvatarWithText size={"lg"} img={"https://docs.material-tailwind.com/img/face-2.jpg"} >
                    <h1 className="font-bold mb-1"  >
                        {AgencyName}
                    </h1>
                    <p className="mb-1"  >
                        {AgencyEmail}
                    </p>
                    <p  >
                        {AgencyContact}
                    </p>
                </AvatarWithText>
                <div className="bg-gray-300 w-[2px] h-12 mx-4 flex items-center">
                    <span className="text-gray-600">&nbsp;</span>
                </div>
                <div>
                    <h1 className="font-bold mb-1" >{info1}</h1>
                    <p className="mb-1">{info2}</p>
                    <p>{info3}</p>
                </div>
            </div>
            <div className="flex justify-center mt-3 mb-5  " >
                <Button className="bg-[#616CA8] w-96" size="md">Check In</Button>
            </div>
        </div>
    )
}
