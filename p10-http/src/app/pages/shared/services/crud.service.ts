import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

export class CrudType {
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService<T extends CrudType> {

  constructor(
    protected httpClient: HttpClient,
    @Inject(String) private API: string,
  ) { }

  get(id: number) {
    return this.httpClient.get<T>(`${this.API}/${id}`);
  }

  getAll() {
    return this.httpClient.get<T[]>(this.API);
  }

  write(instance: T, isEditing: boolean) {
    return isEditing ? this.update(instance) : this.create(instance);
  }

  private create(instance: T) {
    return this.httpClient.post<T>(this.API, instance);
  }

  private update(instance: T) {
    return this.httpClient.put<T>(`${this.API}/${instance.id}`, instance);
  }

  delete(id: number) {
    return this.httpClient.delete<T>(`${this.API}/${id}`);
  }
}
