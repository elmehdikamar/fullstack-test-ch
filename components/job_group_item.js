import { useState } from "react";
import JobDetail from "./job_detail";
import JobItem from "./job_item";

export default function JobGroupItem(props) {

    const [jobsShown, setJobsShown] = useState(false)
    return (
        <>
            <button onClick={() => setJobsShown(!jobsShown)} className="focus:outline-none flex flex-row items-center group" type="button">
                <span className="bg-gray-300 group-hover:bg-blue-400 rounded-lg h-9 w-9 flex items-center justify-center text-lg font-semibold text-white">MA</span>
                <p className="text-left ml-4 text-gray-700 group-hover:text-gray-900">8 jobs for Fountain Valley Rgnl Hosp And Med Ctr - Euclid</p>
            </button>

            {jobsShown && <>
                <div className="h-0.5 w-full bg-gray-100 opacity-70 mt-5"></div>
                <div className="flex flex-col divide-y">
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                </div>
            </>}
        </>
    )
} 