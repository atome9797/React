import React from "react";

export default class Square extends React.Component {

    constructor(props) {
        super(props) 
        //부모 클래스에 데이터를 넘겨주기 위한 목적일뿐 의미없음
        this.state = {
            value : null,
        }
    }


    render() {
        return (
            <button className="square" onClick = { () => {this.setState({value : 'X'})}}> 
                {this.state.value} 
            </button>
            //javascript 의 프로토타입과 같은 기능이라고 보면됨
        )
    }
}