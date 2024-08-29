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
import {
  activityLevels,
  feetOptions,
  genderOptions,
  inchesOptions,
} from "./FormArrays";

export function WeightForm() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState();

  return (
    <Card className="w-[350px] bg-zinc-900 shadow-xl border border-zinc-700 text-zinc-300">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-red-500">Gymify Me</CardTitle>
        <CardDescription className="text-zinc-400">Forge Your Ideal Physique</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="weight" className="text-zinc-400">Current Weight (lbs)</Label>
            <Input id="weight" placeholder="0" type="number" className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height" className="text-zinc-400">Current Height</Label>
            <div className="flex space-x-2">
              <Select>
                <SelectTrigger id="feet" className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300">
                  <SelectValue placeholder="ft" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700">
                  {feetOptions.map((ft) => (
                    <SelectItem key={ft.value} value={String(ft.value)}>{ft.value}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger id="inches" className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300">
                  <SelectValue placeholder="in" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700">
                  {inchesOptions.map((inches) => (
                    <SelectItem key={inches.value} value={String(inches.value)}>{inches.value}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender" className="text-zinc-400">Gender</Label>
            <Select>
              <SelectTrigger id="gender" className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                {genderOptions.map((gender) => (
                  <SelectItem key={gender.value} value={gender.value}>{gender.value}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="activity" className="text-zinc-400">Activity Level</Label>
            <Select>
              <SelectTrigger id="activity" className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                {activityLevels.map((lvl) => (
                  <SelectItem key={lvl.value} value={lvl.value}>{lvl.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="goal" className="text-zinc-400">Weight Goal (lbs)</Label>
            <Input id="goal" placeholder="0" type="number" className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-red-600 text-white hover:bg-red-700 transition-colors">Crush Your Goals</Button>
      </CardFooter>
    </Card>
  );
}
