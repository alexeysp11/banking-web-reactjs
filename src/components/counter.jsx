import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: this.props.value
        // tags: ['tag1', 'tag2', 'tag3']
    }; 

    render() {
        return (
            <React.Fragment>
                <h4>Counter #{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">+</button>
                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">-</button>
                {/* {this.state.tags.length === 0 && 'Please create a new tag!'} */}
                {/* {this.renderTags()} */}
            </React.Fragment>
        );
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1}); 
    }
    handleDecrement = () => {
        if (this.state.count > 0) {
            this.setState({count: this.state.count - 1}); 
        }
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"; 
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes; 
    }

    formatCount() {
        const { count } = this.state; 
        return count === 0 ? 'Zero' : count; 
    }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>; 
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>; 
    // }
}

export default Counter; 
