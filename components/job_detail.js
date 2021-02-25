export default function JobDetail(props) {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-1 grid grid-flow-row grid-cols-1 md:grid-cols-2 text-gray-700 mt-10 text-sm gap-4">
                <span className="font-semibold">Department:</span>
                <p>{props.department.map((item, index) => `${index != 0 ? ', ' : ''}${item}`)}</p>
                <span className="font-semibold">Hours / shifts:</span>
                <p>{props.hours} hours / {props.shift}</p>
                <span className="font-semibold">Summary:</span>
                <p>{props.summary}</p>
            </div>
            <div className="row-span-3 flex flex-row md:flex-col items-center md:justify-center mt-5 md:mt-0 md:items-end space-x-4 md:space-x-0 md:space-y-4 md:w-2/6 text-sm">
                <button className="py-3 px-4 rounded-xl text-white hover:bg-blue-900 bg-blue-500" type="button">Job details</button>
                <button className="py-3 px-4 border border-blue-500 rounded-xl text-blue-500 hover:text-white hover:bg-blue-500" type="button">Save Job</button>
            </div>
        </div>
    )
}