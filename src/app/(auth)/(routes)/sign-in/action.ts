'use server'
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
interface FormState {
    message: string;
    status: boolean;
    // Add other properties if needed
}
export async function login(formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const user: string | null = formData.get("username") as string;
    const password: string | null = formData.get("password") as string;
    // Assuming data is some predefined data structure you want to return
    const data: FormState = {
        message: "",
        status: false
        // Add other properties if needed
    };
    // Check for valid user and password (replace with your actual authentication logic)
    if (user !== "admin" || password !== "1234") {
        // Authentication failed, return an error message
        console.log(data);
        data.message = "Invalid username or password";
        data.status = false
        return data;
    }
    // Authentication successful, you can set additional properties in data if needed
    data.message = "Login successful!";
    data.status = true;
    console.log(data);
    cookies().set('token', user)
    redirect("/dashboard")
}