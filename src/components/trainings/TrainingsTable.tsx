import React, {useEffect, useState} from "react";
import {createStyles, ScrollArea, Table} from '@mantine/core';
import {Training} from "../../../rest/AppClient";
import {Link, MakeGenerics, useMatch} from "@tanstack/react-location";
import {useGetTrainings} from "../../hooks/hooks";

const useStyles = createStyles((theme) => ({
    header: {
        position: 'sticky',
        top: 0,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease',

        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: `1px solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
            }`,
        },
    },

    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));

export type LocationGenerics = MakeGenerics<{
    LoaderData: {
        trainings: Training[],
        training: Training
    }
}>


export const TrainingsTable = () => {
    const {classes, cx} = useStyles();
    const [scrolled, setScrolled] = useState(false);
    const {
        data: { trainings },
    } = useMatch<LocationGenerics>();

    return (
        <ScrollArea onScrollPositionChange={({y}) => setScrolled(y !== 0)} style={{height: 700}}>
            <Table sx={{minWidth: 700}}>
                <thead className={cx(classes.header, {[classes.scrolled]: scrolled})}>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Place</th>
                    <th>Exercises</th>
                </tr>
                </thead>
                <tbody>{
                    trainings ? trainings.map(training =>
                        (<tr key={training.id}>
                            <td>
                                <Link to={`${training.id}`}>{training.id}</Link>
                            </td>
                            <td>{training.date}</td>
                            <td>{training.place}</td>
                            <td>{training.exercises}</td>
                        </tr>)
                    ) : null
                }</tbody>
            </Table>
        </ScrollArea>
    );
}
