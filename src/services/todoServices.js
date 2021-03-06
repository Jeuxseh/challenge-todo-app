import axios from 'axios';

class TodoService {

  constructor(){
    this.api = axios.create({
      baseURL: "http://localhost:4000/api/v1",
      withCredentials: true
    })
  }

  getAll() {
    this.api.get('/todos')
      .then(({data}) => data)
  }

  createTodo(body) {
    this.api.post('/todos', body)
      .then(({data})=> data)
  }

  getTodo(id) {
    return this.api.get(`/todos/${id}`)
      .then(({data}) => data)
  }

  editTodo(id, body) {
    return this.api.put(`/todos/${id}`, body)
    .then(({data}) => data)
  }

  deleteTodo(id) {
    return this.api.delete(`/todos/${id}`)
    .then(({data}) => data)
  }

}

const todoService = new TodoService();
export default todoService;