import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Simplified prompt for testing
    const prompt = "A logo for a tech company.";

    // Make API call to Hugging Face
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGING_FACE_API_TOKEN}`,
        },
      }
    );

    return res.status(200).json({ logo: response.data });
  } catch (error) {
    // Enhanced error logging
    console.error(
      "Error generating logo:",
      error.response?.data || error.message
    );
    return res.status(500).json({ error: "Failed to generate logo" });
  }
}
