import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from './user.interface'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL: string = "http://localhost:4200/api/"

  constructor (private _httpService: HttpClient) {}

  getUsers () {
    return this._httpService.get(this.BASE_URL + "users")
  }
  deleteUser (userId: number) {
    return this._httpService.delete(`${this.BASE_URL}users/${userId}`)
  }

  addUser (user: User) {
    return this._httpService.post(`${this.BASE_URL}users`, user)
  }
  updateUser (user: User) {
    return this._httpService.put(`${this.BASE_URL}users/${user.id}`, user)
  }

  gerUser (id: number) {
    return this._httpService.get(`${this.BASE_URL}users/${id}`)
  }
}
