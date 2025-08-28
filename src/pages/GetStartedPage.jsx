import React from "react";
import { useNavigate } from "react-router-dom";

export default function GetStartedPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* <h1 className="text-3xl font-bold mb-8">Choose Your Path</h1> */}
      <div className="flex flex-col gap-6 w-64">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow"
          onClick={() => navigate("/home")}
        >
          Engineering
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow"
          onClick={() => {}}
        >
          Pentesting - coming soon
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg shadow"
          onClick={() => {}}
        >
          OpenSource Blogs - coming soon
        </button>
      </div>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-white bg-opacity-90 py-4 border-t border-gray-200 flex justify-center items-center z-50">
        <div className="flex flex-row items-center justify-center w-full max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-start mr-8">
            <div className="font-semibold text-gray-800 text-lg mb-1">
              Master cloud security. Build secure systems.
            </div>
            <div className="text-gray-600">securecloudX</div>
            <a
              href="mailto:conradakunga@gmail.com"
              className="text-blue-600 hover:underline text-sm"
            >
              securecloudx.learn@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-start mr-8">
            <div className="flex items-center mb-1">
              <span className="mr-2 text-gray-600">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="inline-block"
                >
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.646.349-1.088.635-1.34-2.221-.253-4.555-1.112-4.555-4.945 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.688-4.566 4.937.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C17.138 18.162 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                </svg>
              </span>
              <a
                href="http://github.com/securecloudx"
                className="text-blue-600 hover:underline text-sm"
              >
                securecloudx
              </a>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="inline-block"
                >
                  <path d="M20 3.924c-.735.326-1.524.547-2.353.646a4.118 4.118 0 001.804-2.27c-.793.47-1.672.81-2.606.995A4.107 4.107 0 009.847 7.03c-3.417-.172-6.444-1.81-8.468-4.297a4.07 4.07 0 00-.555 2.067c0 1.426.726 2.683 1.83 3.422a4.093 4.093 0 01-1.86-.513v.052c0 1.993 1.417 3.656 3.3 4.036-.345.093-.708.143-1.083.143-.265 0-.52-.026-.77-.073.52 1.623 2.032 2.805 3.827 2.836A8.233 8.233 0 010 17.542a11.616 11.616 0 006.29 1.844c7.547 0 11.675-6.155 11.675-11.495 0-.175-.004-.349-.012-.522A8.18 8.18 0 0020 3.924z" />
                </svg>
              </span>
              <a
                href="https://x.com/securecloudX"
                className="text-blue-600 hover:underline text-sm"
              >
                securecloudX
              </a>
            </div>
          </div>
          <div className="flex-1 text-gray-700 text-base">
            securecloudX is built on the strong belief that with the right discipline, anyone can master cloud security — through practical, hands-on learning.
          </div>
        </div>
      </footer>
    </div>
  );
}
