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

const Response: React.FC = () => {
    const [reponse, setResponse] = useState({
        'nasiuduk': 'lala cantik'
    })

    return (
        <Card>
            <Card.Header>
                <h5 className='block p-2'>
                    Response
                </h5>
            </Card.Header>
            <Card.Body>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="profile" title="Profile">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        value={JSON.stringify(reponse, undefined, 4)}
                        style={{ height: '100px' }}
                        />
                    </Tab>
                    <Tab eventKey="body" title="Body">
                    asdfasdf
                    </Tab>
                </Tabs>
                <Card.Footer>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default Response;