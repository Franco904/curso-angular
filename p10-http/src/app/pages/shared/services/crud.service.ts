import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { delay, take } from 'rxjs/operators';

export class CrudType {
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService<T extends CrudType> {

  constructor(
    protected httpClient: HttpClient,
    private API: string,
  ) { }


  get(id: number) {
    return this.httpClient.get<T>(`${this.API}/${id}`)
      .pipe(take(1));
  }

  getAll() {
    return this.httpClient.get<T[]>(this.API)
      .pipe(delay(1000));
  }

  write(instance: T, isEditing: boolean) {
    return isEditing ? this.update(instance) : this.create(instance);
  }

  private create(instance: T) {
    return this.httpClient.post<T>(this.API, instance)
      .pipe(take(1));
  }

  private update(instance: T) {
    return this.httpClient.put<T>(`${this.API}/${instance.id}`, instance)
      .pipe(take(1));
  }

  delete(id: number) {
    return this.httpClient.delete<T>(`${this.API}/${id}`)
      .pipe(take(1));
  }
}
