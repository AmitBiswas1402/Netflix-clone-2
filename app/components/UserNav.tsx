import { AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Avatar } from "@radix-ui/react-avatar"
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

export default function UseNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" className="relative h-10 w-10 rounded-sm"> 
                <Avatar className="h-10 w-10 rounded-sm">
                    <AvatarImage src="https://majemcyhbjxnrrwyxnph.supabase.co/storage/v1/object/public/Amit%20image/avatar.png" />
                    <AvatarFallback className="rounded-sm">Jan</AvatarFallback>
                </Avatar>
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}