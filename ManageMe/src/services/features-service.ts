import { FeatureTasksService } from './feature-tasks-service';
import { Feature } from './../models/feature';
import { Injectable } from "@angular/core";
import { Status } from "./../models/status";
import { Priority } from "./../models/priority";
import { of, startWith, Observable, filter, map } from 'rxjs';

@Injectable()
export class FeaturesService {
    features: Array<Feature> = [];
    //observableFeature: Observable<Array<Feature>>;

    constructor() {
        const tasksServices = new FeatureTasksService();
        this.features = [
            {
                id: "10ec918f-60fd-404f-8d0b-82be46e71eb9",
                name: "Task notifications",
                description: "As a user, I create tasks with specific deadlines and receive notifications when they are approaching their deadline or are overdue.",
                priority: Priority.Must,
                projectId: "f9614e22-0418-4acf-90ad-af73e715f87e",
                status: Status.Done,
                owner: "Mavis Smith",
                tasks: []
            },
            {
                id: "4d29249f-8af3-4828-ae25-5f6efe0ad6bb",
                name: "Calendar",
                description: "As a user, I create tasks and events in the calendar, specify the duration and assign them to specific days and times. I can also display the task schedule over a selected period.",
                priority: Priority.Could,
                projectId: "f9614e22-0418-4acf-90ad-af73e715f87e",
                status: Status.Doing,
                owner: "Mavis Smith",
                tasks: []
            },
            {
                id: "1f6f6f89-92b3-4d65-b468-fc3405bcd4bc",
                name: "Project management",
                description: "As a user, I create projects, assign tasks to projects and monitor project progress. I can view the list of tasks for each project, prioritise them, monitor their completion status and track which user is responsible for completing each task.",
                priority: Priority.Should,
                projectId: "f9614e22-0418-4acf-90ad-af73e715f87e",
                status: Status.Todo,
                owner: "Mavis Smith",
                tasks: []
            },
            {
                id: "fd7260a0-21d3-4e4d-97b0-afdc29252a8d",
                name: "Adding and organising books",
                description: "As a user, I add new books to my home library. I can enter information such as title, author, genre and year of publication. I can divide books into categories, create favourite book lists and mark books as read or unread.",
                priority: Priority.Must,
                projectId: "44df5e72-a809-46cd-ab0a-3c4d17557f4c",
                status: Status.Done,
                owner: "Lainey Jones",
                tasks: []
            },
            {
                id: "8631fe7a-fc7f-4543-bee3-dcc011d4e29c",
                name: "Searching and borrowing books",
                description: "As a user, I search for books in my library based on title, author, genre and category. I can also mark books as borrowed, set a borrowing date and a return date. I can set up notifications to remind me when books are due back.",
                priority: Priority.Should,
                projectId: "44df5e72-a809-46cd-ab0a-3c4d17557f4c",
                status: Status.Done,
                owner: "Lainey Jones",
                tasks: []
            },
            {
                id: "38d55b89-0e43-472b-b209-a20c6206404d",
                name: "Book reviews and ratings",
                description: "As a user, I add reviews and ratings to the books I have read. I can enter my comments, scale ratings and share my reviews with other app users. I can also view other users' reviews and get recommendations based on ratings.",
                priority: Priority.Could,
                projectId: "44df5e72-a809-46cd-ab0a-3c4d17557f4c",
                status: Status.Todo,
                owner: "Lainey Jones",
                tasks: []
            },
            {
                id: "b677b8b8-f492-4821-a10e-ca36363262cc",
                name: "Wire parameter calculator",
                description: "As a user, I calculate the relevant wire parameters for creating jewellery such as a ring or scales. I can enter data such as ring size, wire diameter, type of material and the app will calculate parameters such as the length of wire needed to make the chain and weight.",
                priority: Priority.Must,
                projectId: "821c185a-99cc-4d57-ad3b-a78bb46a3406",
                status: Status.Done,
                owner: "Myla Williams",
                tasks: []
            },
            {
                id: "faa895cc-80db-4e5e-b297-d846ab34ed2f",
                name: "Materials database",
                description: "The system contains a database of the different materials available for making crossbow jewellery. As a user, I can view information on different materials such as stainless steel, copper, aluminium, along with their properties such as strength, flexibility, weight.",
                priority: Priority.Should,
                projectId: "821c185a-99cc-4d57-ad3b-a78bb46a3406",
                status: Status.Doing,
                owner: "Myla Williams",
                tasks: []
            },
            {
                id: "10cb053b-94ba-491d-b831-af8826e3178b",
                name: "Comparing materials",
                description: "As a user, I compare the different materials available in the database. I can select two or more materials and compare their properties, such as strength, weight, price. I can also generate graphs or charts to visually show the comparison of materials.",
                priority: Priority.Could,
                projectId: "821c185a-99cc-4d57-ad3b-a78bb46a3406",
                status: Status.Done,
                owner: "Myla Williams",
                tasks: []
            },
        ]
        this.features.forEach(feature => {
            // tasksServices.getTasksForFeature(feature.id).subscribe(
            //     tasks => feature.tasks = tasks
            // )
            feature.tasks = tasksServices.getTasksForFeature(feature.id);
        });
        // this.observableFeature = of(this.features).pipe(
        //     startWith(this.features)
        // )
    }

    GetFeaturesForProject(projectId: string) : Array<Feature> {
        return this.features.filter(feature => feature.projectId === projectId);
        // return this.observableFeature.pipe(
        //     map(features => features.filter(feature => feature.projectId === projectId))
        // )
    }
}