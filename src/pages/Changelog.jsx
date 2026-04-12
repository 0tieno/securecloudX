import { Link } from "react-router-dom";
import { changelog } from "../data/changelogData";
import PageNav from "../components/PageNav";

export default function Changelog() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <PageNav
        subtitle="// changelog: track updates and improvements"
        command="root@securecloudx:~# ./changelog.sh"
        links={[
          { label: "./terms-of-use", path: "/terms-of-service" },
          { label: "./pricing", path: "/pricing" },
          { label: "./changelog", active: true },
        ]}
      />

      <div className="flex-1 flex flex-col items-center px-4 py-12">

        <div className="w-full max-w-2xl mx-auto px-2 sm:px-0">
          <div className="flex items-center justify-center mb-2 w-full max-w-xs sm:max-w-md mx-auto">
            <hr className="flex-grow border-t border-gray-700 mx-2" />
            <span className="text-2xl sm:text-3xl font-semibold text-center px-2">
              Changelog
            </span>
            <hr className="flex-grow border-t border-gray-700 mx-2" />
          </div>
          <h3 className="text-lg sm:text-xl max-w-md font-semibold text-center mb-12 mt-6 text-gray-100 mx-auto">
            With{" "}
            <span className="text-yellow-400">400+ monthly average users </span>
            as of {new Date().toLocaleDateString()}, we are always improving our
            content, adding new resources and adding features to enhance your
            learning experience.
          </h3>
          <div className="w-full max-w-2xl mx-auto mt-6 sm:mt-8 flex justify-center">
            <div className="relative flex flex-col">
              {/* Vertical line for the whole timeline, perfectly centered */}
              <div
                className="absolute top-0"
                style={{
                  left: "16px",
                  width: "2px",
                  height: "100%",
                  background: "#374151",
                  zIndex: 0,
                }}
              ></div>
              {changelog.map((item) => (
                <div
                  key={item.date}
                  className="flex flex-row items-center mb-6 sm:mb-8"
                >
                  {/* Timeline column, 32px wide */}
                  <div
                    className="relative flex flex-col items-center"
                    style={{ width: "32px" }}
                  >
                    {/* Dot, centered at 16px */}
                    <div
                      className="w-3 h-3 bg-gray-700 rounded-full border-2 border-gray-900 z-10"
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: 0,
                        transform: "translate(-50%, 0)",
                      }}
                    ></div>
                  </div>
                  {/* Date and description */}
                  <div className="flex flex-col sm:flex-row items-start w-full">
                    <div className="w-full sm:w-32 text-gray-400 text-xs sm:text-sm font-medium mb-1 sm:mb-0">
                      {item.date}
                    </div>
                    <div className="ml-0 sm:ml-4 text-gray-100 font-medium leading-snug text-sm sm:text-base">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Footer Links */}
          <div className="flex flex-col items-center mt-4 mb-2">
            <div className="flex gap-6 text-gray-400 text-sm mb-2">
              <Link to="/terms-of-service" className="hover:text-yellow-400">
                Terms of Use
              </Link>
            </div>
            <div className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} securecloudX.guide - Your
              ultimate cloud security guide
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
