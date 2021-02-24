export default function FooterLink(props) {
    return (
        <a className="text-sm text-gray-600 hover:text-gray-800" href={props.url ?? '#'}>{props.title}</a>
    )
}