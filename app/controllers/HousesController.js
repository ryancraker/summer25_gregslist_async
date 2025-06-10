import { housesService } from "../services/HousesService.js";

export class HousesController {
  constructor() {
    this.getHouses()
  }

  async getHouses() {
    console.log('houses controller ready');
    await housesService.getHouses()

  }
}