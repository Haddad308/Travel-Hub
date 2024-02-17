import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';

export default function Reports() {
  const [clicked,SetClicked] = useState(false)

  const click = ()=>{
    SetClicked(!clicked)
  }

  return (
    <div className="m-6 rounded-lg p-6 bg-white">
      <h2 className='text-2xl font-semibold' >Generate Report</h2>
      <div className='flex mt-6 gap-7 items-center' >
        <div className="flex justify-between items-center">
          <div className="w-full">
            <div className="w-72">
              <div className="py-3">
                <label htmlFor="firstName">Report Name</label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                />
              </div>

              <div>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose a Report</option>
                  <option value="US">Monthly Report</option>
                  <option value="CA">Weekly Report</option>
                  <option value="FR">Daily Report </option>
                </select>
              </div>

              <div className="py-3">
                <Button onClick={() => {
                  click()
                }} type="submit">Submit</Button>
              </div>
            </div>

          </div>
        </div>
        {clicked ? <div className='flex items-center gap-2 border-4 rounded-xl p-2' >
          <img
            className='w-10'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png" alt="" />
          <p className='text-xl'  >Monthly Report 2020.pdf</p>
          <  ArrowDownOnSquareIcon width={25} />
        </div>:"" }
        
      </div>
    </div>
  );
}
