import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient: HttpClient) { }

  getAllCategories() {
    return this.httpclient.get('http://localhost/api/categories');
  }


}
