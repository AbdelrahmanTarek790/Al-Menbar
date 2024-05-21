import { Label } from "@/components/ui/label"
import back1 from "../assets/back2.png"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
export const SignUp = () => {
    return (
        <div className="flex items-center justify-center  relative  py-24">
            <img src={back1} alt="" className="absolute z-[-1] left-[0px] opacity-35  top-[300px] origin-center" />
            <img src={back1} alt="" className="absolute z-[-1] right-[-150px] opacity-70 top-[-100px] origin-center rotate-180" />

            <div className="w-[90vw] max-w-[550px] lg:w-[550px] bg-[#2A3E34]  rounded-3xl sm:rounded-[100px] text-white font-cairo">
                <p className="text-center text-4xl  font-extrabold mt-14">إنشاء حساب</p>
                <div className="flex flex-col items-center text-right gap-4">
                    <Label className="mt-10 text-right w-[80%]">البريد الإلكتروني</Label>
                    <Input className="w-[80%] text-black text-right" type="email" placeholder="البريد الالكتروني"></Input>
                </div>
                <div className="flex flex-col items-center text-right gap-4">
                    <Label className="mt-6 text-right w-[80%]">كلمة السر</Label>
                    <Input className="w-[80%] text-black text-right" type="password" placeholder="كلمة السر"></Input>
                </div>
                <div className="flex flex-col items-center text-right gap-4">
                    <Label className="mt-6 text-right w-[80%]">تأكيد كلمة السر</Label>
                    <Input className="w-[80%] text-black text-right" type="password" placeholder="كلمة السر"></Input>
                </div>
                <div className="flex flex-col items-center text-right gap-4">
                    <Label className="mt-6 text-right w-[80%]">رقم الهاتف</Label>
                    <Input className="w-[80%] text-black text-right" type="phone" placeholder="رقم الهاتف"></Input>
                </div>

                <div className="">
                    <p className="text-left  text-sm font-bold mt-2 ml-14 cursor-pointer">لا تتذكر كلمة السر ؟</p>
                </div>

                <div className="flex justify-center gap-5 mt-10">
                    <Button className="rounded-lg bg-white text-base text-[#466746]  font-bold px-10 hover:bg-[#f6fffa]">إنشاء حساب جديد</Button>
                </div>

                <div className="relative mt-12 flex justify-center">
                    <span className="absolute sm:left-[200px] z-10 bg-[#2A3E34] flex justify-center items-center top-[-6px] text-sm text-center w-[150px]">
                        او بأستخدام
                    </span>
                    <div className=" h-px bg-gray-400 w-[85%]"></div>
                </div>
                <div className="flex justify-center gap-5 mt-10">
                    <Button className="rounded-lg bg-[#466746] text-base text-white  font-bold px-10 hover:bg-[#395346]">
                        {<i className="fa-brands fa-google mr-4"></i>}تسجيل الدخول بواسطة جوجل
                    </Button>
                </div>
                <div className="flex justify-center gap-2 mt-8 mb-8">
                    <Link to={"/login"} className="opacity-100">
                        يمكنك تسجيل الدخول
                    </Link>
                    <span className="opacity-65">لديك حساب ؟</span>
                </div>
            </div>
            <br />
        </div>
    )
}
