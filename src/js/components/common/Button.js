import React from 'react';

const Button = ({onPress, children}) => {
    return (<button onClick={onPress}>{children}</button>)
};

export default Button;