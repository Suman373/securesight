import { DoorOpen, ScanFace } from "lucide-react";
import { FaGun } from "react-icons/fa6";

export const incidentIconMap = {
    "Gun Threat": <FaGun className="text-red-500" />,
    "Unauthorized Access": <DoorOpen className="text-orange-400" />,
    "Face Recognized": <ScanFace className="text-green-200" />
}


export const convertISOtoTimeStamp = (ISO) => {
    const date = new Date(ISO);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

export const convertISOtoDate = (ISO) => {
    const date = new Date(ISO);
    return date.toLocaleDateString();
}