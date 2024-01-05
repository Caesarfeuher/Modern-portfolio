import Head from "next/head";
import NavBar from "../global-components/nav-bar";
import Home from "./home";


export default function HomePage() {
    return (
        <div className="">
            <NavBar />
            <Home />
        </div>
    )
}
