import API from "./api";

export default class JobService {
    static async getJobs() {
        return API.fetch('GET', '/api/jobs')
    }
}