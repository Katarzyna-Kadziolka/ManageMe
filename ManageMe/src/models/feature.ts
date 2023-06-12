import { FeatureTask } from './feature-task';
import { Priority } from './priority';
import { Status } from './status';
export type Feature = {
    id: string,
    name: string,
    description: string,
    priority: Priority, 
    projectId: string,
    owner: string,
    status: Status,
    tasks: Array<FeatureTask>
}