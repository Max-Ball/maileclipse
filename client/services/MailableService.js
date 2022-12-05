import { store } from "../src/store";
import { api } from "./AxiosService";

class MailableService {

  async getAllMailables() {
    console.log('getting');
    const res = await api.get('/api')
    console.log('what about here?');
    store.mailables = res.data
  }
}

export const mailablesService = new MailableService();