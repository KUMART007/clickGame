import React from 'react';

function Image(props){
    return (
<div
role="img"
onClick={() =>props.clickImage{props.id}}
style={{ backgroundImage: `url("${props.src}")` }}
/>
    );
} 
export default Image;