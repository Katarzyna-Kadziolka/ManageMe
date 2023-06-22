import { FormControl } from '@angular/forms';

export type TaskForm = {
    name: FormControl<string>,
    description: FormControl<string>,
    expectedExecutionTime: FormControl<string>,
    addDate: FormControl<string>,
    startDate: FormControl<string>,
    endDate: FormControl<string>,
    userName: FormControl<string>
}