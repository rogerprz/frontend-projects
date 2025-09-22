export const getDirectoryDate = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "Documents",
          type: "folder",
          children: [
            { id: "1-1", name: "Resume.pdf", type: "file" },
            { id: "1-2", name: "Cover Letter.docx", type: "file" },
            {
              id: "1-3",
              name: "Job Applications",
              type: "folder",
              children: [
                { id: "1-3-1", name: "Company A.pdf", type: "file" },
                { id: "1-3-2", name: "Company B.pdf", type: "file" },
              ],
            },
          ],
        },
        {
          id: "2",
          name: "Images",
          type: "folder",
          children: [
            { id: "2-1", name: "Vacation.jpg", type: "file" },
            { id: "2-2", name: "Profile Picture.png", type: "file" },
          ],
        },
        {
          id: "3",
          name: "Projects",
          type: "folder",
          children: [
            {
              id: "3-1",
              name: "Website",
              type: "folder",
              children: [
                { id: "3-1-1", name: "index.html", type: "file" },
                { id: "3-1-2", name: "styles.css", type: "file" },
                { id: "3-1-3", name: "script.js", type: "file" },
              ],
            },
            { id: "3-2", name: "Notes.txt", type: "file" },
          ],
        },
      ]);
    }, 1500);
  });
};
