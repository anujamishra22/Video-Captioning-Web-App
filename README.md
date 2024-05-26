# Video-Captioning-Web-App
Allow the user to enter a URL to a hosted video Provide the user a text box to enter their captions. Provide the user a mechanism to provide timestamps for when the captions should be displayed .Display the video with captions on it. Let the user pause/play it

Instruction to run locally 

1.Clone the repository

2.Open index.html

3.Testing with a Known Video URL-If you don't have a specific video URL, you can use the following sample video URL to test the application:
https://www.w3schools.com/html/mov_bbb.mp4

Enter this URL into the "Video URL" input field and click "Load Video" to see if the video loads correctly.


Technical Decisions

Technology Stack:

HTML: Used for the structure and layout of the web application.
CSS: Applied for styling and improving the visual appearance of the application.
JavaScript: Implemented the logic for loading videos, adding captions, and displaying captions at the correct timestamps.

Trade-offs

Feature Set vs. Simplicity:
Trade-off: Decided to implement basic features (video loading, caption adding, and displaying) to keep the application simple and within the given time constraint.
Implication: Advanced features like editing captions, removing captions, and saving/loading caption data are not included.

Future Enhancements

Given more time, the following improvements could be made:

Caption Management:

Feature: Add functionality to edit and delete existing captions.
Benefit: Provides users with more control over their captions, improving the overall usability of the application.

Persisting Data:

Feature: Implement local storage or backend integration to save and load captions.
Benefit: Allows users to save their progress and continue later, enhancing the app's practicality.


