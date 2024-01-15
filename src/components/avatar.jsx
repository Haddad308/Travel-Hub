import { Avatar, Typography } from "@material-tailwind/react";

export function AvatarWithText() {
    return (
        <div className="flex flex-col gap-6 ">
            <div className="flex items-center gap-4">
                <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="md" />
                <div className="text-left" >
                    <Typography variant="h6" color="gray">
                        Lania Andrew
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                        lania.andrew@gmail.com
                    </Typography>
                </div>
            </div>
            
        </div>
    );
}