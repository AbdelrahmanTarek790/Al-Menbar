import { MyProfile } from "@/components/ProfileComp/MyProfile"
import { Sidebar } from "@/components/SideBar"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const Profile = () => {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname)
    useEffect(() => {
        setActive(location.pathname)
    }, [location])

    return (
        <div className="flex justify-end  h-full">
            <MyProfile></MyProfile>
            <Sidebar></Sidebar>
        </div>
    )
}
