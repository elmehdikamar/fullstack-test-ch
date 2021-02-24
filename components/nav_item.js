export default function NavItem(props) {
    return (
        <a className="text-gray-800 uppercase text-xs font-medium hover:text-blue-500" href={props.url ?? '#'}>{props.title}</a>
    )

}