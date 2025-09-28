import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  // Bcoz we want to - quickly render my component > API call > get the data.
  useEffect(() => {
    // API Calls
  }, []);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Pune</h3>
      <h4>Contact: @Kamlesh007</h4>
    </div>
  );
};

export default User;
