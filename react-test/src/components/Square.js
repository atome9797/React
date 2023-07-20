import React from "react";

export default class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick = { () => {console.log('click')}}> 
                {this.props.value} 
            </button>
            //javascript 의 프로토타입과 같은 기능이라고 보면됨
        )
    }
}