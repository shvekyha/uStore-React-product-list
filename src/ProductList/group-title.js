import React, { Component } from 'react';

class GroupTitle extends Component{
    render(){
        
        return (
            <section className="groupTitle">
                <h2 className="groupName">{this.props.group.name}</h2>
                <h3 className="groupDescription">{this.props.group.description}</h3>
            </section>
        );
    }
}

export default GroupTitle;