import { Difficulty, TBoulder, TSetterShort } from "@/lib/types";
import React, { Dispatch, SetStateAction, useState } from "react";
import { HOLD_COLORS, TAGS } from "@/lib/constants";
import Button from "../ui/Button";
import { twMerge } from "tailwind-merge";
import { dbCreateOrUpdateBoulder } from "@/app/actions";

// TODO:
// function deleteBoulderFromDb() {}

function BoulderForm({
  boulder,
  setters,
  setBoulders,
  setEditedBoulder,
  setIsSetterDialogOpen,
  formCleanup,
}: {
  boulder: TBoulder | undefined;
  setters: TSetterShort[];
  setEditedBoulder: Dispatch<SetStateAction<TBoulder | undefined>>;
  setIsSetterDialogOpen: Dispatch<SetStateAction<boolean>>;
  setBoulders: Dispatch<SetStateAction<TBoulder[]>>;
  formCleanup: (shouldDelete: "always" | "ifNew" | "never") => void;
}) {
  const [errorMsg, setErrorMsg] = useState<string>();
  function setBoulderProperty<T extends keyof TBoulder>(
    prop: T,
    value: TBoulder[T]
  ) {
    setEditedBoulder((prev) => {
      const next = { ...prev! };
      next[prop] = value;
      return next;
    });
  }

  async function handleSubmit() {
    if (!validateForm() || !boulder) return;
    try {
      await dbCreateOrUpdateBoulder(boulder);
      setBoulders((prev) => {
        const next = [...prev];
        const idx = next.findIndex((p) => p.id === boulder.id);
        if (idx === -1) {
          next.push(boulder);
        } else {
          next[idx] = boulder;
        }
        return next;
      });
      formCleanup("never");
    } catch {
      setErrorMsg("Something went wrong");
    }
  }

  function handleDelete() {
    formCleanup("always");
  }

  function validateForm() {
    let pass = true;
    if (boulder?.difficulty === null) {
      pass = false;
    }
    if (!boulder?.setter) {
      pass = false;
    }
    if (!boulder?.holdColors.length) {
      pass = false;
    }
    if (!boulder?.tags.length) {
      pass = false;
    }
    setErrorMsg(pass ? undefined : "Please complete mandatory parts");
    return pass;
  }
  return (
    <form
      action={() => {
        handleSubmit();
      }}
      className="flex flex-col gap-4 px-4 py-6"
    >
      <input
        type="text"
        name="id"
        id="id"
        defaultValue={boulder?.id}
        readOnly={true}
        tabIndex={-1}
        className="h-0 w-0 absolute focus-visible:outline-none"
      />
      <div className="relative">
        <label htmlFor="boulder-name" className="absolute text-xs left-1">
          Boulder name
        </label>
        <input
          autoFocus={false}
          type="text"
          name="name"
          id="boulder-name"
          defaultValue={boulder?.name || ""}
          onChange={(e) => setBoulderProperty("name", e.target.value)}
          className="bg-slate-200 rounded-sm p-1 mt-4 w-full "
        />
      </div>
      <div className="mandatory relative">
        <label htmlFor="boulder-setter" className="absolute text-xs left-1">
          Setter
        </label>
        <div className="flex gap-4 mt-4 items-center">
          <select
            name="setter"
            id="boulder-setter"
            defaultValue={boulder?.setter}
            onChange={(e) =>
              setBoulderProperty("setter", Number(e.target.value))
            }
            className="bg-slate-200 rounded-sm p-1 h-8 grow"
          >
            <option value={undefined}>-- Select setter</option>
            {setters.map((setter) => (
              <option key={setter.id} value={setter.id}>
                {setter.name}
              </option>
            ))}
          </select>
          <Button type="button" onClick={() => setIsSetterDialogOpen(true)}>
            New setter
          </Button>
        </div>
      </div>
      <fieldset id="hold-colors" className="mandatory flex gap-2">
        <legend className="text-xs relative pb-2 pl-1">Colour</legend>
        <div
          className="grid gap-4 w-full justify-between"
          style={{ gridTemplateColumns: "repeat(5, auto)" }}
        >
          {Object.entries(HOLD_COLORS).map((color) => {
            const [key, val] = color;
            return (
              <div
                key={"hold-" + key}
                className="w-fit"
                style={{ transition: "outline .2s ease-out" }}
              >
                <label
                  htmlFor={"hold-" + key}
                  style={{ background: val }}
                  className={twMerge(
                    "h-6 w-6 rounded-full block cursor-pointer rotate-45 outline-0 outline-sky-600 outline-offset-2",
                    key === "white" &&
                      !boulder?.holdColors?.includes(key) &&
                      " border-gray-400 border",
                    boulder?.holdColors?.includes(key) && "outline-2"
                  )}
                >
                  <input
                    disabled={
                      !boulder?.holdColors?.includes(key) &&
                      boulder?.holdColors?.length == 2
                    }
                    type="checkbox"
                    name="holdColor"
                    id={"hold-" + key}
                    value={key}
                    className=" absolute h-0 w-0"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setBoulderProperty(
                          "holdColors",
                          boulder?.holdColors
                            ? [...boulder.holdColors, key]
                            : [key]
                        );
                      } else {
                        setBoulderProperty(
                          "holdColors",
                          boulder!.holdColors.filter((c) => c !== key)
                        );
                      }
                    }}
                    defaultChecked={boulder?.holdColors?.includes(key)}
                  />
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
      <fieldset id="difficulty" className="mandatory">
        <legend className="text-xs relative pb-2 pl-1">Difficulty</legend>
        <div className="flex gap-2 justify-between">
          {Object.entries(Difficulty)
            .filter((d) => isNaN(Number(d[0])))
            .map(([key, val]) => {
              return (
                <div key={"diff-" + key} className="w-fit">
                  <label
                    htmlFor={"diff-" + key.toLowerCase()}
                    style={{
                      background:
                        HOLD_COLORS[
                          key.toLowerCase() as keyof typeof HOLD_COLORS
                        ],
                    }}
                    className={twMerge(
                      "h-6 w-6 rounded-full block cursor-pointer outline-0 outline-sky-600 outline-offset-2",
                      key === "White" &&
                        val !== boulder?.difficulty &&
                        " border-gray-400 border",

                      boulder?.difficulty === val && "outline-2"
                    )}
                  >
                    <input
                      type="radio"
                      name="difficulty"
                      id={"diff-" + key.toLowerCase()}
                      value={val}
                      className="invisible absolute h-0 w-0"
                      onClick={() =>
                        setBoulderProperty("difficulty", val as Difficulty)
                      }
                      defaultChecked={val === boulder?.difficulty}
                    />
                  </label>
                </div>
              );
            })}
        </div>
      </fieldset>
      <fieldset
        id="tags"
        className="mandatory flex gap-1 justify-evenly flex-wrap"
      >
        <legend className="text-xs relative pb-2 pl-1">Tags</legend>
        {TAGS.map((tag) => {
          return (
            <div key={"tag-" + tag.toLowerCase()}>
              <label
                htmlFor={"tag-" + tag.toLowerCase()}
                className={twMerge(
                  "rounded-sm  bg-slate-200 cursor-pointer px-1 py-px ",
                  boulder?.tags.includes(tag) && " outline-sky-600 outline-2"
                )}
              >
                <input
                  type="checkbox"
                  name="tags[]"
                  id={"tag-" + tag.toLowerCase()}
                  value={tag}
                  className="invisible absolute h-0 w-0"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setBoulderProperty(
                        "tags",
                        boulder?.tags ? [...boulder.tags, tag] : [tag]
                      );
                    } else {
                      setBoulderProperty(
                        "tags",
                        boulder!.tags.filter((c) => c !== tag)
                      );
                    }
                  }}
                  defaultChecked={boulder?.tags?.includes(tag)}
                />
                {tag}
              </label>
            </div>
          );
        })}
      </fieldset>
      <div className="flex justify-around">
        <Button type="reset" onClick={handleDelete} className="bg-red-700">
          Delete
        </Button>
        <Button
          type="button"
          onClick={() => formCleanup("ifNew")}
          className="bg-gray-500 text-white"
        >
          Cancel
        </Button>
        <Button type="submit">Done</Button>
      </div>
      {errorMsg && (
        <div className="error-msg w-full text-center text-sm text-red-800">
          {errorMsg}
        </div>
      )}
    </form>
  );
}

export default BoulderForm;
