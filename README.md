Meet App is an app where users can find events for specified cities. The app will use serverless functions to guarantee app remains responsive when offline. As a results, this app is able to handle large amounts of load on its server. Since the app events are dependent on where these events are being held, the serverless functions can easily integrate the geolocation service of the location of the user's interest as well as handling authentication with Google Calendar API. 

Feature 1: Filter Events by City
As a user, 
I should be able to filter events by the city I specify
So that I can see only the events of the city I chose

Given: The user is on events page
When: The user types the city of their choosing
Then: As they type their city, the search bar will filter out other cities until the city of their choosing is selected and only events in that specific city will be rendered. 

Feature 2: Show/Hide Event Details
As a user, 
I should be able to click on a button
So I can see the event’s details.

Given: The user is on the event details page. 
When: The user clicks a button for a specific function. 
Then: The event details section either expands or collapses, showing or hiding additional information about the events.

Feature 3: Specify Number of Events
As a user,
I should be able to specify number of events 
So that I can view a specific number of events on the page.

Given: The user is on the events listing page. 
When: The user inputs a specific number from a drop-down menu to see the number of events displayed. 
Then: The events listing page displays the specified number of event options.

Feature 4: Use the App When Offline
As a user,
I should be able to be lose internet connection while on app
So that I can still see previously viewed events and cached data.

Given: The user has accessed the app while on internet connection before 
When: The user loses internet connection. 
Then: The event app shows a message that the user is offline and only previously viewed events and cached data are still accessible.

 Feature 5: Add an App Shortcut to the Home Screen
As a user,
I should be able to have an option to add the app as a shortcut
So that the app icon appears on the home screen.

Given: The user has installed the app on their phone. 
When: The user clicks add shortcut button to home screen 
Then: The app displays on the home screen.

Feature 6: Display Charts Visualizing Event Details
As a user,
I should be able to click on a button
That shows the event details on a chart.

Given: The user is viewing the event list page. 
When: The user taps on a ‘View Chart’ button.
Then: A chart appears showing details of the event

