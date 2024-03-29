/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { TabsComponent } from "../../components/Tabs/Tabs";
import ReservationCard from "../../components/Reservation/ReservationCard";

export default function UserReservation() {
  const reservations = [
    {
      "AgencyImg": "",
      "AgencyName": "Triage1",
      "AgencyEmail": "Agency@gmail.com",
      "AgencyContact": "+201281982770",
      "status": "Reserved",
      "info1": "Hotel",
      "info2": "4 Rooms in Hilton Hotel",
      "info3": "2 Nights"
    },
    {
      "AgencyName": "Triage2",
      "AgencyEmail": "Agency@gmail.com",
      "AgencyContact": "+201281982770",
      "status": "Cancelled",
      "info1": "Hotel",
      "info2": "4 Rooms in Hilton Hotel",
      "info3": "2 Nights"
    },
    {
      "AgencyName": "Triage3",
      "AgencyEmail": "Agency@gmail.com",
      "AgencyContact": "+201281982770",
      "status": "Pending",
      "info1": "Hotel",
      "info2": "4 Rooms in Hilton Hotel",
      "info3": "2 Nights"
    },
    {
      "AgencyName": "Triage4",
      "AgencyEmail": "Agency@gmail.com",
      "AgencyContact": "+201281982770",
      "status": "Pending",
      "info1": "Hotel",
      "info2": "4 Rooms in Hilton Hotel",
      "info3": "2 Nights"
    },
    {
      "AgencyName": "Triage5",
      "AgencyEmail": "Agency@gmail.com",
      "AgencyContact": "+201281982770",
      "status": "Pending",
      "info1": "Hotel",
      "info2": "4 Rooms in Hilton Hotel",
      "info3": "2 Nights"
    },
    {
      "AgencyName": "Triage6",
      "AgencyEmail": "Agency@gmail.com",
      "AgencyContact": "+201281982770",
      "status": "Cancelled",
      "info1": "Hotel",
      "info2": "4 Rooms in Hilton Hotel",
      "info3": "2 Nights"
    },
    {
      "AgencyName": "Triage7",
      "AgencyEmail": "Agency@gmail.com",
      "AgencyContact": "+201281982770",
      "status": "Pending",
      "info1": "Hotel",
      "info2": "4 Rooms in Hilton Hotel",
      "info3": "2 Nights"
    },
  ]
  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Reserved",
      value: "reserved",
    },
    {
      label: "Pending",
      value: "pending",
    },
    {
      label: "Cancelled",
      value: "cancelled",
    }
  ];

  const [filtered, setFiltered] = useState([]);
  const filterReservation = useCallback((reservationStatus) => {
    if (reservationStatus === "All") {
      setFiltered(reservations);
    } else {
      const filteredReservations = reservations.filter(reservation => reservation.status === reservationStatus);
      setFiltered(filteredReservations);
    }
  }, [reservations]);

  useEffect(() => {
    filterReservation("All");
  }, [])

  return (
    <div className="p-6">
      <TabsComponent filter={filterReservation} TABS={TABS} search={false}>
        <div className="grid grid-cols-2 gap-3 px-5" >
          {filtered?.map(({ AgencyName, AgencyEmail, AgencyContact, status, info1, info2, info3 }, index) => {
            return <ReservationCard key={index} AgencyContact={AgencyContact} AgencyName={AgencyName} AgencyEmail={AgencyEmail}
              info1={info1} info2={info2} info3={info3} status={status} />
          })}
        </div>
      </TabsComponent>
    </div>
  )

}
