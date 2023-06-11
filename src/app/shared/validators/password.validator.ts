import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator {
    static validatePassword(control: AbstractControl): ValidationErrors | null {
        const value : string = control.value;

        if(!value) {
            return null;
        }

        let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$/;
        let result = pattern.test(value);

        const errorMessage = {
            invalidPasswordFormat : {
                inputValue : control.value
            }
        }


        return result ? null : errorMessage;
    }
}