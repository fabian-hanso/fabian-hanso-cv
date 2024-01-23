export default function Hero() {
  return (
    <div className="relative bg-white ">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6 flex items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 lg:mt-0 text-4xl font-bold text-gray-900 sm:mt-10 sm:text-6xl">
              Hey there! <br />
              I'm a frontend developer
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              On this page I'll introduce myself to you with all my expertise,
              skills and interests. You'll find my social links a bit more
              downwards.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fourth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Learn more about me
              </a>
            </div>
          </div>
        </div>
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <img
            className="aspect-[3/3] w-full bg-gray-50 object-cover rounded-lg"
            src="./FH_2.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
