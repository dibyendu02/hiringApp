import React, { useState } from "react";
import { Heart } from "lucide-react";

const ValentineProposal = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const getYesButtonSize = () => {
    const baseSize = "text-xl";
    const sizes = [
      "text-2xl",
      "text-3xl",
      "text-4xl",
      "text-5xl",
      "text-6xl",
      "text-7xl",
      "text-8xl",
    ];
    return noCount >= sizes.length ? sizes[sizes.length - 1] : sizes[noCount];
  };

  const getNoButtonSize = () => {
    const sizes = [
      "text-xl",
      "text-lg",
      "text-base",
      "text-sm",
      "text-xs",
      "text-xs",
      "text-xs",
    ];
    return noCount >= sizes.length ? "text-xs" : sizes[noCount];
  };

  const getPleadingMessage = () => {
    const messages = [
      "Pretty please? 🥺",
      "Are you sure? 😢",
      "Don't break my heart! 💔",
      "I'll be the best Valentine ever! 🌹",
      "Please reconsider! 🙏",
      "You're making me sad... 😭",
      "Give love a chance! ❤️",
      "I promise to make you happy! ✨",
      "Just say yes! 🎀",
      "Please please please! 🥺",
    ];
    return messages[Math.min(noCount, messages.length - 1)];
  };

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
    setTimeout(() => setShowMessage(true), 500);
  };

  if (showMessage) {
    return (
      <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4 space-y-8 text-center">
        <div className="animate-bounce">
          <Heart className="w-20 h-20 text-red-500" fill="currentColor" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 animate-pulse">
          Yeeeeeah! I love you babe! ❤️
        </h1>
        <p className="text-2xl text-pink-500">
          You've made me the happiest person ever! 🥰
        </p>
        <div className="flex gap-4 mt-8">
          <Heart
            className="w-8 h-8 text-red-500 animate-bounce"
            fill="currentColor"
          />
          <Heart
            className="w-8 h-8 text-red-500 animate-bounce delay-100"
            fill="currentColor"
          />
          <Heart
            className="w-8 h-8 text-red-500 animate-bounce delay-200"
            fill="currentColor"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8">
          Would you like to be my Valentine? 🌹
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={handleYesClick}
            className={`${getYesButtonSize()} px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform hover:scale-110 transition-all shadow-lg font-bold`}
          >
            Yes 🥰
          </button>
          <button
            onClick={handleNoClick}
            style={{
              transform: `translate(${Math.sin(noCount) * 10}px, ${
                Math.cos(noCount) * 10
              }px)`,
            }}
            className={`${getNoButtonSize()} px-8 py-4 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition-all shadow-lg font-bold`}
          >
            No 😢
          </button>
        </div>
        {noCount > 0 && (
          <p className="text-pink-500 font-medium text-xl animate-bounce mt-4">
            {getPleadingMessage()}
          </p>
        )}
      </div>
      <div className="fixed top-4 right-4">
        <Heart
          className="w-8 h-8 text-pink-500 animate-bounce"
          fill="currentColor"
        />
      </div>
      <div className="fixed bottom-4 left-4">
        <Heart
          className="w-8 h-8 text-pink-500 animate-bounce"
          fill="currentColor"
        />
      </div>
      {noCount > 2 && (
        <div className="fixed top-4 left-4">
          <Heart
            className="w-8 h-8 text-pink-500 animate-bounce delay-100"
            fill="currentColor"
          />
        </div>
      )}
      {noCount > 4 && (
        <div className="fixed bottom-4 right-4">
          <Heart
            className="w-8 h-8 text-pink-500 animate-bounce delay-200"
            fill="currentColor"
          />
        </div>
      )}
    </div>
  );
};

export default ValentineProposal;
