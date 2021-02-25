import JobService from "../services/job"
import { createMocks } from 'node-mocks-http';

describe('/api/jobs', () => {
    test('returns a list with the specified search query', async () => {

        const { req, res } = createMocks({
            method: 'GET',
            query: {
                search: 'Hospital'
            },
        });

        const getJobs = require("../pages/api/jobs").default

        await getJobs(req, res)

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).not.toEqual([]);
    })
})