import { Link } from "react-router-dom"
import back1 from "../../assets/back1.png"
import loggedmain2 from "../../assets/loggedmain2.png"
import { Button } from "@/components/ui/button"
import { Each } from "@/utils/Each"
import { Contact } from "../Contact"

export const HomeLogged = () => {
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
        <div className="overflow-hidden ">
            <div className="flex justify-center lg:justify-evenly font-cairo item-center mt-16 relative">
                <img src={back1} alt="" className="absolute z-[-1] right-[-400px] w-[800px] opacity-35   top-[-400px] origin-center" />
                {/* <img src={back1} alt="" className="absolute z-[-1] right-[-400px] w-[800px] opacity-35   bottom-[-400px] origin-center" /> */}
                <div>
                    <img src={loggedmain2} className="hidden lg:block w-[650px]" alt="" />
                </div>
                <div className="flex flex-col max-w-[500px] items-end mb-7 lg:mb-0  justify-center gap-8  lg:gap-8 lg:text-right">
                    <p className="text-4xl lg:text-3xl font-medium  font-deco text-[#2A3E34] text-right">:قال الله تعالى</p>
                    <p className="text-4xl lg:text-5xl  font-deco text-[#2A3E34]">
                        قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لا يَعْلَمُونَ
                    </p>

                    <p className="text-[#3A5A40] text-2xl ">
                        ترحب اكاديمية المنبر بالطلبة الجدد، سائلين الله تعالى لهم التوفيق والنجاح، ,ونهيب بهم جميعاً بالإخلاص اولاً في طلب العلم،
                        والسعي الدائم في تحصيل ما ينفع، وربط ما يدرس ويتعلم بحياته قولاً وعملاً، وفقكم الله جميعاً لما يحبه ويرضاه.
                    </p>
                </div>
            </div>
            <div className="flex items-center flex-col gap-7  mb-20">
                <div className={` h-[4px] bg-[#2A3E34] w-[90%] lg:w-[80%] mt-20 mb-20  `}></div>
                <Each
                    of={List}
                    render={(item, index) => (
                        <div className="w-[85%] bg-[#2A3E34] rounded-3xl  h-[300px] flex items-center justify-between">
                            <div className="text-right text-white">
                                <p className="text-xl mt-4 font-bold">{item.bookname}</p>
                                <p className="text-lg mt-2 font-bold">{item.subject}</p>
                                <p className="text-base mt-1 ml-5 mb-4">{item.description}</p>
                                <Link to="/curriculum">
                                    <Button className="rounded-full bg-white text-base text-primary font-cairo   font-bold px-10 hover:bg-[#cde2d7]  mb-4">
                                        ادرس الان
                                    </Button>
                                </Link>
                            </div>
                            <div className={` h-[300px] bg-white mx-10 w-[2px] `}></div>

                            <p className="text-white text-8xl mt-8 lg:mt-4 font-deco text-center mr-3  w-[35%]">{item.title}</p>
                        </div>
                    )}
                ></Each>
            </div>
            <Contact></Contact>
        </div>
    )
}