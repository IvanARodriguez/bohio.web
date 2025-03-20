"use client";

import { useDictionary } from "@/context/globalContext";
import { useState, ChangeEvent, FormEvent } from "react";
import Button from "../Button";
import InputBase from "../inputs/InputBase";
import TextareaBase from "../inputs/TextareaBase";
import { Homespace, HomespaceStatus } from "@/types";
import { ObjectSchema, array, object, string } from "yup";
import { features } from "process";

const homespaceSchema = object({
  name: string().required("name_required"),
  description: string().required("description_required"),
  features: array<String>(),
  tags: array<String>(),
  category: string().required("category_required"),
  city: string(),
  country: string(),
  state: string(),
  status: string<HomespaceStatus>(),
});

export default function CreateHomeSpaceForm() {
  const t = useDictionary();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [homespace, setHomespace] = useState<Homespace>({
    name: "",
    description: "",
    features: [],
    tags: [],
    category: "",
    city: "",
    country: "",
    state: "",
    status: "Draft",
  });

  const setHomeProp = async <k extends keyof Homespace>(key: k, value: Homespace[k]) => {
    try {
      await homespaceSchema.validateAt(key, { ...homespace, [key]: value });

      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[key];
        return newErrors;
      });
    } catch (validationError: any) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [key]: validationError.message,
      }));
    }
    setHomespace((prev) => ({ ...prev, [key]: value }));
  };

  const handleFeatureChange = (e: ChangeEvent<HTMLInputElement>) => {
    {
      const value = e.target.value;
      if (value.includes(",")) {
        const newFeature = value.replace(",", "").trim();
        if (newFeature) {
          setHomeProp("features", [...homespace.features, newFeature]);
        }
        e.target.value = "";
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await homespaceSchema.validate(homespace, { abortEarly: false });
      setErrors({});
    } catch (validationError: any) {
      const errorMap: Record<string, string> = {};
      validationError.inner.forEach((err: any) => {
        errorMap[err.path] = err.message;
      });
      setErrors(errorMap);
    }
    console.log("submitting");
  };

  const renderFeatures = () => (
    <>
      {homespace.features.map((feat) => (
        <div key={feat} className="flex gap-2 flex-wrap">
          <Button
            fullWith={false}
            color="tertiary"
            variant="pill"
            onClick={() => {
              setHomeProp(
                "features",
                homespace.features.filter((f) => f !== feat)
              );
            }}
            className=" py-1 px-2.5 border border-transparent text-sm text-gray-700 transition-all shadow-sm"
          >
            {feat}
          </Button>
        </div>
      ))}
    </>
  );
  return (
    <div className="my-11 flex max-w-xl mx-auto flex-col w-full gap-4">
      <form className="w-full grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-1">
          <InputBase
            value={homespace.name}
            onChange={(e) => setHomeProp("name", e.target.value)}
            placeholder={t.homespace.space_title_placeholder}
            id="space-title"
            label={t.homespace.space_title}
          />
          <ErrorLabel err={t.validations[errors["name"] as keyof typeof t.validations]} />
        </div>
        <div className="grid gap-1">
          <TextareaBase
            value={homespace.description}
            onChange={(e) => setHomeProp("description", e.target.value)}
            placeholder={t.homespace.description_placeholder}
            id="space-description"
            label={t.homespace.description}
          />
          <ErrorLabel err={t.validations[errors["description"] as keyof typeof t.validations]} />
        </div>
        <div className="grid gap-1">
          <InputBase
            value={homespace.category}
            onChange={(e) => setHomeProp("category", e.target.value)}
            placeholder={t.homespace.category_placeholder}
            id="space-category"
            label={t.homespace.category}
          />
          <ErrorLabel err={t.validations[errors["category"] as keyof typeof t.validations]} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-2">
          <InputBase
            value={homespace.city}
            onChange={(e) => setHomeProp("city", e.target.value)}
            placeholder={t.homespace.city_placeholder}
            id="space-city"
            label={t.homespace.city}
          />
          <InputBase
            value={homespace.state}
            onChange={(e) => setHomeProp("state", e.target.value)}
            placeholder={t.homespace.state_placeholder}
            id="space-state"
            label={t.homespace.state}
          />
          <InputBase
            value={homespace.country}
            onChange={(e) => setHomeProp("country", e.target.value)}
            placeholder={t.homespace.country_placeholder}
            id="space-country"
            label={t.homespace.country}
            className="col-span-full w-full sm:col-span-1"
          />
        </div>

        <div className="flex flex-col">
          <InputBase
            placeholder={t.homespace.features_placeholder}
            onChange={handleFeatureChange}
            label={t.homespace.features}
          />
        </div>
        {renderFeatures()}
        <div className="w-24 mt-4 ms-auto">
          <Button fullWith={true}>{t.homespace.next}</Button>
        </div>
      </form>
    </div>
  );
}

const ErrorLabel = ({ err }: { err: string }) => {
  return (
    <li key={err} className="list-none text-xs text-red-600">
      {err}
    </li>
  );
};
