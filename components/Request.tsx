import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import React, {useRef, useState} from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs"
import axios from "axios";
import Modal from 'react-bootstrap/Modal';


interface reqElementProps {
    setResponse: React.Dispatch<React.SetStateAction<object>>
}

const Request: React.FC<reqElementProps> = ({ setResponse }) => {
    const [method, setMethod] = useState("GET")
    const [url, setUrl] = useState("")
    const [showError, setShowError] = useState(false)

    const bodyRef = useRef(null)

    const submitRequest = async () => {
        let data;

        try {
            data = JSON.parse(bodyRef.current.value)
        } catch (e) {
            setShowError(true)
            return;
        }

        const response = await axios({
            method: method.toLowerCase(),
            url: url,
            data
        }).then(data => setResponse({ data: data.data, status: data.status }))


    }

    return (
        <>
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
                                        <Dropdown.Item onClick={() => {setMethod("GET")}}>GET</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {setMethod("POST")}}>POST</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {setMethod("PUT")}}>PUT</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {setMethod("PATCH")}}>PATCH</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {setMethod("DELETE")}}>DELETE</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Form.Control
                                    value={url}
                                    onChange={(e) => {setUrl(e.target.value)}}
                                />
                                <Button variant="outline-secondary" id="button-addon2" onClick={submitRequest}>
                                    Send
                                </Button>
                            </InputGroup>
                        </Tab>
                        <Tab eventKey="body" title="Body" className='p-4'>
                            <Form.Control
                                as="textarea"
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
            <Modal show={showError} onHide={() => setShowError(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Body Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Make sure that you are sending the correct format!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowError(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Request;