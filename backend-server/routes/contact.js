var express = require("express");
var router = express.Router();
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

router.post("/", async (req, res, next) => {
  const { name, email, message } = req.body;
  try {
    const { data, error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res
      .status(200)
      .json({ message: "Contact form submitted successfully!", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
