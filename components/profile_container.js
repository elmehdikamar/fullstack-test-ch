export default function ProfileContainer(props) {
    return (
        <button className="relative rounded-full bg-blue-500 p-2 h-9 w-9 flex items-center justify-center hover:bg-blue-600">
            <span className="text-white font-medium">{props.initials}</span>
            {props.notifCount && props.notifCount > 0 && <span className="absolute text-white ring-2 -right-1 -top-1 ring-white h-4 w-4 rounded-full bg-red-500 text-xs">{props.notifCount}</span>}
        </button>
    );
}