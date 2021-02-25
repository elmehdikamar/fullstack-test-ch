export default function SortItem(props) {

    const doStateChange = () => {
        if (props.state == 'asc') {
            props.onStateChanged && props.onStateChanged('desc')
        } else if (props.state == 'desc') {
            props.onStateChanged && props.onStateChanged(null)
        } else {
            props.onStateChanged && props.onStateChanged('asc')
        }
    }
    return (
        <button onClick={() => doStateChange()} className={`${props.state ? 'text-blue-400 hover:text-blue-500' : 'hover:text-gray-900'} focus:outline-none flex flex-row items-center`} type="button">
            <span>{props.title}</span>
            {props.state == 'asc'
                ?
                <svg className="ml-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                </svg>
                :
                props.state == 'desc' ?
                    <svg className="ml-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                    :
                    null}
        </button>
    );
}