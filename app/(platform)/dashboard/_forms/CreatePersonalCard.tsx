import { FunctionComponent } from "react";
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../../components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { Doc, Id } from "@/convex/_generated/dataModel";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { SelectStatus } from "../_components/SelectStatus";

interface CreatePersonalCardProps {}

const CreatePersonalCard: FunctionComponent<CreatePersonalCardProps> = () => {
  // 1. Define your form.
  const form = useForm();
  const create = useMutation(api.card.create);

  // 2. Define a submit handler.
  function onSubmit(values: any) {
    const { title, client_name } = values;
    console.log(values);
    const promise = create({
      title,
      status: "active",
      type: "personal",
      client_name,
    });
    toast.promise(promise, {
      loading: "Creating a new task...",
      success: "New task created!",
      error: "Failed to create a new task.",
    });
  }

  return (
    <div className="form">
      <DialogHeader className="mb-4">
        <DialogTitle>New personal project</DialogTitle>
        <DialogDescription>Add new personal task.</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} className="focus-visible:ring-0" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="client_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Desription</FormLabel>
                <FormControl>
                  <Input {...field} className="focus-visible:ring-0" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SelectStatus form={form} />
          <DialogClose asChild>
            <Button type="submit">Create</Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default CreatePersonalCard;
