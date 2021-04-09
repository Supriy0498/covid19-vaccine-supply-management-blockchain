import React from "react";

function ActionButton(props){
    const { onClick } = props;
    return (
        <div>
            <button style={{width:100}, {height:45}, {backgroundColor:"black",color:"white",borderRadius:"50%"}}
            onClick={onClick}>X
            </button>
        </div>
        
    );
}

export default ActionButton