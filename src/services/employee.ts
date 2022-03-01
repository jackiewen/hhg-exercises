import axios from 'axios';
import IPaginate from './../types/IPaginate';
import queryString from 'query-string';

class EmployeeService {
  baseUrl = 'https://621e42b9849220b1fc94a0a3.mockapi.io/employee';

  public async getTotal() {
    const { data } = await axios.get(`${this.baseUrl}`);
    return data?.length || 0;
  }

  public async getList(paginate: IPaginate) {
    const qs = queryString.stringify(paginate);
    const result = await axios.get(`${this.baseUrl}?${qs}`);
    return result;
  }
}

export default new EmployeeService();