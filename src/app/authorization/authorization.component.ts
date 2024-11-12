import { FormsModule } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css'
})
export class AuthorizationComponent {
    @Output() change_template = new EventEmitter<string>();

    login: string = "";
    password: string = "";

    authorization(){
        // Поиск логина и пароля с базы данных

        // Обработка логина и пароля
        console.log("OK!");
    }
}
