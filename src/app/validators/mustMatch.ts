import { FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const contorl = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        
        if (contorl.value !== matchingControl.value) {
            matchingControl.setErrors({mustMatch:true})
        } else {
            matchingControl.setErrors(null);
        }
    }
}