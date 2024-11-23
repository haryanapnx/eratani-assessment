const Mission = () => {
  const missions = [
    "Membangun dan memajukan ekosistem pertanian dengan digitalisasi dan transparansi di setiap prosesnya.",
    "Menjadi platform dan mitra bagi petani dalam mendukung segala proses pertanian.",
    "Menjadi mitra bagi para kreditor, supplier, dan distributor guna meningkatkan kinerja rantai pasok di dunia pertanian.",
    "Berkolaborasi dengan badan usaha pangan guna meningkatkan ketahanan pangan nasional.",
    "Memberikan dampak sosial yang positif dan membangun bagi ekosistem pertanian di Indonesia.",
  ];
  return (
    <section className="p-4">
      <h2 className="text-green-700 font-bold text-2xl mt-4 mb-8 text-center">
        Misi Eratani
      </h2>
      <ul className="list-none">
        {missions.map((mission, index) => (
          <li key={index} className="flex items-start space-x-4 mt-4">
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full mt-1.5 p-1.5 mr-2"></div>
            <p className="text-gray-600 leading-6 text-xs">{mission}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Mission;
