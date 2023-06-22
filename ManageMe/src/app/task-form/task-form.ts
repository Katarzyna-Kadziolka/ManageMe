import { FormControl } from '@angular/forms';

export type TaskForm = {
    name: FormControl<string>,
    description: FormControl<string>,
    expectedExecutionTime: FormControl<Date>,
    addDate: FormControl<Date>,
    startDate: FormControl<Date>,
    endDate: FormControl<Date>,
    userName: FormControl<string>
}