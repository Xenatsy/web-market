import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key)!);
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
  has(key:string): boolean {
    return localStorage.getItem(key) != null;
  }

  clear(): void {
    localStorage.clear();
  }
}
