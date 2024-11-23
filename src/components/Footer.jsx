import logoWhite from "../assets/logo-white.png";

const Footer = () => {
  const socialMedia = [
    "tiktok",
    "instagram",
    "linkedin",
    "whatsapp",
    "youtube",
  ];

  const menu = ["Tim Kami", "Mitra Petani", "Tips & Berita Pertanian", "Karir"];

  return (
    <footer className="bg-[#0E9749] text-white py-10 px-8 font-sans mt-8">
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div className="col-span-2 leading-6" style={{ fontSize: "10px" }}>
          <img src={logoWhite} alt="logo-header" className="mb-6" />
          <p>
            Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet, Gedung
            Pakuwon Tower Lt 26 Unit J, Jakarta Selatan, DKI Jakarta 12870,
            Indonesia
          </p>
          <p>Email: info.eratani@eratani.co.id</p>
          <p>Telephone: +62 811 952 2577</p>

          <div className="flex space-x-4 mt-6">
            {socialMedia.map((item, i) => (
              <a key={i} href="!#" className="text-white hover:text-gray-300">
                <i className={`fab fa-${item} text-lg`} />
              </a>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div>
          <div className="flex items-center space-x-2">
            <i className="fa fa-globe" aria-hidden="true"></i>
            <span className="text-sm font-semibold cursor-pointer hover:underline hover:decoration-yellow-500 hover:decoration-2">
              IN
            </span>
            <span className="text-sm font-semibold cursor-pointer hover:underline hover:decoration-yellow-500 hover:decoration-2">
              EN
            </span>
          </div>
          <h2 className="text-sm mb-4 mt-6 font-semibold">Menu</h2>
          <ul className="space-y-2" style={{ fontSize: "10px" }}>
            {menu.map((item, i) => (
              <li key={i} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
