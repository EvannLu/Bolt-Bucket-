# WEB103 Project 4 - *Bolt Bucket 🏎️*

Submitted by: **Evan Lu**

About this web app: **Bolt Bucket is a small configurator web app where users create fully customized cars by selecting exterior color, interior, roof and wheel options. The UI updates visuals and the total price dynamically as options change, validates incompatible option combinations, and persists created cars to a PostgreSQL backend so users can view, edit and delete saved builds. The app is implemented with a React frontend, a Node/Express API, and PostgreSQL on Render (see the Render dashboard and example SQL output in this repo’s walkthrough). Use the app to prototype product configurators or to demo a full-stack CRUD workflow tied to dynamic client-side behavior.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

- [X] **The web app uses React to display data from the API.**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomItem` table.**
  - [X]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [X]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [X] **Users can view **multiple** features of the `CustomItem` (e.g. car) they can customize, (e.g. wheels, exterior, etc.)**
- [X] **Each customizable feature has multiple options to choose from (e.g. exterior could be red, blue, black, etc.)**
- [X] **On selecting each option, the displayed visual icon for the `CustomItem` updates to match the option the user chose.**
- [X] **The price of the `CustomItem` (e.g. car) changes dynamically as different options are selected *OR* The app displays the total price of all features.**
- [X] **The visual interface changes in response to at least one customizable feature.**
- [X] **The user can submit their choices to save the item to the list of created `CustomItem`s.**
- [X] **If a user submits a feature combo that is impossible, they should receive an appropriate error message and the item should not be saved to the database.**
- [X] **Users can view a list of all submitted `CustomItem`s.**
- [X] **Users can edit a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
- [X] **Users can delete a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
- [X] **Users can update or delete `CustomItem`s that have been created from the detail page.**


The following **optional** features are implemented:

- [X] Selecting particular options prevents incompatible options from being selected even before form submission

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='boltbucket.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ... 👉🏿 MacOS bulit-in screen recorder + ezgif.com (video to gif converter)

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

## License

Copyright [2025] [Evan Lu]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
