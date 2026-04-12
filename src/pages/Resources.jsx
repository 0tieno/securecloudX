import { useParams } from "react-router-dom";
import Content from "../components/Content";
import { Link } from "react-router-dom";
import { resourcesData } from "../data/resourcesData";
import InfoBox from "../components/InfoBox";

const Resources = () => {
  const { module } = useParams();
  const resource = resourcesData[Number(module)];

  return (
    <Content>
      {resource ? (
        <>
          <h2 className="text-3xl font-bold text-gray-400">Module {module}: {resource.topic} Resources 📚</h2>
          <p className="mt-2 text-gray-300">Explore the following resources to deepen your understanding:</p>

          {/* Resources Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full table-auto bg-gray-800 rounded-lg shadow-md">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-gray">Title</th>
                  <th className="px-6 py-3 text-left text-gray">Description</th>
                  <th className="px-6 py-3 text-left text-gray">Type of Content</th>
                </tr>
              </thead>
              <tbody>
                {resource.resources.map((res, index) => (
                  <tr key={index} className="border-b border-gray-600">
                    <td className="px-6 py-4 text-blue-400 hover:underline">
                      <a href={res.url} target="_blank" rel="noopener noreferrer">{res.title}</a>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{res.description}</td>
                    <td className="px-6 py-4 text-gray-300">{res.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <InfoBox color="yellow" title="💡 Security Starts with Understanding" className="mt-6">
            Always remember, you cannot secure what you do not understand. Make sure to grasp the
            architectural and core components of the cloud so that you can properly secure them.
          </InfoBox>

          <div className="mt-10 flex justify-between text-sm sm:text-base">
  <Link
    to={`/module${module}/task`}
    className="text-blue-400 hover:underline hover:text-blue-300"
  >
    ← Back to Lab
  </Link>

  {Number(module) < 7 && (
    <Link
      to={`/module${Number(module) + 1}`}
      className="text-blue-400 hover:underline hover:text-blue-300"
    >
      Next Module →
    </Link>
  )}

  {Number(module) === 7 && (
    <Link
      to="/explore"
      className="text-blue-400 hover:underline hover:text-blue-300"
    >
      🚀 Next Steps →
    </Link>
  )}
</div>


        </>
      ) : (
        <h2 className="text-3xl font-bold text-red-500">Resources not found for Module {module} ❌</h2>
      )}
    </Content>
  );
};

export default Resources;
