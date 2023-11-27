import { useState } from "react";
const Inputs = () => {
  const [editedData, setEditedData] = useState(new Map());

  const handleInputChange = (idIn, event) => {
    const { name, value } = event.target;
    const newData = streams.map((item) => {
      if (item.idStreamUdpIn === idIn) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setStream(newData);
    console.log(newData);

    const editedItem = newData.find((item) => item.idStreamUdpIn === idIn);
    console.log(editedItem);
    setEditedData((prevState) => new Map(prevState.set(idIn, editedItem)));
  };

  // const [streamForm, setStreamForm] = useState({
  //   idStreamUdpIn: "",
  //   idStreamUdpOut: "",
  //   idConvertion: 0,
  //   position: 0,
  //   bitrate: "",
  //   tipo: "",
  //   channelsAudio: 0,
  // });

  const [streams, setStream] = useState([
    {
      idStreamUdpIn: "1",
      idStreamUdpOut: "",
      idConvertion: 0,
      position: 0,
      bitrate: "",
      tipo: "",
      channelsAudio: 0,
    },
    {
      idStreamUdpIn: "11",
      idStreamUdpOut: "",
      idConvertion: 0,
      position: 0,
      bitrate: "",
      tipo: "",
      channelsAudio: 0,
    },
    {
      idStreamUdpIn: "12",
      idStreamUdpOut: "",
      idConvertion: 0,
      position: 0,
      bitrate: "",
      tipo: "",
      channelsAudio: 0,
    },
  ]);

  const handleForm = () => {
    const e = Object.fromEntries(editedData);
    const values = Object.values(e);
    console.log([...values]);
  };
  return (
    <>
      <form>
        {streams ? (
          streams.map((stream, i) => (
            <section key={i} className="grid grid-cols-4 border border-red-400">
              {stream.idStreamUdpIn}
              <input
                type="text"
                name="idStreamUdpOut"
                placeholder="StreamOut"
                onChange={(event) =>
                  handleInputChange(stream.idStreamUdpIn, event)
                }
              />
              <input
                type="text"
                name="bitrate"
                placeholder="Bitrate"
                onChange={(event) =>
                  handleInputChange(stream.idStreamUdpIn, event)
                }
              />
              <button type="button">Trash</button>
            </section>
          ))
        ) : (
          <></>
        )}
        <button type="button" onClick={handleForm}>
          create convertion
        </button>
      </form>
    </>
  );
};

export default Inputs;
