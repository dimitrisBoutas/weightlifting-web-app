import {AppClient, Training} from "../../rest/AppClient";

const appClient = new AppClient();

export const useGetTrainings = (): Training[] => {
    return appClient.getTrainings()
}

export const useGetTraining = (id: string): Training => {
    return appClient.getTraining(id);
}
