import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function DropdownMenu({ recipes }) {
    return (
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item onClick={() => console.log(recipes)}>Action</Dropdown.Item>
            <Dropdown.Item onClick={() => console.log("Clicked")}>Another action</Dropdown.Item>
            <Dropdown.Item onClick={() => console.log("Clicked")}>Something else</Dropdown.Item>
        </DropdownButton>
    );
}