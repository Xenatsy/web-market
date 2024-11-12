import { Component, inject } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RegistrationComponent } from '../registration/registration.component';
import { CartComponent } from "../cart/cart.component";
import { GoodRedactorComponent } from '../good_redactor/good-redactor.component';
import { ShelfComponent } from '../shelf/shelf.component';
import { AuthorizationComponent } from "../authorization/authorization.component";
import { LocalStorageService } from "./session.service"
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [
    LocalStorageService
  ],
  imports: [
    MenuComponent,
    RegistrationComponent,
    GoodRedactorComponent,
    CartComponent,
    ShelfComponent,
    AuthorizationComponent
],
})
export class AppComponent {
    /*
        Роли:
            - Guest может видеть только кнопку
                - "Регистрация/Авторизация";
                - не может выбирать товар до авторизации;
            - User может видеть кнопки
                - "Главная";
                - "Корзина";
                - "Выход";
                - может выбирать и оформлять заказ;
            - Admin может видеть кнопки
                - "Главная";
                - "Редактор товаров";
                - "Выход";
                - может только редактировать список товаров;
        Шаблоны-страницы:
            -  Reg-auth
    */

    role:string = "";
    template:string = ""
    
    constructor(private storageService: LocalStorageService) {}

    ngOnInit(){
      this.role = this.storageService.has("role") ? this.storageService.get("role")! : "Guest";
      this.template = this.storageService.has("template") ? this.storageService.get("template")! : "auth";
    }

    changeRole(new_role: string){
        this.role = new_role;
        this.storageService.set("role", new_role);
    }

    changeTemplate(new_template: string){
        this.template = new_template;
        this.storageService.set("template", new_template);

    }

}
