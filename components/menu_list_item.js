export default function MenuListItem(props) {
    return (
        <button type="button" onClick={() => props.onClick && props.onClick()} className="group flex flex-row items-center flex-wrap text-left">
            <span className="text-sm text-gray-600 group-hover:text-gray-800 mr-2">{props.title}</span>
            <span className="text-xs font-light text-gray-400">{props.count}</span>
        </button>)
}