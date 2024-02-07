import { Link } from "react-router-dom";
import { AvatarWithText } from "./avatar";

export default function UserBalance() {
    return (
        <Link to={"/userbalance"} >
            <div className=" p-5 rounded-2xl border-2 " >
                <AvatarWithText size={"xl"} img={"https://docs.material-tailwind.com/img/face-2.jpg"}>
                    <p className="font-semibold " >Travel agency</p>
                    <p className="text-gray-600">agency@ca.com</p>
                    <h2 className="mt-2  font-bold" >50,000$</h2>
                </AvatarWithText>
            </div>
        </Link>
    )
}
