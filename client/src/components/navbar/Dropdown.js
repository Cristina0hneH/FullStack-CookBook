import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useState, useEffect } from 'react';

export default function DropdownMenu({ recipes, setRecipes }) {

    // const [newState, setNewState] = useState();


    // useEffect(() => {
    //     setNewState([...recipes]);
    // }, [])

    // console.log('NEW ARR', newArr)
    return (
        <DropdownButton id="dropdown-basic-button" title="FILTER">
            <Dropdown.Item onClick={() => setRecipes([...recipes].filter(recipe => recipe.fields.taste === "sweet"))}>Sweet stuff</Dropdown.Item>
            <Dropdown.Item onClick={() => setRecipes([...recipes].filter(recipe => recipe.fields.taste === "salty"))}>Salty stuff</Dropdown.Item>
            <Dropdown.Item onClick={() => console.log("Clicked")}>Sth. random</Dropdown.Item>
        </DropdownButton>
    );
}