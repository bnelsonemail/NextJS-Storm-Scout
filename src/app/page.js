import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
        <h1 className="text-4xl font-bold text-white">Weather App Home Page - Accurate and Local Weather Forecasts</h1>
                <div className="mt-4">
                    <h2 className="text-3xl font-bold text-white">Instructions:</h2>
                    <h3 className="text-xl font-bold text-white">
                        Enter the name of the city, the two (2) letter state code, the two (2) letter country code, and submit the form.
                    </h3>
                    <h3>Upon submission, the following data will be displayed for the city requested:</h3>
                    <div className="flex justify-center"> 
                        <ul className="list-disc text-left"> 
                            <li>Feels Like Temperature</li>
                            <li>Conditions</li>
                            <li>Humidity</li>
                            <li>Wind Speed</li>
                            <li>Pressure</li>
                        </ul>
                    </div>
                    
                    <div className="mt-4">
                        
                    </div>
                </div>
        </div>
      </main>
      <footer classNameName="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    
      </footer>
    </div>
  );
}
