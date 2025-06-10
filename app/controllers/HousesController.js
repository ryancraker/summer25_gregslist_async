import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
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
    let houseContent = ''
    const houseListingsElem = document.getElementById('house-listings')
    const houses = AppState.houses
    houses.forEach(house => houseContent += house.houseHtmlTemplate)
    houseListingsElem.innerHTML = houseContent
  }

  async submitHouse() {
    event.preventDefault()
    console.log('submitting');
    const formElem = event.target
    const houseFormData = getFormData(formElem)
    console.log(houseFormData);
    try {
      await housesService.submitHouse(houseFormData)
    }
    catch (error) {
      Pop.error(error, 'oh no!', 'failed to list house')
    }
  }

  async confirmDeleteHouse(houseId) {
    const confirmed = await Pop.confirm('Are you sure you want to delete this house?', 'It will be gone forever', 'Yes I am sure', 'No I have changed my mind')

    if (!confirmed) {
      return
    }
    try {
      housesService.deleteHouse(houseId)
      console.log(houseId);

    } catch (error) {
      Pop.error(error, 'oh no!', 'Couldn`t delete this listing')
    }
  }
}