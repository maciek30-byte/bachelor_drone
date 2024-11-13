import axios from "axios";

const BASE_URL = "http://localhost:3000/";

export class MissionService {
  
  static async getAllMissions() {
    try {
        const response = await axios.get(`${BASE_URL}/missions`);
        return response.data;
    } catch (error) {
        console.error("Error fetching missions:", error);
        throw error;
    }
  }
}