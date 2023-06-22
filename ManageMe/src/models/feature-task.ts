import { Priority } from "./priority"
import { Status } from "./status"

export type FeatureTask = {
    name: string,
    description: string,
    priority: Priority,
    featureId: string,
    expectedExecutionTime: string,
    status: Status,
    addDate: string,
    startDate: string,
    endDate: string,
    userName: string
}