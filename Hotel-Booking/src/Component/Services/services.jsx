import React, { useEffect, useState } from "react";

function Services() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("/rooms.json");
        if (!response.ok) {
          throw new Error("Unable to load room services. Please try again later.");
        }
        const data = await response.json();
        setRooms(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <section className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-[0.3em] mb-2">Our Services</p>
          <h1 className="text-4xl font-bold text-slate-900">Hotel Rooms & Pricing</h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Browse our current room offerings with service details, occupancy, and price per night.
          </p>
        </div>

        {loading && (
          <div className="rounded-3xl bg-white p-8 shadow-lg text-center">
            <p className="text-slate-700">Loading room service details...</p>
          </div>
        )}

        {error && (
          <div className="rounded-3xl bg-red-50 border border-red-200 p-8 shadow-lg text-center">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid gap-8 md:grid-cols-3">
            {rooms.map((room) => (
              <div key={room.id} className="rounded-3xl bg-white p-8 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-slate-900">{room.name}</h2>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    ${room.price}/night
                  </span>
                </div>
                <p className="text-slate-600 mb-4">{room.description}</p>
                <p className="text-slate-500 text-sm mb-4">Occupancy: {room.occupancy}</p>
                <div className="space-y-2">
                  {room.amenities.map((amenity, index) => (
                    <p key={index} className="text-slate-600 text-sm">
                      • {amenity}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;
