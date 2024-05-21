import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className=" flex flex-col h-auto w-full py-3 gap-4 border-t bg-[#2a3e34] px-16 sm:static lg:h-56 sm:border-0 text-primary-foreground ">
            <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row  justify-around  items-center h-full">
                <div className="flex gap-3 text-3xl">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-telegram"></i>
                </div>
                <div className="flex flex-col gap-4 items-end font-cairo font-semibold mr-6">
                    <div className=" flex gap-4">
                        <Link>الشيوخ</Link>

                        <Link>خطوات التسجيل</Link>
                        <Link>الرئيسية</Link>
                    </div>
                    <div className=" flex gap-4  justify-center w-full lg:w-auto">
                        <Link>تواصل معنا</Link>
                        <Link>المناهج</Link>
                    </div>
                </div>
                <div>
                    <p className="text-7xl font-deco">المنبر</p>
                </div>
            </div>
            <div className="text-center font-cairo">جميع الحقوق محفوظة لأكاديمية المنبر 2024©</div>
        </footer>
    )
}
