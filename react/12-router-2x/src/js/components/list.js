import React from 'react';
export default class ComponentList extends React.Component{
    render(){
        return (
            <div>
                <h1>这里是列表页面</h1>    
                <p>{this.props.match.id}</p>
            </div>
        )
    }
}