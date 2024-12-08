function HomePage() {
    const cars = [
        { id: 1, name: 'Tesla Model 3', price: 100 },
        { id: 2, name: 'BMW 5 Series', price: 150 },
    ];
 
    return (
        <div>
            <h1 className="text-2xl font-bold">Available Cars</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {cars.map((car) => (
                    <div key={car.id} className="border p-4 rounded">
                        <h2 className="text-xl">{car.name}</h2>
                        <p>${car.price}/day</p>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                            Rent Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
 }
 
 export default HomePage;