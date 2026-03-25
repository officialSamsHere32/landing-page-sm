import React from "react";

const Grid = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-3 gap-4">
  <div className="bg-blue-300 p-4">1</div>
  <div className="bg-blue-300 p-4">2</div>
  <div className="bg-blue-300 p-4">3</div>
  <div className="bg-blue-300 p-4">4</div>
  <div className="bg-blue-300 p-4">5</div>
  <div className="bg-blue-300 p-4">6</div>
</div> */}
      {/* <div className="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div> */}

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">A</div>
        <div>B</div>
      </div>

      {/* product card layout */}

      {/* <div className="max-w-[1200px] mx-auto px-6 py-10">
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    
    <div className="bg-white shadow rounded-lg p-4">
      <img src="/product.jpg" className="w-full h-40 object-cover rounded" />
      <h3 className="mt-3 font-semibold">Coffee Beans</h3>
      <p className="text-gray-500 text-sm">Arabica Premium</p>
      <p className="font-bold mt-2">Rp120.000</p>
    </div>

    <div className="bg-white shadow rounded-lg p-4">
      <img src="/product.jpg" className="w-full h-40 object-cover rounded" />
      <h3 className="mt-3 font-semibold">Cold Brew</h3>
      <p className="text-gray-500 text-sm">Fresh Coffee</p>
      <p className="font-bold mt-2">Rp35.000</p>
    </div>

  </div>

</div> */}

      {/* dashboard layout */}
      {/* <div className="grid grid-cols-12 min-h-screen">
        <aside className="col-span-2 bg-gray-900 text-white p-6">
          Sidebar Menu
        </aside>

        <main className="col-span-10 p-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white shadow p-6 rounded">Total Users</div>

            <div className="bg-white shadow p-6 rounded">Revenue</div>

            <div className="bg-white shadow p-6 rounded">Orders</div>
          </div>
        </main>
      </div> */}

      {/* landing page layout */}
      {/* <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold">Build Website Cafe Instantly</h1>

            <p className="mt-4 text-gray-600">
              Create your cafe website without subscription.
            </p>

            <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">
              Get Started
            </button>
          </div>

          <div>
            <img src="/hero.png" className="w-full" alt="Hero Imag  e" />
          </div>
        </div>
      </section> */}

      {/* layout grid kompleks */}

      {/* <div className="grid grid-cols-3 gap-4">

  <header className="col-span-3 bg-gray-200 p-6">
    Header
  </header>

  <section className="col-span-3 bg-blue-200 p-10">
    Hero Section
  </section>

  <div className="col-span-1 bg-green-200 p-6">
    Feature 1
  </div>

  <div className="col-span-2 bg-green-300 p-6">
    Feature 2
  </div>

  <footer className="col-span-3 bg-gray-300 p-6">
    Footer
  </footer> */}

      {/* </div> */}
    </div>
  );
};

export default Grid;
