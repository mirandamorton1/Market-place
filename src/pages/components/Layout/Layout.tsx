import Head from 'next/head'
import SideMenu from "../SideMenu";
import scss from "./Layout.module.scss";
import React from "react";

const Layout = (props: any) => {
    return (
    <>
        <Head>
          <title>Cubeseed Dashboard</title>
          <meta name="description" content="Dashboard" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={scss.layout}>
            <SideMenu />
            {props.children}
        </main>
    </>
    )
}

export default Layout; 