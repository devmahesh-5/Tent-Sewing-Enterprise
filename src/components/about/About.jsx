import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/417784140_865329908925475_6221130497296561468_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Gu4_yDX31TkQ7kNvgHjsQA-&_nc_oc=Adi-HCdkFyoklL90DI5pKN-0y-TKlsR-x05O-wNhOzR0UtraaaceTA6AleQ-DTyqIe9H3bm5b9M36ouYpAdMbAjI&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=AHREUDYdLVTU3_T16dwO_qI&oh=00_AYBm_ETRZxYrmJQSfCP_V0moc2pWsThOkvTB1QPqywelQA&oe=679A591A')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Nepal Tent Sewing Enterprises!</h1>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Your trusted partner in high-quality tents, ensuring comfort and safety for
            every adventurer out there.
          </p>
          <Link to="/products">
          <button
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-white font-semibold py-2 px-6 rounded-lg shadow-lg"
          >
            Explore Tents
          </button>
          </Link>
        </div>
      </section>

      {/* Who We Are Section */}
      <section
        className="relative w-full min-h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/67206543_662635874147299_5469937006630928384_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=g-InxUAu1ikQ7kNvgFTdizZ&_nc_oc=AdiVwVT-sY4kDDc3jajn1JvAfeuUpA4jxOgBts_XzIXhNoA_qWuiWOWaKi1qISt1YfA8r0jxFKPxsqKnN8V4YRjN&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=AGqOaP-dD1KGWJjIr_4S1Hd&oh=00_AYBERP_E2YNPcpWeePn08BL-6f609vrwc0BT4FJGmzFU2w&oe=67BC15CD')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-6 py-12">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold">Nepal Tent Sewing Enterprises</span>, we specialize in
            providing high-quality tents designed for every adventurer. Our mission is to
            make your outdoor experiences unforgettable by ensuring you have reliable and
            innovative solutions tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="relative w-full min-h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/57284501_608535152890705_6151360836888690688_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cPAy5WGr9BIQ7kNvgEMl8u7&_nc_oc=AdgMdwsYDwc4zeI6S1OT9yj5zaGOfbNTOTgBrILKT6e4vR3-l06zRaYk8xl3slu9Q8LXA4DuF9k6P-evhNEYPw4E&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=A5Xw3o24KKtZF7Gf1hEuQuo&oh=00_AYD0gfN3TxMakLCDwWZDbAf0K0gbAaJTq1rigw-qGPfUMg&oe=67BBF094')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-5xl mx-auto text-center text-white px-6 py-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-lg leading-relaxed mb-4">
            We offer a wide range of tents designed to withstand diverse climates and
            terrains, ensuring that your adventures remain worry-free and enjoyable.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            From individual travelers to large groups, we cater to all your tent needs with
            precision and care, making your journey as seamless as possible.
          </p>
          <Link to="/achivements">
          <button
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-white font-semibold py-2 px-6 rounded-lg shadow-lg"
            n
          >
            Our Achievements
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
