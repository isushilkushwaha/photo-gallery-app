import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl p-6">
        <h1 className="mb-8 text-center text-4xl font-bold">
          Photo Gallery
        </h1>
           
        <Gallery />
      </div>
    </div>
  );
}

export default App;