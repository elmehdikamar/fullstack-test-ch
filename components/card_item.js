export default function CardItem(props) {
    return(
        <div className={'bg-white px-4 py-4 border border-gray-100 ' + (props.className ?? "")}>
            {props.children}
        </div>
    )
}