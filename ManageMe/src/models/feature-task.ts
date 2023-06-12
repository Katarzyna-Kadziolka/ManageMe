import { Priority } from "./priority"
import { Status } from "./status"

export type FeatureTask = {
    name: string,
    description: string,
    priority: Priority,
    featureId: string,
    expectedExecutionTime: Date,
    status: Status,
    addDate: Date,
    startDate: Date,
    endDate: Date,
    userId: string
}