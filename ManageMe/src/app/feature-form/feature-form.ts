import { FormControl } from "@angular/forms"

export type FeatureForm = {
    name: FormControl<string>,
    description: FormControl<string>,
    owner: FormControl<string>,
}