import ButtonGroup from "./components/buttongroup";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="w-screen  bg-background">
      <Navbar />
      <main className="mx-auto flex max-h-screen max-w-[1500px]">
        <div className="fixed  h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start hidden">
          <ButtonGroup />
        </div>
        <div className="max-w-2xl flex-grow overflow-hidden sm:ml-[73px] xl:ml-[370px] ">
          section2
        </div>
        <div className="ml-8 hidden space-y-5 py-1 lg:inline xl:w-[450px]"></div>
      </main>
      <div className="sm:hidden fixed bottom-0 left-0 w-screen mx-auto">
        <ButtonGroup />
      </div>
    </div>
  );
}

export default App;
