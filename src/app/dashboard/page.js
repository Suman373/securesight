"use client";

import { fetchCameras, fetchIncidents, resolveIncident } from "@/utils/api";
import { convertISOtoDate, convertISOtoTimeStamp, incidentIconMap } from "@/utils/constants";
import { AlertTriangle, CalendarDays, Cctv, CheckCheck, ChevronRight, Clock, Disc2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

const Dashboard = () => {

    const [unresolvedIncidents, setUnresolvedIncidents] = useState([]);
    const [resolvedIncidents, setResolvedIncidents] = useState([]);
    const [currentIncidentId, setCurrentIncidentId] = useState(null);
    const [cameras, setCameras] = useState([]);

    const currentIncident = useMemo(() => unresolvedIncidents.find(i => i.id === currentIncidentId), [unresolvedIncidents, currentIncidentId]);
    const currentCameraId = useMemo(() => currentIncident?.camera.id ?? null, [currentIncident]);


    const handleResolveClick = async (incidentId) => {
        try {
            const updatedIncident = await resolveIncident(incidentId);
            if (!updatedIncident) {
                toast.error("Could not resolve incident");
                return;
            }
            toast.success("Incident resolved");
            if (updatedIncident.resolved) {
                setUnresolvedIncidents(prev => {
                    const updated =  prev.filter(i => i.id !== incidentId);
                    if(updated.length>0) {
                        setCurrentIncidentId(updated[0].id);
                    }else {
                        setCurrentIncidentId(null);
                    }
                    return updated;
                });
                setResolvedIncidents(prev => [updatedIncident, ...prev]);
            } else {
                setResolvedIncidents(prev => prev.filter(i => i.id !== incidentId));
                setUnresolvedIncidents(prev => [updatedIncident, ...prev]);
            }
        } catch (error) {
            console.log("Error resolving incident:", error);
            toast.error("Failed to resolve incident");
        }
    }


    const fetchAllCameras = async () => {
        try {
            const camerasResponse = await fetchCameras();
            if (!camerasResponse || camerasResponse.length === 0) {
                toast.error("No cameras found");
                return;
            }
            console.log(camerasResponse);
            setCameras(camerasResponse);
        } catch (error) {
            console.error("Error fetching cameras:", error);
            toast.error("Failed to fetch cameras");
        }
    };

    const fetchResolvedIncidents = async () => {
        try {
            const incidentsResponse = await fetchIncidents(true);
            if (!incidentsResponse || incidentsResponse.length === 0) {
                toast.error("No resolved incidents found");
                return;
            }
            console.log(incidentsResponse);
            setResolvedIncidents(incidentsResponse);
        } catch (error) {
            console.error("Error fetching incidents:", error);
            toast.error("Failed to fetch incidents");
        }
    };

    const fetchUnresolvedIncidents = async () => {
        try {
            const incidentsResponse = await fetchIncidents(false);
            if (!incidentsResponse || incidentsResponse.length === 0) {
                toast.error("No unresolved incidents found");
            }
            console.log(incidentsResponse);
            setUnresolvedIncidents(incidentsResponse);
            setCurrentIncidentId(incidentsResponse[0].id);
        } catch (error) {
            console.error("Error fetching incidents:", error);
            toast.error("Failed to fetch incidents");
        }
    };



    const handleIncidentChange = (incidentId) => {
        if (incidentId === currentIncidentId) return;
        setCurrentIncidentId(incidentId);
    }


    useEffect(() => {
        fetchUnresolvedIncidents();
        fetchResolvedIncidents();
        fetchAllCameras();
    }, []);

    return (
        <div className="min-h-screen p-6">
            <div className="h-[60vh] max-w-full mx-auto grid [grid-template-columns:55%_45%] gap-4">
                {/* Left section for video player*/}
                <div className="relative aspect-video bg-neutral-900 rounded-lg shadow p-4 z-20">
                    <img className="rounded-md top-0 left-0 h-[100%] w-[100%] absolute -z-10" src={currentIncident?.thumbnailUrl} alt="incident" />
                    <div className="absolute top-4 left-4 space-y-2 z-10 text-neutral-300">
                        <span className="flex items-center gap-1 bg-neutral-800  text-sm font-medium px-2 py-1 rounded-md">
                            <CalendarDays size={14} /> {convertISOtoDate(currentIncident?.tsStart)} - {convertISOtoTimeStamp(currentIncident?.tsStart)}
                        </span>
                    </div>
                    <div className="absolute bottom-4 left-4 space-y-2 z-10 text-white">
                        <span className="flex items-center gap-1 bg-neutral-800  text-sm font-medium px-2 py-1 rounded-md">
                            <Disc2 className="text-red-700" size={14} /> Camera - {currentIncident?.camera.id}
                        </span>
                    </div>

                    <div className="absolute h-fit grid grid-cols-2 gap-2 w-1/3 bottom-4 right-4 space-y-2 z-10 text-white">
                        {cameras?.filter((camera) => camera.id !== currentCameraId).map((camera, index) => (
                            <div className="text-sm flex flex-col" key={camera.id}>
                                <div className="bg-neutral-900 text-neutral-300 w-full h-fit py-1 px-2">Camera - {camera.id}</div>
                                <img className="max-h-[80px] w-full rounded-md" src='/thumbnail/1.png' alt="incident" />
                            </div>
                        ))
                        }
                    </div>
                </div>

                {/* Right panel for incidents list */}
                <div className="bg-neutral-900 rounded-lg shadow overflow-y-scroll">
                    <div className="flex justify-between sticky top-0 z-10 bg-neutral-900 p-4">
                        <h2 className="flex items-center gap-1 text-xl text-neutral-200 font-semibold mb-2"> <AlertTriangle className="h-8 w-8 text-red-400 p-2 bg-red-800 rounded-full" /> {unresolvedIncidents.length} Unresolved {unresolvedIncidents.length <= 1 ? "Incident" : "Incidents"}
                        </h2>
                        <div>
                            <p className="flex items-center gap-1 text-sm rounded-xl px-3 py-1 bg-black text-neutral-200 border border-neutral-400">
                                <CheckCheck className="text-green-500" size={18} /> <span>{resolvedIncidents.length} resolved {resolvedIncidents.length <= 1 ? "Incident" : "Incidents"}</span>
                            </p>
                        </div>
                    </div>
                    <ul className="space-y-2">
                        {/* incident items */}
                        {
                            unresolvedIncidents?.length > 0 && unresolvedIncidents.map((incident, index) => (
                                <li key={incident.id} className="flex h-22 items-center justify-between p-2 rounded">
                                    <div
                                        onClick={() => handleIncidentChange(incident.id)}
                                        className="flex items-center justify-start gap-2 w-2/3 p-1 cursor-pointer">
                                        <img className="h-[80px] w-[120px] rounded-md" src={incident.thumbnailUrl} alt="incident" />
                                        <div className="flex flex-col items-start justify-between gap-1 p-1">
                                            <div className="flex items-center justify-start gap-1">
                                                {incidentIconMap[incident.type]}
                                                <p className="text-base text-neutral-300 font-semibold">{incident.type}</p>
                                            </div>
                                            <div className="text-sm text-neutral-300  w-full">
                                                <p className="flex items-center gap-1 my-1"><Cctv size={18} /> {incident?.camera?.name}</p>
                                                <p className="flex items-center gap-1"><Clock size={18} /> {convertISOtoTimeStamp(incident.tsStart)} - {convertISOtoTimeStamp(incident.tsEnd)} on {convertISOtoDate(incident.tsStart)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 flex items-center justify-end px-4">
                                        <p
                                        onClick={()=> handleResolveClick(incident.id)}
                                        className="flex items-center justify-start gap-1 text-amber-300 cursor-pointer"><span>Resolve</span>
                                            <ChevronRight />
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;