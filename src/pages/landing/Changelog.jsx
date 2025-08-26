const changelog = [
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
      <div className="w-full flex flex-col items-center justify-center mt-16">
          <h2 className="text-2xl font-semibold text-center mb-2 border-b border-gray-700 pb-1 w-64">
        Changelog
      </h2>
      <h3 className="text-xl max-w-xl font-semibold text-center mb-2 text-gray-100">
        We are always improving our content, adding new resources and adding
        features to enhance your learning experience.
      </h3>
      <div className="w-full max-w-2xl mx-auto mt-8">
        <div className="relative border-l border-gray-700 pl-8">
          {changelog.map((item, idx) => (
            <div key={item.date} className="flex items-start mb-8">
              <div className="absolute -left-2.5 mt-1 w-3 h-3 bg-gray-700 rounded-full border-2 border-gray-900"></div>
              <div className="w-32 text-gray-400 text-sm font-medium">
                {item.date}
              </div>
              <div className="ml-4 text-gray-100 font-medium leading-snug">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
