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
            "url('https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/417784140_865329908925475_6221130497296561468_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6WpasJY11QIQ7kNvgGOjwGZ&_nc_oc=AdmVbDXan0A8wnBbNvA2Z9bd8P-mSz8SiY9vTRExhuUqaobRXMdwKa7MKTWfgu5t4Inz1hH56qI0Loy0Ld4KHZ1X&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=lYIZKQ18hmV1O6U356VV5g&oh=00_AYG9mY8ScaM71ryqQxoOYlBoD1C6IaxeaHfom0ibNzMJ1w&oe=67ED9FDA')",
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
            "url('https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/417688145_865329905592142_3167249267525267770_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VuGEO5Llx90Q7kNvgHIPIH5&_nc_oc=AdmVcD3oJFOSoP35We-9TFkN3cO3s1HlLxb7O5Wg8ydzq0pOlBjZrcHFSbKv9SLLF80Qv1obVtmtFpYTu0lLCEWE&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=Pe4eWliQL33LMksw9RL3AA&oh=00_AYGTRBBPuAyXO_f9i7k_L9h6ZR2zhMYIZbLDWoiu_TaTdA&oe=67EDA8F6')",
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
            "url('https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/156474039_1065461507198065_3662806743852533829_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j1CEjMMsdngQ7kNvgEhRlo5&_nc_oc=Adm1FMLgedi3qG2iXx2BIMmE6SrSotuU0F4pDurk3xr33V0-bDXOW-sTQT-O25nq2fiH94Jds6-9_wQnozj5iGQN&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=kdCgAOZokW9cGXPMSWu7TQ&oh=00_AYGLz-MDf1JYapKUHWETvEPo-Zkhst9oQ7L_dW1Lt8dM1A&oe=680F2398')",
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
