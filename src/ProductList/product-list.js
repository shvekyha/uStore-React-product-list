import React, { Component } from 'react';
import Main from './main';
import ProductService from './product-service';

class ProductList extends Component {
    render() {
        let selectedGroup = null;
        //console.log('ProductList group: '+group);
        if (this.props.match && this.props.match.params.groupID !== undefined){
            let groupID = this.props.match.params.groupID;
            let group = ProductService.getGroup(groupID);
            console.log('ProductList group: '+group);
            selectedGroup = group;
            
        }

        return (
            <Main selectedGroup={selectedGroup}/>
        );
      }
}

export default ProductList;