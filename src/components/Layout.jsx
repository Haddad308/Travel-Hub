import { Outlet } from 'react-router-dom'
import { Sidebar } from './sideBar'

export default function Layout() {
    return (
        <div>
            <Sidebar/>
            <div className="relative w-[calc(100%-300px)] left-[300px] bg-blue-gray-500">
                <Outlet/>
            </div>
        </div>
    )
}
