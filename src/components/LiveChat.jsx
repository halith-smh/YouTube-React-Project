import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLiveChat } from "../store/slice/livechatSlice";
import randomChatMessage from "../helpers/randomChatMessage";
import randomName from "../helpers/randomName";

const Chat = ({ data }) => {
  return (
    <div className="my-2 px-2 text-sm">
      <i className="bi bi-person-circle mr-1"></i>{" "}
      <span className="font-bold">{data.name} </span>
      {data.text}
    </div>
  );
};

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.livechat.data);
  console.log(messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(addLiveChat({ name: randomName(), text: randomChatMessage() }));
    }, 950);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="comments mx-4  w-[50%] bg-gray-50 rounded-lg shadow-lg">
      <h1 className="font-bold p-2">
        <i className="bi bi-broadcast text-red-500 text-lg mr-1"></i> Live Chat
      </h1>
      <div className="h-[420px] chats overflow-y-auto flex flex-col-reverse">
        {messages.length > 0 &&
          messages.map((msg, index) => <Chat key={index} data={msg} />)}
      </div>
    </div>
  );
};

export default LiveChat;
