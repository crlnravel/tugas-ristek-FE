import React, {useState} from "react";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

interface RequestURLProps {
    method: String,
    setMethod: React.Dispatch<React.SetStateAction<string>>,
    urlRef: React.MutableRefObject<string>
}

const RequestURL: React.FC<RequestURLProps> = ({method, setMethod, urlRef}) => {

    return (
        <InputGroup className="mb-3 px-1 py-2">
            <Dropdown className="xs">
                <Dropdown.Toggle
                    id="dropdown-custom-1"
                >{method}</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={(event) => {setMethod("GET")}}>GET</Dropdown.Item>
                    <Dropdown.Item onClick={(event) => {setMethod("POST")}}>POST</Dropdown.Item>
                    <Dropdown.Item onClick={(event) => {setMethod("PUT")}}>PUT</Dropdown.Item>
                    <Dropdown.Item onClick={(event) => {setMethod("PATCH")}}>PATCH</Dropdown.Item>
                    <Dropdown.Item onClick={(event) => {setMethod("DELETE")}}>DELETE</Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown>
            <Form.Control aria-label="Text input with dropdown button" _ref={urlRef}/>
            <Button variant="outline-secondary" id="button-addon2">
                Send
            </Button>
        </InputGroup>
    )
}

export default RequestURL;