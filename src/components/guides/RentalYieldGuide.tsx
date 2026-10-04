export default function RentalYieldGuide() {
  return (
    <div className="guide-article">
      <p className="guide-intro">
        Rental yield is one of the first numbers Australian property investors learn to calculate,
        and for good reason. It tells you how much income a property generates relative to its
        price, expressed as a percentage, which makes it easy to compare a house in Geelong against
        a unit in Brisbane or a townhouse in Perth without getting lost in dollar figures alone.
        Whether you are buying your first investment property, reviewing a portfolio you have held
        for years, or simply trying to understand whether an advertised rent supports the asking
        price, gross and net rental yield give you a structured way to evaluate returns before
        you commit to a purchase, refinance, or sale. This guide explains how rental yield works
        in Australia, how it differs from cash flow and cap rates, what expenses to include, what
        yields look like across capital cities and regional markets, and how to use our rental
        yield calculator to run your own numbers with confidence. Property is the largest asset
        class many Australians will ever own outside superannuation, and unlike shares quoted daily
        on an exchange, residential investments trade infrequently and carry substantial transaction
        costs. That makes disciplined upfront analysis essential. Rental yield will not tell you
        everything, but it will stop you from paying growth-city prices while assuming regional-city
        income, or from overlooking holding costs that quietly turn a supposedly strong return into
        an annual drain on your salary.
      </p>

      <h2>Why Rental Yield Matters for Australian Investors</h2>
      <p>
        Australia&apos;s housing market is shaped by unique forces: population growth through
        migration, constrained land supply in major capitals, a cultural preference for property
        ownership, and tax settings that treat residential investment differently from many other
        assets. Rents respond to household formation, employment, and affordability, while prices
        respond to credit availability, sentiment, and scarcity. Those two forces do not always
        move together. Periods of rapid price growth often compress yields because rents lag by
        twelve to twenty-four months or longer. Periods of flat or falling values can widen yields
        as rents hold steady or continue rising from housing shortages.
      </p>
      <p>
        The Reserve Bank of Australia and commercial banks watch rental conditions as an indicator
        of housing stress and inflation pressure. For individual investors, yield serves a more
        practical purpose: it anchors expectations. If you know that most houses in a suburb gross
        around 4 percent, a listing priced to yield 2.8 percent on verified rent is signalling
        that the seller expects growth, scarcity, or renovation upside to justify the premium. That
        may be rational for some buyers and dangerous for others. Yield gives you the vocabulary to
        ask the right question: am I paying for income today or growth tomorrow?
      </p>
      <p>
        Yield also interacts with lending policy. While serviceability assessments are based on
        your income, expenses, and interest rates rather than yield directly, a property whose rent
        covers a healthy share of holding costs reduces the practical risk of financial stress when
        rates rise or life circumstances change. Investors who accumulate multiple low-yield,
        highly leveraged properties may find themselves dependent on stable employment and
        favourable tax refunds to sustain the portfolio. There is nothing inherently wrong with that
        model if it is deliberate and well capitalised, but it is a different proposition from
        building a portfolio where net rent contributes meaningfully to each mortgage payment.
      </p>

      <h2>What Is Rental Yield?</h2>
      <p>
        Rental yield measures the annual rental income from an investment property as a percentage
        of the property&apos;s value. In Australia, investors typically express yield on an annual
        basis, using either the purchase price or the current market value as the denominator.
        The formula is straightforward: divide the annual rent by the property value, then multiply
        by one hundred to get a percentage. For example, a property worth $600,000 that rents for
        $550 per week generates $28,600 in annual rent, which equals a gross yield of 4.77 percent.
      </p>
      <p>
        Yield is a snapshot metric. It does not account for future rent growth, capital appreciation,
        tax benefits, or loan interest unless you deliberately build those into a broader analysis.
        Even so, it remains one of the most widely used benchmarks in Australian residential
        property because it is simple, comparable across markets, and closely tied to the income
        side of the investment equation. Lenders, buyers&apos; agents, and experienced investors
        all refer to yield when discussing whether a suburb is &quot;investor-friendly&quot; or
        whether a listing is priced for growth rather than income.
      </p>
      <p>
        It is important to distinguish rental yield from total return. Total return combines
        rental income with capital growth over a holding period. A Sydney apartment might show a
        modest gross yield of 3.5 percent while still delivering strong total returns if values
        rise sharply over five years. Conversely, a regional house with a 6 percent gross yield
        might underperform if vacancy rises and prices stagnate. Yield tells you about income
        efficiency today; it does not, by itself, predict tomorrow&apos;s outcome.
      </p>
      <p>
        Australian investors sometimes quote yield based on purchase price and sometimes on bank
        valuation or current market appraisal. When comparing two properties, use the same
        denominator. A property bought for $500,000 that is now worth $650,000 might show 4.8
        percent gross yield on purchase price but only 3.7 percent on current value at the same
        rent. Both figures are valid; they answer different questions. Purchase-price yield measures
        your original income decision. Current-value yield measures how the asset is performing
        relative to its replacement cost in the market today.
      </p>
      <p>
        Weekly rent is the standard input because tenancy laws and leasing customs in every state
        and territory express residential rent weekly in advertising, even when tenants pay monthly.
        Our calculator follows that convention. If you have a monthly figure from a tenancy
        agreement, multiply by twelve and divide by fifty-two to convert to weekly, or enter the
        annual rent equivalent directly in your own spreadsheet before dividing by value.
      </p>

      <h2>Gross Rental Yield</h2>
      <p>
        Gross rental yield is calculated using total annual rent before any expenses are deducted.
        Because weekly rent is the figure most commonly advertised on Australian property listings,
        investors usually multiply the weekly rent by fifty-two to arrive at annual rent, then
        divide by property value and multiply by one hundred.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/40 p-5 shadow-sm sm:p-8">
        <div className="space-y-4 text-center">
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            Gross Yield = (Annual Rent ÷ Property Value) × 100
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Where</span>
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
          </div>
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            Annual Rent = Weekly Rent × 52
          </p>
          <p className="inline-block rounded-xl border border-blue-100 bg-white px-5 py-3 font-mono text-base font-bold text-blue-600 shadow-sm sm:text-lg">
            Example: ($28,600 ÷ $600,000) × 100 = 4.77%
          </p>
        </div>
      </div>

      <p>
        Gross yield is useful for quick comparisons because every investor calculates it the same
        way. When a buyers&apos; agent says a suburb is &quot;yielding around five percent,&quot;
        they mean gross yield unless they specify otherwise. Real estate portals, suburb profile
        reports, and research firms such as CoreLogic and SQM Research often publish median gross
        yields by suburb, giving you a benchmark against which to judge a specific listing.
      </p>
      <p>
        The main limitation of gross yield is that it ignores the cost of owning the property.
        Two houses with identical gross yields can produce very different net outcomes if one has
        high strata levies and the other sits on a freehold block with low maintenance. That is
        why serious investors always follow gross yield with a net yield calculation before making
        a decision.
      </p>
      <p>
        Real estate agents marketing investment properties sometimes highlight gross yield in
        brochures because it presents the property in the best numerical light. That is not
        deceptive if labelled correctly, but you should always recalculate independently. Check
        whether the quoted rent includes furniture packages in student accommodation, whether
        short-term letting assumptions inflate income, and whether the price includes furniture or
        appliances that may not transfer value at resale. Gross yield on a furnished student room
        is not comparable to gross yield on a standard unfurnished family lease without adjustment.
      </p>

      <h2>Net Rental Yield</h2>
      <p>
        Net rental yield deducts the ongoing costs of holding and operating the property from
        annual rent before dividing by property value. It gives a clearer picture of what the
        asset actually puts in your pocket, or takes out of it, before loan repayments and tax
        are considered.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-emerald-50/40 p-5 shadow-sm sm:p-8">
        <div className="space-y-4 text-center">
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            Net Yield = ((Annual Rent − Annual Expenses) ÷ Property Value) × 100
          </p>
          <p className="inline-block rounded-xl border border-emerald-100 bg-white px-5 py-3 font-mono text-base font-bold text-emerald-600 shadow-sm sm:text-lg">
            Example: (($28,600 − $8,200) ÷ $600,000) × 100 = 3.40%
          </p>
        </div>
      </div>

      <p>
        The gap between gross and net yield is often one to two percentage points in Australian
        residential property, though it can be wider for apartments with high body corporate fees
        or older homes needing frequent repairs. A property showing 5.5 percent gross might net
        closer to 3.8 percent once rates, insurance, management, maintenance, and vacancy are
        accounted for. If someone quotes yield without saying gross or net, ask which one they
        mean. Misunderstanding this distinction is one of the most common errors new investors
        make.
      </p>
      <p>
        Net yield still excludes mortgage interest, depreciation schedules, and income tax effects.
        It is an operating yield, not a personal cash flow figure. To understand what lands in
        your bank account each month, you need to layer loan repayments and tax on top of net
        yield, which we cover in the cash flow section below.
      </p>
      <p>
        When building your expense estimate, round up rather than down. Insurance premiums creep
        higher after weather events. Councils adjust rates. Property managers increase fees. A
        maintenance allowance that seemed generous in year one can prove inadequate when the roof
        needs partial replacement or the hot water system fails during a tenancy changeover.
        Conservative net yield assumptions protect you from surprises and make positive variances
        welcome rather than necessary for survival.
      </p>
      <p>
        Some investors separate capital expenditure from operating expenses. Replacing an entire
        kitchen is capital in nature and may not belong in a recurring net yield calculation,
        whereas repainting between tenants is operational. For practical screening purposes,
        including a maintenance reserve in annual expenses captures average annualised cost without
        requiring you to forecast exact replacement cycles on day one. Detailed investors can
        maintain a separate capex schedule while still using net yield for quick comparisons.
      </p>

      <h2>Rental Yield vs Capitalisation Rate</h2>
      <p>
        In commercial property and some residential investment analysis, you will encounter the
        term capitalisation rate, or cap rate. Cap rate is conceptually similar to net yield: it
        divides net operating income by property value. The difference is mainly in how
        &quot;net operating income&quot; is defined. Cap rate calculations typically exclude
        financing costs and personal tax, and in commercial contexts they often use stabilised
        income rather than actual current rent.
      </p>
      <p>
        For Australian residential investors, net rental yield and cap rate are often used
        interchangeably in casual conversation, but they are not identical. A proper cap rate
        analysis might adjust rent for market vacancy, normalise management fees, and exclude
        non-recurring capital expenditure. Residential net yield calculators, including ours,
        usually take a simpler approach: annual rent minus your estimate of annual holding costs,
        divided by value.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            title: 'Gross yield',
            desc: 'Annual rent divided by value. Quick benchmark for comparing suburbs and listings. Does not reflect operating costs.',
          },
          {
            title: 'Net yield / cap rate',
            desc: 'Income after operating expenses, divided by value. Better indicator of operating return before debt and tax.',
          },
          {
            title: 'Cash-on-cash return',
            desc: 'Annual cash flow after all costs including mortgage, divided by your cash invested. Reflects leveraged personal return.',
          },
          {
            title: 'Total return',
            desc: 'Rental income plus capital growth over a period. Captures both income and price change but requires a time horizon.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-1.5 font-bold text-blue-600">{item.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        When comparing a residential house to a commercial tenancy or a REIT, be explicit about
        which metric you are using. Mixing gross residential yield with commercial cap rates
        without adjusting for expense structures will skew your conclusions. Residential gross
        yields in Australia often look lower than commercial cap rates partly because residential
        investors accept lower income in exchange for perceived capital growth and familiarity
        with the asset class.
      </p>
      <p>
        Cap rates become particularly useful when comparing commercial assets such as retail shops,
        industrial units, or office suites where leases run three to ten years and tenants often
        pay outgoing expenses. A commercial cap rate of 6 percent on net income may look superior
        to a residential gross yield of 4 percent, but the commercial tenant may vacate at lease
        expiry leaving extended downtime, or the asset may require specialised fit-out between
        tenancies. Residential yield comparisons work best among similar residential assets in
        similar locations serving similar tenant demographics.
      </p>

      <h2>Allowing for Vacancy</h2>
      <p>
        No responsible yield calculation assumes one hundred percent occupancy forever. Tenants
        move out, properties need reletting, and occasional gaps between leases are normal.
        Professional investors build a vacancy allowance into their expense estimate or reduce
        gross rent before calculating yield.
      </p>
      <p>
        A common approach in Australian residential analysis is to assume two to four weeks of
        vacancy per year, which equals roughly four to eight percent of annual rent. In tight
        rental markets with strong tenant demand, you might use two weeks. In regional areas with
        thinner tenant pools or seasonal employment, four weeks or more may be prudent. High-rise
        apartment towers with many competing similar listings can also experience longer vacancy
        during soft periods.
      </p>
      <p>
        Vacancy allowance is not the same as bad debt or rent arrears. It specifically covers
        periods when the property earns zero rent while still incurring holding costs. Some
        investors fold vacancy into their annual expenses field in the calculator; others reduce
        weekly rent to an effective figure. Either method works as long as you are consistent
        and do not double-count.
      </p>

      <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5 sm:p-6">
        <h4 className="mb-2 font-bold text-amber-900">Practical vacancy rule of thumb</h4>
        <p className="mb-0 text-sm text-amber-900/80">
          For a property renting at $500 per week ($26,000 per year), allowing three weeks of
          vacancy reduces effective annual rent by $1,500 to $24,500. On a $550,000 purchase,
          that adjustment alone drops gross yield from 4.73 percent to 4.45 percent before any
          other expenses. Overlooking vacancy is a reliable way to overstate yield.
        </p>
      </div>
      <p>
        Seasonal markets deserve special attention. Coastal towns, snow-adjacent regions, and
        agricultural service centres may experience predictable quiet periods. Mining communities
        can see elevated vacancy when major projects move from construction to operational phases
        and temporary workers depart. Student accommodation near universities leases on academic
        year cycles. Ask whether the rent you are quoting is achievable year-round or only during
        peak demand. A holiday rental pro forma showing high nightly rates but ignoring average
        occupancy is a different category of analysis entirely and should not be confused with
        standard residential yield on a twelve-month lease.
      </p>
      <p>
        Lease length also affects effective vacancy. A stable tenant on a twelve-month lease with
        option to renew reduces turnover costs compared to properties that churn every six months.
        When evaluating yield on a property with a long-term tenant paying slightly below market,
        decide whether your calculation uses actual current rent or market rent. Actual rent
        reflects your immediate cash flow. Market rent reflects what you might achieve after
        reletting and guides forward-looking yield if you believe a rent increase is realistic
        under state tenancy laws.
      </p>

      <h2>Expenses Breakdown for Net Yield</h2>
      <p>
        Accurate net yield depends on listing every recurring cost of ownership. Missing even one
        significant line item can make a marginal deal look attractive. Below are the main expense
        categories Australian residential investors should consider when moving from gross to net
        yield.
      </p>

      <h3>Council Rates and Water Charges</h3>
      <p>
        Council rates are an annual charge levied by local government and vary widely by
        municipality and land value. They typically range from $1,500 to $4,000 or more per year
        for standard houses in metropolitan areas, with some inner-city councils charging higher
        amounts. Water rates and sewerage charges may be billed separately depending on the state
        and whether water is metered to the tenant or absorbed by the landlord. In Queensland and
        some other jurisdictions, full water consumption is often recoverable from tenants if
        individually metered and correctly disclosed in the lease.
      </p>

      <h3>Insurance</h3>
      <p>
        Landlord insurance is strongly recommended and often required by lenders. A typical policy
        covers building replacement, loss of rent during insured events, legal liability, and
        sometimes tenant damage. Premiums commonly fall between $1,200 and $2,500 per year
        depending on property type, location, and sum insured. Strata properties usually include
        building insurance in the body corporate levy, but landlord insurance for contents,
        liability, and loss of rent may still be advisable for investors who furnish properties
        or want broader cover.
      </p>

      <h3>Property Management</h3>
      <p>
        If you engage a licensed property manager, expect fees around 5 to 8 percent of rent
        collected, plus letting fees when a new tenant is placed. On $500 weekly rent, management
        at 7 percent costs roughly $1,820 per year. Some agencies charge additional fees for
        routine inspections, tribunal attendance, or annual statement preparation. Self-managing
        saves this cost but consumes your time and may limit access to professional tenant
        screening and compliance with state tenancy laws.
      </p>

      <h3>Maintenance and Repairs</h3>
      <p>
        Maintenance is the expense category most underestimated by first-time investors. Hot water
        systems fail, gutters need clearing, air conditioners need servicing, and wear and tear
        accumulates. Many experienced investors budget 1 to 1.5 percent of property value per year
        for ongoing maintenance on freestanding houses, or a fixed dollar amount such as $2,000
        to $4,000 annually for a standard three-bedroom home. Newer properties may cost less in
        early years; older properties on large blocks often cost more.
      </p>

      <h3>Body Corporate and Strata Levies</h3>
      <p>
        Apartments, townhouses, and villa units attract body corporate or strata levies covering
        shared insurance, building maintenance, administration, and sometimes utilities and
        amenities. Levies can range from $2,000 per year for a simple unit to $10,000 or more for
        buildings with lifts, pools, and concierge services. Always request the last two years of
        body corporate records before buying, including the sinking fund forecast, because
        special levies for major works can destroy an otherwise acceptable yield.
      </p>

      <h3>Other Holding Costs</h3>
      <p>
        Additional items may include land tax where applicable, pest control, smoke alarm
        compliance, gardening for common areas on some titles, and accounting fees for your
        rental schedule. Land tax thresholds and rates differ by state and aggregate across your
        total land holdings, so a property that looks fine in isolation may trigger land tax once
        combined with other investments.
      </p>
      <p>
        One-off acquisition costs such as stamp duty, conveyancing, building and pest inspections,
        and loan establishment fees do not belong in annual net yield but absolutely belong in your
        total return and cash-on-cash calculations. An investor who ignores $35,000 in stamp duty
        on a $700,000 purchase effectively overstates the income return on capital actually
        deployed. Some practitioners add stamp duty to the property value input when calculating
        yield conservatively, which lowers the percentage but aligns with economic reality.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          { title: 'Council rates', range: '$1,500 – $4,000+', note: 'Varies by council and land value' },
          { title: 'Landlord insurance', range: '$1,200 – $2,500', note: 'Building, liability, loss of rent' },
          { title: 'Property management', range: '5 – 8% of rent', note: 'Plus letting fees at turnover' },
          { title: 'Maintenance reserve', range: '1 – 1.5% of value', note: 'Or $2,000 – $4,000 fixed' },
          { title: 'Body corporate', range: '$2,000 – $10,000+', note: 'Apartments and strata titles' },
          { title: 'Vacancy allowance', range: '2 – 4 weeks rent', note: 'Adjust effective annual income' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
            <h4 className="mb-1 font-bold text-slate-800">{item.title}</h4>
            <p className="font-mono text-sm font-semibold text-blue-600">{item.range}</p>
            <p className="mt-1 text-xs text-slate-500">{item.note}</p>
          </div>
        ))}
      </div>

      <h2>Property Types and How They Affect Yield</h2>
      <p>
        Houses on individual titles typically offer lower gross yields in capital cities but appeal
        to family tenants who stay longer and maintain gardens responsibly. Units and townhouses
        often deliver higher percentage yields because the land component per dollar of purchase
        price is smaller, yet body corporate fees and neighbour density introduce different risks.
        Dual-income properties such as granny flat arrangements can boost yield substantially where
        council approval exists, but verify compliance, insurance coverage, and separate metering
        before assuming both dwellings rent at market simultaneously.
      </p>
      <p>
        New builds attract investors with depreciation benefits and lower near-term maintenance,
        but premium purchase prices can compress yield despite strong rent. Older properties in
        established suburbs may yield more on price but consume maintenance budgets. Regional
        acreage properties present unique expense profiles: higher insurance, fencing, water
        infrastructure, and limited tenant pools compared to standard suburban blocks. Match your
        yield comparison to the property type you are actually evaluating rather than a suburb
        median that blends incompatible stock.
      </p>

      <h2>Capital City Yield Benchmarks</h2>
      <p>
        Rental yields vary significantly across Australian capital cities. As a broad generalisation
        in the mid-2020s, gross yields in Sydney and Melbourne tend to sit in the low three to
        mid-four percent range for houses and slightly higher for units. Brisbane, Adelaide, and
        Perth have often shown higher gross yields, commonly in the four to six percent range
        depending on suburb and property type. Darwin and Hobart can swing based on local economic
        conditions, with Darwin historically offering higher yields and Hobart tightening as
        prices rose during strong migration periods.
      </p>
      <p>
        These ranges shift with interest rates, supply pipelines, and migration. After periods of
        strong price growth, yields compress because rents lag values. After price corrections or
        when rents rise faster than values, yields expand. Always check current data for your
        target suburb rather than relying on national averages alone.
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[540px] text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-left">
              <th className="px-4 py-3 font-bold text-slate-800">City</th>
              <th className="px-4 py-3 font-bold text-slate-800">Typical gross yield (houses)</th>
              <th className="px-4 py-3 font-bold text-slate-800">Typical gross yield (units)</th>
              <th className="px-4 py-3 font-bold text-slate-800">General character</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { city: 'Sydney', houses: '2.5 – 3.5%', units: '3.5 – 4.5%', note: 'Lower yield, higher entry price' },
              { city: 'Melbourne', houses: '3.0 – 4.0%', units: '4.0 – 5.0%', note: 'Inner suburbs often lower' },
              { city: 'Brisbane', houses: '3.8 – 5.0%', units: '4.5 – 5.5%', note: 'Balanced growth and income' },
              { city: 'Perth', houses: '4.0 – 5.5%', units: '4.5 – 6.0%', note: 'Cyclical mining influence' },
              { city: 'Adelaide', houses: '3.8 – 4.8%', units: '4.5 – 5.5%', note: 'Stable owner-occupier base' },
              { city: 'Canberra', houses: '3.5 – 4.5%', units: '4.5 – 5.5%', note: 'Public sector employment' },
              { city: 'Hobart', houses: '4.0 – 5.0%', units: '4.5 – 5.5%', note: 'Smaller, supply-sensitive' },
              { city: 'Darwin', houses: '5.0 – 6.5%', units: '5.5 – 7.0%', note: 'Higher yield, thinner market' },
            ].map((row) => (
              <tr key={row.city}>
                <td className="px-4 py-3 font-semibold text-slate-800">{row.city}</td>
                <td className="px-4 py-3 font-mono text-slate-600">{row.houses}</td>
                <td className="px-4 py-3 font-mono text-slate-600">{row.units}</td>
                <td className="px-4 py-3 text-slate-500">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="border-t border-slate-100 px-4 py-3 text-xs text-slate-400">
          Indicative ranges for illustration. Verify current suburb-level data before investing.
        </p>
      </div>

      <p>
        Within each city, yield dispersion by suburb is enormous. Outer suburban houses often yield
        more than inner-ring terraces. Units near universities may yield well but face vacancy
        risk during semester breaks if not managed carefully. Mining towns and some regional centres
        can show double-digit gross yields on paper, but those figures often come with higher
        vacancy, greater price volatility, and thinner resale markets. Context matters as much as
        the headline percentage.
      </p>
      <p>
        Research houses publish suburb-level yield data that updates as sales and rentals settle.
        When using published medians, note whether the source reports houses, units, or all
        dwellings combined. A suburb median yield of 4.8 percent might reflect mostly units while
        you are buying a detached house on a large block, which could yield closer to 3.9 percent
        at current prices. Drill down to property type and bedroom count where possible. Two-bedroom
        units near transport often behave differently from four-bedroom houses on the urban fringe
        in the same postcode.
      </p>
      <p>
        Yields also vary by price quartile within a suburb. Premium streets with waterfront or
        heritage character may yield less than secondary streets because affluent owner-occupiers
        pay for amenity rather than rent. Investors sometimes target the lower quartile of a
        desirable suburb to balance some growth exposure with acceptable income, accepting
        compromise on street appeal or dwelling condition in exchange for a higher rent-to-price
        ratio.
      </p>

      <h2>What Makes a Good Rental Yield?</h2>
      <p>
        There is no universal number that defines a &quot;good&quot; yield for every investor.
        What qualifies as acceptable depends on your borrowing cost, risk tolerance, tax position,
        and whether you prioritise income today or capital growth tomorrow. If your variable
        mortgage rate is 6.5 percent and your net yield is 3 percent, the property is likely
        negatively geared before other deductions, meaning you subsidise ownership from other
        income unless growth compensates.
      </p>
      <p>
        Many cash-flow-focused investors target gross yields above 5 percent in metropolitan markets
        or net yields that come close to covering interest and running costs after tax effects.
        Growth-focused investors in Sydney or Melbourne may accept gross yields under 4 percent
        because they expect values to rise faster than rents. The key is alignment: a good yield
        is one that matches your strategy and leaves adequate margin for vacancy, maintenance,
        and rate rises.
      </p>
      <p>
        Compare yield to alternative uses of capital. Term deposits, listed REITs, and shares all
        offer different risk-return profiles. Residential property adds leverage, illiquidity, and
        active management. A 4.5 percent gross yield on a leveraged property is not directly
        equivalent to a 4.5 percent term deposit return. Evaluate yield within that broader
        picture rather than as an isolated trophy number.
      </p>

      <div className="my-6 space-y-4">
        {[
          {
            color: 'border-emerald-400',
            title: 'Income-focused strategy',
            desc: 'Prioritise net yield after realistic expenses. Target markets and property types where rent covers or nearly covers holding costs. Regional cities, dual-income houses, and newer low-maintenance builds often feature here.',
          },
          {
            color: 'border-blue-400',
            title: 'Balanced strategy',
            desc: 'Accept moderate yields in suburbs with solid tenant demand and steady growth history. Brisbane middle-ring suburbs and similar markets often attract balanced investors seeking both rent and appreciation.',
          },
          {
            color: 'border-violet-400',
            title: 'Growth-focused strategy',
            desc: 'Accept lower gross yields in supply-constrained, amenity-rich locations. Inner Sydney and Melbourne typify this approach. Yield is secondary to long-term capital gain assumptions.',
          },
        ].map((item) => (
          <div key={item.title} className={`rounded-r-xl border-l-4 ${item.color} bg-white p-5 shadow-sm`}>
            <h4 className="mb-1 font-bold text-slate-800">{item.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Cash Flow vs Rental Yield</h2>
      <p>
        Rental yield and cash flow are related but not the same. Yield measures income relative to
        property value. Cash flow measures the actual dollars entering or leaving your account each
        month after all costs, including mortgage repayments, tax, and one-off expenses. A property
        can show a respectable gross yield yet produce negative monthly cash flow if highly
        leveraged at current interest rates.
      </p>
      <p>
        Consider a $700,000 property renting for $650 per week. Gross yield is 4.83 percent. After
        $10,500 in annual expenses, net yield is 3.33 percent, or $23,300 net income before
        finance. If the investor borrows $560,000 at 6.3 percent interest-only, interest alone
        costs $35,280 per year, before principal repayments. Pre-tax cash flow is deeply negative
        despite a gross yield approaching five percent. Tax deductions including interest and
        depreciation may soften the after-tax position, but the investor still needs surplus income
        or savings to cover the shortfall.
      </p>
      <p>
        Conversely, a regional property bought with a larger deposit may show similar yield but
        positive cash flow because loan interest is lower relative to rent. This is why
        yield-focused investors sometimes prefer lower-priced markets with higher rent-to-price
        ratios, while highly leveraged buyers in expensive cities rely on growth and tax benefits
        to justify ownership.
      </p>

      <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-sm text-blue-900 sm:p-5">
        <strong>Remember:</strong> Yield answers &quot;how efficient is this asset at generating
        rent relative to its price?&quot; Cash flow answers &quot;can I afford to hold it month
        to month?&quot; You need both answers before committing.
      </div>
      <p>
        Pre-tax and after-tax cash flow can diverge materially for negatively geared properties.
        An investor on a 37 percent marginal tax rate recovers more of each dollar of rental loss
        than someone on 19 percent. Depreciation schedules prepared by quantity surveyors can add
        tens of thousands in non-cash deductions annually on newer buildings, improving after-tax
        cash flow without changing gross or net yield. Cash flow analysis therefore belongs in a
        separate worksheet that starts from net yield and layers finance, tax, and personal
        circumstances on top.
      </p>
      <p>
        Interest-only loans were popular among investors seeking to maximise cash flow flexibility
        during periods of expected capital growth. Principal and interest repayments reduce loan
        balance over time but increase monthly outflows compared to interest-only at the same rate.
        Yield metrics ignore this distinction entirely. When comparing two properties with similar
        net yield, the one purchased with greater equity may produce superior cash flow even though
        yield percentages match exactly.
      </p>

      <h2>Interest Rates and the Yield Gap</h2>
      <p>
        Investors often discuss the spread between rental yield and mortgage rates. If your net
        yield is 3.2 percent and your borrowing cost is 6.5 percent, there is a negative spread
        before tax. You are paying more to hold debt than the property generates in net rent. Many
        Australian investors have operated in that environment willingly when expecting capital
        growth or tax benefits to compensate. When rates rise faster than rents, the spread widens
        and cash flow pressure intensifies unless values rise or rents increase quickly enough to
        catch up.
      </p>
      <p>
        Fixed-rate periods offer temporary certainty but create cliff edges when loans revert to
        variable rates. Stress-testing yield-based decisions at higher interest rates reveals
        whether a property remains holdable through a full cycle. A common practice is to model
        net yield against an interest rate two percentage points above the current offer. If the
        property still fits your risk tolerance under that scenario, you have more margin for error.
      </p>

      <h2>Negative Gearing and Yield</h2>
      <p>
        Negative gearing occurs when the deductible expenses of owning an investment property,
        including loan interest, exceed the rental income, producing a net rental loss for tax
        purposes. That loss can be offset against other taxable income such as salary, reducing
        your overall tax bill. Negative gearing is a tax outcome, not a strategy in itself, yet
        it shapes how many Australians think about low-yield properties.
      </p>
      <p>
        A Sydney unit with 3.2 percent gross yield and substantial mortgage interest will often be
        negatively geared. An investor on a higher marginal tax rate receives a larger tax benefit
        from the loss than someone on a lower rate. The after-tax cost of holding the property is
        therefore personal and cannot be read directly from yield alone. Depreciation on building
        and fixtures can further increase deductible losses without affecting cash flow equally,
        because depreciation is a non-cash deduction.
      </p>
      <p>
        Relying on negative gearing assumes you can service the cash shortfall from employment or
        other income, and that eventual capital growth or debt reduction will compensate for years
        of subsidised ownership. Policy settings can change, as debates over negative gearing
        reform periodically remind investors. Build your analysis on conservative yield and
        cash flow assumptions rather than assuming perpetual tax settings or uninterrupted price
        rises.
      </p>
      <p>
        Positive gearing, the opposite outcome, occurs when rental income exceeds deductible
        expenses including interest. Positively geared properties add taxable income and cash flow
        but may offer less capital growth in some markets, though that correlation is not universal.
        Neutral gearing sits near break-even before tax. Your yield analysis tells you how close
        you are to these thresholds before finance costs; adding interest reveals which category
        you likely fall into at current rates and leverage.
      </p>
      <p>
        The Australian Taxation Office requires rental income and expenses to be reported
        annually. Net rental loss flows into your total taxable income calculation. Keeping
        accurate records of expenses supports both yield analysis and compliance. Property managers
        provide end-of-year statements; self-managers should maintain receipts for every deductible
        cost. Yield calculated at purchase time should be revisited against actual outcomes in your
        tax return to improve future assumptions.
      </p>

      <h2>How Australian Rents Are Set and Why It Matters for Yield</h2>
      <p>
        Residential rents in Australia are negotiated in a market framework with state-specific
        tenancy legislation governing increases during fixed terms and between leases. Unlike
        commercial property with explicit cap rate pricing, residential rent is influenced by
        comparable listings, property condition, and tenant affordability. When vacancy rates are
        low, landlords achieve faster rent growth and yields on newly purchased properties may
        understate forward income if rents have risen since comparable sales were recorded.
      </p>
      <p>
        Conversely, building large volumes of similar apartments in one precinct can suppress rent
        growth even while sale prices remain elevated during construction marketing phases. Yield
        calculated at settlement using pre-construction rent estimates has disappointed many
        investors who discovered that fifty identical units competed for the same tenant pool at
        lease-up. Supply pipelines, building approval data, and rental vacancy statistics published
        by SQM Research and state housing bodies help you judge whether current rent is sustainable.
      </p>
      <p>
        Rent bidding, minimum housing standards, and pet-friendly tenancy reforms have changed
        landlord economics in several states. These rules affect turnover costs, marketing reach,
        and sometimes achievable rent. Yield analysis is not static regulation-proof arithmetic;
        it sits inside a policy environment that shifts with each state election and housing
        affordability debate. Stay informed about reforms in the state where you invest because
        they filter through to expenses and achievable rent over your holding period.
      </p>

      <h2>What to Enter in the Rental Yield Calculator</h2>
      <p>
        Our rental yield calculator uses three inputs to produce gross yield, net yield, and
        supporting figures. Entering realistic numbers is more important than precision to the
        last dollar, because yield is a screening tool rather than a substitute for a full
        investment spreadsheet.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            title: 'Property value',
            desc: 'Enter the purchase price you expect to pay, including your estimate of buyer costs if you want a conservative figure, or use current market value when reviewing an existing holding. Consistency matters when comparing multiple listings.',
          },
          {
            title: 'Weekly rent',
            desc: 'Use actual advertised rent from a current lease or rental appraisal, not the seller\'s optimistic projection. If the property is untenanted, check comparable rentals on the same street. Reduce for vacancy if you prefer to adjust income rather than expenses.',
          },
          {
            title: 'Annual expenses',
            desc: 'Total all recurring holding costs: council rates, insurance, management, maintenance reserve, body corporate, land tax if applicable, and vacancy allowance. Exclude loan interest and capital works, which sit outside standard net yield.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-1.5 font-bold text-blue-600">{item.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        The calculator multiplies weekly rent by fifty-two for annual rent, divides by property
        value for gross yield, subtracts annual expenses for net income, and divides again for net
        yield. It also shows monthly rent equivalent for budgeting. Run scenarios with higher
        expenses and lower rent to stress-test optimistic listings. If net yield still looks
        acceptable under pessimistic assumptions, you have a more durable case.
      </p>
      <p>
        If you are comparing multiple listings, create a simple table with identical expense
        assumptions across each row so differences reflect rent and price rather than inconsistent
        methodology. Using 7 percent management on one property and zero on another because you
        plan to self-manage one distorts comparison unless you value your time at zero. Apply the
        same maintenance reserve percentage to each candidate for fairness, then adjust later for
        property-specific facts such as age and strata levies.
      </p>

      <h2>Tracking Yield Over Time</h2>
      <p>
        Smart investors recalculate yield annually or after each lease renewal. Rising values with
        flat rent compress yield on current value, which may signal it is time to recycle capital
        into a higher-yielding asset or accept lower income return as the price of staying in a
        growth market. Rising rent with stable values expands yield, improving income return without
        requiring new capital. Both movements inform hold-or-sell decisions that pure capital
        growth tracking misses.
      </p>
      <p>
        Portfolio-level yield weighted by value shows whether your aggregate income return is
        drifting up or down as you add properties. A second purchase with higher yield than your
        first raises portfolio yield if sized similarly. A low-yield growth asset purchased later
        may drag the aggregate down even if it appreciates strongly. Neither outcome is inherently
        wrong, but measuring it prevents accidental strategy drift from income toward speculation
        or vice versa without conscious choice.
      </p>

      <h2>Worked Examples</h2>

      <h3>Example 1: Brisbane House — Gross to Net</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Three-bedroom house, middle-ring suburb</h4>
        <div className="grid max-w-lg grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Purchase price:</span>
          <span className="text-right font-mono">$680,000</span>
          <span className="text-slate-500">Weekly rent:</span>
          <span className="text-right font-mono">$580</span>
          <span className="text-slate-500">Annual rent (× 52):</span>
          <span className="text-right font-mono">$30,160</span>
          <span className="text-slate-500">Gross yield:</span>
          <span className="text-right font-mono font-bold text-blue-600">4.44%</span>
        </div>
        <p className="my-4 text-sm font-semibold text-slate-700">Annual expenses breakdown:</p>
        <div className="grid max-w-lg grid-cols-2 gap-y-1 text-sm">
          <span className="text-slate-500">Council rates:</span>
          <span className="text-right font-mono">$2,100</span>
          <span className="text-slate-500">Insurance:</span>
          <span className="text-right font-mono">$1,650</span>
          <span className="text-slate-500">Management (7%):</span>
          <span className="text-right font-mono">$2,111</span>
          <span className="text-slate-500">Maintenance reserve:</span>
          <span className="text-right font-mono">$2,500</span>
          <span className="text-slate-500">Vacancy (2 weeks):</span>
          <span className="border-b border-slate-300 pb-2 text-right font-mono">$1,160</span>
          <span className="pt-2 font-medium text-slate-700">Total expenses:</span>
          <span className="pt-2 text-right font-mono font-bold text-red-500">$9,521</span>
          <span className="pt-2 font-medium text-slate-700">Net income:</span>
          <span className="pt-2 text-right font-mono">$20,639</span>
          <span className="font-medium text-slate-700">Net yield:</span>
          <span className="text-right font-mono font-bold text-emerald-600">3.03%</span>
        </div>
      </div>

      <h3>Example 2: Melbourne Unit — Strata Impact</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Two-bedroom apartment, inner suburb</h4>
        <div className="grid max-w-lg grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Purchase price:</span>
          <span className="text-right font-mono">$520,000</span>
          <span className="text-slate-500">Weekly rent:</span>
          <span className="text-right font-mono">$520</span>
          <span className="text-slate-500">Annual rent:</span>
          <span className="text-right font-mono">$27,040</span>
          <span className="text-slate-500">Gross yield:</span>
          <span className="text-right font-mono font-bold text-blue-600">5.20%</span>
          <span className="text-slate-500">Body corporate:</span>
          <span className="text-right font-mono">$4,800</span>
          <span className="text-slate-500">Other expenses:</span>
          <span className="text-right font-mono">$4,200</span>
          <span className="text-slate-500">Total expenses:</span>
          <span className="text-right font-mono font-bold text-red-500">$9,000</span>
          <span className="font-medium text-slate-700">Net yield:</span>
          <span className="text-right font-mono font-bold text-emerald-600">3.47%</span>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          The gross yield looks attractive at over 5 percent, but body corporate consumes a large
          share of rent. Always request strata minutes and sinking fund plans before assuming
          this net yield will hold.
        </p>
      </div>

      <h3>Example 3: Regional NSW — Higher Gross, Different Risk</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Four-bedroom house, regional city</h4>
        <div className="grid max-w-lg grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Purchase price:</span>
          <span className="text-right font-mono">$420,000</span>
          <span className="text-slate-500">Weekly rent:</span>
          <span className="text-right font-mono">$480</span>
          <span className="text-slate-500">Annual rent:</span>
          <span className="text-right font-mono">$24,960</span>
          <span className="text-slate-500">Gross yield:</span>
          <span className="text-right font-mono font-bold text-blue-600">5.94%</span>
          <span className="text-slate-500">Total expenses (incl. 3 wks vacancy):</span>
          <span className="text-right font-mono">$8,400</span>
          <span className="font-medium text-slate-700">Net yield:</span>
          <span className="text-right font-mono font-bold text-emerald-600">3.94%</span>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Gross yield nearly reaches 6 percent, and net yield approaches 4 percent after expenses.
          Compare against Sydney below: higher yield, lower entry price, but potentially higher
          vacancy and slower long-term capital growth depending on local employment drivers.
        </p>
      </div>

      <h3>Example 4: Sydney House — Growth Market Yield Compression</h3>
      <div className="my-6 overflow-x-auto rounded-xl bg-slate-900 p-5 font-mono text-sm text-slate-100 shadow-inner sm:p-6">
        <p className="text-slate-400">Property value: $1,200,000</p>
        <p className="text-slate-400">Weekly rent: $750 → Annual rent: $39,000</p>
        <p className="mt-2">Gross yield = ($39,000 ÷ $1,200,000) × 100</p>
        <p className="mt-2 text-lg font-bold text-blue-400">= 3.25%</p>
        <p className="mt-4 text-slate-400">Annual expenses: $14,500 (rates, insurance, management, maintenance)</p>
        <p className="mt-2">Net yield = (($39,000 − $14,500) ÷ $1,200,000) × 100</p>
        <p className="mt-2 text-lg font-bold text-emerald-400">= 2.04%</p>
      </div>
      <p>
        Many Sydney investors accept sub-3 percent net yields because they prioritise land scarcity,
        infrastructure, and historical growth. The yield alone would not justify purchase on income
        grounds; the thesis rests on other factors.         Know which camp you are in before bidding.
      </p>
      <p>
        Compare this Sydney outcome to Example 3&apos;s regional property. The regional house
        delivers nearly double the net yield on a much lower capital outlay. Over five years, if
        Sydney values rise 25 percent and regional values rise 10 percent, total return narratives
        may converge despite different yield profiles. Yield-focused holding delivers more income
        along the way; growth-focused holding may deliver less current income but larger capital
        gain at exit. Your calculator inputs should reflect which scenario you are underwriting.
      </p>

      <h2>Sydney vs Regional Comparison</h2>
      <p>
        The tension between Sydney and regional markets illustrates the classic Australian
        property trade-off: income versus growth, liquidity versus affordability. Sydney offers
        deep tenant pools, world-class amenities, and historically strong capital growth in
        desirable corridors, but entry prices push gross yields down and stamp duty on a million-dollar
        plus purchase materially affects total cost. Regional cities such as Ballarat, Newcastle,
        Toowoomba, and parts of South East Queensland offer sub-$500,000 houses with gross yields
        often one to two percentage points higher than Sydney equivalents.
      </p>
      <p>
        Regional investing is not automatically superior because yield is higher. Employment
        concentration matters. A regional centre with diversified healthcare, education, and
        government employment often sustains tenant demand more reliably than a single-industry
        town. Infrastructure commitments such as inland rail, hospital expansions, or university
        growth can support both rents and values, but projects can delay or scale back.
      </p>
      <p>
        Property management distance is another practical factor. Sydney investors buying in
        distant regional areas depend heavily on local managers for inspections and maintenance.
        Factor management quality into due diligence, not just yield spreadsheets. Some investors
        choose regional markets within a two-hour radius of where they live so they can visit
        periodically and maintain oversight.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h4 className="mb-3 font-bold text-slate-800">Sydney metropolitan</h4>
          <ul className="mb-0 space-y-2 text-sm text-slate-600">
            <li>Lower gross and net yields, typically 2.5 to 4 percent gross on houses</li>
            <li>Higher purchase and stamp duty costs</li>
            <li>Strong long-term demand and resale liquidity</li>
            <li>Often negatively geared when leveraged</li>
            <li>Units may yield more than houses on a percentage basis</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h4 className="mb-3 font-bold text-slate-800">Regional markets</h4>
          <ul className="mb-0 space-y-2 text-sm text-slate-600">
            <li>Higher gross yields, often 5 to 6.5 percent plus on houses</li>
            <li>Lower entry prices and stamp duty</li>
            <li>Variable growth history; research local economy</li>
            <li>Potentially positive or neutral cash flow with moderate leverage</li>
            <li>Thinner sales markets may mean longer time on market when selling</li>
          </ul>
        </div>
      </div>
      <p>
        Migration patterns since the pandemic shifted some investor attention toward lifestyle
        regional centres as remote work normalised. That demand pulse raised regional prices and
        compressed yields in popular towns such as parts of the Sunshine Coast hinterland and
        Victoria&apos;s surf coast. The lesson is that regional yield advantages erode when
        everyone pursues them simultaneously. Entry timing and local economic depth matter as much
        as the starting yield percentage on the spreadsheet.
      </p>
      <p>
        Stamp duty differences amplify the comparison. Purchasing a $450,000 regional house
        attracts substantially less transfer duty than a $1.1 million Sydney townhouse in most
        states, meaning less capital is trapped in sunk acquisition costs and more can go toward
        deposit or reserves. Include stamp duty in your holistic return picture even though standard
        yield formulas exclude it. Lower duty plus higher yield can produce superior cash-on-cash
        returns in year one even before capital growth is considered.
      </p>

      <h2>Due Diligence Checklist</h2>
      <p>
        Before relying on any yield figure, work through a structured due diligence process. Yield
        calculated from overstated rent or understated expenses is worse than useless because it
        creates false confidence.
      </p>

      <ol className="list-decimal marker:font-semibold marker:text-blue-600">
        <li>
          <strong>Verify rent with evidence.</strong> Request current lease, rental ledger, or
          independent property manager appraisal. Compare against at least three similar listings
          on the same street or in the same building.
        </li>
        <li>
          <strong>Inspect the property and building.</strong> Deferred maintenance will erode net
          yield quickly. For strata, read minutes for special levy discussions, defect claims, and
          cladding or waterproofing issues.
        </li>
        <li>
          <strong>Quantify all holding costs.</strong> Obtain council rate notices, insurance
          quotes, body corporate statements, and land tax estimates based on your total holdings.
        </li>
        <li>
          <strong>Model vacancy realistically.</strong> Ask local managers about average days
          vacant between tenants in that pocket. University suburbs and holiday areas may differ
          from family suburbs.
        </li>
        <li>
          <strong>Check planning and zoning.</strong> Overlays, flood mapping, and proposed
          developments can affect tenant appeal and insurance. Major road or rail projects can
          help or hurt depending on stage and proximity.
        </li>
        <li>
          <strong>Understand the tenant profile.</strong> Families, professionals, and long-term
          renters often provide stability. Short-term letting restrictions in some strata schemes
          can block strategies that appear yield-enhancing on paper.
        </li>
        <li>
          <strong>Stress-test interest rates.</strong> Yield does not include mortgage costs, but
          you must afford repayments if rates rise. Add one to two percentage points to current
          rates in your cash flow test.
        </li>
        <li>
          <strong>Review tax with your accountant.</strong> Depreciation, GST generally not
          applying to residential rent, and land tax aggregation are specialist topics worth
          professional advice before settlement.
        </li>
      </ol>

      <h2>Common Mistakes When Assessing Yield</h2>

      <div className="my-6 space-y-4">
        {[
          {
            n: '1',
            title: 'Using gross yield as the final decision metric',
            desc: 'A flashy 5.8 percent gross figure means little if body corporate, maintenance, and vacancy consume two points. Always calculate net yield before comparing deals.',
          },
          {
            n: '2',
            title: 'Trusting seller or agent rent projections',
            desc: 'Developers and vendors sometimes quote "expected rent" above market. Independent appraisals from two property managers protect you from inflated numerators.',
          },
          {
            n: '3',
            title: 'Ignoring irregular capital expenses',
            desc: 'Roof replacement, lift modernisation, and major plumbing are not annual costs but destroy returns when they land. Review sinking funds and building age.',
          },
          {
            n: '4',
            title: 'Forgetting land tax',
            desc: 'Investors who already own land in the same state may cross thresholds with a new purchase, adding thousands in annual cost absent from generic yield calculators.',
          },
          {
            n: '5',
            title: 'Comparing unlike properties',
            desc: 'Yield on a studio unit and a four-bedroom house on an acre are not interchangeable benchmarks even in the same postcode. Match property type and target tenant.',
          },
          {
            n: '6',
            title: 'Chasing yield in declining economies',
            desc: 'Very high advertised yields sometimes reflect falling values rather than rising rents. Investigate whether price drops inflated the percentage artificially.',
          },
        ].map((item) => (
          <div key={item.n} className="flex gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
              {item.n}
            </div>
            <div>
              <h4 className="mb-1 font-bold text-slate-800">{item.title}</h4>
              <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Frequently Asked Questions</h2>

      <div className="my-6 space-y-4">
        {[
          {
            q: 'What is a good gross rental yield in Australia?',
            a: 'For capital city houses, gross yields between 3.5 and 5 percent are common depending on location. Many income-focused investors prefer gross yields above 5 percent in regional or outer metropolitan markets. Context, strategy, and net yield matter more than any single benchmark.',
          },
          {
            q: 'Should I use purchase price or current value for yield?',
            a: 'Use purchase price when evaluating a new acquisition so you compare rent to what you actually pay. Use current market value when reviewing portfolio performance over time. Be consistent when comparing multiple properties.',
          },
          {
            q: 'Does rental yield include loan repayments?',
            a: 'No. Standard gross and net rental yield exclude mortgage principal and interest. Loan costs affect cash flow and tax but sit outside the yield formula. Use cash-on-cash return if you want a post-financing metric.',
          },
          {
            q: 'How do I account for vacancy in the calculator?',
            a: 'Either reduce weekly rent to an effective annual figure after vacancy, or add a vacancy dollar amount to annual expenses. Do not do both. Three weeks of vacancy on $600 weekly rent equals $1,800 in lost income.',
          },
          {
            q: 'Is negative gearing bad?',
            a: 'Negative gearing is neither inherently good nor bad. It means rental losses reduce taxable income. Whether that suits you depends on cash flow capacity, tax rate, growth expectations, and risk tolerance. Low yield properties are often negatively geared when leveraged.',
          },
          {
            q: 'Why do apartments sometimes show higher yields than houses?',
            a: 'Units often have lower entry prices relative to rent, especially in investor-heavy developments. However, body corporate fees and competition from similar units can compress net yield. Compare net, not gross, and assess oversupply risk.',
          },
          {
            q: 'Can yield change after I buy?',
            a: 'Yes. Rent can increase at lease renewal, values can move with the market, and expenses such as rates and insurance rise over time. Recalculate yield periodically to track performance against your original assumptions.',
          },
          {
            q: 'Should I include depreciation in net yield expenses?',
            a: 'Standard net yield excludes depreciation because it is a non-cash tax deduction. Some advanced analyses adjust for it when modelling after-tax returns, but our calculator uses actual cash expenses only.',
          },
          {
            q: 'How does stamp duty affect yield?',
            a: 'Stamp duty increases your total acquisition cost but is not part of the standard yield formula, which uses property value as entered. For a conservative view, add stamp duty to your value input so yield reflects true capital deployed.',
          },
          {
            q: 'Are regional yields always better than city yields?',
            a: 'Regional gross yields are often higher, but net yields may converge after expenses and vacancy. Regional markets can carry higher risk from economic concentration and lower liquidity. Higher yield compensates for some of that risk but not all of it.',
          },
        ].map((item) => (
          <div key={item.q} className="rounded-xl border border-slate-100 bg-slate-50/50 p-5">
            <h4 className="mb-2 font-bold text-slate-800">{item.q}</h4>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">{item.a}</p>
          </div>
        ))}
      </div>

      <h2>Putting It All Together</h2>
      <p>
        Rental yield is the foundation of income analysis for Australian investment property, but
        it is only the beginning. Start with gross yield to screen suburbs and listings quickly.
        Move to net yield by subtracting realistic expenses including council rates, insurance,
        management, maintenance, body corporate, land tax where relevant, and a vacancy allowance.
        Compare your net yield to borrowing costs, alternative investments, and your personal
        cash flow capacity. Consider whether you are investing for income, growth, or a balance of
        both, and whether negative gearing tax benefits materially change your after-tax position.
      </p>
      <p>
        Use our rental yield calculator to model properties you are researching, but treat the
        output as one input among many. Walk the street, read the strata minutes, speak to local
        property managers, and stress-test assumptions before you sign a contract. The investors who
        fare best over decades are rarely those who chase the highest headline yield. They are the
        ones who understand exactly what their yield number means, what it leaves out, and whether
        it supports the strategy they are actually trying to execute.
      </p>

      <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4 text-sm text-slate-700 sm:p-5">
        <strong>Disclaimer:</strong> This guide is general information only and does not constitute
        financial, tax, or legal advice. Rental yields vary by property and market conditions.
        Consult a qualified professional before making investment decisions.
      </div>
    </div>
  );
}
