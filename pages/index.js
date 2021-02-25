import Head from "next/head"
import { useEffect } from "react"
import CardItem from "../components/card_item"
import Footer from "../components/footer"
import FooterLink from "../components/footer_link"
import JobGroupItem from "../components/job_group_item"
import MenuListItem from "../components/menu_list_item"
import NavBar from "../components/navbar"
import NavItem from "../components/nav_item"
import ProfileContainer from "../components/profile_container"
import SortItem from "../components/sort_item"

function Index() {

  useEffect(() => {
    document.getElementsByTagName('body')[0].className = "bg-gray-100"
  }, [])

  return (
    <>
      <Head>
        <title>ClipboardHealth - Home</title>
      </Head>
      <div className="flex flex-row items-center">
        <span className="text-gray-600 text-sm flex-1"><strong className="font-semibold">7,743</strong> job postings</span>
        <div className="flex-row space-x-5 text-sm text-gray-600 hidden lg:flex">
          <span className="text-gray-400">Sort by</span>
          <SortItem title="Location" />
          <SortItem title="Role" />
          <SortItem title="Department" />
          <SortItem title="Education" />
          <SortItem title="Experience" />
        </div>
      </div>
      <div className="flex flex-col mt-10 space-y-5">
        <JobGroupItem />
        <JobGroupItem />
        <JobGroupItem />
        <JobGroupItem />
      </div>
    </>
  )

}
export default Index
