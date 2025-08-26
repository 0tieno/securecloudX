const changelog = [
  {
    date: "26 Aug, 2025",
    desc: "Added this landing page.",
  },
  {
    date: "22 Aug, 2025",
    desc: "Added consultation services due to user demand.",
  },
  { date: "12 Aug, 2025", desc: "Added more lab tasks on data security" },
  {
    date: "13 July, 2025",
    desc: "Mini-hackathon on git forensics. 34 participants.",
  },
  { date: "04 June, 2025", desc: "Introduced weekly challenge format" },
  {
    date: "13 May, 2025",
    desc: "New features and improvements based on user feedback.",
  },
  {
    date: "10 April, 2025",
    desc: "Officially launched the site to the public",
  },
  {
    date: "8 April, 2025",
    desc: "Prelaunced the platform via a community meetup call",
  },
];

export default function Changelog() {
  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-0 mt-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2 border-b border-gray-700 pb-1 w-full max-w-xs sm:max-w-md mx-auto">
        Changelog
      </h2>
      <h3 className="text-lg sm:text-xl max-w-md font-semibold text-center mb-12 text-gray-100 mx-auto">
        We are always improving our content, adding new resources and adding
        features to enhance your learning experience.
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
          {changelog.map((item, idx) => (
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
    </div>
  );
}
