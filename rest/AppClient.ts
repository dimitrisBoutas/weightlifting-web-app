const trainings = [
    {
        id: "7743bddd-d48b-4d2c-9d98-24ec31911e83",
        date: "2022-04-05",
        exercises: 4,
        place: "Leuven"
    }, {
        id: "f51758e2-442c-4c13-ab65-7740ae52043d",
        date: "2022-04-04",
        exercises: 3,
        place: "Leuven"
    }, {
        id: "abd0c3c4-cfa7-47f1-ac0b-117dc76ac97b",
        date: "2022-04-03",
        exercises: 5,
        place: "Leuven"
    }, {
        id: "43e3a102-4023-4a4b-81e3-03f573f9cacf",
        date: "2022-04-02",
        exercises: 4,
        place: "Leuven"
    }, {
        id: "804587b8-0b47-407a-8c08-f24210a5abaf",
        date: "2022-04-01",
        exercises: 6,
        place: "Leuven"
    }, {
        id: "6cdea12e-1219-44fa-816c-a48310b83eda",
        date: "2022-03-31",
        exercises: 4,
        place: "Leuven"
    }
]

export class AppClient {

    public getTrainings(): Training[] {
        return trainings;
    }

    public getTraining(id: string): Training {
        return trainings.filter(it => it.id === id)[0]
    }

}

export interface Training {
    id: string,
    date: string,
    place: string,
    exercises: number
}
