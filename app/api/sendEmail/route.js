import { EmailTemplate } from "@/components/jobsForm/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["hr@yaseer.sa"],
      subject: "Job application",
      react: EmailTemplate({
        user_name: body.user_name || "empty",
        user_email: body.user_email || "empty",
        phone: body.phone || "empty",
        qualification: body.qualification || "empty",
        score: body.score || "empty",
        requestType: body.requestType || "empty",
        cv: body.cv || "empty",
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
