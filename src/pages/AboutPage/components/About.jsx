import img2 from "../../../assets/img2.png";

const About = () => {
  return (
    <section className="px-4">
      <h2 className="text-green-700 font-bold text-2xl my-10 text-center">
        Tentang Kami
      </h2>
      <img src={img2} alt="EraTani-2" className="w-full h-auto" />
      <div className="text-gray-600 leading-6 text-justify mt-8 text-xs">
        <p>
          Eratani adalah perusahaan Agri-tech yang didirikan oleh anak bangsa.
          Berangkat dari mimpi dan semangat yang besar, Eratani memiliki misi
          untuk menyejahterakan petani nusantara dengan mempermudah jalannya
          proses pertanian dari hulu sampai hilir.
        </p>
        <br />
        <p>
          Melalui digitalisasi proses hulu (pendanaan petani, pengelolaan rantai
          pasokan) hingga proses hilir (distribusi & penyaluran hasil panen),
          Eratani berfokus membangun ekosistem pertanian yang kuat dan berusaha
          memberikan kemudahan akses kepada petani dengan teknologi untuk
          meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.
        </p>
      </div>
    </section>
  );
};

export default About;
