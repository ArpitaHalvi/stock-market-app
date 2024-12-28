import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    username: "",
    dob: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="profile-section">
      <h2>Sign Up Now</h2>
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <div>
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              name="fullname"
              onChange={handleChange}
              value={user.fullname}
              placeholder="Your fullname"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={user.email}
              placeholder="Your email"
            />
          </div>
        </div>
        <div className="form-group">
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={user.username}
              placeholder="Your username"
            />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              value={user.dob}
            />
          </div>
        </div>
        <div className="form-group2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            placeholder="Your password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}
