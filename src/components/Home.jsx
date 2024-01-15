import { SortableTable } from "./Table";

export default function Home() {
    return (
        <div className="relative w-[calc(100%-300px)] left-[300px] bg-blue-gray-500">
            <SortableTable></SortableTable>
        </div>
    )
}
