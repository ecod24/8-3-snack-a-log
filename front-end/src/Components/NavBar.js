import { useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/snacks/new`);
  }

  return (
    <header className=" body-font bg-indigo-600 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 text-white hover:text-gray-200 text-xl font-bold" href="/snacks">Snacks</a>
          <a className="mr-5 text-white hover:text-gray-200 text-xl font-bold" href="/snacks/project">Project</a>
          <a className="mr-5 text-white hover:text-gray-200 text-xl font-bold" href="/snacks/team">Team</a>
        </nav>

        <a href="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="mr-1 text-3xl font-extrabold text-white">Snack</span>
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 24 24" fill="none">
            <path d="M8.25 9C7.83579 9 7.5 9.33579 7.5 9.75V14.25C7.5 14.6642 7.83579 15 8.25 15H12.75C13.1642 15 13.5 14.6642 13.5 14.25V9.75C13.5 9.33579 13.1642 9 12.75 9H8.25ZM9 13.5V10.5H12V13.5H9Z" fill="#FFFFFF"/>
            <path d="M2 7.75C2 5.12665 4.12665 3 6.75 3H17.2501C19.8734 3 22.0001 5.12665 22.0001 7.75C22.0001 8.98811 21.5256 10.1164 20.7501 10.9613V18.75C20.7501 19.9926 19.7427 21 18.5001 21H5.5C4.25736 21 3.25 19.9926 3.25 18.75V10.9613C2.47451 10.1164 2 8.98811 2 7.75ZM6.75 4.5C4.95507 4.5 3.5 5.95507 3.5 7.75C3.5 8.67951 3.88924 9.51689 4.51572 10.1102C4.66528 10.2518 4.75 10.4488 4.75 10.6548V18.75C4.75 19.1642 5.08579 19.5 5.5 19.5H15.5C15.9142 19.5 16.25 19.1642 16.25 18.75V11.0577C16.25 10.8096 16.3726 10.5776 16.5776 10.4379C17.4378 9.85165 18 8.86637 18 7.75C18 5.95507 16.5449 4.5 14.75 4.5H6.75Z" fill="#FFFFFF"/>
          </svg>
          <span className="ml-1 text-3xl font-extrabold text-white">'Log</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button
            onClick={() => handleClick()}
            type="button"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 text-xl focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Create Snack
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}