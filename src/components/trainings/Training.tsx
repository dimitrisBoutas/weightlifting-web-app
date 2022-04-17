import React, {useEffect} from "react";
import {useMatch} from "@tanstack/react-location";
import {LocationGenerics} from "./TrainingsTable";

export const Training = () => {
    const {
        data: { training },
    } = useMatch<LocationGenerics>();

    useEffect(() => {console.log("mount")}, [])
    return (
        <div>
            <pre>{training}</pre>
        </div>
    )
}
