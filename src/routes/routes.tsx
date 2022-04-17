import {Route} from "@tanstack/react-location";
import {TrainingsTable} from "../components/trainings/TrainingsTable";
import {useGetTraining, useGetTrainings} from "../hooks/hooks";
import {LoadingProgress} from "../components/navigation/LoadingProgress";
import {Training} from "../components/trainings/Training";

export const routes: Route[] = [
    {
        path: "trainings",
        element: <TrainingsTable/>,
        loader: async () => {
            await new Promise((r) => setTimeout(r, 300))
            return {trainings: useGetTrainings()}
        },
        pendingMs: 50,
        pendingElement: <LoadingProgress/>,
        errorElement: <div style={{color: "red"}}>Error</div>,
        children: [
            {
                path: ":trainingId",
                loader: async ({params: {trainingId}}) => {
                    await new Promise((r) => setTimeout(r, 1000))
                    return {training: useGetTraining(trainingId)}
                },
                element: <Training/>,
                pendingMs: 50,
                pendingElement: <LoadingProgress/>,
                errorElement: <div style={{color: "red"}}>Error</div>,

            }
        ]
    },
    {
        path: 'settings',
        element: async () => <div>settings</div>
    }
]
