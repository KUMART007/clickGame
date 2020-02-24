import React from 'react';

function Image(props){
    return (
<img
alt= {props.name}
key={props.id}
onClick={() => props.handleClick(props)}
src={ props.src }
height = "150px"
width = "150px"
/>
    );
} 
export default Image;