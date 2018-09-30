# User-dash
User-dash is a web application that visualizes random data fetched from https://randomuser.me/.
Visit the [preview page](https://user-dash.firebaseapp.com/) to interact with it and see how it works!

# Technology Stack

`AngularJS + Webpack + Node.js + MongoDB + Highcharts + Firebase + Heroku`

# Main features

1. Refresh every 10s, display the data in charts and store the fetched data into MongoDB
![Data Visualization](https://raw.githubusercontent.com/ambitiousbird/User-dash/master/img/RD1.png)

2. Data can be saved manualy by cliking the 'Save' button, saved data is displayed in the 'saved data' subpage, and can be displayed into charts upon requests.
![Saved Data List](https://raw.githubusercontent.com/ambitiousbird/User-dash/master/img/RD2.png)

## Minor features
1. Same data cannot be saved twice to prevent data duplication
![prevent duplication](https://raw.githubusercontent.com/ambitiousbird/User-dash/master/img/prevent-duplication.png)

2. Saved data item can be deleted.

![deletable item](https://raw.githubusercontent.com/ambitiousbird/User-dash/master/img/delete.png)
