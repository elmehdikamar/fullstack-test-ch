import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import CardItem from "../components/card_item";
import Footer from "../components/footer";
import MenuListItem from "../components/menu_list_item";
import NavBar from "../components/navbar";
import SortItem from "../components/sort_item";
import FiltersService from "../services/filters";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';



function MyApp({ Component, pageProps }) {

  const [filters, setFilters] = useState({})

  const getFilters = async () => {
    var response = await FiltersService.getFilters()
    if (response.isSuccess) {
      setFilters(response.data)
    } else {
      NotificationManager.error(response.errorText)
    }
  }

  useEffect(() => {
    document.getElementsByTagName('body')[0].className = "bg-gray-100"
    getFilters()
  }, [])

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
                <MenuListItem title={item.key} count={item.doc_count} />
              )}
            </div>
          </CardItem>
          <CardItem className="hidden lg:block">
            <h4 className="uppercase text-gray-900 font-medium text-sm">Department</h4>
            <div className="space-y-3 mt-3 flex flex-col">
              {filters.department && filters.department.map((item) =>
                <MenuListItem title={item.key} count={item.doc_count} />
              )}
            </div>
          </CardItem>
          <CardItem className="hidden lg:block">
            <h4 className="uppercase text-gray-900 font-medium text-sm">Work Schedule</h4>
            <div className="space-y-3 mt-3 flex flex-col">
              {filters.work_schedule && filters.work_schedule.map((item) =>
                <MenuListItem title={item.key} count={item.doc_count} />
              )}
            </div>
          </CardItem>
          <CardItem className="hidden lg:block">
            <h4 className="uppercase text-gray-900 font-medium text-sm">Experience</h4>
            <div className="space-y-3 mt-3 flex flex-col">
              {filters.experience && filters.experience.map((item) =>
                <MenuListItem title={item.key} count={item.doc_count} />
              )}
            </div>
          </CardItem>
        </div>
        <div className="col-span-5 lg:col-span-4 bg-white pt-6 pb-4 px-5">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer className="mt-5" />
      <NotificationContainer />
    </div>

  )
}


export default MyApp
