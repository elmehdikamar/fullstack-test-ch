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
import { useRouter } from "next/router";



function MyApp({ Component, pageProps }) {

  return (
    <Component {...pageProps} />
  )
}


export default MyApp
