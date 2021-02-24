import Head from "next/head"
import { useEffect } from "react"
import CardItem from "../components/card_item"
import Footer from "../components/footer"
import FooterLink from "../components/footer_link"
import MenuListItem from "../components/menu_list_item"
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
        <div className="col-span-5 flex flex-row py-5 px-4 bg-white items-center">
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
        <div className="grid grid-flow-row grid-cols-5 gap-5 w-full mt-5 px-5">

          <button type="button" className="col-span-5 hover:opacity-80 border border-gray-100 flex flex-row bg-white py-5 px-6 items-center">
            <svg className="h-4 w-4 flex-shrink-0 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-gray-400 text-sm ml-3">Search for any job, title, keywords or company</p>
          </button>
          <CardItem>
            <h4 className="uppercase text-gray-900 font-medium text-sm">Job Type</h4>
            <div className="space-y-3 mt-3 flex flex-col">
              <MenuListItem title="Per-Diem" count="1,987" />
              <MenuListItem title="Traveler" count="1,987" />
              <MenuListItem title="Part-time" count="1,987" />
              <MenuListItem title="Full-time" count="1,987" />
            </div>
          </CardItem>
          <div className="row-span-4 col-span-4 bg-white">

          </div>
          <CardItem>
            <h4 className="uppercase text-gray-900 font-medium text-sm">Department</h4>
            <div className="space-y-3 mt-3 flex flex-col">
              <MenuListItem title="Cum sociis natoque" count="1,987" />
              <MenuListItem title="Inmensae subtilitatis, obscuris et malesuada fames." count="1,987" />
              <MenuListItem title="Me non paenitet nullum " count="1,987" />
              <MenuListItem title="Idque Caesaris facere voluntate " count="1,987" />
            </div>
          </CardItem>
          <CardItem>
            <h4 className="uppercase text-gray-900 font-medium text-sm">Work Schedule</h4>
            <div className="space-y-3 mt-3 flex flex-col">
              <MenuListItem title="Night shift" count="3,509" />
              <MenuListItem title="Day shift" count="2,541" />
            </div>
          </CardItem>
          <CardItem>
            <h4 className="uppercase text-gray-900 font-medium text-sm">Experience</h4>
            <div className="space-y-3 mt-3 flex flex-col">
              <MenuListItem title="Intermediate" count="3,509" />
              <MenuListItem title="Senior" count="2,541" />
              <MenuListItem title="Internship" count="2,541" />
              <MenuListItem title="Junior" count="2,541" />
            </div>
          </CardItem>
        </div>
      </div>

      <Footer className="mt-5" />
    </>
  )

}
export default Index
