import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js";

class HousesService {
  async getHouses() {
    const response = await api.get('api/houses')
    const houses = response.data.map(pojo => new House(pojo))
    AppState.houses = houses
  }

  async submitHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    console.log(response.data);
    const newHouse = new House(response.data)
    AppState.houses.push(newHouse)
  }

  async deleteHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    console.log(response.data);
    const house = AppState.houses
    const houseIndex = house.findIndex(house => house.id = houseId)
    house.splice(houseIndex, 1)
  }
}
export const housesService = new HousesService()