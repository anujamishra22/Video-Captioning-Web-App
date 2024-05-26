# Video-Captioning-Web-App
Web application that allows users to add caption to a video. The application has the capability to input a video URL, a text box for caption input, a mechanism to specify timestamps for the caption, and the ability to display the video with the caption overlayed. The user can also able to control the video playback with pause and play.

Instruction to run locally 

1.Clone the repository

2.Open index.html

3.Testing with a Known Video URL-If you don't have a specific video URL, you can use the following sample video URL to test the application: 
  
      https://www.w3schools.com/html/mov_bbb.mp4
      
Enter this URL into the "Video URL" input field and click "Load Video" to see if the video loads correctly.




Technical Decisions : HTML: Used for the structure and layout of the web application.
 CSS: Applied for styling and improving the visual appearance of the application.
 JavaScript: Implemented the logic for loading videos, adding captions, and displaying captions at the correct timestamps.



User Experience Considerations:
The interface is kept simple and intuitive with clear labels and buttons to guide the user through the process of loading a video and adding captions.The interface is designed to be intuitive and easy to use, with clear labels and instructions. Users can quickly input a video URL, add captions, and control video playback without confusion.
Users receive immediate feedback when adding captions, allowing them to see how their captions will appear on the video in real-time. This enhances the user experience and encourages engagement.



Trade-offs:Decided to implement basic features (video loading, caption adding, and displaying) to keep the application simple and within the given time constraint. Advanced features like editing  captions, removing captions, and saving/loading caption data are not included.



Future Enhancements:Given more time, the following improvements could be made:

  1. Caption Management:
  Feature: Add functionality to edit and delete existing captions.
  Benefit: Provides users with more control over their captions, improving the overall usability of the application.

  2. Persisting Data:
  Feature: Implement local storage or backend integration to save and load captions.
  Benefit: Allows users to save their progress and continue later, enhancing the app's practicality.


