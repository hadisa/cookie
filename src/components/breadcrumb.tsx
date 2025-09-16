import { Link, useLocation } from "react-router-dom";

const titleMap: Record<string, string> = {
  about: "About",
  contact: "Contact",
  categories: "Categories",
};

const toTitle = (segment: string) => {
  if (titleMap[segment]) return titleMap[segment];
  // fallback: replace dashes with spaces and title-case
  return segment
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname; // e.g. /categories/cookies

  // Build segments excluding the leading empty string from split('/') for the leading slash
  const segments = pathname.split("/").filter(Boolean);

  // Build crumbs with cumulative paths
  const crumbs = segments.map((seg, idx) => {
    const path = "/" + segments.slice(0, idx + 1).join("/");
    return { label: toTitle(seg), path };
  });

  return (
    <div className="bg-primary-50 py-4 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              {segments.length === 0 ? (
                <span className="text-primary-800 dark:text-white">Home</span>
              ) : (
                <Link
                  to="/"
                  className="text-primary-600 hover:text-secondary dark:text-white"
                >
                  Home
                </Link>
              )}
            </li>
            {crumbs.map((crumb, idx) => (
              <li key={crumb.path} className="flex items-center">
                <span className="text-primary-400 mx-2">/</span>
                {idx === crumbs.length - 1 ? (
                  <span className="text-primary-800   dark:text-white">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="text-primary-600 hover:text-secondary dark:text-white"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
