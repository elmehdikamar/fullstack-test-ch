import NavItem from "./nav_item";
import ProfileContainer from "./profile_container";

export default function NavBar(props) {
    return (
        <div className="col-span-5 flex flex-row py-5 px-4 bg-white items-center">
            <button type="button" className="text-gray-800 md:hidden hover:text-gray-400">
                <svg className="h-5 w-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <span className="text-blue-400 text-md uppercase font-bold flex-1 lg:flex-none">Health Explore</span>
            <div className="hidden lg:flex flex-row space-x-10 flex-1 justify-center items-center">
                <NavItem title="Profile" />
                <NavItem title="Jobs" />
                <NavItem title="Professional Network" />
                <NavItem title="Lounge" />
                <NavItem title="Salary" />
            </div>
            <div className="flex flex-row space-x-5 justify-center items-center">
                <button className="hidden lg:block py-2 px-4 uppercase text-xs border border-blue-500 rounded-xl text-blue-500 hover:text-white hover:bg-blue-500 font-medium" type="button">Create Job</button>
                <ProfileContainer initials='JO' notifCount={2} />
                <NavItem className="hidden lg:block" title="Logout" />
            </div>
        </div>
    )
}