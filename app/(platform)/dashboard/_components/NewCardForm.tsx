import { FunctionComponent } from "react";
import CreatePersonalCard from "../_forms/CreatePersonalCard";
import CreateFreelanceCard from "../_forms/CreateFreelanceCard";
import { SelectType } from "./SelectType";
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, useForm } from "react-hook-form";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SelectStatus } from "./SelectStatus";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";

interface NewCardFormProps {}

const getRightForm = (type: string) => {
  switch (type) {
    case "personal":
      return <CreatePersonalCard />;
    case "freelance":
      return <CreateFreelanceCard />;
    default:
      return null;
  }
};

const NewCardForm: FunctionComponent<NewCardFormProps> = () => {
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
      type: "freelance",
    });
    toast.promise(promise, {
      loading: "Creating a new task...",
      success: "New task created!",
      error: "Failed to create a new task.",
    });
  }

  return (
    <div>
      <div className="form">
        <DialogHeader className="mb-4">
          <DialogTitle>New freelance project</DialogTitle>
          <DialogDescription>Add new freelance task.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <SelectType form={form} />
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
                  <FormLabel>Client Name</FormLabel>
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
    </div>
  );
};

export default NewCardForm;
