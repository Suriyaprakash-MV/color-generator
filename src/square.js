import React from 'react';

const Square = ({ colorValue, hexValue, changeTextColor }) => {
    return (
        <section
            className="square"
            style={{
                backgroundColor: colorValue,
                color: changeTextColor ? "#000" : "#fff"
            }}
        >
            <p>{colorValue ? colorValue : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    );
}

Square.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Square;
