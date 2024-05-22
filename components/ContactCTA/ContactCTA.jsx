/* eslint-disable react/no-unescaped-entities */
export default function ContactCTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl pt-24 sm:pt-32 pb-24 sm:pb-32 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-lg sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's get in contact today!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            You can easily contact me via my LinkedIn profile or via e-mail by
            using one of the following call to actions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://www.linkedin.com/in/fabianhanso/"
              target="_blank"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              LinkedIn
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              E-Mail <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
