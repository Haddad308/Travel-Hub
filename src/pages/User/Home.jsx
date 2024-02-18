import { useContext } from "react";
import { ServicesTab } from "../../components/Tabs/ServicesTabs";
import Hotels from "../../components/ServicesComponents/Hotels/Hotels";
import { UserSelectedServiceContext } from "../../contexts/UserServiceContext";
import Flights from "../../components/ServicesComponents/Flights/Flights";

export default function Home() {

  const TABS = [
    {
      label: "Hotels",
      value: "hotels",
    },
    {
      label: "hotel-Rooms",
      value: "rooms",
    },
    {
      label: "Flights",
      value: "flights",
    },
    {
      label: "Safari",
      value: "safari",
    },
    {
      label: "Cruises",
      value: "cruises",
    },
    {
      label: "transportations",
      value: "transportation",
    },
    {
      label: "standard-packages",
      value: "StandardPackage",
    },
    {
      label: "Packages",
      value: "CustomPackage",
    }
  ];
  const [UserSelectedService, ] = useContext(UserSelectedServiceContext)


  const components = {
    "Hotels": <Hotels /> ,
    "hotel-Rooms": "",
    "Flights": <Flights />,
    "Safari": "",
    "Cruises": "",
    "transportations": "",
    "standard-packages": "",
    "CustomPackage": "",
  }

  console.log(UserSelectedService);
  return (
    <div className="p-6">
      <ServicesTab TABS={TABS} search={false}   >
        {components[UserSelectedService]}
      </ServicesTab>
    </div>
  )
}
