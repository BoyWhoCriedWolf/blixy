class ApiService<T = any> {
  async create(data: T): Promise<boolean> {
    return true;
  }
}

export default ApiService;
