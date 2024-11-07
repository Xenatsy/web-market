import { Component, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
    @Output() reg = new EventEmitter<string>();
    @Output() change_template = new EventEmitter<string>();
    registration(new_role: string){
        this.reg.emit(new_role);
        switch (new_role){
            case "Admin": {
                this.change_template.emit("good_redactor");
                break;
            }
            case "User": {
                this.change_template.emit("shelf");
                break;
            }
        }

    }
}
