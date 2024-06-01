import { SideBarLearn } from "@/components/SideBarLearn"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Subjects } from "@/data"
import { getMethod, postMethod } from "@/utils/ApiMethods"
import { Each } from "@/utils/Each"
import { CornerTopRightIcon } from "@radix-ui/react-icons"
import { CornerRightUpIcon, ReplyIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

export const QuizPage = () => {
    const { id } = useParams()
    const location = useLocation()
    const [data, setData] = useState({
        course: {
            subject: "",
        },
        name: "",
        comments: [],
        replies: [],
    })
    const [comment, setComment] = useState("")
    const [reload, setReload] = useState(false)

    useEffect(() => {
        getMethod(`/lectures/${id}`, localStorage.getItem("token")).then((res) => {
            setData(res.data)
            console.log(res)
            // setLectures(res.data.courseStat.lectureStats)
        })
    }, [])

    return (
        <div className="flex justify-end flex-col-reverse lg:flex-row  h-full">
            <div className=" flex flex-col items-end px-5 py-8  text-right w-full">
                <p className="text-primary font-semibold text-right text-lg">
                    {`( ${data.name} ) ${Subjects[data.course.subject]}     >  الاختبار الاسبوعي علي محاضرة  `}
                </p>
                <p className="text-primary text-2xl font-extrabold mt-6 ">{`
                ( ${data.name} ) الاختبار الاسبوعي علي محاضرة 
                `}</p>
                <div className="w-full h-[2px] mt-3 bg-[#385044] "></div>
                <p>يحتوي هذا الاختبار على 10 اسئلة فقط من نوع اختيار من متعدد أو صح وخطأ.</p>
                <p>يُسمح بتقديم هذا الاختبار ثلات مرات فقط خلال فترة إتاحته، ويتم احتساب الدرجة الأعلى للطالب من بين تلك المحاولات.</p>
                <p>درجة هذا الاختبار تسهم في درجة الطالب النهائية في المقرر بنسبة 2%.</p>
                <div className="w-full h-[1px] mt-3 bg-[#385044] "></div>
                <div className="flex flex-col-reverse md:flex-row items-center justify-center justify-between w-full mt-6">
                    <div>
                        <Button className="px-6">ابدأ الاختبار الان</Button>
                        <p className="text-xs">الاختبار الاسبوعي الاول</p>
                    </div>{" "}
                    <div>
                        <p>{data.name}ابدا في حل الاختبار الاسبوعي</p>
                        <p>المحاولات المتبقية: 2</p>
                    </div>
                </div>
            </div>
            <SideBarLearn name={data.course.subject} courseID={data.course.id}></SideBarLearn>
        </div>
    )
}
