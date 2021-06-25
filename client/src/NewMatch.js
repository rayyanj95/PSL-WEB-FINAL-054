import React from "react";

const AddMatch = ({
  title,
  team1,
  team2,
  city,
  handleSubmit,
  handleChange,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name={title}
          onChange={handleChange}
          placeholder="Enter Title of Match"
          value={title}
        />
        <input
          name={team1}
          onChange={handleChange}
          placeholder="Enter Team1"
          value={team1}
        />
        <input
          name={team2}
          onChange={handleChange}
          placeholder="Enter Team1"
          value={team2}
        />
        <input
          name={city}
          onChange={handleChange}
          placeholder="Enter City"
          value={city}
        />

        <button disabled={team1 === team2}>Add Match</button>
      </form>
    </div>
  );
};

export default AddMatch;