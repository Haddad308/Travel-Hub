/* eslint-disable react/prop-types */
import { StarIcon } from "@heroicons/react/24/solid"
import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"

export default function HotelView({ img, hotelName, stars, numberOfRooms }) {
    return (
        <div className="flex justify-between gap-6 p-3 border-2 rounded-xl m-2 " >
            <div className="flex  gap-6 justify-center  " >
                <div className="w-64  " >
                    <img
                        className="w-full rounded-lg object-cover object-center"
                        src={img}
                        alt="nature image"
                    />
                </div>
                <div className="flex flex-col gap-3" >
                    <h1 className="font-semibold" >{hotelName}</h1>
                    <div className="flex " >
                        {Array.from({ length: stars }).map((_, index) => (
                            <StarIcon key={index} color="#FFCD6B" width={30} />
                        ))}
                        {Array.from({ length: 5 - stars }).map((_, index) => (
                            <StarIcon key={index} color="#F2F2F2" width={30} />
                        ))}
                    </div>
                    <div className="flex gap-4" >
                        <div className="text-[#415A77] p-1 px-2 bg-[#f6f0f0] flex justify-center rounded-lg " >Free cancelation</div>
                        <div className="text-[#415A77] p-1 px-2 bg-[#f6f0f0] flex justify-center rounded-lg " >Parking</div>
                        <div className="text-[#415A77] p-1 px-2 bg-[#f6f0f0] flex justify-center rounded-lg " >WiFi</div>
                    </div>
                    <h3 className="text-[black2]" ><span className="text-black" >{numberOfRooms}</span> Room available with this price</h3>
                </div>
            </div>
            <div id="right part" className="text-center w-1/6 flex flex-col justify-center " >
                <div className="mb-4" >
                    <h1 className="font-semibold" >1500 EGP</h1>
                    <h1>Per Night</h1>
                </div>
                <Link to={"/details"} >
                    <Button className="bg-[#616CA8]" >Reserve Room</Button>

                </Link>
            </div>
        </div>
    )
}
