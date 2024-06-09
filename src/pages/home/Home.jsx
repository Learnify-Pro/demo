import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { Helmet } from 'react-helmet'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle the search logic here
    console.log(`Searching for "${searchQuery}" in category "${category}"`)
  }

  const AvailabelLinks = [
    { name: "IIT-JEE", Link: "/iit-jee" },
    { name: "NEET", Link: "/neet" },
    { name: "TSBIE", Link: "/tsbie" },
  ]
  return (
    <div className='mt-16'>
      <Helmet>
        <title>Learnify | Access 500+ Free PDFs for IIT-JEE Preparation | Unleash Your Potential</title>
        <meta
          name="description"
          content="Explore over 500+ free PDFs to enhance your IIT-JEE, NEET, and other exam preparations. Search for PDFs, videos, and questions to boost your study efficiency."
        />
      </Helmet>
      <div className="relative w-full h-full">
        <div className="p-4 h-screen w-full fixed left-0 top-0"
          style={{
            background: 'linear-gradient(135deg, #077eff, #0057ff)',
            color: 'white'
          }}>
          <section className='w-full p-4 h-[25em] flex flex-col items-center justify-center rounded-2xl'>
            <h1 className='font-bold text-2xl md:text-4xl text-center'>Over 500+ PDFs Available For IIT-JEE</h1>
            <p className='text-gray-200 text-sm md:w-[50%] p-4 text-center'>
              Access over 500+ PDFs for your IIT-JEE, NEET, and more. Unleash your potential.
            </p>
            {/* Search Bar */}
            <div className="flex items-center justify-center w-full">
              <div className="bg-white text-black h-12 w-full max-w-[30em] rounded-full flex overflow-hidden relative">
                <Select>
                  <SelectTrigger className="w-[100px] sm:w-[100px] text-xs m-1 border-black ml-1 outline-none border-none rounded-full">
                    <SelectValue placeholder="Course" className="text-black text-xs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light" className="text-xs">IIT-JEE</SelectItem>
                    <SelectItem value="dark" className="text-xs">NEET</SelectItem>
                    <SelectItem value="system" className="text-xs">ALL</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex  relative w-full">
                  <input
                    type="text"
                    placeholder="Search Your Papers, PDF, Videos"
                    className="text-black h-full border-none text-xs sm:text-sm w-[calc(100%-40px)] outline-none pl-1 pr-6"
                  />
                  <div className="flex items-center justify-center h-full absolute right-2 mr-2">
                    <IoSearch className="text-gray-400 text-lg sm:text-xl" />
                  </div>
                </div>
              </div>
              
            </div>
            <div className="flex items-center justify-center mt-4">
              <ul className="flex flex-wrap">
                {AvailabelLinks.map((item, i) => (
                  <li key={i} className="mr-4 mb-2">
                    <a href={item.Link} className="text-white text-sm hover:text-blue-200">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>


          </section>

        

        </div>
        <div className="absolute mt-[20em] h-[100vh] w-full p-2 flex items-center content-center justify-center">
          <section className='w-full h-full rounded-2xl bg-white border p-4'>
            <div className="w-full flex items-center justify-center">
              <div className="bg-gray-200 w-12 h-2 rounded-full"></div>
            </div>
            {/* Additional content can go here */}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
