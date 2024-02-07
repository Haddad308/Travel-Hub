/* eslint-disable react/prop-types */
export default function Alert({text}) {
    return (
        <div className="bg-red-100 border mt-5 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{text}</span>
        </div>
    )
}
