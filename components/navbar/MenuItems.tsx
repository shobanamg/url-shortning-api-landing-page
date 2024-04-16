import Button from '@/components/Button';
import { menuLinks } from '@/constants';

const MenuItems = () => {
  return (
    <>
      <ul className="flex flex-col gap-7 border-b border-b-light-violet py-6 font-bold text-white lg:ml-6 lg:flex-row lg:items-center lg:gap-[2.1rem] lg:border-none lg:py-0 lg:text-grayish-violet">
        {menuLinks.map((link) => (
          <li key={link}>
            <button
              type="button"
              className="transition-colors hover:text-very-dark-violet"
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-7 pb-6 pt-10 lg:flex-row lg:gap-10 lg:py-0">
        <Button
          bgColor="bg-transparent"
          className="hover:text-very-dark-violet lg:text-sm lg:text-grayish-violet "
        >
          Login
        </Button>
        <Button className="w-full rounded-full py-2 lg:px-[1.6rem] lg:py-2.5 lg:text-sm">
          Sign Up
        </Button>
      </div>
    </>
  );
};
export default MenuItems;
