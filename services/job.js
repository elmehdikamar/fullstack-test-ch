import API from "./api";


export default class JobService {
    static async getJobs(params) {
        var query = '/api/jobs'
        if (params) {
            query += '?' + params
            console.log(query)
        }
        return API.fetch('GET', query)
    }
}