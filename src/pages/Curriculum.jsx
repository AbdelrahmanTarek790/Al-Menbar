import { sub } from "date-fns"
import back1 from "../assets/back1.png"
import { Each } from "@/utils/Each"
import { Button } from "@/components/ui/button"
export const Curriculum = () => {
    const List = [
        {
            title: "الفقه",
            description:
                "الْفَهْمُ للشيء والعلم به، وفهم الأحكام الدقيقة والمسائل الغامضة، وهو في الأصل مطلق الفهم، وغلب استعماله في العرف مخصوصا بعلم الشريعة؛ لشرفها على سائر العلوم.",
            bookname: "الفقه الميسر",
            subject: "الكتاب: الفقه الميسر في ضوء الكتاب والسنة",
        },
        {
            title: "الحديث",
            description:
                "الْفَهْمُ للشيء والعلم به، وفهم الأحكام الدقيقة والمسائل الغامضة، وهو في الأصل مطلق الفهم، وغلب استعماله في العرف مخصوصا بعلم الشريعة؛ لشرفها على سائر العلوم.",
            bookname: "الفقه الميسر",
            subject: "الكتاب: الفقه الميسر في ضوء الكتاب والسنة",
        },

        {
            title: "التفسير",
            description:
                "الْفَهْمُ للشيء والعلم به، وفهم الأحكام الدقيقة والمسائل الغامضة، وهو في الأصل مطلق الفهم، وغلب استعماله في العرف مخصوصا بعلم الشريعة؛ لشرفها على سائر العلوم.",
            bookname: "الفقه الميسر",
            subject: "الكتاب: الفقه الميسر في ضوء الكتاب والسنة",
        },

        {
            title: "العقيدة",
            description:
                "الْفَهْمُ للشيء والعلم به، وفهم الأحكام الدقيقة والمسائل الغامضة، وهو في الأصل مطلق الفهم، وغلب استعماله في العرف مخصوصا بعلم الشريعة؛ لشرفها على سائر العلوم.",
            bookname: "الفقه الميسر",
            subject: "الكتاب: الفقه الميسر في ضوء الكتاب والسنة",
        },
    ]
    return (
        <div className="flex flex-col items-center mt-20 relative mb-20">
            <img src={back1} alt="" className="absolute z-[-1] left-[-500px] w-[800px] opacity-35   top-[300px] origin-center" />
            <img src={back1} alt="" className="absolute z-[-1] right-[-500px] w-[800px] opacity-35   top-[-350px] origin-center" />
            <img src={back1} alt="" className="absolute z-[-1] right-[-500px] w-[800px] opacity-35   top-[600px] origin-center" />
            <p className="text-center text-4xl  lg:text-5xl font-extrabold text-[#2A3E34]">العلوم الشرعية</p>
            <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center mt-20
            "
            >
                <Each
                    of={List}
                    render={(item, index) => (
                        <div className={` bg-[#2A3E34]  gap-14    lg:w-[420px] rounded-3xl`}>
                            <div className={`  text-center  text-white flex flex-col items-center justify-center`}>
                                <p className=" text-9xl  mt-4 font-deco ">{item.title}</p>
                                <div className={` h-[2px] bg-white  mt-20 w-[90%] `}></div>
                                <p className=" text-xl mt-4 font-bold">{item.bookname}</p>
                                <p className=" text-lg mt-2 font-bold">{item.subject}</p>
                                <p className=" text-base mt-1 w-[90%] mb-4">{item.description}</p>
                                <Button className="rounded-full bg-white text-base text-primary font-cairo   font-bold px-10 hover:bg-[#cde2d7]  mb-4">
                                    أشتري الكتاب
                                </Button>
                            </div>
                        </div>
                    )}
                ></Each>
            </div>
        </div>
    )
}
