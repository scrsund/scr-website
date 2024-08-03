var express = require("express");
var router = express.Router();
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseKey ? "Key is set" : "Key is missing");

const supabase = createClient(supabaseUrl, supabaseKey);

router.post("/", async (req, res, next) => {
  console.log("Request received:", req.body);
  const { name, email, message } = req.body;
  try {
    const { data, error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: error.message });
    }

    console.log("Data inserted:", data);
    res
      .status(200)
      .json({ message: "Contact form submitted successfully!", data });
  } catch (error) {
    console.error("Backend Catch error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
