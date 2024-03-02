import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import React, {useRef, useState} from "react";
import Tabs from "react-bootstrap/Tabs"

interface reqElementProps {
    response: object
}

const Response: React.FC<reqElementProps> = ({ response }) => {
    return (
        <Card>
            <Card.Header>
                <h5 className='block pt-2 px-2'>
                    Response
                </h5>
            </Card.Header>
            <Card.Body>
                <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        value={JSON.stringify(response, undefined, 4)}
                        style={{ height: '300px', fontFamily: "monospace" }}
                        />
            </Card.Body>
            <Card.Footer></Card.Footer>
        </Card>
    );
}

export default Response;