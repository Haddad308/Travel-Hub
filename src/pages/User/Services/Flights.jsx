import FlightView from "../../../components/View/FlightView";
import em from "../../../assets/images/The Top 10 Airline Logos That Soar Above The Rest In 2023 1.svg"
import em2 from "../../../assets/images/download (14) 1.svg"

export default function Flights() {
    return (
        <div className='flex flex-col  gap' >
            <FlightView img={em} />
            <FlightView img={em2} />
            <FlightView img={em} />
            <FlightView img={em2} />
        </div>
    )
}
