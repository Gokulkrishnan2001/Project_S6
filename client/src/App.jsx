import React from "react"
import { logo } from "./assets/index"
import { Loader } from "./Components"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import {Home , CreatePost} from './Pages'




const App = () => {
    return (
        <BrowserRouter>
            <header className="w-full items-center px-4 sm:px-8 border-b border-b-lightgrey flex h-[76px] justify-between">
                <Link to='/'>
                <img
                    className="w-[7rem] h-[5rem]"
                    src={logo}
                    alt="OpenAI logo"
                />
                </Link>
                <h1 className='font-yeseva text-2xl text-[#222328]  max-w-full'>Artination AI</h1>
                <Link to="/create_post" className=" font-inter flex font-medium bg-gradient-to-b from-[#3A3A3A] to-[#000000]
                text-white px-4 py-2 rounded-full">Create
                
                </Link>
            </header>

            <main className="px-4 sm:px-8 py-8 bg-slate-50">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create_post" element={<CreatePost/>}/>
              </Routes>
            </main>

        </BrowserRouter>
    )
}

export default App