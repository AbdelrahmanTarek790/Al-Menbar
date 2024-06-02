import * as React from "react"
import { ChevronLeftIcon, Home, LineChart, Package, Package2, Settings, ShoppingCart, Users2 } from "lucide-react"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Link, useLocation, useParams } from "react-router-dom"
import { Each } from "@/utils/Each"
import { Subjects } from "@/data"
import { getMethod } from "@/utils/ApiMethods"
import { Show } from "@/utils/Show"

export const SideBarLearn = ({ name, courseID }) => {
    const { id } = useParams()
    const location = useLocation()
    const [items, setItems] = React.useState({
        lectureStats: [],
    })

    React.useEffect(() => {
        if (courseID) {
            getMethod(`/students/${courseID}/stats`, localStorage.getItem("token")).then((res) => {
                setItems(res.data.courseStat)
                console.log(items)
            })
        }
        setActive(location.pathname)
    }, [location, courseID])
    const [active, setActive] = React.useState(location.pathname)

    return (
        <aside className="lg:min-h-[720px] lg:min-w-[250px] lg:max-w-[250px]  z-10  flex-col border-l bg-background sm:flex">
            <nav className="flex flex-col gap-4 py-4  items-end">
                <div className="w-[200px] lg:w-[80%] text-center bg-[#2A3E34] py-3 text-4xl text-white  font-deco rounded-s-full">
                    {Subjects[`${name}`] ? Subjects[`${name}`] : ""}
                </div>
                <Each
                    of={items.lectureStats}
                    render={(item, index) => (
                        <div>
                            <Link
                                to={`/learn/${item.lecture.id}`}
                                className={`${
                                    active === `/learn/${item.lecture.id}` ? " font-bold " : " "
                                }" flex w-[100%] px-2 text-right mt-4  items-center mr-4 justify-end  gap-2 font-cairo rounded-lg text-muted-foreground transition-colors hover:text-foreground"`}
                            >
                                <div>
                                    <p>{item.lecture.name}</p>
                                    <p>التعريف بعلم التفسير</p>
                                </div>
                                <Show>
                                    <Show.When isTrue={item.done} children={<i className="fa-solid text-primary fa-circle-check text-2xl"></i>}></Show.When>
                                    <Show.Else children={<i class="fa-regular fa-circle-check  text-primary text-2xl"></i>}></Show.Else>
                                </Show>
                            </Link>
                            <Link
                                to={`/learn/${item.lecture.id}/quiz`}
                                className={`${
                                    active === `/learn/${item.lecture.id}/quiz` ? " font-bold " : " "
                                }" flex w-[100%]  text-right mt-4  px-2 items-center mr-4 justify-end gap-2 font-cairo rounded-lg text-muted-foreground transition-colors hover:text-foreground"`}
                            >
                                <div>
                                    <p>اختبار محاضرة</p>
                                    <p>{item.lecture.name}</p>
                                </div>
                                <Show>
                                    <Show.When isTrue={item.done} children={<i className="fa-solid text-primary fa-circle-check text-2xl"></i>}></Show.When>
                                    <Show.Else children={<i class="fa-regular fa-circle-check text-primary  text-2xl"></i>}></Show.Else>
                                </Show>
                            </Link>
                        </div>
                    )}
                ></Each>
            </nav>
        </aside>
    )
}
