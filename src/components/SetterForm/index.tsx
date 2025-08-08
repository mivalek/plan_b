import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../ui/Button";
import { createSetter } from "@/app/actions";
import { setIsSetterDialogOpen } from "@/stores/uiStore";

function SetterForm() {
  async function handleSubmit(formData: FormData) {
    let pass = true;
    ["name", "email"].forEach((field) => {
      if (!formData.get(field)) pass = false;
    });
    if (!pass) {
      setErrorMsg("Please fill in mandatory fields");
      return;
    }
    await createSetter(formData);
    setIsSetterDialogOpen(false);
  }

  const [errorMsg, setErrorMsg] = useState<string>();
  return (
    <div>
      <form action={handleSubmit} className="flex flex-col gap-4 px-4 py-6">
        <h2 className="text-center">New setter</h2>
        <div className="mandatory relative">
          <label htmlFor="setter-name" className="absolute text-xs left-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="setter-name"
            className="bg-slate-200 rounded-sm p-1 mt-4 w-full "
          />
        </div>
        <div className="mandatory relative">
          <label htmlFor="setter-email" className="absolute text-xs left-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="setter-email"
            className="bg-slate-200 rounded-sm p-1 mt-4 w-full "
          />
        </div>

        <div className="flex justify-around">
          <Button
            type="reset"
            onClick={() => setIsSetterDialogOpen(false)}
            className="bg-gray-500"
          >
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </div>
        {errorMsg && (
          <div className="error-msg w-full text-center text-sm text-red-800">
            {errorMsg}
          </div>
        )}
      </form>
    </div>
  );
}

export default SetterForm;
