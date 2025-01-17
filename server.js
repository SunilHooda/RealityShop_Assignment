const express = require("express");
const app = express();
const firstUniqueChar = require("./firstUniqueChar");

app.use(express.json());

app.post("/first-unique-character", (req, res) => {
  const { text_to_process } = req.body;

  //Validating the input (Section-3 point 1)
  if (!text_to_process || typeof text_to_process !== "string") {
    return res
      .status(400)
      .json({ error: "Invalid Input, 'text_to_process' must be a string." });
  }

  const charIndex = firstUniqueChar(text_to_process);
  const timeStamp = new Date().toISOString();

  res.json({
    first_Unique_Char: charIndex !== -1 ? text_to_process[charIndex] : null,
    first_unique_char_index: charIndex,
    timeStamp,
  });

  //Consoling when api hits (Section-3 point2)
  console.log(
    `[${timeStamp}] Endpoint /first-unique-character called with input: ${text_to_process}`
  );
});

app.listen(8080, () => {
  console.log("Server is running at http://localhost:8080");
});
