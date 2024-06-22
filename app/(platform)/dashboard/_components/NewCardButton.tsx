import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  CircleFadingPlus,
  Plus,
  PlusCircleIcon,
  PlusSquareIcon,
} from "lucide-react";
import NewCardForm from "./NewCardForm";
import CreateFreelanceCard from "../_forms/CreateFreelanceCard";

export function NewCardButton() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            variant="link"
            className="flex gap-2 opacity-50 hover:opacity-100"
          >
            <PlusSquareIcon size={18} />
            {/* New Task */}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <CreateFreelanceCard />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        {/* <DrawerHeader className="text-left">
          <DrawerTitle>New Card</DrawerTitle>
          <DrawerDescription>Add a new card</DrawerDescription>
        </DrawerHeader> */}
        <CreateFreelanceCard />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
