import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import React, {useRef, useState} from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs"
import RequestURL from "@/components/RequestURL";

const navigation: React.FC = () => {
    const [method, setMethod] = useState("GET")
    const urlRef = useRef<string>()

    return (
        <Card>
            <Card.Body>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="profile" title="Profile">
                        <RequestURL
                            method={method}
                            setMethod={setMethod}
                            urlRef={urlRef}
                        />
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        Tab content for Contact
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
}

export default navigation;