import fs from "fs";
import path from "path";

// Use import.meta.url to get the current file's URL and convert it to a file path
const __filename = new URL(import.meta.url).pathname;

// Define the correct relative path to the data.js file
const dataFilePath = path.join(
  __dirname,
  "..",
  "frontend",
  "av-knowledge",
  "src",
  "data.js"
); // Adjusted path to match your folder structure

// Read the file contents
fs.readFile(dataFilePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading data.js file:", err);
    return;
  }

  // Since `data.js` exports the data array, we need to evaluate it
  try {
    const dataArray = eval(data); // Evaluates the JavaScript code
    console.log("Contents of data.js:", dataArray);
  } catch (e) {
    console.error("Error evaluating the data in data.js:", e);
  }
});
