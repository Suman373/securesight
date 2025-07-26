import axios from "axios";

export const fetchIncidents = async (resolved) => {
    const response = await axios.get(`/api/incidents?resolved=${resolved}`);
    return response.data;
};