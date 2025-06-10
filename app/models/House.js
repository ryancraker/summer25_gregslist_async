export class House {
  constructor(data) {
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.id = data.id
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }

  get houseHtmlTemplate() {
    return `
     <div class="col-md-6 my-2">
          <div class="house-card position-relative p-1">
            <img class="house-img"
              src="${this.imgUrl}"
              alt="${this.description}">
            <span class="house-price p-1">$${this.price}</span>
            <b class="fs-2">${this.description}</b>
            <p>${this.year}</p>
            <div>
              <p>${this.bedrooms} bedrooms</p>
              <p>${this.bathrooms} bathrooms</p>
              <p>${this.levels} levels</p>
            </div>
            <hr>
            <div class="d-flex justify-content-between align-items-end">
              <div>
                <img class="creator-img" src="${this.creator.picture}" alt="${this.creator.name}">
                <b>${this.creator.name}</b>
                </div>
              <span>Listed on ${this.createdAt.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        `
  }
}