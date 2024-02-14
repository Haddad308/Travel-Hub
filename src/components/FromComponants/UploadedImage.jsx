/* eslint-disable react/prop-types */
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/solid'

export default function UploadedImage({ imageName, index, files, setFiles }) {

    const deleteFile = (files, setFiles, idx) => {
        // Check if files is iterable (in this case, an array)
        console.log(files);
        if (!Array.isArray(files)) {
            console.error("Files is not an array.");
            return;
        }

        // Make a copy of the current files array
        const updatedFiles = [...files];

        // Remove the file at the specified index
        updatedFiles.splice(idx, 1);

        // Update the state with the new files array
        setFiles(updatedFiles);
    }

    return (
        <div id="Uploaded Image" className="flex items-center justify-between  w-4/5 p-3 border-4  rounded-md">
            <div className="flex items-center gap-2">
                <PhotoIcon className="w-7 h-7" />
                <p className="" >{imageName}</p>
            </div>
            <XMarkIcon className="w-7 h-7 self-end cursor-pointer" onClick={() => { deleteFile(files, setFiles, index) }} />
        </div>
    )
}
