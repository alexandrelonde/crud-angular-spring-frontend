import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  // list é apenas o nome do método, poderia ser qualquer um como: finAll, listarTodos
  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'front-end'}
    ];
  }
}
