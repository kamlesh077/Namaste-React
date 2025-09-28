import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* <User name={"Kamlesh Patel (function)"}/> */}
        <UserClass />
        {/* <UserClass name={"First (Class)"} location={"Pune Class"} /> */}
        {/* <UserClass name={"Second (Class)"} location={"Bihar"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       {/* <User name={"Kamlesh Patel (function)"}/> */}
//       <UserClass name={"Kamlesh Patel (Class)"} location={"Pune Class"}/>
//     </div>
//   );
// };

/**
 * - Parent Constructor
 * - Parent render
 *
 *    Render Phase
 *    - first Constructor
 *    - first Render
 *
 *    - second Constructor
 *    - second Render
 *
 *    Commit Phase
 *    < DOM UPDATED - IN SINGLE BATCH>
 *    - first ComponentDidMount
 *    - second ComponentDidMount
 *
 * - Parent ComponentDidMount
 *
 * Diagram
 * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */

export default About;
