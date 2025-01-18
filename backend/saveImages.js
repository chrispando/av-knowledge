import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import articlesData from "../frontend/av-knowledge/src/data.js"; // Default import

const saveImages = async (articles) => {
  articles.forEach(async (article) => {
    if (article.imgPath === "pic.jpg") {
      const imgPath = article.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace("/", "");
      const savePath = path.join("assets/images", `${imgPath}.jpg`);

      // Check if the image already exists in the assets/images directory
      if (fs.existsSync(savePath)) {
        // If the image exists, just update the imgPath in articlesData
        article.imgPath = `/assets/images/${imgPath}.jpg`;
        console.log(`Image already exists, path updated for: ${article.title}`);
      } else {
        // If the image doesn't exist, fetch and save it
        const apiUrl = `https://image.pollinations.ai/prompt/${imgPath}`;
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            console.error(`Failed to fetch image for: ${article.title}`);
            return;
          }

          const buffer = await response.arrayBuffer();

          // Save the image to the file system
          fs.writeFileSync(savePath, Buffer.from(buffer));

          // Update the article's imgPath to the saved image path
          article.imgPath = `/assets/images/${imgPath}.jpg`;

          console.log(`Image saved and path updated for: ${article.title}`);
        } catch (error) {
          console.error(`Error fetching image for "${article.title}":`, error);
        }
      }
    }
  });
};

// Call the function to save images and update article paths
saveImages(articlesData);
