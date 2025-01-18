const fs = require("fs");
const path = require("path");

// Path to the data.js file on your desktop
const filePath = path.join(require("os").homedir(), "Desktop", "data.js");
console.log(filePath);
// Read the data.js file
fs.readFile(filePath, "utf8", (err, fileContent) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Extract the data object from the file
  let dataString = fileContent.match(/const data = (\[.*\]);/s)?.[1];
  if (!dataString) {
    console.error("Could not extract data array from the file.");
    return;
  }

  // Parse the data as JavaScript
  let data;
  try {
    data = eval(dataString); // Use eval to execute the JS code
  } catch (e) {
    console.error("Error parsing the data:", e);
    return;
  }

  // Update the imgPath for each object
  data.forEach((item) => {
    if (item.title) {
      item.imgPath = `/assets/images/${item.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")}.jpg`;
    }
  });

  // Convert the updated data back to a string
  const updatedDataString = `const data = ${JSON.stringify(
    data,
    null,
    2
  )};\nexport default data;`;

  // Write the updated data back to the file
  fs.writeFile(filePath, updatedDataString, "utf8", (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
    } else {
      console.log("File updated successfully!");
    }
  });
});
