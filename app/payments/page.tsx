export default function PaymentsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header - Hero Section */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content rounded-box shadow-lg">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Money & Loans</h1>
            <p className="text-xl">
              Get the right financial knowledge to fund and grow your business.
            </p>
          </div>
        </div>
      </div>

      {/* Main Page Content - Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Section (2/3 of the Page) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Section: Loans & Funding */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Loans & Funding</h2>
              <p>Explore various loan options for women entrepreneurs, including government-backed schemes, micro-financing, and private business loans.</p>
              <ul className="list-disc pl-5">
                <li><strong>PMEGP (Prime Minister's Employment Generation Programme)</strong> - Up to ₹25 Lakhs loan.</li>
                <li><strong>MUDRA Loan</strong> - Loans up to ₹10 Lakhs for small businesses.</li>
                <li><strong>Women's Self-Help Group Loans</strong> - Low-interest loans for SHGs.</li>
                <li><strong>Private Banks & NBFCs</strong> - Business loans with flexible repayment.</li>
              </ul>
              <button className="btn btn-primary mt-4">Apply for Loan</button>
            </div>
          </div>

          {/* Section: Government Grants & Schemes */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Government Grants & Schemes</h2>
              <p>Get access to non-repayable grants for women entrepreneurs.</p>
              <ul className="list-disc pl-5">
                <li><strong>Stand-Up India Scheme</strong> - Funding support for women SC/ST entrepreneurs.</li>
                <li><strong>Mahila Udyam Nidhi</strong> - Business development funds for women.</li>
                <li><strong>Startup India</strong> - Grants & tax benefits for startups.</li>
              </ul>
              <button className="btn btn-secondary mt-4">Check Eligibility</button>
            </div>
          </div>

          {/* Section: Taxes & Compliance */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Understanding Taxes</h2>
              <p>Learn about business taxes, GST, and how to legally register your business.</p>
              <ul className="list-disc pl-5">
                <li>Register for GST (Goods & Services Tax) if revenue exceeds ₹20 Lakhs.</li>
                <li>Know about income tax slabs for small businesses.</li>
                <li>File taxes using MSME tax benefits to save money.</li>
              </ul>
              <button className="btn btn-outline mt-4">Learn More</button>
            </div>
          </div>

          {/* Section: Financial Literacy */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Financial Literacy & Business Skills</h2>
              <p>Learn how to manage your business finances, create budgets, and improve financial health.</p>
              <ul className="list-disc pl-5">
                <li>How to create a business budget & cash flow plan.</li>
                <li>Tips on saving money & reducing business expenses.</li>
                <li>Understanding digital payments & e-commerce transactions.</li>
              </ul>
              <button className="btn btn-success mt-4">Start Learning</button>
            </div>
          </div>
        </div>

        {/* Sidebar Section (1/3 of the Page) */}
        <div className="space-y-6">
          
          {/* Quick Actions */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Quick Actions</h2>
              <div className="space-y-2">
                <button className="btn btn-primary w-full">Apply for Loan</button>
                <button className="btn btn-outline w-full">Check Loan Eligibility</button>
                <button className="btn btn-outline w-full">Calculate EMI</button>
                <button className="btn btn-outline w-full">File Taxes</button>
              </div>
            </div>
          </div>

          {/* External Resources */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">External Resources</h2>
              <p>Useful government links for financial support.</p>
              <ul className="list-disc pl-5">
                <li><a href="https://www.mudra.org.in" target="_blank" className="text-primary">MUDRA Loan Portal</a></li>
                <li><a href="https://www.startupindia.gov.in" target="_blank" className="text-primary">Startup India Portal</a></li>
                <li><a href="https://www.standupmitra.in" target="_blank" className="text-primary">Stand-Up India Scheme</a></li>
              </ul>
            </div>
          </div>

          {/* Financial Summary */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Financial Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="opacity-70">Total Loans Taken</span>
                  <span className="text-error font-semibold">₹2,50,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-70">Grants Received</span>
                  <span className="text-success font-semibold">₹50,000</span>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Net Outstanding</span>
                  <span className="text-error font-semibold">₹2,00,000</span>
                </div>
              </div>
            </div>
          </div>

        </div> 
      </div>
    </div>
  );
}
