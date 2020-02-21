import React from 'react';

function Image(props){
    return (
<img
alt="a picture"
role="img"
onClick={() => props.handleClick(props)}
src={ props.src }
/>
    );
} 
export default Image;