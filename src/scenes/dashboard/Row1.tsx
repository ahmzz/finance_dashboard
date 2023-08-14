import React from 'react'

import DashboardCard from "@/components/DashboardCard";



const Row1 = () => {
  return (
    <>
        <DashboardCard  gridArea="a"></DashboardCard>
      <DashboardCard  gridArea="b"></DashboardCard>
      <DashboardCard  gridArea="c"></DashboardCard>
    </>
  )
}

export default Row1