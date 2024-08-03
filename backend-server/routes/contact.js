var express = require("express");
var router = express.Router();
const { createClient } = require("@supabase/supabase-js");

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabaseUrl = "https://yislctkacyzdfdepeevw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpc2xjdGthY3l6ZGZkZXBlZXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MTA0NzgsImV4cCI6MjAzODA4NjQ3OH0.6V5Gdi8q3CaPprh_6ALnaZLDnD9UruVmSYd_-ArEtsw";

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
