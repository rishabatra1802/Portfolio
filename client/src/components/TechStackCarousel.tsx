const techItems = [
  "Python", "C", "C++", "Bash", "Nmap", "Burp Suite", "Metasploit", 
  "Nessus", "Hydra", "Wireshark", "KAPE", "Autopsy", "Volatility", 
  "Kali Linux", "Linux", "Git/GitHub", "VS Code", "Jupyter", "TheHive",
  "Velociraptor", "OSINT", "Redline", "DirBuster"
];

export default function TechStackCarousel() {
  const duplicatedItems = [...techItems, ...techItems];

  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
      <div className="relative h-24 bg-[#c4e64e] transform -skew-y-2 origin-top-left">
        <div className="flex items-center h-full transform skew-y-2">
          <div className="flex animate-scroll">
            {duplicatedItems.map((item, index) => (
              <span
                key={`item-${index}`}
                className="px-6 text-sm sm:text-base font-medium text-black whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
