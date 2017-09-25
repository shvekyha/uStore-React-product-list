import React, { Component } from 'react';
import GroupList from './group-list';
import GroupTitle from './group-title';
import ProductsContainer from './products-container';
import ProductService from './product-service';

class Main extends Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedGroup: (props.selectedGroup? props.selectedGroup : null),
            productGroupList: [],        
        };
        console.log('Main constructor selectedGroup: '+this.state.selectedGroup);

        // This binding is necessary to make `this` work in the callback
        this.groupClick = this.groupClick.bind(this);
    }

    componentDidMount() {
        console.log('Main componentDidMount()');

        this.FetchProductGroupData();
    }

    render(){        
        console.log('Main render()');
        let selectedGroup = null;
        if (this.state.selectedGroup !== null){
            selectedGroup = this.state.selectedGroup;
        }
        else if (this.props.selectedGroup){
            selectedGroup = this.props.selectedGroup;
        }
        return (
            <section>
                <GroupList onClick={(group) => this.groupClick(group)} productGroupList={this.state.productGroupList}/>
                <section className="productsSection innerSection">
                    {(selectedGroup !== null)? <GroupTitle group={selectedGroup}/> : '' }
                    {(selectedGroup !== null)? <ProductsContainer group={selectedGroup} productGroupList={this.state.productGroupList}/> : '' }
                </section>
            </section>
        );
    }

    FetchProductGroupData(){
        console.log('Main FetchProductGroupData');
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
                //console.log(json, typeof json);
                that.setState({
                    productGroupList : JSON.parse(json),
                });
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