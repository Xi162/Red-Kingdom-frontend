import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navLink = [
  {
    id: 1,
    name: "Latest",
    title: "Latest news from Arsenal United",
    href: "#",
    link: "latest",
  },
  {
    id: 2,
    name: "Shop",
    description: "Merchandise from Arsenal United",
    href: "#",
    link: "/shop",
  },
  {
    id: 3,
    name: "Fixtures",
    description: "Upcoming matches from Arsenal United",
    href: "#",
    link: "fixtures",
  },
  {
    id: 4,
    name: "Tickets",
    description: "Tickets to Arsenal United's matches",
    href: "#",
    link: "tickets",
  },
  {
    id: 5,
    name: "Teams",
    description: "Info about the Arsenal United's squad",
    href: "#",
    link: "teams",
  },
  {
    id: 6,
    name: "History",
    description: "History of Arsenal United",
    href: "#",
    link: "history",
  },
];

export default function Navbar({
  username = "Fred",
  userImage = "src/assets/images/user-image.png",
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-40">
      <div className="bg-mediumblack text-white font-medium font-title text-xl h-10 flex items-center">
        <img
          src={userImage}
          alt={`${username}'s avatar`}
          className="w-8 h-8 object-cover m-4 rounded-full shadow-sm shadow-gray-400"
        />
        Hi, {username}
      </div>
      <nav
        className="mx-auto flex items-center justify-between p-4 bg-primary"
        aria-label="Global"
      >
        {/* Page icon */}
        <div className="flex lg:flex-1">
          <NavLink href="#" className="-m-1.5" to="home">
            <span className="sr-only">Your Company</span>
            <img
              className="h-12 w-auto"
              src="src/assets/images/club_logo.png"
              alt="arsenal united logo"
            />
          </NavLink>
        </div>

        {/* side bar button for small devices */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Navbar for large devices */}
        <ul className="hidden lg:flex lg:gap-x-12 list-none pl-0">
          {navLink.map((item) => (
            <li key={item.id}>
              <NavLink
                href={item.href}
                className="text-lg font-semibold leading-6 text-white"
                to={item.link}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            href="#"
            className="text-lg font-semibold leading-6 text-gray-900"
            to={"login"}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>

      {/* Navbar for small devices */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        {/* <div className="fixed inset-0 z-50" /> */}
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink href="#" className="-m-1.5 p-1.5" to={"home"}>
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/src/assets/images/club_logo.png"
                alt="#"
              />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <ul className="space-y-2 py-6 list-none pl-0">
                {navLink.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base hover:text-lg font-semibold leading-7 text-gray-900 hover:bg-primary/85"
                      to={item.link}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="py-6">
                <NavLink
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  to="login"
                >
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
