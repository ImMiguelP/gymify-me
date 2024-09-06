"use client";
import type * as React from "react";
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
import { genderOptions, feetOptions, inchesOptions } from "./FormArrays";

export function WeightForm() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState({ feet: "", inches: "" });
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [exerciseRoutine, setExerciseRoutine] = useState("");
  const [healthIssues, setHealthIssues] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const prompt = `
      Age: ${age}
      Gender: ${gender}
      Height: ${height.feet}ft ${height.inches}in
      Current Weight: ${weight} lbs
      Goal: ${goal}
      Dietary Restrictions: ${dietaryRestrictions}
      Exercise Frequency: ${exerciseRoutine}
      Health Issues: ${healthIssues}

      Based on this information, please provide a personalized fitness and nutrition plan to help this individual reach their goal.
    `;

    try {
      const res = await fetch("/api/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      if (!data.message) {
        throw new Error("No message received from the server");
      }
      setResponse(data.message);
    } catch (error) {
      console.error("Error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-[600px] bg-zinc-900 shadow-xl border border-zinc-700 text-zinc-300 h-[800px] flex flex-col">
      <CardHeader className="text-center py-4">
        <CardTitle className="text-3xl font-bold text-red-500">
          Gymify Me
        </CardTitle>
        <CardDescription className="text-zinc-400 text-lg mt-2">
          Forge Your Ideal Physique
        </CardDescription>
      </CardHeader>
      <CardContent className="py-4 flex-grow overflow-y-auto">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-6 gap-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="age" className="text-zinc-400 text-base">
              Age
            </Label>
            <Input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300 h-12 text-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender" className="text-zinc-400 text-base">
              Gender
            </Label>
            <Select onValueChange={(value) => setGender(value)}>
              <SelectTrigger
                id="gender"
                className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300 h-12 text-lg"
              >
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                {genderOptions.map((gender) => (
                  <SelectItem key={gender.value} value={gender.value}>
                    {gender.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="height" className="text-zinc-400 text-base">
              Height
            </Label>
            <div className="flex space-x-4">
              <Select
                onValueChange={(value) =>
                  setHeight((prev) => ({ ...prev, feet: value }))
                }
              >
                <SelectTrigger
                  id="feet"
                  className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300 h-12 text-lg"
                >
                  <SelectValue placeholder="ft" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700">
                  {feetOptions.map((ft) => (
                    <SelectItem key={ft.value} value={String(ft.value)}>
                      {ft.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                onValueChange={(value) =>
                  setHeight((prev) => ({ ...prev, inches: value }))
                }
              >
                <SelectTrigger
                  id="inches"
                  className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300 h-12 text-lg"
                >
                  <SelectValue placeholder="in" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700">
                  {inchesOptions.map((inches) => (
                    <SelectItem key={inches.value} value={String(inches.value)}>
                      {inches.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight" className="text-zinc-400 text-base">
              Current Weight (lbs)
            </Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300 h-12 text-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="goal" className="text-zinc-400 text-base">
              Goal
            </Label>
            <Select onValueChange={(value) => setGoal(value)}>
              <SelectTrigger
                id="goal"
                className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300 h-12 text-lg"
              >
                <SelectValue placeholder="Select Goal" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                <SelectItem value="gain">Gain Weight</SelectItem>
                <SelectItem value="lose">Lose Weight</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 col-span-2">
            <Label
              htmlFor="dietaryRestrictions"
              className="text-zinc-400 text-base"
            >
              Dietary Restrictions (Allergies etc.)
            </Label>
            <Input
              id="dietaryRestrictions"
              value={dietaryRestrictions}
              onChange={(e) => setDietaryRestrictions(e.target.value)}
              className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300 h-12 text-lg"
            />
          </div>
          <div className="space-y-2 col-span-2">
            <Label
              htmlFor="exerciseRoutine"
              className="text-zinc-400 text-base"
            >
              Exercise Frequency
            </Label>
            <Select onValueChange={(value) => setExerciseRoutine(value)}>
              <SelectTrigger
                id="exerciseRoutine"
                className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300 h-12 text-lg"
              >
                <SelectValue placeholder="Select Routine" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                <SelectItem value="rarely">Rarely</SelectItem>
                <SelectItem value="occasionally">Occasionally</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="frequent">Frequent</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="healthIssues" className="text-zinc-400 text-base">
              Health Issues
            </Label>
            <Input
              id="healthIssues"
              value={healthIssues}
              onChange={(e) => setHealthIssues(e.target.value)}
              className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500 text-zinc-300 h-12 text-lg"
            />
          </div>
        </form>
        {error && (
          <div className="mt-6 p-4 bg-red-800 rounded-lg">
            <p className="text-white">{error}</p>
          </div>
        )}
        {response && (
          <div className="mt-6 p-4 bg-zinc-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-red-500">
              Your Personalized Plan:
            </h3>
            <p className="text-zinc-300 whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="pb-6">
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-red-600 text-white hover:bg-red-700 transition-colors text-xl py-6"
        >
          {isLoading ? "Processing..." : "Crush Your Goals"}
        </Button>
      </CardFooter>
    </Card>
  );
}
