import React from 'react';
import './smallBox.css';  // Corrected the file name to match the import

export default function SmallBox(props) {  // Corrected function name
    const { num } = props;
    return (
        <div id="small-box-container">
            <h1>{num}</h1>
        </div>
    );
}
