import React from "react";

//  class based component is a normal js class
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http://dummy-photo.com"
      },
    };
    // console.log(this.props.name + "Child:First Constructur is called");
  }

  // Component did mount is used to make API calls
  // Why we use componentDidMount() only to make API calls ?
  // Bcoz we want to - quickly render my component > API call > get the data.
  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");

    // API Call
    const data = await fetch("https://api.github.com/users/kamlesh077");
    const json = await data.json();

    this.setState({
      userInfo: json,
    })

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;

    // console.log(this.props.name + "Child: Then Render is called");

    // returns some peice of jsx
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          Count Increase
        </button> */}
        <img className="logo" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @Kamlesh007</h4>
      </div>
    );
  }
}

export default UserClass;



/**
 * --- MOUNTING ---
 * 
 * Constructor (dummy data)
 * Render (dummy)
 *      <html Dummy>
 * Component Did Mount ()
 *      <API Call>
 *      <this.setState> -> State variable is updated
 * 
 * --- UPDATE 
 * 
 *      render(API data)
 *      < Html (new API data)>
 *      ComponentDidUpdate()
 * 
 */