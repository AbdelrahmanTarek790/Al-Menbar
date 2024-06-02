
import { SideBarLearn } from "@/components/SideBarLearn"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Subjects } from "@/data"
import { getMethod, postMethod } from "@/utils/ApiMethods"
import { Each } from "@/utils/Each"
import { CornerTopRightIcon } from "@radix-ui/react-icons"
import { set } from "date-fns"
import { CornerRightUpIcon, ReplyIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
export const LearnDetails = ({items,reload}) => {
    const { id } = useParams()
    const [data, setData] = useState({
        course: {
            subject: "",
        },
        name: "",
        comments: [],
        replies: [],
    })
    useEffect(() => {
        setData(items)
    }, [items])

    return (
        <div className=" flex flex-col items-end px-5 py-8  text-right w-full">
                <p className="text-primary font-semibold text-lg">
                    {" "}
                    {data.name} {"<"} {Subjects[data.course.subject]}
                </p>
                <p className="text-primary text-3xl font-extrabold mt-6 ">{data.name}</p>
                <div className="w-full h-[2px] mt-3 bg-[#385044] "></div>
                <p className="text-[#385044] font-semibold mt-6 text-xl">
                    {data?.description
                        ? data?.description
                        : "تغطي هذه المحاضرة شرحاً لما جاء في كتاب مقرر التفسير من قوله (التعريف بعلم التفسير) في الصفحة رقم 11 وحتى قوله (نشأة علم التفسير) في الصفحة رقم 13"}
                </p>
                {/* video */}
                <div className="mt-6 w-full flex justify-center ">
                    <iframe
                        className="w-full max-w-[800px] aspect-video "
                        src="https://www.youtube.com/embed/7bA2Fy1Xk3A"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="text-center w-full mt-3 text-2xl text-[#385044]">اتممت المشاهدة؟</p>
                {/* button */}
                <div className="flex flex-col items-center  w-full">
                    <Button className="px-14 mt-3 text-lg">التالي</Button>
                    <p>الاختبار الاسبوعي الاول</p>
                </div>
                <div className="w-full h-[2px] mt-3 bg-[#385044] "></div>
                <p className="mt-6 text-primary text-2xl font-extrabold">منتدى المناقشات</p>
                <p>اذا كان لديك اي سؤال فلا تتردد او تبخل بسؤالك</p>
                <div
                    className="w-full p-6 rounded-3xl my-7 "
                    style={{
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                    }}
                >
                    <div className="flex">
                        <Textarea
                            placeholder="اكتب سؤالك هنا"
                            onChange={(e) => {
                                setComment(e.target.value)
                            }}
                            className="text-right"
                        ></Textarea>
                        <img
                            src={"https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"}
                            width={36}
                            height={36}
                            alt="Avatar"
                            className="overflow-hidden rounded-full w-14 h-14 ml-2"
                        />
                    </div>
                    <div className="flex justify-start mt-4">
                        <Button
                            className="px-14"
                            disabled={reload}
                            onClick={() => {
                                setReload(true)
                                postMethod(`/lectures/${id}/comments`, { text: comment }, localStorage.getItem("token")).then((res) => {
                                    setReload(false)
                                    if (res.status === "Success") {
                                        setData({ ...data, comments: [...data.comments, res.data] })
                                    }
                                })
                            }}
                        >
                            ارسال
                        </Button>
                    </div>
                </div>

                <Each
                    of={data.comments}
                    render={(item, index) => (
                        // comments and reply
                        <div className="w-full px-6 rounded-3xl ">
                            <div
                                className="w-full p-6 rounded-3xl mt-7"
                                style={{
                                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                                }}
                            >
                                <div className="flex flex-row-reverse justify-between ">
                                    <div className="flex flex-row-reverse items-center ">
                                        <img
                                            src={"https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"}
                                            width={36}
                                            height={36}
                                            alt="Avatar"
                                            className="overflow-hidden rounded-full w-10 h-10 ml-2"
                                        />

                                        <p className="text-primary font-bold">{item.name ? item.name : "Ahmed Mohesn"}</p>
                                    </div>
                                    <div className="flex justify-start">
                                        <Button variant="outline" className="flex items-center">
                                            <ReplyIcon size={18}></ReplyIcon>
                                            رد
                                        </Button>
                                    </div>
                                </div>
                                <p className="text-[#385044] px-10">{item.text}</p>
                            </div>
                            <div className={`flex flex-col    ${item.replies?.length === 0 ? " hidden" : ""}`}>
                                <Each
                                    of={item.replies}
                                    render={(item, index) => (
                                        <div className="flex items-center">
                                            <div
                                                className="w-[98%] p-6 rounded-3xl mt-7"
                                                style={{
                                                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                                                }}
                                            >
                                                <div className="flex flex-row-reverse justify-between ">
                                                    <div className="flex flex-row-reverse items-center ">
                                                        <img
                                                            src={"https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"}
                                                            width={36}
                                                            height={36}
                                                            alt="Avatar"
                                                            className="overflow-hidden rounded-full w-10 h-10 ml-2"
                                                        />

                                                        <p className="text-primary font-bold">{item.name ? item.name : "Ahmed Mohesn"}</p>
                                                    </div>
                                                    <div className="flex justify-start">
                                                        <Button variant="outline" className="flex items-center">
                                                            <ReplyIcon size={18}></ReplyIcon>
                                                            رد
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <CornerRightUpIcon size={40} />
                                        </div>
                                    )}
                                ></Each>
                            </div>
                        </div>
                    )}
                ></Each>
            </div>
    )
}