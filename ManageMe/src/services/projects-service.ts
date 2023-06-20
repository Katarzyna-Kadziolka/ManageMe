import { Observable, of, startWith } from 'rxjs';
import { FeaturesService } from './features-service';
import { ProjectDetails } from './../models/project-details';
import { Injectable } from '@angular/core';
import { Project } from './../models/project';

@Injectable()
export class ProjectsService {
    projects: Array<Project> = [];


    constructor() {
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
    }

    GetProjects() : Array<Project> {
        return this.projects;
    }

    GetProject(id: string) : Project {
        const project = this.projects.find((a) => a.id === id);
        if(project === undefined) throw Error;
        return project;
    }

    GetProjectDetails(id: string) : Observable<ProjectDetails>  {
        const projectDetails : ProjectDetails = {
            id: '',
            name: '',
            description: '',
            features: []
        };
        const featureService = new FeaturesService();
        const projectToMap = this.projects.find((a) => a.id === id);
        if(projectToMap === undefined) throw Error;
        projectDetails.id = projectToMap.id;
        projectDetails.name = projectToMap.name;
        projectDetails.description = projectToMap.description;
        projectDetails.features = featureService.GetFeaturesForProject(projectDetails.id);

        return of(projectDetails).pipe(startWith(projectDetails)); ;
    }
}