export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { token, formData } = req.body;

  // ✅ בדיקה מול Google reCAPTCHA
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
    { method: "POST" }
  );

  const data = await response.json();

  console.log("🔎 reCAPTCHA result:", data); // כאן תראה את ה-score בלוגים

  if (!data.success || data.score < 0.7) {
    return res.status(400).json({
      success: false,
      message: "Suspicious activity detected",
      score: data.score,
    });
  }

  // ✅ אם עבר בהצלחה – שלח ל-HubSpot
  try {
    const hubspotRes = await fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/146946532/096acd9d-2441-4d91-a2a0-0de36128239a",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (hubspotRes.ok) {
      return res.status(200).json({ success: true, score: data.score });
    } else {
      const errMsg = await hubspotRes.json();
      return res
        .status(500)
        .json({ success: false, error: errMsg, score: data.score });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, error: err.message, score: data.score });
  }
}
