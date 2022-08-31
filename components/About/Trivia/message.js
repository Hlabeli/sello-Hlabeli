import Image from "next/image";
const Message = ({ fromMe, body }) => {
  return (
    <div
      className={`relative mb-2  w-4/5 max-w-xl flex ${
        fromMe ? "self-start" : "self-end justify-end"
      }`}
    >
      {fromMe && (
        <div className="w-8 h-8 flex-shrink-0 rounded-full mr-2 border-2 border-gray-800 dark:border-white relative">
          <Image
            src="/profile.jpeg"
            alt="profile image in chat"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      )}

      <div
        className={`${
          fromMe
            ? "bg-white text-black dark:bg-gray-800 dark:text-white"
            : "bg-blue-300 text:blue-700 dark:bg-blue-700 dark:text-blue-100"
        } p-2 rounded-md text-md`}
      >
        {body}
      </div>
    </div>
  );
};
export default Message;
