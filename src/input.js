import React from 'react';
import colorNames from 'colornames';

const Input = ({
    colorValue, setColorValue, setHexValue, changeTextColor, setChangeTextColor 
}) => {
    return ( 
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Color Name:</label>
            <input
                autoFocus
                type="text"
                placeholder="Add color name"
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
                maxLength={8}
            />
            <button
                type="button"
                onClick={() => setChangeTextColor(!changeTextColor)}
            >
                Toggle Text Color 
            </button>
        </form>
    );
}

export default Input;