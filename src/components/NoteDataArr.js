import { uid } from "uid";
export const NoteDataArr = [
    {
      id: new uid(),
      title: "This is one",
      dir: "Main",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, ",
      dueDate: new Date().toISOString(),
      completed: false,
      important: 2,
      updateTime: new Date().toISOString(),
    },
    {
      id: new uid(),
      title: "This is two",
      dir: "Main",
      description: "Testing purpose",
      dueDate: new Date().toISOString(),
      completed: false,
      important: 3,
      updateTime: new Date().toISOString(),
    },
    {
      id: new uid(),
      title: "This is three",
      dir: "Job",
      description: "Testing purpose",
      dueDate: new Date().toISOString(),
      completed: true,
      important: 1,
      updateTime: new Date().toISOString(),
    },
    {
      id: new uid(),
      title: "This is four",
      dir: "Study",
      description: "Testing purpose",
      dueDate: new Date().toISOString(),
      completed: false,
      important: 3,
      updateTime: new Date().toISOString(),
    },
    {
      id: new uid(),
      title: "This is five",
      dir: "Main",
      description: "Testing purpose",
      dueDate: new Date().toISOString(),
      completed: true,
      important: 2,
      updateTime: new Date().toISOString(),
    }
  ];
  