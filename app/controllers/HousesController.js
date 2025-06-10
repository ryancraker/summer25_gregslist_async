import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {
  constructor() {
    this.getHouses()
    AppState.on('houses', this.drawHouses)
  }

  async getHouses() {
    console.log('houses controller ready');
    try {
      await housesService.getHouses()
    } catch (error) {
      Pop.error(error, 'ope!', 'we couldn`t find the houses brah')
    }

  }

  drawHouses() {
    console.log('🖌️');
    let houseContent = ''
    const houseListingsElem = document.getElementById('house-listings')
    const houses = AppState.houses
    houses.forEach(house => houseContent += house.houseHtmlTemplate)
    console.log(houseContent);
    houseListingsElem.innerHTML = houseContent

  }
}