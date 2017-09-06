import React, { Component } from 'react';
import GroupList from './group-list';
import GroupTitle from './group-title';
import ProductsContainer from './products-container';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedGroup:"",
        };

        // This binding is necessary to make `this` work in the callback
        this.groupClick = this.groupClick.bind(this);
    }
    
    render(){
        return (
            <section className="main">
                <GroupList onClick={(group) => this.groupClick(group)}/>
                <section className="productsSection innerSection">
                    <GroupTitle group={this.state.selectedGroup}/>
                    {(this.state.selectedGroup !== '')? <ProductsContainer group={this.state.selectedGroup}/> : ''}
                </section>
            </section>
        );
    }

    groupClick(group){
        this.setState({
            selectedGroup: group
        });
    }
}

export default Main;