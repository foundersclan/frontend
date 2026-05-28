import { Link } from "react-router-dom";

export function Footer() {
  const footerLinks = {
    "Community": [
      { name: "About", path: "/about" },
      { name: "Pricing", path: "/pricing" },
      { name: "Apply", path: "/apply" }
    ],
    "Resources": [
      { name: "Blog", path: "#" },
      { name: "Events", path: "#" },
      { name: "Support", path: "#" }
    ],
    "Legal": [
      { name: "Privacy", path: "#" },
      { name: "Terms", path: "#" },
      { name: "Code of Conduct", path: "#" }
    ]
  };

  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-white tracking-wider font-semibold">FOUNDERS</span>
              <span className="text-[#d4a574] tracking-wider font-semibold">CLAN</span>
            </Link>
            <p className="text-gray-400 text-sm">
              A community built by founders, for founders. Give first, grow together.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-[#d4a574] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Founders Clan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#d4a574] transition-colors text-sm">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-[#d4a574] transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-[#d4a574] transition-colors text-sm">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
