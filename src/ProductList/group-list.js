import React, { Component } from 'react';
import ProductGroup from './product-group';

class GroupList extends Component{
    render(){
        const productGroupList = ProductGroup.GetMock();
        const listItems = productGroupList.map(
            (group) =>
                <dl key={group.id} className="group" onClick={() => this.props.onClick(group)}>{group.name}</dl>
            );
        return (
            <section className="groupListSection innerSection">
                <dd className="groupList"> 
                    {listItems}
                </dd>
            </section>
        )
    };
}

export default GroupList;