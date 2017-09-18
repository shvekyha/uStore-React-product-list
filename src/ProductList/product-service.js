

export class ProductService {

    static GetMock(){
        let productList1 = [
          {id: 1, name: "Static", description: "Static description", thumbnailURL: "../assets/static thumbnail.PNG"},
          {id: 2, name: "Dynamic", description: "Dynamic description", thumbnailURL: "../assets/dynamic thumbnail.PNG"},
          {id: 3, name: "Static2", description: "Static2 description", thumbnailURL: "../assets/static thumbnail.PNG"},
          {id: 4, name: "Dynamic2", description: "Dynamic2 description", thumbnailURL: "../assets/dynamic thumbnail.PNG"}
        ];
        let productList2 = [
          {id: 5, name: "Composite", description: "Composite description", thumbnailURL: "../assets/composite thumbnail.jpg"},
          {id: 6, name: "XM campaign", description: "XM campaign description", thumbnailURL: "../assets/xm campaign thumbnail.png"},
          {id: 7, name: "XM campaign2", description: "XM campaign2 description", thumbnailURL: "../assets/xm campaign thumbnail.png"}
        ];
        
        let productGroupList = [
          {id: 1, name: "Business cards", description:"Find here business cards products", productList: productList1},
          {id: 2, name: "Other products", description:"Find here other products", productList: productList2}
        ];
    
        return productGroupList;
    }

    static getProduct(productID){
        let groupList = this.GetMock();

        for (let i=0; i<groupList.length; i++){
            let product = groupList[i].productList.find(p => p.id === parseInt(productID,10));
            if (product !== undefined){
                return product;
            }
        };

        return null;
    }

    static getGroupByProductID(productID){
        let groupList = this.GetMock();

        for (let i=0; i<groupList.length; i++){
            let product = groupList[i].productList.find(p => p.id === parseInt(productID,10));
            if (product !== undefined){
                return groupList[i];
            }
        };
        return null;
      }

    static getGroup(groupID){
        let groupList = this.GetMock();
        let groupToReturn = groupList.find(g => g.id === parseInt(groupID,10));
        
        return groupToReturn;
    }
}

export default ProductService;