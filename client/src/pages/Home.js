import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        HomePage
        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default Home
