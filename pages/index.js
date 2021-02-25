import Head from "next/head"
import { useEffect, useState } from "react"
import { NotificationManager } from "react-notifications"
import CardItem from "../components/card_item"
import Footer from "../components/footer"
import FooterLink from "../components/footer_link"
import JobGroupItem from "../components/job_group_item"
import MenuListItem from "../components/menu_list_item"
import NavBar from "../components/navbar"
import NavItem from "../components/nav_item"
import ProfileContainer from "../components/profile_container"
import SortItem from "../components/sort_item"
import JobService from "../services/job"
import { ClipLoader } from "react-spinners"

function Index() {

  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getAllJobs = async () => {
    setIsLoading(true)
    var response = await JobService.getJobs()
    setIsLoading(false)
    if (response.isSuccess) {
      setJobs(response.data.jobs)
    } else {
      NotificationManager.error(response.errorText)
    }
  }

  useEffect(() => {
    getAllJobs()
  }, [])

  return (
    <>
      <Head>
        <title>ClipboardHealth - Home</title>
      </Head>
      <div className="flex flex-row items-center">
        <span className="text-gray-600 text-sm flex-1">
          <strong className="font-semibold">{jobs.length}</strong> job postings</span>
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
        {isLoading ?
          <div className="mx-auto my-auto p-10"><ClipLoader color='blue' size={45} /></div>
          :
          jobs.map((job) => <JobGroupItem jobGroup={job} />)
        }
      </div>
    </>
  )

}
export default Index
