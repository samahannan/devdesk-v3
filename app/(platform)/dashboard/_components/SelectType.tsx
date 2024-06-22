import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

export function SelectType(form: any) {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Status</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a status for your task" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="active">Freelance</SelectItem>
              <SelectItem value="paused">Personal Project</SelectItem>
              <SelectItem value="completed">Study Plan</SelectItem>
              <SelectItem value="completed">Interview Prep</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
