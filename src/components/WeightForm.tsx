"use client";
import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { activityLevels } from "./FormArrays";

export function WeightForm() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState();

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Gymify Me</CardTitle>
        <CardDescription>Meet your ideal weight goal</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Current Weight</Label>
              <Input id="name" placeholder="0" type="number" />
              <Label htmlFor="name">Current Height</Label>
              <div className="flex flex-row space-x-3">
                <Input id="name" placeholder="''" type="number" />
                <Label htmlFor="name">FT</Label>
                <Input id="name" placeholder="''" type="number" />
                <Label htmlFor="name">IN</Label>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="gender">Gender</Label>
              <Select>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              <Label htmlFor="activity">Activity level</Label>
              <Select>
                <SelectTrigger id="activity">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {activityLevels.map((lvl) => (
                    <SelectItem key={lvl.value} value={lvl.value}>
                      {lvl.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Label htmlFor="name">Weight Goal</Label>
            <Input id="name" placeholder="0lbs" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex">
        <Button className="w-full">Submit</Button>
      </CardFooter>
    </Card>
  );
}
