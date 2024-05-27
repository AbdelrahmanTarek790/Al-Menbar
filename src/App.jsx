import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import "./App.css"

import { Toaster } from "./components/ui/toaster"
// import axios from "axios"

import { ThemeProvider } from "./components/theme-provider"
import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { HomeLoggedOut } from "./pages/Home"
import { Login } from "./pages/Login"
import { SignUp } from "./pages/SignUp"
import { Tutors } from "./pages/Tutors"
import { Curriculum } from "./pages/Curriculum"
import { Contact } from "./pages/Contact"
import { useEffect, useState } from "react"
import { useStore } from "./context/storeContext"
import { Show } from "./utils/Show"
import { HomeLogged } from "./pages/LoggedPages/HomeLogged"
import { getMethod } from "./utils/ApiMethods"
import { Library } from "./pages/LoggedPages/Library"
import { Profile } from "./pages/LoggedPages/Profile"
// import planetpulse from "planetpulse"

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("token")))
    const [loading, setLoading] = useState(true)
    const { setState, state } = useStore()
    useEffect(() => {
        if (isLoggedIn) {
            const token = localStorage.getItem("token")
            getMethod("/students/me", token).then((res) => {
                setLoading(false)
                if (res.status === "fail") {
                    setIsLoggedIn(false)
                    localStorage.removeItem("token")
                    return
                }
                setState({ ...res.data, isLoggedIn: true, token })
                // console.log(state)
            })
        }
    }, [])
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <BrowserRouter>
                <NavBar></NavBar>
                <div className="min-h-[720px] overflow-hidden">
                    <Show>
                        <Show.When
                            isTrue={isLoggedIn}
                            children={
                                <Routes>
                                    <Route path="/" element={<HomeLogged></HomeLogged>} />
                                    <Route path="/library" element={<Library></Library>} />
                                    <Route path="/profile/*" element={<Profile></Profile>} />
                                    <Route path="/contact-us" element={<Contact></Contact>} />
                                    <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
                                </Routes>
                            }
                        ></Show.When>
                        <Show.Else
                            children={
                                <Routes>
                                    <Route path="/" element={<HomeLoggedOut></HomeLoggedOut>} />
                                    <Route path="/login" element={<Login></Login>} />
                                    <Route path="/register" element={<SignUp></SignUp>} />
                                    <Route path="/tutors" element={<Tutors></Tutors>} />
                                    <Route path="/curriculum" element={<Curriculum></Curriculum>} />
                                    <Route path="/contact-us" element={<Contact></Contact>} />
                                </Routes>
                            }
                        ></Show.Else>
                    </Show>
                </div>
                <Footer></Footer>
                <Toaster />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
