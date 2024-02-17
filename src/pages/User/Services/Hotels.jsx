import HotelView from '../../../components/View/HotelView'
import mainImage from "../../../assets/images/b43dedc5.webp"
import mainImage2 from "../../../assets/images/jhbbr-guestrooms-6202-hor-clsc.jpg"
import mainImage3 from "../../../assets/images/tzoo.hd.15674.2803.755356.HiltonAlexandriaOldTown_CP.jpg"

export default function Hotels() {
    return (
        <div className='flex flex-col' >
            <HotelView img={mainImage} hotelName={"Hilton Woodcliff Lake hotel"} stars={5} numberOfRooms={5} />
            <HotelView img={mainImage2} hotelName={"Grand Kadri Hotel By Cristal Lebanon"} stars={3} numberOfRooms={10} />
            <HotelView img={mainImage3} hotelName={"Monte Cassino"} stars={4} numberOfRooms={2} />
            <HotelView img={mainImage} hotelName={"Hilton Woodcliff Lake hotel"} stars={2} numberOfRooms={6} />
            <HotelView img={mainImage2} hotelName={"Grand Kadri Hotel By Cristal Lebanon"} stars={5} numberOfRooms={20} />
            <HotelView img={mainImage3} hotelName={"Monte Cassino"} stars={1} numberOfRooms={5} />
        </div>
    )
}
