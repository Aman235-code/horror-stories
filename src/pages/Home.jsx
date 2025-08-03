/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import StoryCard from "../components/StoryCard";
import storyData from "../data/storyData.json";
import { Link } from "react-router-dom";
import ConspiracyPage from "./ConspiracyPage";
import HorrorPage from "./HorrorPage";

const Home = () => {
  return (
    <>
      <HorrorPage />
      <ConspiracyPage />
    </>
  );
};

export default Home;
