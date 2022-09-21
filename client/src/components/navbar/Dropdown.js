import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function DropdownMenu() {
    return (
        <>
            {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                (variant) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={variant}
                        id={`dropdown-variants-${variant}`}
                        variant={variant.toLowerCase()}
                        title={variant}
                    >
                        <Dropdown.Item eventKey="1">Salty stuff</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Sweet stuff</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Active Item
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">All recipes</Dropdown.Item>
                    </DropdownButton>
                ),
            )}
        </>
    );
}