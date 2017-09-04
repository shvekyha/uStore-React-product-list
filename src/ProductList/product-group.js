import { Product } from './product';

export class ProductGroup {
    
  constructor(id, name, description, productList){
      this.id = id;
      this.name = name;
      this.description = description;
      this.productList = productList;
  }

  static GetMock(){
    let productList1 = [
      {id: 1, name: "Static", description: "Static description", thumbnailURL: "../../assets/static thumbnail.PNG"},
      {id: 2, name: "Dynamic", description: "Dynamic description", thumbnailURL: "../../assets/dynamic thumbnail.PNG"},
      {id: 3, name: "Static2", description: "Static2 description", thumbnailURL: "../../assets/static thumbnail.PNG"},
      {id: 4, name: "Dynamic2", description: "Dynamic2 description", thumbnailURL: "../../assets/dynamic thumbnail.PNG"}
    ];
    let productList2 = [
      {id: 5, name: "Composite", description: "Composite description", thumbnailURL: "../../assets/composite thumbnail.jpg"},
      {id: 6, name: "XM campaign", description: "XM campaign description", thumbnailURL: "../../assets/xm campaign thumbnail.png"}
    ];
    
    let productGroupList = [
      {id: 1, name: "Business cards", description:"Find here business cards products", productList: productList1},
      {id: 2, name: "Other products", description:"Find here other products", productList: productList2}
    ];

    return productGroupList;
  }
}

export default ProductGroup;