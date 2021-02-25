import Head from "next/head"
import { useEffect, useState } from "react"
import { NotificationContainer, NotificationManager } from "react-notifications"
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
import { useRouter } from "next/router"
import Router from "next/router"
import FiltersService from "../services/filters"

function Home() {
  const router = useRouter()

  const [jobs, setJobs] = useState([])
  const [filters, setFilters] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [params, setParams] = useState({})

  const isSelected = (type, value) => {
    if (router.query[type] == value) return true
  }

  const toggleFilter = (type, value) => {
    if (params[type] == value) {
      const _params = params
      delete _params[type]
      setParams({ ...params })
    } else {
      setParams({ ...params, [type]: value })
    }
  }

  const getFilters = async () => {
    var response = await FiltersService.getFilters()
    if (response.isSuccess) {
      setFilters(response.data)
    } else {
      NotificationManager.error(response.errorText)
    }
  }

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

  const getJobs = async (params) => {
    setIsLoading(true)

    var response = await JobService.getJobs(params)
    setIsLoading(false)
    if (response.isSuccess) {
      setJobs(response.data.jobs)
    } else {
      NotificationManager.error(response.errorText)
    }
  }

  useEffect(() => {
    document.getElementsByTagName('body')[0].className = "bg-gray-100"
    getFilters()
    if (Object.keys(router.query).length > 0) {
      setParams(router.query)
    } else getAllJobs()
  }, [])

  useEffect(() => {
    const queryString = require('query-string');
    if (Object.keys(router.query).length > 0) {
      const stringified = queryString.stringify(router.query);
      getJobs(stringified)
    } else {
      getAllJobs()
    }
    //
  }, [router.query])

  useEffect(() => {
    Router.push({
      query: params
    })
  }, [params])

  return (
    <div className="flex flex-col w-full">
      <NavBar />
      <div className="grid grid-flow-row grid-cols-5 lg:gap-5 w-full lg:mt-5 lg:px-5">

        <button type="button" className="col-span-5 hover:opacity-80 border border-gray-100 flex flex-row bg-white py-5 px-3 md:px-6 items-center">
          <svg className="h-4 w-4 flex-shrink-0 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className="text-gray-400 text-xs md:text-sm ml-3 text-left">Search for any job, title, keywords or company</p>
        </button>
        <div className="space-y-5 flex flex-col">
          <CardItem className="hidden lg:block">
            <h4 className="uppercase text-gray-900 font-medium text-sm">Job Type</h4>
            <div className="space-y-3 mt-3 flex flex-col">
              {filters.job_type && filters.job_type.map((item) =>
                <MenuListItem onClick={() => toggleFilter('type', item.key)} selected={isSelected('type', item.key)} title={item.key} count={item.doc_count} />
              )}
            </div>
          </CardItem>
          <CardItem className="hidden lg:block">
            <h4 className="uppercase text-gray-900 font-medium text-sm">Department</h4>
            <div className="space-y-3 mt-3 flex flex-col">
              {filters.department && filters.department.map((item) =>
                <MenuListItem onClick={() => toggleFilter('department', item.key)} selected={isSelected('department', item.key)} title={item.key} count={item.doc_count} />
              )}
            </div>
          </CardItem>
          <CardItem className="hidden lg:block">
            <h4 className="uppercase text-gray-900 font-medium text-sm">Work Schedule</h4>
            <div className="space-y-3 mt-3 flex flex-col">
              {filters.work_schedule && filters.work_schedule.map((item) =>
                <MenuListItem onClick={() => toggleFilter('schedule', item.key)} selected={isSelected('schedule', item.key)} title={item.key} count={item.doc_count} />
              )}
            </div>
          </CardItem>
          <CardItem className="hidden lg:block">
            <h4 className="uppercase text-gray-900 font-medium text-sm">Experience</h4>
            <div className="space-y-3 mt-3 flex flex-col">
              {filters.experience && filters.experience.map((item) =>
                <MenuListItem onClick={() => toggleFilter('experience', item.key)} selected={isSelected('experience', item.key)} title={item.key} count={item.doc_count} />
              )}
            </div>
          </CardItem>
        </div>
        <div className="col-span-5 lg:col-span-4 bg-white pt-6 pb-4 px-5">
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
        </div>
      </div>
      <Footer className="mt-5" />
      <NotificationContainer />
    </div>
  )

}
export default Home
