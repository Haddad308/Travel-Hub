import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import UserBalance from "../components/UserBalance";
import { Input } from "@material-tailwind/react";

export default function UsersBalance() {
    return (
        <div>
            <div className="m-6 bg-white rounded-3xl" >
                <div className="p-4" >
                    <div className="flex flex-col justify-between  px-1" >
                        <h1 className="font-bold" >Users Balance</h1>
                        <div className="w-full md:w-72 mt-3">
                            <Input
                                label="Search"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 mt-5 gap-5" >
                        <UserBalance />
                        <UserBalance />
                        <UserBalance />
                        <UserBalance />
                        <UserBalance />
                        <UserBalance />
                        <UserBalance />
                        <UserBalance />
                        <UserBalance />
                        <UserBalance />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
