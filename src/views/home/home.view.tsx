import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { BiMoon, BiSun } from 'react-icons/bi';
import { Button } from 'design-system/button';

const HomeView: React.FC = () => {
  return (
    <div className="py-8 px-20 [&>*]:font-sans">
      <header className=" flex flex-col items-center justify-center">
        <h1 className=" relative text-4xl font-bold mb-12  after:block after:w-full  after:ml-4  after:absolute after:bottom-1 after:-z-10  after:pt-4 after:-skew-x-12 after:bg-blue-400 after:opacity-70">
          BLOG TITLE
        </h1>
        <nav className="flex w-full border-solid border-blue-400 border-opacity-30 border-y-2">
          <Navigation />
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <Button
                i={2}
                title="Change theme"
                rfull
                onClick={() => toggleTheme(theme === `dark` ? `light` : `dark`)}
              >
                {theme === `light` ? (
                  <BiMoon className="text-2xl" />
                ) : (
                  <BiSun className="text-2xl" />
                )}
              </Button>
            )}
          </ThemeToggler>
        </nav>
      </header>
      <main>
        <section>
          <ArticlesTop />
        </section>
        <section>
          <ArticlesCenter />
        </section>
        <section>
          <ArticlesBottom />
        </section>
      </main>
    </div>
  );
};

function Navigation() {
  return (
    <ul className="flex gap-4 flex-1 items-center justify-center">
      <Link linkName={`Home`} />
      <Link linkName={`About`} />
      <Link linkName={`Services`} />
      <Link linkName={`Contact`} />
    </ul>
  );
}

function Link({ linkName }) {
  return (
    <li>
      <a
        className="hover:text-blue-400 font-semibold px-4 py-2 transition duration-300 ease-in-out"
        href="#"
      >
        {linkName}
      </a>
    </li>
  );
}

function ArticlesTop() {
  return (
    <a href="#" className="block">
      <div className="grid grid-cols-3 mt-16">
        <Hero
          imgSrc={`https://images.unsplash.com/photo-1704504414486-292cc121cd0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          title={`Lorem ipsum dolor sit amet, consectetur`}
          category={`CATEGORY`}
          className={`col-span-2`}
        />
        <Hero
          imgSrc={`https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          title={`Lorem ipsum dolor sit amet, consectetur`}
          category={`CATEGORY`}
          className={``}
        />
      </div>
    </a>
  );
}

function ArticlesCenter() {
  return (
    <div className="flex flex-col items-center justify-center pb-16 border-solid border-blue-400 border-opacity-30 border-b-2 mt-16">
      <h3 className=" relative my-4 font-bold text-2xl after:block after:w-full  after:ml-2  after:absolute after:bottom-1 after:-z-10  after:pt-3 after:-skew-x-12  after:bg-blue-400 after:opacity-70 mb-12">
        TRENDING
      </h3>
      <div className="grid w-full grid-cols-6 gap-8">
        <Card
          title={`Title`}
          imgSrc={`https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?q=80&w=949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />
        <Card
          title={`Title`}
          imgSrc={`https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />
        <Card
          title={`Title`}
          imgSrc={`https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />
        <Card
          title={`Title`}
          imgSrc={`https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />
        <Card
          title={`Title`}
          imgSrc={`https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?q=80&w=949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />
        <Card
          title={`Title`}
          imgSrc={`https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />
      </div>
    </div>
  );
}

function ArticlesBottom() {
  return (
    <div className="grid grid-cols-3 gap-8 mt-16">
      <BottomImg
        imgSrc={`https://images.unsplash.com/photo-1704531815335-dab68018e8a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
      />
      <BottomImg
        imgSrc={`https://images.unsplash.com/photo-1704512590737-94275b0242ae?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
      />
      <BottomImg
        imgSrc={`https://images.unsplash.com/photo-1704121682661-370aa488db3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
      />
    </div>
  );
}

function BottomImg({ imgSrc }) {
  return (
    <img className="max-w-full w-full h-60 object-cover" src={imgSrc} alt="#" />
  );
}

function Hero({ title, category, className, imgSrc }) {
  return (
    <div
      onClick={() => (window.location.href = `#`)}
      className={`relative group overflow-hidden  ${className}`}
    >
      <img
        className="transition-all duration-500 ease-in-out delay-150 max-w-full w-full h-96 object-cover group-hover:object-right-bottom group-hover:scale-125"
        src={imgSrc}
        alt="#"
      ></img>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col [&>*]:text-white justify-end mb-3 ml-6">
        <p className="font-medium">{category}</p>
        <h2 className="text-3xl font-bold my-2">{title}</h2>
      </div>
    </div>
  );
}

function Card({ title, imgSrc }) {
  return (
    <div className=" shadow-md rounded overflow-hidden">
      <img src={imgSrc} alt="#" className="w-full h-48 object-cover" />
      <div className="mt-4 text-center pb-4">
        <p className="text-gray-400">{title}</p>
        <button className="text-white mt-2 bg-blue-500  px-3 py-1 rounded-sm hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default HomeView;
