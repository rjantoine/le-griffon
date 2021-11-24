import React from 'react'
import {Figure} from "react-bootstrap";
import {StaticImage} from "gatsby-plugin-image";

const Patrimoine = () => <div className="text-center mx-auto">
    <Figure>
        <StaticImage alt="Logo to Patrimoine Canada" src="./patrimoine-canadienne.jpg" />
        <Figure.Caption>Le Griffon vous offre cette soirée grâce aux subventions du Patrimoine Canadien.</Figure.Caption>
    </Figure>
</div>

export default Patrimoine