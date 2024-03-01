import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import React, {useRef, useState} from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs"
import JSONInput from 'react-json-editor-ajrm'
import locale from 'react-json-editor-ajrm/locale/en'
import { json } from 'stream/consumers';

const Request: React.FC = () => {
    const [method, setMethod] = useState("GET")
    const [url, setUrl] = useState("")
    const [body, setBody] = useState("")
    const [data, setData] = useState("")

    const bodyRef = useRef(null)


    return (
        <Card>
            <Card.Header>
                <h5 className='block pt-2 px-2'>
                    Request
                </h5>
            </Card.Header>
            <Card.Body>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="profile" title="Profile">
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
                            <Form.Control 
                                aria-label="Text input with dropdown button" 
                                value={url} 
                                onChange={(e) => {setUrl(e.target.value)}}
                                />
                            <Button variant="outline-secondary" id="button-addon2" onClick={() => {}}>
                                Send
                            </Button>
                        </InputGroup>
                    </Tab>
                    <Tab eventKey="body" title="Body" className='p-4'>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            ref={bodyRef}
                            onKeyDown={e => {if (e.key == "Tab") {e.preventDefault(); bodyRef.current.value = bodyRef.current.value + "    ";}}}
                            style={{ height: '100px', fontFamily: "monospace" }}
                        />
                    </Tab>
                </Tabs>
                <Card.Footer>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default Request;