import React, { Component } from 'react';
import GroupList from './group-list';
import GroupTitle from './group-title';
import ProductsContainer from './products-container';
import ProductService from './product-service';

class Main extends Component{
    constructor(props) {
        super(props);

        let selectedGroup = "";
        if (this.props.selectedGroup){
            selectedGroup = this.props.selectedGroup;
        }
        
        this.state = {
            selectedGroup:selectedGroup,
            productGroupList: [],        
        };

        // This binding is necessary to make `this` work in the callback
        this.groupClick = this.groupClick.bind(this);
    }

    componentDidMount() {
        console.log('Main componentDidMount()');

        this.FetchProductGroupData();
    }

    render(){
        console.log('Main render()');
        return (
            <section>
                <GroupList onClick={(group) => this.groupClick(group)} productGroupList={this.state.productGroupList}/>
                <section className="productsSection innerSection">
                    <GroupTitle group={this.state.selectedGroup}/>
                    {(this.state.selectedGroup !== '')? <ProductsContainer group={this.state.selectedGroup} productGroupList={this.state.productGroupList}/> : ''}
                </section>
            </section>
        );
    }

    FetchProductGroupData(){
        console.log('Main GetProductGroupData');
        let getRealMock = false;
        if (getRealMock === true){
            console.log('getting mock data');
            let productGroupMock = ProductService.GetMockFromWebAPI();
            this.setState({
                productGroupList : productGroupMock,
            });
        }
        else{
            console.log('getting real data');

            let that = this;
            let headers = new Headers({
                'Content-Type' : 'application/x-www-form-urlencoded', //'application/json',
                'Accept': 'application/json',
            });
            
            let url = 'http://hadassh/ustore/api/ProductList/GetProductGroups';
            let params = 'storeid=5&userid=3&cultureid=1'
            url = `${url}?${params}`;

            let fetchInit = {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                credentials: 'include'
            };

            let request = new Request(url, fetchInit);

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
                console.log('productGroupList.length: '+this.state.productGroupList.length);
            })
            .catch(function(error) { 
                console.log(error);
            });            
        }
    }
    

    groupClick(group){
        this.setState({
            selectedGroup: group
        });
    }
}

export default Main;