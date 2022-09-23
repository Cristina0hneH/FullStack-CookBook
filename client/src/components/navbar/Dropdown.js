import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useState, useEffect } from 'react';

export default function DropdownMenu({ recipes, setRecipesFilter }) {

    // const [newState, setNewState] = useState();


    // useEffect(() => {
    //     setNewState([...recipes]);
    // }, [])

    // console.log('NEW ARR', newArr)
    return (
        <DropdownButton id="dropdown-basic-button" title="FILTER">
            <Dropdown.Item onClick={() => setRecipesFilter('')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setRecipesFilter('sweet')}>sweet stuff</Dropdown.Item>
            <Dropdown.Item onClick={() => setRecipesFilter('salty')}>salty</Dropdown.Item>
        </DropdownButton>
    );
}