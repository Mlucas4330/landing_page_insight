const Header = ({ scrollToForm }: { scrollToForm: () => void }) => {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center gap-2 md:gap-4">
          <button className="h-10 w-10 md:h-14 md:w-14 flex items-center justify-center hover:shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 rounded-full backdrop-blur-xs shadow-lg">
            <img
              src="icone_legnet.png"
              alt="Legnet"
              className="w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_10px_#c5ff00]"
            />
          </button>
          <button className="px-4 md:px-6 py-2 md:py-3 shadow-lg text-base md:text-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-xs rounded-full">
            Agile Insight
          </button>
        </div>
        <button
          onClick={scrollToForm}
          className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg transition-all duration-300 font-medium cursor-pointer bg-[#c5ff00] rounded-full hover:drop-shadow-[0_0_10px_#c5ff00] hover:scale-105"
        >
          Fale Conosco
        </button>
      </div>
    </header>
  );
}

export default Header;