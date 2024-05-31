import { getMethod } from "@/utils/ApiMethods"
import { Each } from "@/utils/Each"
import { Show } from "@/utils/Show"
import { CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const CourseDetails = ({ items }) => {
    const [item, setItems] = useState({
        description: "",
        lectures: [],
    })
    const [lectures, setLectures] = useState([])

    useEffect(() => {
        setItems(items)
        getMethod(`/students/${items.id}/stats`, localStorage.getItem("token")).then((res) => {
            setLectures(res.data.courseStat.lectureStats)
       
        })
    }, [items])

    return (
        <div className=" w-full h-full font-cairo border-2 border-[#385044] rounded-xl mt-4 lg:mt-2">
            <h1 className=" mt-2 text-2xl font-bold text-primary pr-3">المنهج الدراسـي</h1>
            <div className="w-full h-[2px] mt-3 bg-[#385044] "></div>
            <div className=" mr-8 text-[#385044] mt-3 text-lg">{item.description}</div>
            <div className="flex flex-col  mt-6 gap-2">
                <Each
                    of={lectures}
                    render={(item, index) => {
                        return (
                            <div className="mr-8 flex items-center justify-end gap-2 text-[#2A3E34]">
                                <div>
                                    <Link to={`/learn/${item.lecture.id}`} className=" text-lg  font-bold underline">{item.lecture.name}</Link>
                                    <p>{item.lecture.description ? item.lecture.description : "التفاصيل غير متوفرة"}</p>
                                </div>
                                <Show>
                                    <Show.When isTrue={item.done} children={<i className="fa-solid fa-circle-check text-2xl"></i>}></Show.When>
                                    <Show.Else children={<i className="fa-regular fa-circle-check  text-2xl"></i>}></Show.Else>
                                </Show>
                            </div>
                        )
                    }}
                ></Each>
            </div>
        </div>
    )
}
