// HomeSections: additional home page sections (categories, products, testimonials, newsletter)
import './HomeSections.scss';
export default function HomeSections() {
  return (
    <>
      {/* Categories Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-[#503217] text-4xl font-heading font-medium mb-10 text-center">Shop by Category</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Example category cards */}
          <div className="card p-6 flex flex-col items-center w-56">
            <img src="http://localhost:3845/assets/a0b34709f56840bac6d730d67637beb3c5f63808.svg" alt="Medkits" style={{height: 60}} />
            <span className="mt-4 text-[#503217] text-xl font-heading font-medium">Medkits</span>
            <span className="text-[#8f7d6a]">25 Items</span>
          </div>
          <div className="card p-6 flex flex-col items-center w-56">
            <img src="http://localhost:3845/assets/2f486a1d5e97b4726ea695ad46f473b5a50df760.svg" alt="Lab equipment" style={{height: 60}} />
            <span className="mt-4 text-[#503217] text-xl font-heading font-medium">Lab equipment</span>
            <span className="text-[#8f7d6a]">25 Items</span>
          </div>
          <div className="card p-6 flex flex-col items-center w-56">
            <img src="http://localhost:3845/assets/cb1bda23b7a9e2f0f63993b28216c8231b32fdb8.svg" alt="Fitness" style={{height: 60}} />
            <span className="mt-4 text-[#503217] text-xl font-heading font-medium">Fitness</span>
            <span className="text-[#8f7d6a]">35 Items</span>
          </div>
          <div className="card p-6 flex flex-col items-center w-56">
            <img src="http://localhost:3845/assets/8b1daaa031148d1e384366ce3d819efdb9f4bb39.svg" alt="Beauty care" style={{height: 60}} />
            <span className="mt-4 text-[#503217] text-xl font-heading font-medium">Beauty care</span>
            <span className="text-[#8f7d6a]">30 Items</span>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-[#503217] text-4xl font-heading font-medium mb-10 text-center">Latest health product</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Example product cards */}
          <div className="card p-6 flex flex-col items-center w-56">
            <img src="http://localhost:3845/assets/9dbaf289c4d6b79af24e5d1e9e2b2b0cd44659dd.png" alt="Microscope" style={{height: 80}} />
            <span className="mt-4 text-[#503217] text-xl font-heading font-medium">Microscope</span>
            <span className="text-[#8f7d6a]">$45.00 USD</span>
          </div>
          <div className="card p-6 flex flex-col items-center w-56">
            <img src="http://localhost:3845/assets/5b77ce6b24624735a264d07405ae77ed4256ed09.png" alt="High protein" style={{height: 80}} />
            <span className="mt-4 text-[#503217] text-xl font-heading font-medium">High protein</span>
            <span className="text-[#8f7d6a]">$50.00 USD</span>
          </div>
          <div className="card p-6 flex flex-col items-center w-56">
            <img src="http://localhost:3845/assets/f07b2098fc87998e45f87a3f40dee2ade09b3a97.png" alt="Vitamin serum" style={{height: 80}} />
            <span className="mt-4 text-[#503217] text-xl font-heading font-medium">Vitamin serum</span>
            <span className="text-[#8f7d6a]">$30.00 USD</span>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="w-full max-w-3xl mx-auto py-16 px-4">
        <div className="card p-10 flex flex-col items-center">
          <h3 className="text-[#503217] text-3xl font-heading font-medium mb-4 text-center">Sign Up for an Instant 15% Discount</h3>
          <p className="text-[#8f7d6a] mb-6 text-center">Join our newsletter</p>
          <form className="flex gap-4 w-full max-w-md mx-auto">
            <input type="email" placeholder="Enter Email" className="flex-1 p-3 rounded border border-[#e8e6de]" />
            <button type="submit" className="button">Sign up</button>
          </form>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-[#503217] text-4xl font-heading font-medium mb-10 text-center">Our happy clients</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="card p-6 flex flex-col items-center w-80">
            <img src="http://localhost:3845/assets/6f82df34bbc4964c2241cc7bb3cbc5db00292c3c.png" alt="Henry Adams" style={{height: 60, borderRadius: '50%'}} />
            <span className="mt-4 text-[#503217] text-lg font-heading font-medium">Henry Adams</span>
            <span className="text-[#8f7d6a]">CEO</span>
            <p className="mt-2 text-[#8f7d6a] text-center">I’m so impressed with this online medical store. The product selection is extensive and the prices are great. The ordering process was easy, delivery was prompt, and the items arrived in perfect condition.</p>
          </div>
          <div className="card p-6 flex flex-col items-center w-80">
            <img src="http://localhost:3845/assets/6f82df34bbc4964c2241cc7bb3cbc5db00292c3c.png" alt="Ethan Harris" style={{height: 60, borderRadius: '50%'}} />
            <span className="mt-4 text-[#503217] text-lg font-heading font-medium">Ethan Harris</span>
            <span className="text-[#8f7d6a]">Business manager</span>
            <p className="mt-2 text-[#8f7d6a] text-center">Plus, the customer service team was incredibly helpful. I found everything I needed in one place. Highly recommended!</p>
          </div>
        </div>
      </section>
    </>
  );
}
