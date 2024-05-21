import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import { Toaster } from "./components/ui/toaster"
// import axios from "axios"

import { ThemeProvider } from "./components/theme-provider"
import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { HomeLoggedOut } from "./pages/Home"
import { Login } from "./pages/Login"
import { SignUp } from "./pages/SignUp"

function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("token")))
    // const [loading, setLoading] = useState(true)
    // const { setState, state } = useStore()
    // useEffect(() => {
    //     if (isLoggedIn) {
    //         const token = localStorage.getItem("token")
    //         getMethod("/users/get-me", token).then((res) => {
    //             console.log(res)
    //             setLoading(false)
    //             if (res.status === "fail") {
    //                 setIsLoggedIn(false)
    //                 localStorage.removeItem("token")
    //                 return
    //             }
    //             setState(res.data.user)
    //         })
    //     }
    // }, [])
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <BrowserRouter>
                <NavBar></NavBar>
                <div className="min-h-[720px] overflow-hidden">
                    <Routes>
                        <Route path="/" element={<HomeLoggedOut></HomeLoggedOut>} />
                        <Route path="/login" element={<Login></Login>} />
                        <Route path="/register" element={<SignUp></SignUp>} />

                        {/* <Route path="/customers" element={<Users2 />} />
                        <Route path="/products" element={<Package />} />
                        <Route path="/orders" element={<ShoppingCart />} /> */}
                    </Routes>
                </div>
                <Footer></Footer>
                <Toaster />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
