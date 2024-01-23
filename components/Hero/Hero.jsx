export default function Hero() {
  return (
    <div className="relative bg-white min-h-screen flex items-center justify-center py-32 md:py-0">
      <div>
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-y-0 gap-x-8 md:px-8">
          <div className="px-6 md:col-span-6 lg:px-0 xl:col-span-6 flex items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="lg:mt-0 text-4xl font-bold text-gray-900 sm:mt-10 sm:text-6xl">
                Hey there! I am a <span className="text-fourth">web</span>{" "}
                developer
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                On this page I will introduce myself to you with all my
                expertise, skills and interests. You will find my social links a
                bit more downwards.
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
          <div className="px-6 md:col-span-6 md:px-0 xl:col-span-6">
            <img
              className="aspect-[3/3] w-full bg-gray-50 object-cover rounded-lg"
              src="./FH_2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
