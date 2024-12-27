/*import { Resend } from "resend";
import { render } from "@react-email/render";
import WelcomeTemplate from "../../../emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request, res) {
  try {
    const { email, userFirstname } = await request.json();

    // Validate input
    if (!email || !userFirstname) {
      console.error("Invalid input: Missing email or userFirstname");
      return res.status(400).json({ error: "Email and userFirstname are required." });
    }

    // Debug logs
    console.log("Request received: Sending email to:", email);
    console.log("User firstname:", userFirstname);

    // Render the email template
    const renderedHtml = render(<WelcomeTemplate userFirstname={userFirstname} />);
    console.log("Rendered HTML:", renderedHtml);

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Congratulations, you have onboarded successfully!",
      html: renderedHtml,
    });

    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email.", details: error });
    }

    console.log("Email sent successfully:", data);
    return res.status(200).json({ message: "Email Sent Successfully!", data });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
}

export async function GET(request, res) {
  try {
    console.log("GET request received");
    
    // Sample data to test GET response
    const sampleData = {
      message: "This is a sample response for the GET method.",
      documentation: "Use POST to send emails.",
    };

    return res.status(200).json(sampleData);
  } catch (error) {
    console.error("Unexpected error in GET method:", error);
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
}

// Self-contained test function for POST
if (require.main === module) {
  const mockRequest = {
    json: async () => ({
      email: "test@example.com",
      userFirstname: "John",
    }),
  };

  const mockResponse = {
    status: (statusCode) => ({
      json: (data) => console.log(`Response [${statusCode}]:`, data),
    }),
  };

  (async () => {
    console.log("Running POST function locally...");
    await POST(mockRequest, mockResponse);

    console.log("Running GET function locally...");
    await GET(mockRequest, mockResponse);
  })();
}*/
