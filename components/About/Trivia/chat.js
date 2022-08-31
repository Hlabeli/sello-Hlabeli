import React, { useState, useRef, useEffect } from "react";
import { VscHubot, VscClose } from "react-icons/vsc";
import Message from "./message";

import NestedDropDown from "./nested-dropdown";

const Chat = () => {
  //-------------------------------------------------------------------------//
  // States
  const [chatVisibility, setChatVisibility] = useState(false);
  const [messages, setMessages] = useState([
    {
      fromMe: true,
      body:
        "Hi again, here are some trivia about me. Select a question from the list below if you want😀",
    },
  ]);
  //-------------------------------------------------------------------------//

  //-------------------------------------------------------------------------//
  //Scrolling to bottom on message added to the stack
  const messagesEndRef = useRef(null);
  const chatTopRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView(true, {
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  //-------------------------------------------------------------------------//

  //-------------------------------------------------------------------------//
  //The main functionality (when a message is selected), do the following:
  const onMessageSelected = (question, answer) => {
    setMessages(() => {
      return [
        ...messages,
        {
          body: question,
          fromMe: false,
        },
        {
          body: answer,
          fromMe: true,
        },
      ];
    });
  };
  //-------------------------------------------------------------------------//

  //-------------------------------------------------------------------------//
  // UI
  return (
    <React.Fragment>
      {!chatVisibility && (
        <button
          className="fixed right-5 bottom-5 md:right-10 md:bottom-10  w-12 h-12 bg-black rounded-full border-2 border-white text-4xl text-white flex items-center justify-center"
          onClick={() => setChatVisibility(true)}
        >
          <VscHubot />
          <span className="sr-only">Open chat bot</span>
        </button>
      )}
      <div
        className={`fixed top-16 md:top-20 p-2 w-full h-full bg-black bg-opacity-70 md:h-auto md:bg-transparent md:w-2/3 lg:w-1/2 xl:w-1/3 right-0 ease-in-out transition-all duration-300 transform ${
          chatVisibility ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          ref={chatTopRef}
          className={`w-full bg-gray-100 dark:bg-eerie rounded-t-xl text-base relative`}
        >
          <div className="w-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white flex p-1 md:px-2 md:py-5 justify-between items-center rounded-t-md">
            <div className="text-lg ">
              <span>
                Trivia a
                <span className="text-2xl xs:text-xl font-bold">bo</span>u
                <span className="text-2xl xs:text-xl font-bold">t</span>
                <span> {"  "}me.</span>
              </span>
            </div>
            <button
              className="text-3xl w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-center items-center"
              onClick={() => setChatVisibility(false)}
            >
              <VscClose />
              <span className="sr-only">Close chat bot</span>
            </button>
          </div>

          <div
            id="chat-div"
            className="w-full h-80 md:h-96 xs:h-48 overflow-auto px-3 py-4 flex flex-col"
          >
            {messages.map((message, index) => {
              return (
                <Message
                  key={index}
                  fromMe={message.fromMe}
                  body={message.body}
                />
              );
            })}
            <div className="" ref={messagesEndRef}></div>
          </div>
        </div>
        <NestedDropDown onMessageSelected={onMessageSelected} />
      </div>
    </React.Fragment>
  );
};
export default Chat;
