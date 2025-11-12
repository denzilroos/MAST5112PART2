Final POE Change log

1. Added deleting items function :
I added a function that removes a menu item by pressing a 'remove' button.
The function removes the item by its unique id and updates the menu shown on the home screen by using the menucontext file to link the information between tabs.

2. Added average price to the main screen:
I added a function to filter the menu items and sort them by course and then calculate the average price of items per course. I used a for loop to cycle through the different courses and add the price to a 'averages' variable which is used to calculate the total average amount in the 'total' variable.
I added text elements to display the different courses and their average prices by using the 'averagebycourse' function. 

3. Added menu courses filter screen:
I added three buttons to the menu items screen for each course. I added a function to filter and sort the menu items into their different courses so that when a button is pressed it will display a list of menu items for the corresponding course.

4. Added image header and image for background of home screen:
I created a header image for the main home screen and added it to the top of the screen. I downloaded a stock image to use for the background of the main home screen from 'Photo by Lukas: https://www.pexels.com/photo/sliced-bread-on-brown-wooden-board-349610/' 

5. Updated readme file, cleaned up code and added comments
I updated the readme file to include changes since part 2 of the POE. I cleaned up the code by removing any unused imports, variables or old code. I added comments to the code to indicate what different parts of the code does.