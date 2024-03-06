"use client"

import { Stack } from "react-bootstrap";
import Request from "@/components/Request";
import Response from "@/components/Response";
import {useState} from "react";

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [response, setResponse] = useState<object>({})

    return (
        <main className="container-fluid p-5">
            <Stack gap={5}>
                <div>
                    <h1 className="display-4">
                        POSTGIRL
                    </h1>
                </div>
                <Request setResponse={setResponse}/>
                <Response response={response}/>
            </Stack>
        </main>
    )
}
