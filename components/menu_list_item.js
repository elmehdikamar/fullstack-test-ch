export default function MenuListItem(props) {
    return (
        <button type="button" onClick={() => props.onClick && props.onClick()} className="group flex-col">
            <span className="text-sm text-gray-600 group-hover:text-gray-800">{props.title}</span>
            <span className="ml-2 text-xs font-light text-gray-400">{props.count}</span>
        </button>)
}