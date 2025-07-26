import axios from "axios";

export const fetchIncidents = async (resolved) => {
    const response = await axios.get(`/api/incidents?resolved=${resolved}`);
    return response.data;
};

export const fetchCameras = async () => {
    const response = await axios.get(`/api/cameras`);
    return response.data;
}

export const resolveIncident = async(incidentId)=>{
    const response = await axios.patch(`/api/incidents/${incidentId}/resolve`);
    return response.data;
}