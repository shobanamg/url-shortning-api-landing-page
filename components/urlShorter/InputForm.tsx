import { useState } from 'react';

import Button from '@/components/Button';
import { cn } from '@/lib/cn';
import { isValidUrl, shortenUrl } from '@/utils/utils';

type InputFormProps = {
  setUrlList: React.Dispatch<React.SetStateAction<Url[]>>;
};

const InputForm = ({ setUrlList }: InputFormProps) => {
  const [error, setError] = useState('');
  const [inputUrl, setInputUrl] = useState('');

  const updateUrlList = (newUrlObj: Url) => {
    setUrlList((prev) => {
      const newUrlList = [...prev, newUrlObj];
      localStorage.setItem('urls', JSON.stringify(newUrlList));
      return newUrlList;
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!inputUrl) {
      setError('Please add a link');
      return;
    }
    if (!isValidUrl(inputUrl)) {
      setError('Please enter a valid url');
      return;
    }

    try {
      const shortenedUrlResult = await shortenUrl(inputUrl);

      updateUrlList({
        long: inputUrl,
        short: `https://1pt.co/${shortenedUrlResult.short}`,
        copied: false,
      });

      setInputUrl('');
      setError('');
      // eslint-disable-next-line @typescript-eslint/no-shadow
    } catch (error) {
      setError('Failed to shorten the link');
    }
  };

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value);
    setError('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-[5.2rem] flex flex-col gap-6 rounded-xl bg-dark-violet bg-shorten-mobile bg-right-top bg-no-repeat p-6 text-white lg:-mt-28 lg:flex-row lg:items-center lg:bg-shorten-desktop lg:bg-cover lg:px-[4.15rem] lg:py-[3.25rem]"
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="urlInput" className="sr-only">
        Shorten a link here...
      </label>
      <input
        type="text"
        id="urlInput"
        value={inputUrl}
        onChange={handleUserInput}
        className={cn(
          'w-full rounded-xl px-4 py-2.5 tracking-wider text-slate-700 placeholder:text-base lg:px-8 lg:py-[1.125rem] lg:placeholder:text-lg',
          error && 'ring-4 ring-secondary-red'
        )}
        placeholder="Shorten a link here..."
        aria-required="true"
      />
      <Button
        type="submit"
        className="w-full rounded-xl py-2.5 hover:scale-105 lg:w-1/4 lg:py-[1.15rem]"
      >
        Shorten It!
      </Button>
      {error && (
        <p
          className="absolute -top-6 left-8 italic text-secondary-red lg:left-16 lg:top-[7.5rem]"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </form>
  );
};
export default InputForm;
