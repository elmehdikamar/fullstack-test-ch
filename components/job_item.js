import { useState } from "react";
import JobDetail from "./job_detail";

export default function JobItem(props) {
    const [showDetail, setShowDetail] = useState(false)
    return (
        <div className="flex flex-col py-5">
            <button onClick={() => setShowDetail(!showDetail)} type="button" className="focus:outline-none flex flex-col lg:flex-row items-start lg:items-center text-gray-700 hover:opacity-80 text-left">
                <div className="flex flex-col flex-1">
                    <p className="font-semibold">RN Outpatient Surgery</p>
                    <p>Full-time | $19.95 - $37.93 an hour | Westlake Village, CA</p>
                </div>
                <span>3 weeks ago</span>
            </button>
            {showDetail && <JobDetail />}
        </div>
    )
}