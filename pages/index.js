import Head from "next/head"
import { useEffect } from "react"
import NavItem from "../components/nav_item"
import ProfileContainer from "../components/profile_container"

function Index() {

  useEffect(() => {
    document.getElementsByTagName('body')[0].className = "bg-gray-100"
  }, [])

  return (
    <>
      <Head>
        <title>ClipboardHealth - Home</title>
      </Head>
      <div className="flex flex-col w-full">
        <div className="flex flex-row py-5 px-4 bg-white items-center">
          <span className="text-blue-400 text-md uppercase font-bold">Health Explore</span>
          <div className="flex flex-row space-x-10 flex-1 justify-center items-center">
            <NavItem title="Profile" />
            <NavItem title="Jobs" />
            <NavItem title="Professional Network" />
            <NavItem title="Lounge" />
            <NavItem title="Salary" />
          </div>
          <div className="flex flex-row space-x-5 justify-center items-center">
            <button className="py-2 px-4 uppercase text-xs border border-blue-500 rounded-xl text-blue-500 hover:text-white hover:bg-blue-500 font-medium" type="button">Create Job</button>
            <ProfileContainer initials='JO' notifCount={2} />
            <NavItem title="Logout" />
          </div>
        </div>
      </div>
    </>
  )

}
export default Index
