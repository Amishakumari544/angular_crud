import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'
import {User} from './user.interface'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor () {}
  createDb () {
    let users : User[] = [
      {
        id: 1,
        firstName: 'Amisha',
        lastName: 'Kumari',
        email: 'ami@gmail.com',
        password: '42223',
        acceptTerms: true
      }
    ]
    return {users} 
  }
}
