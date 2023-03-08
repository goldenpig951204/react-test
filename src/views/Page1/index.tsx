import { useState } from "react";
import useTheme from "../../hooks/useTheme";
import "./index.css";
import { useHistory } from "./useHistory";


const Page1 = () => {
  const { mode, updateTheme } = useTheme();
  const [message, setMessage] = useState<string>("");
  const [btnIds, setBtnIds] = useState<number>(1);
  const { histories, appendHistory } = useHistory();

  const revertMode = () => {
    if (mode === "light") return "Dark";
    else return "Light";
  }

  const changeTheme = (mode: string) => {
    appendHistory(`Theme was set to ${mode}`);
    updateTheme(mode);
  }

  const sendMessage = () => {
    appendHistory(`Message Sent: ${message}`);
    setMessage("");
  }

  const handleAddBtn = () => {
    appendHistory(`Button ${btnIds} added`);
    setBtnIds(btnIds + 1);
  }

  const handleBtn = (id: number) => {
    appendHistory(`Button ${id} clicked`);
  }

  const AddButton = () => {
    return (
      <div className="mg-10">
        <button onClick={handleAddBtn}>Add Button {btnIds}</button>
      </div>
    )
  }

  const ButtonList = () => {
    return (
      <>
        {
          Array.from(new Array(btnIds - 1)).map((btn, idx) =>
            <div className="mg-10" key={idx}>
              <button onClick={() => handleBtn(idx + 1)}>Button {idx + 1}</button>
            </div>
          )
        }
      </>
    )
  }

  const HistoriyList = () => {
    return (
      <>
        {
          histories.map((history, idx) => (
            <p key={idx}>{history.createdAt} - {history.message}</p>
          ))
        }
      </>
    )
  }


  return (
    <div className="page-content">
      <div className="flex">
        <div className="left-content flex-1">
          <div className="mg-10">
            <button onClick={() => changeTheme(revertMode().toLowerCase())}>Set {revertMode()} Theme</button>
          </div>
          <div className="flex align-items-center">
            <input
              type="text"
              className="form-control mg-10"
              placeholder="Please enter a message."
              value={message}
              onChange={ev => setMessage(ev.target.value)}
            />
            <button onClick={sendMessage} disabled={message === ""}>Send message</button>
          </div>
          <AddButton />
          <ButtonList />
        </div>

        <div className="right-content flex-1">
          <h1>Actions</h1>
          <HistoriyList />
        </div>
      </div>
    </div>
  )
}

export default Page1;