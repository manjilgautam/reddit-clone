### Reddit-clone

###Task list

- [x] Generate a Vue App
   + Removed un-necessary components 
- [x] Create a Firebase Project
- [x] Store the user info in Db and Set-up the Authentication
- [x] Helping documents while adding Firebase Auth:
    + (https://firebase.google.com/docs/auth/web/google-signin)
    + (https://firebase.google.com/docs/auth/web/manage-users)
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
    - [ ] 
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2
