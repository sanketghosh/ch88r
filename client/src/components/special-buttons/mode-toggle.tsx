
import { useTheme } from "@/providers/theme-provider"
import { ComputerIcon, MoonIcon, SunIcon } from "lucide-react"
import { Button } from "../ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  console.log("@@@@ CURRENT THEME", theme)

  return (
    <div className="w-full justify-center gap-3 items-center flex border py-2 rounded-full">
      <Button variant={theme==="light"?"secondary":"ghost"} onClick={() => setTheme("light")} size={"icon"}>
        <SunIcon size={18}/>
      </Button>
      <Button variant={theme==="dark"?"secondary":"ghost"} onClick={() => setTheme("dark")} size={"icon"}>
        <MoonIcon size={18}/>
      </Button>
      <Button variant={theme==="system"?"secondary":"ghost"} onClick={() => setTheme("system")} size={"icon"}>
        <ComputerIcon size={18}/>
      </Button>
    </div>
  )
}


/**
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setTheme("light")}>
      Light
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("dark")}>
      Dark
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("system")}>
      System
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

*/
