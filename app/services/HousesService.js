import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js";

class HousesService {
  async getHouses() {
    const response = await api.get('api/houses')
    const houses = response.data.map(pojo => new House(pojo))
    AppState.houses = houses
  }
}
export const housesService = new HousesService()