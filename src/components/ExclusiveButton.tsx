import { Modal } from "./Modal";
import React, { useState } from "react";

export const ExclusiveButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const correctAnswer = "Polisa";

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setShowMessage(true);
    } else {
      alert("Wrong!");
      setAnswer("");
    }
  };
  const closeModal = () => {
    setIsOpen(false);
    setShowMessage(false);
    setAnswer("");
  };

  return (
    <>
      <button
        className="absolute bottom-0 text-amber-50 m-4"
        onClick={handleButtonClick}
      >
        Special for Max
      </button>
      <div id="modal-exclusive-button" className={isOpen ? "block" : "hidden"}>
        <Modal
          onClose={closeModal}
          closeButtonTitle="X"
          children={
            <div>
              {showMessage ? (
                <>
                  <p className={"text-amber-500 z-0 m-8"}>
                    Congratulations! Now, a note about your all-time favorite
                    thing: hobby horsing! Before you go and gallop off into the
                    sunset, remember: every time you tease me about hobby
                    horsing, it can stir up more trouble than a startled
                    stallion. So, let's rein in the teasing and stick to hobbies
                    we actually enjoy, shall we?
                  </p>
                  <button
                    onClick={closeModal}
                    className={"text-white z-0 m-8 text-center w-full"}
                  >
                    UNDERSTOOD!
                  </button>
                </>
              ) : (
                <div className="m-8 text-center w-full">
                  <h2 className="text-white m-2 text-center w-full font-bold">
                    Check Question
                  </h2>
                  <p className="text-white m-2 text-center w-full">
                    What is the nickname you gave me?
                  </p>
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <button
                    onClick={handleSubmit}
                    className={"text-amber-500 ml-4 mt-4"}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          }
        />
      </div>
    </>
  );
};
