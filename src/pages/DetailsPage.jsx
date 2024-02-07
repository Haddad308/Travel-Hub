import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { PencilSquareIcon } from "@heroicons/react/24/solid"
import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import mainImage from "../assets/images/tzoo.hd.15674.2803.755356.HiltonAlexandriaOldTown_CP.jpg"
import img1 from "../assets/images/5a79fd61.webp"
import img2 from "../assets/images/original.jpg"
import img3 from "../assets/images/jhbbr-guestrooms-6202-hor-clsc.jpg"
import img4 from "../assets/images/th (8).jpeg"
export default function DetailsPage() {
  return (
    <div className="flex flex-col bg-white p-4 border-t-2  border-gray-500">
      {/* Heading */}
      <Link to={"/services"} className=" h-6 mb-4 w-40">
        <div className="flex items-center gap-2  mb-5 ">
          <ChevronLeftIcon className="w-5 h-5" />
          <h1 className="font-bold font">Service Name</h1>
        </div>
      </Link>
      {/* Gallery with details */}
      <div className="grid grid-cols-4 space-x-10 items-center" >
        <div className="flex flex-col items-center ">
          <img
            className=" rounded-lg object-cover object-center"
            src={mainImage}
            alt="nature image"
          />
          <Button className="mt-4 w-30 bg-transparent text-[#4F4F4F] shadow-none border-dashed border-2 flex gap-2" >
            <PencilSquareIcon className="w-4" />
            <p>
              Edit Hotel
            </p>
          </Button>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 col-span-3 gap-4 mb-12" >
          <div className="">
            <h1 className="font-semibold text-[#4F4F4F] mb-1 " >Hotel Name</h1>
            <p className="font-bold">Hilton Woodcliff Lake</p>
          </div>
          <div className="">
            <h1 className="font-semibold text-[#4F4F4F] mb-1 " >Service Code</h1>
            <p className="font-bold" >#25498</p>
          </div>
          <div className="">
            <h1 className="font-semibold text-[#4F4F4F] mb-1 ">Total Rooms</h1>
            <p className="font-bold">30</p>
          </div>
          <div className="">
            <h1 className="font-semibold text-[#4F4F4F] mb-1 ">Reviews</h1>
            <p className="font-bold">Very Good</p>
          </div>
          <div className="">
            <h1 className="font-semibold text-[#4F4F4F] mb-1 ">Location</h1>
            <p className="font-bold">Sidi Gaber, Alexandria</p>
          </div>
          <div className="">
            <h1 className="font-semibold text-[#4F4F4F] mb-1 ">Price</h1>
            <p className="font-bold">250$</p>
          </div>
        </div>
      </div>
      <div className="mt-7" >
        <h1 className="font-bold mb-1" >About Hotel</h1>
        <p className="text-[#4F4F4F]" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sapiente consectetur, quibusdam mollitia numquam dolore accusamus natus nisi! Necessitatibus ea consequuntur, distinctio accusantium perspiciatis fugiat aperiam sit, debitis, dolorem sapiente placeat eos facilis deserunt ipsam sequi modi incidunt! Obcaecati vel iusto totam autem dignissimos minus placeat provident voluptatibus. Rerum consequatur labore deserunt ipsa ea ex itaque at sit. Dignissimos quod ratione magni nobis. Voluptas ipsum exercitationem amet obcaecati accusantium, corporis eveniet consequuntur perferendis delectus nobis doloremque distinctio iure ducimus, ipsam, itaque necessitatibus labore tenetur mollitia facere dolorum quas nostrum? Mollitia repudiandae aspernatur necessitatibus aliquam! Praesentium quia veniam sint dolorem eos.</p>
      </div>
      <div className="mt-7" >
        <h1 className="font-bold mb-2" >Hotel Images</h1>
        <div className="grid grid-cols-4 gap-3">
          <img
            className=" rounded-lg object-cover object-center  h-full"
            src={img1}
            alt="nature image"
          />
          <img
            className=" rounded-lg object-cover object-center  h-full"
            src={img2}
            alt="nature image"
          />
          <img
            className=" rounded-lg object-cover object-center  h-full"
            src={img3}
            alt="nature image"
          />
          <img
            className=" rounded-lg object-cover object-center h-full"
            src={img4}
            alt="nature image"
          />
        </div>
      </div>
    </div>
  )
}
