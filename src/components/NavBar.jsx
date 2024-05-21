import { ListLogged, ListLoggedOut } from "@/data"
import { Each } from "@/utils/Each"
import { Show } from "@/utils/Show"
import { Bell, ChevronDown, Home, MoveDownIcon, Package2, PanelLeft } from "lucide-react"

import { Link } from "react-router-dom"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export const NavBar = () => {
    // console.log(state);

    return (
        <header className="sticky top-0 z-30 flex w-full py-3 items-center gap-4 border-b bg-primary justify-between px-16 sm:static h-auto sm:border-0 text-primary-foreground ">
            <div className="hidden lg:block">
                <Show>
                    <Show.When isTrue={false}>
                        <div className="flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div className="flex items-center hover:bg-[#2f5236] p-1 rounded-lg transition-all cursor-pointer">
                                        <ChevronDown size={36} />
                                        <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                                            <img
                                                src={"https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"}
                                                width={36}
                                                height={36}
                                                alt="Avatar"
                                                className="overflow-hidden rounded-full"
                                            />
                                        </Button>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <Link to={"/profile"}>
                                        <DropdownMenuItem className="hover:cursor-pointer">Settings</DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={() => {
                                            localStorage.removeItem("token")
                                            window.location.href = "/login"
                                        }}
                                    >
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Bell size={24} className="" />
                        </div>
                    </Show.When>
                    <Show.Else>
                        <div className="flex gap-3 items-center">
                            <Link
                                to="/register"
                                className="text-xl font-semibold bg-[#dad7cd] px-5 py-1 rounded-full text-[#2a3e34] hover:bg-[#cecbc0] font-cairo transition-all"
                            >
                                إنشاء حساب
                            </Link>
                            <Link to="/login" className="text-xl font-semibold font-cairo">
                                تسجيل الدخول
                            </Link>
                        </div>
                    </Show.Else>
                </Show>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="lg:hidden">
                        <PanelLeft className="h-5 w-5 text-primary" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs  text-right flex flex-col justify-between">
                    <nav className="flex flex-col gap-6 text-lg font-medium text-right items-end  mt-6">
                        {/* <Link
                            to={"/"}
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        >
                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                            <span className="sr-only">CodePeak</span>
                        </Link> */}
                        <Each
                            of={ListLogged}
                            render={(item) => (
                                <Link
                                    to={item.url}
                                    className={` ${
                                        // active === item.url
                                        //     ? "flex items-center gap-4 px-2.5 text-foreground"
                                        " flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground transition-all text-right"
                                    } `}
                                >
                                    {item.text}
                                </Link>
                            )}
                        ></Each>
                    </nav>
                    <div className="flex gap-3 flex-col items-center">
                        <Link
                            to="/register"
                            className="text-xl font-semibold bg-[#dad7cd] px-5 py-1 rounded-full text-[#2a3e34] hover:bg-[#cecbc0] font-cairo transition-all"
                        >
                            إنشاء حساب
                        </Link>
                        <Link to="/login" className="text-xl font-semibold font-cairo">
                            تسجيل الدخول
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>

            <div className="flex items-center space-x-14">
                <div className="hidden lg:flex gap-7">
                    <Show>
                        <Show.When isTrue={false}>
                            <Each
                                of={ListLogged}
                                render={(item, index) => (
                                    <Link to={item.url} key={index} className="flex items-center gap-2">
                                        <span className="text-xl font-semibold font-cairo">{item.text}</span>
                                    </Link>
                                )}
                            ></Each>
                        </Show.When>
                        <Show.Else>
                            <Each
                                of={ListLoggedOut}
                                render={(item, index) => (
                                    <Link to={item.url} key={index} className="flex items-center gap-2">
                                        <span className="text-xl font-semibold font-cairo">{item.text}</span>
                                    </Link>
                                )}
                            ></Each>
                        </Show.Else>
                    </Show>
                </div>

                <Link to="/" className="">
                    <span className="text-5xl font-deco">المنبر</span>
                </Link>
            </div>
        </header>
    )
}
