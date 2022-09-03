# Zuddl_Assignment

### Trello clone assignment for Zuddl

<br>

1.  For creating stages, we can use the '+' button on the top=right of the board, which could prompt a form to enter the title of the category and create an empty tasks array.

        We could send a post request for adding a new section in the database. Something like

    ` axios.post('https://api.trello.com/section/add', newSection)`

    The data array would be something like:

    ```js
    [
      ...data,
      {
        id: newID,
        category: newCategoryName,
        tasks: [],
      },
    ];
    ```

    For editing the previous sections, we might add an edit button on the top-right of the section, which would prompt a form to edit the title of the category.
    Then, we can send a put request to update the category name in the database. Something like
    ` axios.put('https://api.trello.com/section/edit', updatedSection)`

    where updatedSection would be something like:

    ```js
    {
    id: sectionID,
    category: updatedCategoryName,
    }
    ```

<br>

<br>

2. For adding user comments on tasks:
   We would need to change the structure of our data and would have to add a new field `comments[]` in the tasks array. It could be something like this:

   ```js
   [
     {
       id: sectionID,
       category: categoryName,
       tasks: [
         {
           id: "7",
           title: "Make Zuddl the Best GEN-Z Startup",
           deadline: "",
           description: "Description 7",
           createdAt: "2022-01-01",
           updatedAt: "2022-01-01",
           comments: [
             {
               id: "1",
               author: "John Doe",
               comment: "This is a comment",
               createdAt: "2022-01-01",
               updatedAt: "2022-01-01",
             },
             {
               id: "2",
               author: "Jane Doe",
               comment: "This is another comment",
               createdAt: "2022-01-01",
               updatedAt: "2022-01-01",
             },
           ],
         },
       ],
     },
   ];
   ```

   We can add a comment button on the bottom-right of the task, which would prompt a form to add a comment. Then, we can send a post request to add a new comment in the database. Something like
   ` axios.post('https://api.trello.com/comment/add', newComment)`
   where newComment would be something like:

   ```js
   {
        taskId: taskID,
        comment:{
            id: newID,
            author: authorName,
            comment: commentContent,
            createdAt: date,
            updatedAt: date,
        }
   }
   ```

   > We could diplay the comments in a list below the task, with the author name and the comment content.

<br>

3. Error Handling:
   We can use the `try-catch` block to handle errors. We can also use the `error` object to display the error message to the user.
   We could also show **callouts** to the user, if the request is successful or not.
