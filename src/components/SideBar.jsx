import * as React from "react"
import { Home, LineChart, Package, Package2, Settings, ShoppingCart, Users2 } from "lucide-react"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Link, useLocation, useParams } from "react-router-dom"
import { Each } from "@/utils/Each"
import { List } from "@/data"

export const Sidebar = () => {
    // const nav = useParams()
    const location = useLocation()
    // console.log(location.pathname)
    React.useEffect(() => {
        setActive(location.pathname)
    }, [location])
    const [active, setActive] = React.useState(location.pathname)

    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                <Link
                    to={"/"}
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                </Link>

                <Each
                    of={List}
                    render={(item) => {
                        return (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            to={item.url}
                                            className={`${
                                                active === item.url ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                                            } flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 md:text-base`}
                                        >
                                            {/* <Home className="h-5 w-5" />
                                             */}
                                            <item.icon className="h-5 w-5" />
                                            <span className="sr-only">{item.text}</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">{item.text}</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )
                    }}
                ></Each>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                to={"/settings"}
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    )
}
