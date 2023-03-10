import { TopHeader, Banner } from "@/components";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import React from "react";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <TopHeader />
            <Banner />
        </div>
    );
};

export default Home;
