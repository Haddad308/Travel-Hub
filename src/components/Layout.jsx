import { Outlet } from 'react-router-dom'
import { Sidebar } from './sideBar'

export default function Layout() {
    return (
        <div>
            <Sidebar />
            <div className="relative w-[calc(100%-250px)] left-[250px] ">
                <div className='h-[70px]  '>
                    <h1 className='text-2xl  font-semibold p-5	'>Page Name</h1>
                </div>
                <div id='Page-Content' className='overflow-x-hidden h-[calc(100vh-70px)] bg-gray-200 ' >
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
