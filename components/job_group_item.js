import { useState } from "react";
import JobDetail from "./job_detail";
import JobItem from "./job_item";

export default function JobGroupItem(props) {

    const getInitials = (name) => {
        return name.substr(0, 1).toUpperCase() + name.substr(1, 1).toUpperCase()
    }

    const [jobsShown, setJobsShown] = useState(false)
    return (
        <div className="flex flex-col">
            <button onClick={() => setJobsShown(!jobsShown)} className="focus:outline-none flex flex-row items-center group" type="button">
                <span className="bg-gray-300 group-hover:bg-blue-400 rounded-lg h-9 w-9 flex flex-shrink-0 items-center justify-center text-lg font-semibold text-white">{getInitials(props.jobGroup.name)}</span>
                <p className="text-left ml-4 text-gray-700 group-hover:text-gray-900">{props.jobGroup.total_jobs_in_hospital} jobs for {props.jobGroup.name}</p>
            </button>

            {jobsShown && <>
                <div className="flex flex-col divide-y">
                    {props.jobGroup.items.map((job) => <JobItem job={job} />)}
                </div>
            </>}
        </div>
    )
} 