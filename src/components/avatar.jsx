/* eslint-disable react/prop-types */
import { Avatar } from "@material-tailwind/react";

export function AvatarWithText(props) {
    return (
        <div className="flex flex-col gap-6  ">
            <div className="flex items-center gap-4">
                <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size={props.size} />
                <div className="text-left" >
                    {props.children}
                </div>
            </div>

        </div>
    );
}