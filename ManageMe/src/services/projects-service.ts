import { ProjectDetails } from './../models/project-details';
import { FeaturesService } from './features-service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Project } from './../models/project';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    projects: Array<Project> = [];
    private projectsSubject: BehaviorSubject<Array<Project>> = new BehaviorSubject<Array<Project>>([]);
    projectsObservable: Observable<Array<Project>> = this.projectsSubject.asObservable();

    constructor(private featureService: FeaturesService) {
        this.projects = [
            {
                id: "f9614e22-0418-4acf-90ad-af73e715f87e",
                name: "Pomodoro App",
                description: "Time and task management application."
            },
            {
                id: "44df5e72-a809-46cd-ab0a-3c4d17557f4c",
                name: "Athena",
                description: "Home library management application."
            },
            {
                id: "821c185a-99cc-4d57-ad3b-a78bb46a3406",
                name: "Urania",
                description: "Calculator of wire parameters to simplify choosing the right material for chainmaille jewelry."
            }
        ]

        this.projectsSubject.next(this.projects);
    }

    GetProjects() : Array<Project> {
        return this.projects;
    }

    GetProject(id: string): Observable<Project> {
        const project = this.projects.find((a) => a.id === id);
        if (project === undefined) throw new Error('Project not found');
        return of(project);
    }

    GetProjectDetails(projectId: string): Observable<ProjectDetails> {
        let project : Project = {
            id: "",
            name: "",
            description: "",
        }

        this.GetProject(projectId).subscribe(
            p => project = p
        );

        const projectDetails : ProjectDetails = {
            id: project.id,
            name: project.name,
            description: project.description,
            features: []
        }

        this.featureService.GetFeaturesForProject(project.id).subscribe(
            updatedList => {
              projectDetails.features = updatedList;
            }
        )

        return of(projectDetails);
    }
}