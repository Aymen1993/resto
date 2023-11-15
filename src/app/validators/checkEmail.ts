import { UserService } from './../services/user.service';
import { FormGroup } from '@angular/forms';

export function CheckEmail(controlEmail: string) {
    return (formGroup: FormGroup, userService: UserService) => {
        const control = formGroup.controls[controlEmail];
        // userService.getAllUsers().subscribe((data) => {
        //     let user = data.users.find((obj: any) => { return obj.email == control.value });
        //     console.log("here is the user",user);
            
        //     if (user) {
        //         control.setErrors({ emailExist: true });
        //     } else {
        //         control.setErrors(null);
        //     }
        // });

    }
}