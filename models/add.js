const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')

class Ads {
  constructor(firstName,image,price,description,author,phone){
    this.firstName = firstName
    this.image = image
    this.price = price
    this.description = description
    this.author = author
    this.prone = phone
    this.id = uuid()
  }

  toJSON(){
    return ({
      firstName:    this.firstName,
      image:        this.image,
      price:        this.price,
      description:  this.description,
      author:       this.author,
      phone:        this.phone,
      id:           this.id
    })
  }

  async save(){
    const ads = await Ads.getAll()
    ads.push(this.toJSON())


    return new Promise((resolve,reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'ads.json'),
        JSON.stringify(ads),
        (err) => {
          if(err) {
            reject(err)
          }else{
            resolve()
          }
        }
      )
    })
  }

  static getAll(){
    return new Promise((resolve,reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data','ads.json'),
        'utf-8',
        (err,content) => {
          if(err) {
            reject(err)
          }else{
            resolve(JSON.parse(content))
          }
  
        }
        )
    })
  }
}

module.exports = Ads