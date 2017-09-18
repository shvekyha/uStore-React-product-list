import React, { Component } from 'react';
import { ProductService } from './product-service';
import { Redirect } from 'react-router';

class ProductDetails extends Component {
    constructor(){
        super();
        this.state = {
            redirect : false,
        }

        // This binding is necessary to make `this` work in the callback
        this.onClickBack = this.onClickBack.bind(this);
    }
    
    render() {
        if (this.state.redirect === true){
            const group = ProductService.getGroupByProductID(this.props.match.params.productID);
            const redirectPath = '/productList/'+ group.id;
            return <Redirect to={redirectPath}/>;
        }
        else {
            const productID = this.props.match.params.productID;
            //console.log('ProductDetails this.props.match: '+this.props.match.params.productID);
            const product = ProductService.getProduct(productID);
            let buttonText = "< Back";
            return (
                <section className="innerSection">
                    <span>Here are the details for product: {product.name}</span>
                    <div className="back">
                    <button onClick={this.onClickBack}>{buttonText}</button>
                    </div>
                </section>
            );
        }
    }

    onClickBack(){
        this.setState({redirect:true});
    }
}

export default ProductDetails;