// Function to update imgPath based on title
function updateImgPaths(data) {
  return data.map((article) => {
    const imgPath = article.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace("/", "");
    const savePath = path.join("assets/images", `${imgPath}.jpg`);

    // Update the imgPath field in the article
    article.imgPath = savePath;

    return article;
  });
}

// Update the data
const updatedData = updateImgPaths(data);

// Export the updated data
export default updatedData;

console.log("Image paths updated successfully!");
