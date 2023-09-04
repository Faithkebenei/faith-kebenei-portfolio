import React from "react";

const Button = ({backgroundColor, color, text}) => {
    const ButtonStyles = {
        backgroundColor: backgroundColor,
        color: color,    
    }
    return (
        <>
        <Button styles={{ButtonStyles}}>
            {text}
        </Button>
        </>
    )
}

export default Button;