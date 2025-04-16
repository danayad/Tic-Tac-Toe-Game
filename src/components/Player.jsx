import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(editing=>!editing);
    if (isEditing) {
        onChangeName(symbol, name);
    }
  }

    function handleNameChange(event) {
    setName(event.target.value);
    }
  let btnCaption = "Edit";
  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = (
      <input type="text" required value={name} onChange={handleNameChange}/>
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
