<template>
  <ToDoContainer v-for="user in users" :key="user.userId" :lists="user.lists" />
</template>

<script>
import ToDoContainer from "./components/Todo/ToDoContainer";
export default {
  components: { ToDoContainer },
  data() {
    return {
      users: [
        {
          userId: 1,
          userEmail: "admin@admin.ru",
          password: "54321",
          lists: [
            {
              listId: 1,
              listName: "First List",
              toDos: [
                {
                  toDoId: 1,
                  toDo: "Wasssssuup ",
                  completed: false,
                },
                {
                  toDoId: 2,
                  toDo: "2nd todo 1st list",
                  completed: false,
                },
                {
                  toDoId: 3,
                  toDo: "3d todo 1st list",
                  completed: false,
                },
              ],
            },
            {
              listId: 2,
              listName: "Second List",
              toDos: [
                {
                  toDoId: 1,
                  toDo: "Wasssssuup 2",
                  completed: false,
                },
                {
                  toDoId: 2,
                  toDo: "2d todo 2st list",
                  completed: false,
                },
                {
                  toDoId: 3,
                  toDo: "3d todo 2st list",
                  completed: false,
                },
              ],
            },
          ],
        },
        // {
        //   userId: 2,
        //   userEmail: "222admin@admin.ru",
        //   password: "54322221",
        //   lists: [
        //     {
        //       listId: 1,
        //       listName: "First List",
        //       toDos: [
        //         {
        //           toDoId: 1,
        //           toDo: "Wasss222ssuup ",
        //           completed: false,
        //         },
        //         {
        //           toDoId: 2,
        //           toDo: "2nd 22 1st list",
        //           completed: false,
        //         },
        //         {
        //           toDoId: 3,
        //           toDo: "3d todo 1st list",
        //           completed: false,
        //         },
        //       ],
        //     },
        //     {
        //       listId: 2,
        //       listNAme: "Sec222ond List",
        //       toDos: [
        //         {
        //           toDoId: 1,
        //           toDo: "Wasssssuup 2",
        //           completed: false,
        //         },
        //         {
        //           toDoId: 2,
        //           toDo: "2d todo 2st list",
        //           completed: false,
        //         },
        //         {
        //           toDoId: 3,
        //           toDo: "3d todo 2st list",
        //           completed: false,
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
