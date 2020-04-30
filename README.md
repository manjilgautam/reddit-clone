### Reddit-clone

### Task list

- [x] Generate a Vue App
  - Removed un-necessary components
- [x] Create a Firebase Project
- [x] Store the user info in Db and Set-up the Authentication
- [x] Helping documents while adding Firebase Auth:
  - (https://firebase.google.com/docs/auth/web/google-signin)
  - (https://firebase.google.com/docs/auth/web/manage-users)
    - Save user on Login in the Db
    - [x] Update Rules in the Firebase console as
      ```javascript
            rules_version = '2';
            service cloud.firestore {
              match /databases/{database}/documents {
                match /{document=**} {
                  allow read: if true;
                }
                match /users/{user_id} {
                allow write: if request.auth.uid == user_id;
                }
              }
            }
      ```
- [x] Created a subreddits collection and added following items in the collection:
  -general
  -javascript
  -pixel
  -funny 
- [x] Added Vuexfire https://github.com/posva/vuexfire/tree/firestore
     * [x] Added subreddits.js( store dir) file where connection to Firestore is made. 
     * [x] Added subreddits.vue for views and set-up the routing 
     * [x] Added subreddit.vue for individual post and set-up routing 
     * [x] Shows single sub-reddit
- [x] Added form for the Sub-reddits
- [x] Setup the sub-reddit db. 
    - Store the sub-reddit form's data in the Fire-store under Posts :elephant: table :fire:
    - Added rules in the Firebase console 
    ```javascript
       match /posts/{post_id} {
       allow write: if request.auth.uid == request.resource.data.user_id;
    ```   
  * [ ] GFM task list 3-3
- [ ] GFM task list 4
  - [ ] GFM task list 4-2
