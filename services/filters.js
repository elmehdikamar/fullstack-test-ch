import API from "./api";

export default class FiltersService {
    static async getFilters() {
        return API.fetch('GET', '/api/filters')
    }
}