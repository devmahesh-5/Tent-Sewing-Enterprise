import React from 'react';

function TrekGuide() {
    return (
        <div className="py-10 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Free Trek Guide</h1>
            <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                    Welcome to our comprehensive trekking guide! Whether you are a beginner or a seasoned trekker, having the right information is crucial for a safe and enjoyable journey.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">Essential Gear Checklist</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>Sturdy Hiking Boots</li>
                    <li>Weather-appropriate Clothing (Layers)</li>
                    <li>Navigation Tools (Map, Compass, GPS)</li>
                    <li>First Aid Kit</li>
                    <li>Hydration System (Water Bottle/Bladder)</li>
                    <li>Headlamp or Flashlight</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">Safety Tips</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>Always inform someone about your trekking plans.</li>
                    <li>Check weather forecasts before you leave.</li>
                    <li>Stay on marked trails.</li>
                    <li>Carry enough food and water.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-600">Recommended Treks</h2>
                <p>
                    Explore local trails that offer breathtaking views and varying levels of difficulty. Check out our product section for gear rentals suitable for these treks!
                </p>

                <div className="mt-8 text-center">
                    <p className="mb-4 text-lg font-medium">Need personalized advice?</p>
                    <a
                        href="https://wa.me/9779812345678" // Replace with actual number if provided, using dummy for now
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                    >
                        Ask for Free Trek Guide (Person)
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TrekGuide;
