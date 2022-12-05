import { store } from "../src/store";
import { api } from "./AxiosService";

class MailableService {

  async getAllMailables() {
    const res = await api.get()
    store.mailables = res.data
  }
}

export const mailablesService = new MailableService();