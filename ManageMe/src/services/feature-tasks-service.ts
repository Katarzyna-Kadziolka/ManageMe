import { FeatureTask } from './../models/feature-task';
import { Injectable } from "@angular/core";
import { Status } from "./../models/status";
import { Priority } from "./../models/priority";
import { of, startWith, Observable, filter, mergeMap, map, ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FeatureTasksService {
    private tasks: Array<FeatureTask> = [];
    private taskSubject: ReplaySubject<Array<FeatureTask>>;
    tasksObservable: Observable<Array<FeatureTask>>;

    constructor() {
        this.tasks = [
            {
                name: "Creating a user interface for task creation",
                description: "Create a user interface that allows the user to enter the name, description and deadline of the task. Provide appropriate fields and forms so that the user can conveniently enter this information. Also add a 'Save' button so that the user can approve and save the new task.",
                priority: Priority.Must,
                featureId: "10ec918f-60fd-404f-8d0b-82be46e71eb9",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Done,
                addDate: new Date("2023-06-12"),
                endDate: new Date("2023-06-18"),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Implementation of task notifications",
                description: "Implement a notification mechanism to inform the user of upcoming deadlines or overdue tasks. Notifications should be displayed in an appropriate time and format, such as a pop-up, push notification or email notification, depending on the user's preference.",
                priority: Priority.Could,
                featureId: "10ec918f-60fd-404f-8d0b-82be46e71eb9",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Done,
                addDate: new Date("2023-06-12"),
                endDate: new Date("2023-06-20"),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Implementation of adding tasks and events to the calendar",
                description: "Create a function that allows the user to add new tasks and events to the calendar. Provide fields where the user can enter the name, description, start and end date and duration of the task or event. Also provide an interface that allows the user to assign these tasks and events to specific days and times.",
                priority: Priority.Could,
                featureId: "4d29249f-8af3-4828-ae25-5f6efe0ad6bb",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Done,
                addDate: new Date("2023-06-12"),
                endDate: new Date("2023-06-20"),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Display of task schedule for selected period ",
                description: "Implement a function that allows the user to view a schedule of tasks for a selected period of time, for example a week, a month or a year. The user should be able to select a period of time and see all scheduled tasks and events during that time in a readable form, such as a calendar or list.",
                priority: Priority.Should,
                featureId: "4d29249f-8af3-4828-ae25-5f6efe0ad6bb",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Doing,
                addDate: new Date("2023-06-12"),
                endDate: new Date(),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Creation of projects and assignment of tasks",
                description: "Implement a function that allows the user to create projects, give them names and descriptions and assign tasks to these projects. The user should be able to create a new project, enter its details and then add tasks that will be part of that project. Provide a user interface that makes it easy for the user to manage projects and assign tasks.",
                priority: Priority.Must,
                featureId: "1f6f6f89-92b3-4d65-b468-fc3405bcd4bc",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Todo,
                addDate: new Date("2023-06-12"),
                endDate: new Date(),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Project progress monitoring and task management",
                description: "Create functions that allow the user to monitor the progress of a project. The user should be able to view a list of tasks for each project, prioritise them, track their completion status and see which user is responsible for completing each task. Add features that allow tasks to be marked as completed, updated on their status and assigned to specific users.",
                priority: Priority.Could,
                featureId: "1f6f6f89-92b3-4d65-b468-fc3405bcd4bc",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Todo,
                addDate: new Date("2023-06-12"),
                endDate: new Date(),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Adding new books to the library",
                description: "Create a function that allows the user to add new books to the library. The user should be able to enter information such as title, author, genre and year of publication. Provide a user interface that makes it easy to enter this data and approve new books. Add data validation to ensure that the required information is entered correctly.",
                priority: Priority.Could,
                featureId: "fd7260a0-21d3-4e4d-97b0-afdc29252a8d",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Done,
                addDate: new Date("2023-06-12"),
                endDate: new Date("2023-06-18"),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Library management and book marking",
                description: "Implement functions that allow the user to manage the library. The user should be able to categorise books, create favourite book lists and mark books as read or unread. Add an interface that allows the user to create categories, assign books to categories, create favourite book lists and update read status. The user should also be able to search for books in the library based on various criteria, such as author or genre.",
                priority: Priority.Should,
                featureId: "fd7260a0-21d3-4e4d-97b0-afdc29252a8d",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Done,
                addDate: new Date("2023-06-12"),
                endDate: new Date("2023-06-20"),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Searching for books in the library",
                description: "Create a function that allows the user to search for books in the library based on various criteria such as title, author, genre and category. Provide an interface that allows the user to enter these search criteria and display results that match the information entered.",
                priority: Priority.Must,
                featureId: "8631fe7a-fc7f-4543-bee3-dcc011d4e29c",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Done,
                addDate: new Date("2023-06-12"),
                endDate: new Date("2023-06-18"),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Management of book loans and notifications of return dates",
                description: "Implement features that allow the user to mark books as borrowed, set a borrow date and a return date. Add the ability to configure notifications to remind the user when books are about to be returned. Notifications can be in the form of pop-ups, push notifications or emails, depending on the user's preference.",
                priority: Priority.Could,
                featureId: "8631fe7a-fc7f-4543-bee3-dcc011d4e29c",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Done,
                addDate: new Date("2023-06-12"),
                endDate: new Date("2023-06-20"),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Adding reviews and ratings to books",
                description: "Create a feature that will allow the user to add reviews and ratings to books they have read. The user should be able to enter comments, select a rating on a scale and approve the review. Add an interface that makes it easy for the user to enter this information and share it in the app.",
                priority: Priority.Could,
                featureId: "38d55b89-0e43-472b-b209-a20c6206404d",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Todo,
                addDate: new Date("2023-06-12"),
                endDate: new Date(),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Viewing other users' reviews and receiving recommendations",
                description: "Implement features that allow the user to view other users' reviews. The user should be able to view reviews, ratings and comments from other users for a particular book. Also add recommendation features based on other users' ratings. The user should receive recommendations for similar books based on the ratings that other users have assigned to those books.",
                priority: Priority.Should,
                featureId: "38d55b89-0e43-472b-b209-a20c6206404d",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Todo,
                addDate: new Date("2023-06-12"),
                endDate: new Date(),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Calculation of the length of wire needed to make a chain",
                description: "Create a function that allows the user to enter data such as ring size, wire diameter and material type. Based on this data, the application should calculate the length of wire needed to make the chain. Use the appropriate formulas and parameters to convert the required data and display the result to the user.",
                priority: Priority.Must,
                featureId: "b677b8b8-f492-4821-a10e-ca36363262cc",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Done,
                addDate: new Date("2023-06-12"),
                endDate: new Date("2023-06-18"),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Calculation of wire weight based on given parameters",
                description: "Zaimplementuj funkcję, która pozwoli użytkownikowi wprowadzić parametry, takie jak średnica drutu, rodzaj materiału i długość łańcuszka. Aplikacja powinna obliczyć wagę drutu na podstawie tych danych. Użyj odpowiednich wzorów i współczynników, aby przeliczyć dane i wyświetlić użytkownikowi wynik w postaci wagi drutu.",
                priority: Priority.Could,
                featureId: "b677b8b8-f492-4821-a10e-ca36363262cc",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Done,
                addDate: new Date("2023-06-12"),
                endDate: new Date("2023-06-20"),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Display of information on available materials",
                description: "Create a function that will allow the user to view information about the different materials available for making bow jewellery. The user should be able to display the name of the material, a description and its properties such as strength, elasticity, weight. Ensure a clear and intuitive interface that makes it easy for the user to view this information.",
                priority: Priority.Could,
                featureId: "faa895cc-80db-4e5e-b297-d846ab34ed2f",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Doing,
                addDate: new Date("2023-06-12"),
                endDate: new Date(),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Editing and updating material information",
                description: "Implement features that allow the user to edit and update material information in the database. The user should be able to add new materials, change their properties such as strength, flexibility, weight, and delete outdated entries. Provide appropriate access permissions so that only authorised users can edit the materials database.",
                priority: Priority.Should,
                featureId: "faa895cc-80db-4e5e-b297-d846ab34ed2f",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Todo,
                addDate: new Date("2023-06-12"),
                endDate: new Date(),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Comparing the properties of different materials",
                description: "Create a function that allows the user to select two or more materials from a database and compare their properties. The user should be able to select specific materials and then display their properties, such as strength, weight, price. Provide an intuitive interface that makes it easy for the user to compare materials and move between them.",
                priority: Priority.Must,
                featureId: "10cb053b-94ba-491d-b831-af8826e3178b",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Doing,
                addDate: new Date("2023-06-12"),
                endDate: new Date("2023-06-18"),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
            {
                name: "Generation of comparison charts",
                description: "Implement functions that allow the user to generate graphs or comparison charts for different materials. The user should be able to select materials for comparison and the application should generate appropriate graphs that visually show a comparison of their properties, such as strength, weight, price. Use appropriate libraries or tools to generate charts that are clear and easy to interpret.",
                priority: Priority.Could,
                featureId: "10cb053b-94ba-491d-b831-af8826e3178b",
                expectedExecutionTime: new Date("2023-06-30"),
                status: Status.Doing,
                addDate: new Date("2023-06-12"),
                endDate: new Date("2023-06-20"),
                startDate: new Date("2023-06-15"),
                userName: "79877259-2198-4a10-9cfa-5445a200e9e1"
            },
        ];
        this.taskSubject = new ReplaySubject<Array<FeatureTask>>();
        this.taskSubject.next(this.tasks);
        this.tasksObservable = this.taskSubject;
    }

    GetTasksForFeature(featureId: string) : Observable<Array<FeatureTask>> {
        return this.tasksObservable.pipe(
            map(tasks => tasks.filter(task => task.featureId === featureId))
          );
    }

    DeleteTask(taskName: string) {
        const index = this.tasks.findIndex((a) => a.name === taskName);
        if(index > -1) {
            this.tasks.splice(index, 1);
        }
        this.taskSubject.next(this.tasks);
    }

    AddOrUpdateTask(task: FeatureTask) {
        this.DeleteTask(task.name);
        this.tasks.push(task);
        this.taskSubject.next(this.tasks);
    }
}