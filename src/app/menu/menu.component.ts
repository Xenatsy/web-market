import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
    @Input() role!: string;
    @Output() change_template = new EventEmitter<string>();
    @Output() change_role = new EventEmitter<string>();

    go(place: string) {
        const regauth = document.getElementById("reg-auth") as HTMLElement|null;
        switch (regauth?.innerText) {
            case "Авторизация": {
                regauth.innerText = "Регистрация";
                this.change_template.emit("auth");
                break;
            }
            case "Регистрация": {
                regauth.innerText = "Авторизация";
                this.change_template.emit("reg");
                break;
            }
            default:
                this.change_template.emit(place);
        }
    }
    out(){
        this.go("auth");
        sessionStorage.clear();
        this.change_role.emit("Guest");
    }

}
