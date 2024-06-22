import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Status } from "@/lib/types";
import { useMutation } from "convex/react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import localFont from "next/font/local";
import { FunctionComponent, useEffect } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { SelectStatus } from "./SelectStatus";

const headingFont = localFont({
  src: "../../../../public/font/relative-faux-webfont.woff2",
});
interface NewCard {
  type: string;
  status: Status;
  onSuccess: () => void;
}

const NewCard: FunctionComponent<NewCard> = ({ type, status, onSuccess }) => {
  const createCard = useMutation(api.card.create);

  // 1. Define your form.
  const form = useForm();
  const create = useMutation(api.card.create);

  useEffect(() => {
    form.setFocus("title");
  }, [form]);

  // 2. Define a submit handler.
  function onSubmit(values: any) {
    const { title, client_name } = values;
    console.log(values);
    const promise = create({
      title,
      status,
      type,
    });
    toast.promise(promise, {
      loading: "Creating a new task...",
      success: "New task created!",
      error: "Failed to create a new task.",
    });

    promise.then(() => {
      onSuccess();
      form.reset();
    });
  }
  return (
    <div>
      <div className={`card border rounded-sm relative bg-white `}>
        <div className="p-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Title"
                        {...field}
                        className={`${headingFont.className} p-3  text-lg focus-visible:ring-0`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button variant="secondary" size="sm">
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
