/* eslint-disable react/prop-types */

import { Avatar } from "@nextui-org/react";

export function AvatarWithText({ img, size, children, isBordered, color }) {

    return (

        <div className="flex flex-col gap-6  ">
            <div className="flex items-center gap-4">
                {img ? <Avatar src={img} alt="avatar" size={size} isBordered={isBordered} color={color} />
                    : <Avatar showFallback src='https://images.unsplash.com/broken' isBordered={isBordered} color={color} />}
                <div className="text-left" >
                    {children}
                </div>
            </div>

        </div>
    );
}