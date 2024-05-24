import React from "react";
import Button from 'react-bootstrap/Button';

function Tags({ colorButton, razas}) {
    return <div>
        <Button variant={colorButton} className="boton">{razas}</Button>
    </div>;
}

export default Tags;
