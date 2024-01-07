export class Product {
    id:number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  static price: any;
  static id: any;

constructor(id = 0, name = '', description = '', price = 0, imageUrl='https://static.guitarcenter.com/static/gc/2021/page-collection/guitars/mobile/gc-md-cat-01-guitars-10-26-21.jpg'){
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.imageUrl = imageUrl

}

}
