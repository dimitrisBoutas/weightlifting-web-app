import React, {useEffect, useState} from "react";
import {Progress} from "@mantine/core";

const prs = [20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99].reverse()
export const LoadingProgress = () => {
    const [progress, setProgress] = useState(10)
    const [ps, setPs] = useState([...prs])
    useEffect(() => {
        const interval = setInterval(() => {
            // @ts-ignore
            const next: number = ps.pop()
            setProgress(next)
        }, 200)
        return () => {
            setProgress(100)
            clearInterval(interval)
        }
    }, [])
    return (
        <Progress size="sm" value={progress} animate/>
    )
}
