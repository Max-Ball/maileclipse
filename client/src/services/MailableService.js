import { store } from "../store";
import { api } from "./AxiosService";


class MailableService {


  async getAllMailables() {
    const res = await api.get('maileclipse/mailables')
    console.log('what about here?');
    store.mailables = res.data
  }
  async createMailable() {
    console.log('creating mailable');
    const res = await api.post('maileclipse/mailables/new', newMailable)
    store.mailables = res.data
  }
}

export const mailablesService = new MailableService();