"use client"

import { Accordion, Stack } from "react-bootstrap";
import Request from "@/components/Request";
import Response from "@/components/Response";

export default function page() {
    return (
        <main className="container-fluid p-5">
            <Stack gap={5}>
                <div>
                    <h1 className="display-4">
                        POSTGIRL
                    </h1>
                </div>
                <Request />
                <Response />
            </Stack>
        </main>
    )
}
