import moment from "moment";
import { useState } from "react";
import JobDetail from "./job_detail";

export default function JobItem(props) {
    const [showDetail, setShowDetail] = useState(false)
    return (
        <div className="flex flex-col py-5">
            <button onClick={() => setShowDetail(!showDetail)} type="button" className="focus:outline-none flex flex-col lg:flex-row items-start lg:items-center text-gray-700 hover:opacity-80 text-left">
                <div className="flex flex-col flex-1">
                    <p className="font-semibold">{props.job.job_title}</p>
                    <p>{props.job.job_type} | ${props.job.salary_range[0]} - ${props.job.salary_range[1]} an hour | {props.job.city}</p>
                </div>
                <span>{moment(props.job.created).fromNow()}</span>
            </button>
            {showDetail && <JobDetail
                department={props.job.department}
                hours={props.job.hours[0]}
                shift={props.job.work_schedule}
                summary={props.job.description} />}
        </div>
    )
}