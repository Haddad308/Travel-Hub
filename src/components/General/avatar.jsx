/* eslint-disable react/prop-types */
import { Avatar } from "@material-tailwind/react";

export function AvatarWithText({img,size,children}) {
    return (
        <div className="flex flex-col gap-6  ">
            <div className="flex items-center gap-4">
                <Avatar src={img} alt="avatar" size={size} />
                <div className="text-left" >
                    {children}
                </div>
            </div>

        </div>
    );
}