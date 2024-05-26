import { Each } from "@/utils/Each"
import back1 from "../../assets/back1.png"
import { useEffect, useState } from "react"
import { getMethod } from "@/utils/ApiMethods"
import { Button } from "@/components/ui/button"

export const Library = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getMethod("/books/").then((res) => {
            console.log(res.data.data)
            setCourses(res.data.data)
        })
    }, [])
    return (
        <div className="flex flex-col items-center mt-20 relative mb-20">
            <img src={back1} alt="" className="absolute z-[-1] left-[-500px] w-[800px] opacity-35   top-[300px] origin-center" />
            <img src={back1} alt="" className="absolute z-[-1] right-[-500px] w-[800px] opacity-35   top-[-350px] origin-center" />
            <img src={back1} alt="" className="absolute z-[-1] right-[-500px] w-[800px] opacity-35   top-[600px] origin-center" />
            <p className="text-center text-4xl  lg:text-5xl font-extrabold text-[#2A3E34]">مكتبة الاكاديمية</p>
            <p className="text-center text-2xl lg:text-3xl mt-6 text-[#2A3E34]">جميع الكتب مقدمة مجاناً بالتعاون مع دور النشر الخاصة بكل كتاب</p>

            <div
                className=" flex flex-wrap gap-10 justify-center items-center place-items-center mt-20 w-full
    "
            >
                <Each
                    of={courses}
                    render={(item, index) => (
                        <div className={` border border-[#2A3E34]  gap-14  w-[90%] lg:w-[300px] rounded-3xl`}>
                            <div className={`  text-center  text-primary flex flex-col items-center justify-center`}>
                                <p className=" text-4xl  mt-8 lg:mt-4 font-deco ">{item.title ? item.title : "لا يوجد"}</p>
                                <img src="https://s3-alpha-sig.figma.com/img/73cf/daf5/7ad22262f394506e4f619c48e404d0ed?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qj~SvzCIhinJ8S5JzCt~~9aidpsrKhRz3-WcEu1Z6YihEu6krWIDyffEpkPRSJkCKf7z~ZK7O1axOh9dj~hoc8C~iMmohgqV7-GJnS5qK3~fbf8o4j4axqPwSD-VdgSnUVNlFNU~Ho1bpFUUH6kbltb~6dSKQJmS94JPLLFJ4P69BuYHv1JJbyh-F591Kox5P4c0rO~07VsMZxbVjU7pm7skGZIqKtjC1K0A1o3P4TCSYOstoZvWCNEgmYyWs~Uq2lAi4QFFqkWUEvHwLW1hnXHQ0bR1RbZPO~c6-c2ui3N3lkBRulXaIsFZ0qj0fepleGQJJdI~8buIuu4RvvTZCw__"></img>
                                <div className={` h-[2px] bg-white   lg:mt-4 w-[90%] `}></div>
                                <p className=" text-xl mt-4 font-bold">{"الكتاب:" + (item.description ? item.description : "لا يوجد")}</p>

                                <Button className="rounded-full bg-primary  text-base text-white font-cairo mt-2  font-bold px-10 hover:bg-[#cde2d7]  mb-4">
                                    تحميل الكتاب
                                </Button>
                                <Button className="border border-[#2A3E34] rounded-full bg-white text-base  text-primary font-cairo   font-bold px-10 hover:bg-[#cde2d7]  mb-4">
                                    عرض الكتاب
                                </Button>
                            </div>
                        </div>
                    )}
                ></Each>
            </div>
        </div>
    )
}
