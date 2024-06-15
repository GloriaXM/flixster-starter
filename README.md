## Unit Assignment: Flixster

Submitted by: Gloria Moudou

Estimated time spent: 20 hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES


- [x] **Display Movies**
  - [x] Users can view a list of current movies from The Movie Database API.
  - [x] For each movie displayed, users can see its title, poster image, and votes.
  - [x] Users can load more current movies by clicking a button at the bottom of the list (page should not be reloaded).
- [x] **Search Functionality**
  - [x] Users can search for movies and view the results in a grid.
  - [x] Users can clear results and view previous current movies displayed.
- [x] **Accessibility Features**
  - [x] Website implements accessibility features (semantic HTML, color contrast, font sizing, alt text for images).
- [x] **Responsive Design**
  - [x] Website implements responsive web design.
- [x] **Movie Details**
  - [x] Users can view more details about a movie in a popup, such as runtime in minutes, backdrop poster, release date, genres, and/or an overview.
- [x] **Sorting Options**
  - [x] Users can click on a filter by drop down to sort product by type (alphabetic, release date, rating).
- [x] **Layout**
  - [x] Website displays header, banner, search, movie grid, about, contact, and footer section.

#### STRETCH FEATURES

- [ ] **Deployment**
  - [ ] Website is deployed via Render.
- [x] **Embedded Movie Trailers**
  - [x] Within the popup displaying a movie's details, users can play the movie trailer.
- [x] **Watched Checkbox**
  - [x] For each movie displayed, users can mark the movie as watched.
- [x] **Favorite Button**
  - [x] For each movie displayed, users can favorite the movie.
- [x] **Sidebar**
  - [x] Users can open a sidebar
  - [x] The sidebar displays the user's favorited and watched movies

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

`ADD_EMBEDDED_CODE_HERE`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Because of the out-of-order timeline of the lecture content and the assignment's directions, there were moments when I struggled to pick up some concepts. In particular, the concept of passing props through the component structure was difficult to understand, but after walking through documentation (and example code in hindsight), I was able to understand what I needed to do.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

I would have restructured the logic behind my header and side-bar buttons. I felt like I added unnecessary passing of props in order to maintain the unoptimized structure that I started out with. I also would have liked to better define factory methods for generating response jsons and rendering components. This would have made my code more readable and clean. Finally, I would have used debounce to allow me to change my search bar event handler to track onChange. I would then be able to render movies as keystrokes were entered without making too many api calls.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

While I created a factory method for generating jsons within the App.jsx files, one of my classmates defined his own class that he could then call all throughout his project without passing props. I found it a really elegant solution. I would have also liked to implement an icon library to use more visually appealing icons. My biggest room for improvement, however, is that I was not able to make the code as robust as I had hoped. There are still some specific sequences of button presses that result in undefined behavior. Next time, I would definitely put more time into designing the structure of the entire project initially, rather than follow through the directions step-by-step. On the plus side, I liked how I was able to use the discover api call to filter by both genres and movie traits rather than only one or the other.

### Open-source libraries used

N/A

### Shout out

Eric was the one who used the API class to make API calls that I would like to emulate.
