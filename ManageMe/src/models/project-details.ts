import { Feature } from './feature';
export type ProjectDetails = {
    id: string,
    name: string,
    description: string,
    features: Array<Feature>
}