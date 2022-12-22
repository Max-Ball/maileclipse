import { store } from "../store";
import { api } from "./AxiosService";


class MailableService {


  async getAllMailables() {
    console.log('getting');
    const res = await api.get('maileclipse/mailables')
    console.log('what about here?');
    store.mailables = res.data
  }
}

export const mailablesService = new MailableService();