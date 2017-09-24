import React, { Component } from 'react';
import { ProductService } from './product-service';
import { Redirect } from 'react-router';

class ProductDetails extends Component {
    constructor(){
        super();
        this.state = {
            redirect : false,
            productGroupList: [],        
        }

        // This binding is necessary to make `this` work in the callback
        this.onClickBack = this.onClickBack.bind(this);
    }

    componentDidMount() {
        console.log('ProductDetails componentDidMount()');

        this.FetchProductGroupData();
    }
    
    render() {
        const productID = this.props.match.params.productID;
        if (this.state.redirect === true){
            const group = ProductService.getGroupByProductID(productID, this.state.productGroupList);
            const redirectPath = '/productList/'+ group.id;
            return <Redirect to={redirectPath}/>;
        }
        else {
            const product = ProductService.getProduct(productID, this.state.productGroupList);
            let buttonText = "< Back";
            return (
                <section className="innerSection">
                    <span>Here are the details for product: {(product !== null)? product.name : ''}</span>
                    <div className="back">
                    <button onClick={this.onClickBack}>{buttonText}</button>
                    </div>
                </section>
            );
        }
    }

    FetchProductGroupData(){
        console.log('Main FetchProductGroupData');

        let that = this;
        
        let request = ProductService.GetFetchRequest();
        fetch(request)
        .then(function(response) {
            var contentType = response.headers.get("content-type");
            if(contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then(function(json) { 
            console.log(json, typeof json);
            that.setState({
                productGroupList : JSON.parse(json),
            });
        })
        .catch(function(error) { 
            console.log(error);
        });            
        
    }

    onClickBack(){
        this.setState({redirect:true});
    }
}

export default ProductDetails;