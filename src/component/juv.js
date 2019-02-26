import React, {Component} from "react";

class Box extends Component{
	render() {
		return(
			
			<div className="box">
				<img src={this.props.img} className="" alt="" />
				<h3>{this.props.name}</h3>
				<p>{this.props.des}</p>
			</div>
			
		
            
		);
	}
}

export default Box;