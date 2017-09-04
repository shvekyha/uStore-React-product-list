import React, { Component } from 'react';

class GroupList extends Component{
    render(){
        return (
            <section className="groupListSection innerSection">
                <dd className="groupList"> 
                    <dl className="group">Group 1</dl>
                    <dl className="group">Group 2</dl>
                </dd>
            </section>
        )
    };
}

export default GroupList;