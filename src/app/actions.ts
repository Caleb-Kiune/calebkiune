'use server'

import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    type: z.enum(["freelance", "fulltime", "other"], {
        message: "Please select an inquiry type",
    }),
    message: z.string().min(5, "Message must be at least 5 characters"),
});

export type ContactFormState = {
    success: boolean;
    message?: string;
    errors?: {
        name?: string[];
        email?: string[];
        type?: string[];
        message?: string[];
    };
}

export async function submitContactForm(prevState: ContactFormState | null, formData: FormData): Promise<ContactFormState> {

    // Validate fields
    const validatedFields = formSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        type: formData.get('type'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please check your inputs."
        };
    }

    const { name, email, type, message } = validatedFields.data;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "954bee54-dbde-450f-9ae3-8fa2ce34566a", // Kept on server side
                name,
                email,
                type,
                message,
                subject: `New Contact from Portfolio: ${type} - ${name}`
            }),
        });

        const result = await response.json();

        if (result.success) {
            return { success: true };
        } else {
            return {
                success: false,
                message: result.message || "Failed to send message."
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "Failed to connect to the server."
        };
    }
}
