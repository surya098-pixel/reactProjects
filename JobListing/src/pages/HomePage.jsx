import React from 'react'
import Hero from '../components/Hero'
import HeroCards from '../components/HeroCards'
import JobsListing from '../components/JobsListing'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <HeroCards />
    <JobsListing isHome={true} />
    <ViewAllJobs/>
    </>
  )
}

export default HomePage