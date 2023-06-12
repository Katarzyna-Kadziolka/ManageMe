import { FeatureTask } from './feature-task';
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