"use server";

import { revalidatePath } from "next/cache";

export async function sendMessage(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (typeof name !== "string" || name.trim() === "") {
    console.log("Contact form rejected: name is required");
    return;
  }

  if (typeof message !== "string" || message.trim() === "") {
    console.log("Contact form rejected: message is required");
    return;
  }

  console.log("Contact form submitted:", { name, email, message });

  revalidatePath("/contact");
}
