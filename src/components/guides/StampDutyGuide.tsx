export default function StampDutyGuide() {
  return (
    <div className="guide-article">
      <p className="guide-intro">
        When you buy residential property in Australia, one of the largest upfront costs after the
        deposit is stamp duty — also called transfer duty or conveyance duty depending on your
        state or territory. Stamp duty is a tax levied by state and territory governments on the
        transfer of land and buildings, and the amount you pay can differ by tens of thousands of
        dollars depending on where you buy, how much you pay, whether you are a first home buyer,
        and whether the property is for owner-occupation or investment. This guide explains what
        stamp duty is, when it is payable, how it is calculated across every Australian jurisdiction,
        what to enter into our stamp duty calculator, and practical strategies — including first
        home buyer concessions, off-the-plan purchases, pensioner relief, and common mistakes to
        avoid. Rates and thresholds change regularly; always confirm current figures with your
        state revenue office before exchanging contracts.
      </p>

      <h2>What Is Stamp Duty?</h2>
      <p>
        Stamp duty is a government tax charged when ownership of real property changes hands. In
        Australia, it is administered separately by each state and territory rather than by the
        Commonwealth, which is why a buyer in Sydney faces different rules and rates than a buyer
        in Melbourne, Brisbane, Perth, or Darwin. The tax applies to the dutiable value of the
        transaction — usually the greater of the purchase price and the market value of the
        property — and is calculated using progressive rate scales. As the purchase price increases,
        higher marginal rates apply to the portion of value within each bracket, similar in concept
        to income tax brackets but applied to property value bands.
      </p>
      <p>
        The name &quot;stamp duty&quot; reflects historical practice: legal documents recording
        property transfers were stamped to show tax had been paid. Today the process is electronic,
        but the term persists alongside &quot;transfer duty&quot; (NSW, QLD, WA), &quot;land
        transfer duty&quot; (VIC), &quot;conveyance duty&quot; (ACT), and plain &quot;stamp
        duty&quot; (SA, TAS, NT). Regardless of label, the economic effect is the same — an
        additional cost of buying property that must be budgeted alongside legal fees, building
        inspections, loan establishment costs, and lenders mortgage insurance where applicable.
      </p>
      <p>
        Stamp duty is generally payable by the purchaser, not the vendor. In practice your solicitor
        or conveyancer calculates the amount, lodges the transfer documents with the revenue office,
        and arranges payment at or before settlement. Failure to pay on time can result in interest
        penalties and delay in registration of your title. Some buyers mistakenly assume stamp duty
        is included in the advertised property price; it is not. It is a separate transaction cost
        that can represent three to five percent of the purchase price for a typical home in many
        jurisdictions, and significantly more for foreign purchasers subject to surcharges.
      </p>

      <h2>When Is Stamp Duty Payable?</h2>
      <p>
        Stamp duty liability generally arises when a dutiable transaction occurs — most commonly
        when you sign a contract to purchase residential land or a home, or when you acquire a
        substantial interest in property through other means such as a declaration of trust or
        certain lease arrangements. The critical date for assessment is usually the date of the
        contract or the date of transfer, depending on jurisdiction and transaction type; your
        conveyancer will confirm which event triggers liability in your state.
      </p>
      <p>
        Payment timing varies. In New South Wales, duty is typically due within three months of
        signing the contract, or earlier if settlement occurs first. Victoria generally requires
        payment within 30 days of settlement. Queensland links payment to settlement in most
        residential purchases. Western Australia, South Australia, Tasmania, the ACT, and the
        Northern Territory each have their own due dates and lodgement requirements. Off-the-plan
        purchases may defer part or all of duty until settlement or occupation, depending on
        eligibility for deferral schemes — a significant cash-flow advantage for buyers of new
        apartments who might otherwise pay duty on the full contract price years before they move in.
      </p>
      <p>
        Stamp duty applies to established homes, newly built homes, vacant land, and in many cases
        units and townhouses. Commercial property, primary production land, and certain charitable
        transfers may be taxed differently or exempt. Gifts of property between related parties,
        transfers pursuant to family court orders, and deceased estate transfers can also trigger
        duty, sometimes at market value even where no money changes hands. If you are not buying
        on the open market — for example, receiving property from a family member — seek advice
        early because concessional treatment is limited and errors are costly.
      </p>

      <div className="my-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5 sm:p-6">
        <h4 className="mb-2 font-bold text-amber-900">Important Timing Note</h4>
        <p className="mb-0 text-sm text-amber-900/80">
          Budget for stamp duty at exchange of contracts, not only at settlement. Some states require
          duty to be paid or secured before settlement can proceed. First home buyer concessions
          must be claimed within statutory timeframes and may require evidence of eligibility such
          as prior ownership history and occupancy intentions.
        </p>
      </div>

      <h2>How Stamp Duty Is Calculated</h2>
      <p>
        Although every jurisdiction uses progressive brackets, the mechanics differ in detail. The
        universal principle is that you apply the rate for each bracket only to the portion of the
        dutiable value falling within that band, then sum the results. A property priced at $600,000
        does not attract a single flat percentage on the entire amount; instead, the first portion
        might be taxed at a low rate, the next portion at a higher rate, and so on until the full
        price is covered.
      </p>
      <p>
        Many states also apply premium or top-tier rates on the portion of value above high
        thresholds. New South Wales applies a premium rate above approximately $3.636 million.
        Victoria applies a premium stamp duty rate on the portion above $960,000 for residential
        property. These premium bands materially increase duty on luxury homes and should be
        modelled separately when comparing high-end purchases across cities.
      </p>
      <p>
        Concessions and exemptions modify the base calculation. First home buyer schemes may
        eliminate duty entirely below a threshold, apply a sliding concession between two thresholds,
        or replace standard rates with concessional schedules. Owner-occupier concessions in
        Queensland reduce duty compared with investment purchases on the same price. Foreign buyer
        surcharges add a flat percentage of the dutiable value on top of standard duty for
        non-Australian citizens and permanent residents who do not meet exemptions, and in some
        states certain temporary visa holders are also captured. The surcharge is not a replacement
        for standard duty; it is an additional impost.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/40 p-5 shadow-sm sm:p-8">
        <div className="space-y-4 text-center">
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            Dutiable Value = Greater of (Contract Price, Market Value)
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Then</span>
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
          </div>
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            Base Duty = Sum of (Value in Each Bracket × Marginal Rate)
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Then</span>
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
          </div>
          <p className="inline-block rounded-xl border border-blue-100 bg-white px-5 py-3 font-mono text-base font-bold text-blue-600 shadow-sm sm:text-lg">
            Total Duty = Base Duty − Concessions + Foreign Surcharge (if applicable)
          </p>
        </div>
      </div>

      <h2>Owner-Occupier vs Investment Property</h2>
      <p>
        Whether you intend to live in the property or rent it out affects stamp duty in several
        jurisdictions. Queensland distinguishes clearly: the home concession applies to property
        you will occupy as your principal place of residence, while investment buyers pay transfer
        duty at general rates without that concession — which can mean thousands of dollars more on
        the same purchase price. Other states treat owner-occupier and investor purchases similarly
        for standard duty purposes but restrict first home buyer benefits to owner-occupiers who
        will live in the home for a minimum period, commonly six to twelve months depending on the
        scheme.
      </p>
      <p>
        Selecting &quot;investment property&quot; in a calculator when you plan to live in the home
        may overstate duty if your state offers owner-occupier concessions you would actually
        receive. Conversely, declaring owner-occupier to obtain a concession and then immediately
        leasing the property can breach eligibility conditions, trigger clawback of the benefit, and
        expose you to penalties. Revenue offices cross-check occupancy declarations and may audit
        transfers within the required live-in period.
      </p>
      <p>
        For portfolio investors acquiring a second or subsequent property, full standard rates apply
        plus any foreign surcharge if applicable. Stamp duty is not deductible against rental income
        in the way ongoing property expenses are; it forms part of the cost base for capital gains
        tax purposes when you eventually sell, which reduces CGT liability but does not provide an
        immediate tax offset. Factor duty into your yield calculations and cash-on-cash return
        analysis before committing to an investment purchase.
      </p>

      <h2>Foreign Buyer Surcharges</h2>
      <p>
        Australian states and territories impose additional duty on certain foreign persons acquiring
        residential property. These surcharges are designed to moderate foreign demand in residential
        markets and to align with land tax surcharges applied to foreign owners. A foreign person
        typically includes non-Australian citizens who are not permanent residents, certain
        foreign-controlled corporations and trusts, and in some jurisdictions temporary visa holders
        who do not qualify for exemptions.
      </p>
      <p>
        Approximate surcharge rates as commonly applied include: New South Wales 9 percent, Victoria
        8 percent, Queensland 8 percent, South Australia 7 percent, Western Australia 7 percent,
        Tasmania 8 percent, and the ACT 8 percent foreign ownership surcharge on dutiable
        acquisitions. The Northern Territory does not currently impose a separate foreign acquirer
        stamp duty surcharge equivalent to the eastern states, though policy can change. The
        surcharge is calculated on the dutiable value in addition to standard transfer duty, so a
        foreign buyer in NSW on an $800,000 home might pay standard duty plus $72,000 surcharge
        before considering any other fees.
      </p>
      <p>
        Exemptions exist for some visa categories, diplomatic purchases, and certain corporate
        restructures. New Zealand citizens holding special category visas have historically received
        treatment closer to domestic buyers in some states but rules should be verified at the time
        of purchase. Our calculator focuses on domestic standard rates and simplified first home
        concessions; foreign purchasers should obtain a formal assessment from the relevant revenue
        office and specialist migration-aware legal advice.
      </p>

      <div className="my-6 rounded-xl border border-red-100 bg-red-50/50 p-5 sm:p-6">
        <h4 className="mb-2 font-bold text-red-900">Foreign Buyer Warning</h4>
        <p className="mb-0 text-sm text-red-900/80">
          Foreign investment approval from the Foreign Investment Review Board may be required in
          addition to stamp duty. FIRB application fees are separate from state duty and can be
          substantial on higher-value properties. Non-compliance with FIRB rules carries civil and
          criminal penalties independent of revenue office obligations.
        </p>
      </div>

      <h2>What to Enter in the Stamp Duty Calculator</h2>
      <p>
        Our stamp duty calculator provides an approximate estimate based on simplified progressive
        rate tables and basic first home buyer concessions for selected states. To use it
        effectively, enter accurate inputs and understand what the tool does and does not model.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            title: 'Property purchase price',
            desc: 'Enter the contract price or expected purchase price in dollars. For off-the-plan purchases where deferral applies, enter the full contract price to see ultimate duty liability even if payment is deferred. Include the value of chattels only if they form part of the dutiable transaction in your state.',
          },
          {
            title: 'State or territory',
            desc: 'Select the jurisdiction where the property is located. Duty rates and concessions are not transferable between states. A property on the NSW side of a border pays NSW duty even if you live in Victoria.',
          },
          {
            title: 'First home buyer',
            desc: 'Select Yes only if you have never owned residential property in Australia (subject to state-specific definitions including partial interests and spouses) and intend to occupy the home as your principal residence. The calculator applies simplified concessions for NSW, VIC, and QLD only.',
          },
          {
            title: 'Property type',
            desc: 'Choose Owner-Occupier if you will live in the property. Choose Investment Property if you will rent it out. Investment selection may affect results in jurisdictions where owner-occupier concessions apply, though our simplified model primarily uses this flag alongside first home status.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-1.5 font-bold text-blue-600">{item.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        The calculator output shows estimated stamp duty, duty as a percentage of purchase price,
        and total purchase cost including duty. Results are indicative only. They do not include
        foreign buyer surcharges, mortgage registration fees, transfer registration fees, legal
        costs, or premium property duty bands in full detail. Always verify with Revenue NSW,
        State Revenue Office Victoria, Queensland Revenue Office, WA Department of Finance,
        RevenueSA, State Revenue Office Tasmania, ACT Revenue Office, or Territory Revenue Office
        before relying on figures for budgeting or finance approval.
      </p>

      <h2>First Home Buyer Concessions Overview</h2>
      <p>
        Every state and territory offers some form of assistance to eligible first home buyers,
        ranging from full exemptions to sliding concessions, grants, and shared equity schemes.
        Eligibility universally requires that you have not previously owned residential property in
        Australia, though definitions differ — some states treat ownership of an interest above a
        threshold percentage as disqualifying, and spousal ownership history is aggregated. Most
        schemes require you to occupy the home as your principal place of residence for a minimum
        period after purchase, typically six or twelve months.
      </p>
      <p>
        New South Wales offers a First Home Buyer Assistance scheme with full exemption on new and
        existing homes up to $800,000 and a concessional rate on purchases between $800,000 and
        $1,000,000. Victoria provides full exemption up to $600,000 and concession up to $750,000
        for eligible first home buyers purchasing below certain thresholds with separate treatment
        for regional purchases. Queensland offers first home concession reducing duty to zero for
        homes up to $550,000 and partial concession up to $550,000 for vacant land in some cases.
        Western Australia provides concessional first home owner rates with nil duty up to
        approximately $430,000 for eligible buyers and tapering relief to around $530,000.
      </p>
      <p>
        South Australia exempts first home buyers from stamp duty on eligible new homes and
        substantially reduces duty on eligible vacant land. Tasmania offers a fifty percent duty
        reduction for eligible first home buyers up to certain price caps. The ACT operates an
        income-tested Home Buyer Concession Scheme that can eliminate conveyance duty for eligible
        purchasers below income thresholds. The Northern Territory provides a first home owner
        discount reducing duty by up to approximately $18,601 on eligible purchases below price
        caps. Thresholds and caps change with each budget — treat the figures in this guide as
        structural descriptions rather than exact current dollar amounts.
      </p>

      <h2>State-by-State Stamp Duty Guide</h2>
      <p>
        The following sections summarise how stamp duty operates in each Australian jurisdiction.
        Rates are described structurally; confirm current brackets and thresholds with the official
        revenue office before exchange.
      </p>

      <h3>New South Wales (NSW)</h3>
      <p>
        Revenue NSW administers transfer duty on property transactions in New South Wales. Standard
        rates apply progressively from a zero or low-rate initial bracket through to rates of
        approximately 5.5 percent on the highest bands, with a premium property duty rate of 7
        percent on the portion of residential value exceeding about $3.636 million. Transfer duty
        is calculated on the dutiable value, which includes land and improvements but may exclude
        certain chattels if correctly itemised.
      </p>
      <p>
        First home buyers purchasing a new or existing home may receive full exemption where the
        value does not exceed $800,000, and a concessional rate where the value falls between
        $800,000 and $1,000,000. The concession operates as a sliding scale — duty increases as
        price approaches the upper cap. Buyers must meet residency, occupancy, and prior ownership
        tests. The First Home Owner Grant may also apply to new builds separately from duty
        concessions.
      </p>
      <p>
        Foreign persons pay an additional purchaser duty of 9 percent on the dutiable value. NSW
        also imposes duty on certain off-the-plan purchases with deferral available until 12 months
        after completion or earlier occupation in eligible cases. Premium rate properties in
        eastern suburbs and harbour precincts can attract duty exceeding $200,000 on multi-million
        dollar acquisitions before surcharge.
      </p>

      <div className="my-5 rounded-r-xl border-l-4 border-blue-400 bg-white p-5 shadow-sm">
        <h4 className="mb-1 font-bold text-slate-800">NSW Quick Reference</h4>
        <ul className="mb-0 space-y-1 text-sm text-slate-600">
          <li>Revenue authority: Revenue NSW</li>
          <li>First home full exemption: up to approximately $800,000</li>
          <li>First home partial concession: approximately $800,000 to $1,000,000</li>
          <li>Foreign purchaser surcharge: 9 percent</li>
          <li>Premium duty: 7 percent on portion above approximately $3.636 million</li>
        </ul>
      </div>

      <h3>Victoria (VIC)</h3>
      <p>
        The State Revenue Office Victoria collects land transfer duty on Victorian property. The
        general rate schedule progresses through multiple brackets to a top marginal rate, with a
        premium stamp duty rate of 6.5 percent applying to the dutiable value portion above
        $960,000 for residential property. This premium threshold was lowered from a previous higher
        cap, increasing duty on upper-mid-market homes in Melbourne suburbs that previously avoided
        premium treatment.
      </p>
      <p>
        Eligible first home buyers receive full exemption on purchases up to $600,000 and a
        concessional reduction for purchases between $600,000 and $750,000. Separate off-the-plan
        concessions may apply a concession calculated on the post-construction dutiable value or
        allow deferral until settlement. Regional first home buyer duty concessions have applied
        in designated regional local government areas with higher thresholds than metropolitan
        Melbourne, reflecting policy aims to decentralise population growth.
      </p>
      <p>
        Foreign purchasers pay additional duty of 8 percent. Temporary visa holders should check
        whether they are classified as foreign for surcharge purposes. Victoria also operates a
        windfall gains tax on rezoned land separate from stamp duty on ordinary purchases — do not
        confuse the two when acquiring development sites.
      </p>

      <div className="my-5 rounded-r-xl border-l-4 border-emerald-400 bg-white p-5 shadow-sm">
        <h4 className="mb-1 font-bold text-slate-800">Victoria Quick Reference</h4>
        <ul className="mb-0 space-y-1 text-sm text-slate-600">
          <li>Revenue authority: State Revenue Office Victoria</li>
          <li>First home full exemption: up to approximately $600,000</li>
          <li>First home partial concession: approximately $600,000 to $750,000</li>
          <li>Foreign purchaser surcharge: 8 percent</li>
          <li>Premium duty: 6.5 percent on portion above $960,000</li>
        </ul>
      </div>

      <h3>Queensland (QLD)</h3>
      <p>
        Queensland Revenue Office administers transfer duty with distinct treatment for home
        concessions versus general transfer duty. Owner-occupiers purchasing a residence to live in
        may access the home concession, which reduces duty compared with the general rate that
        applies to investors buying an identical property at an identical price. This dual-rate
        structure makes Queensland particularly sensitive to the owner-occupier versus investment
        distinction in your calculator inputs.
      </p>
      <p>
        First home concessions can reduce duty to zero for eligible first home buyers purchasing a
        home up to $550,000, with a partial concession available up to higher thresholds for homes
        and separate treatment for vacant land intended for first home construction. Eligibility
        requires Australian citizenship or permanent residency in most cases and compliance with
        occupancy conditions. The Queensland First Home Owners Grant provides separate cash
        assistance for new builds.
      </p>
      <p>
        Additional foreign acquirer duty of 8 percent applies to foreign persons. Queensland&apos;s
        transfer duty brackets include a zero-rate initial band on lower values, making duty on
        modest regional properties relatively affordable compared with Sydney and Melbourne
        equivalents. However, strong price growth on the Gold Coast and Sunshine Coast has pushed
        many purchases above first home concession caps where buyers still face substantial duty.
      </p>

      <div className="my-5 rounded-r-xl border-l-4 border-orange-400 bg-white p-5 shadow-sm">
        <h4 className="mb-1 font-bold text-slate-800">Queensland Quick Reference</h4>
        <ul className="mb-0 space-y-1 text-sm text-slate-600">
          <li>Revenue authority: Queensland Revenue Office</li>
          <li>Home concession: lower duty for owner-occupiers vs investors</li>
          <li>First home concession: nil duty up to approximately $550,000 (home)</li>
          <li>Foreign acquirer duty: 8 percent</li>
          <li>Top general rate: approximately 5.75 percent on highest band</li>
        </ul>
      </div>

      <h3>Western Australia (WA)</h3>
      <p>
        The WA Department of Finance administers transfer duty through the Office of State Revenue.
        Standard rates progress through brackets with a top rate of approximately 5.15 percent on
        high-value portions. Western Australia&apos;s market includes significant mining-region
        variation in prices; duty scales apply uniformly by value regardless of location, unlike
        some regional concession policies in eastern states.
      </p>
      <p>
        First home owner rate of duty provides nil or heavily reduced duty for eligible first home
        buyers up to approximately $430,000, with a tapering concession extending to around
        $530,000. Above the upper threshold, standard rates apply in full. The First Home Owner
        Grant in WA provides separate cash assistance for new builds. Eligibility mirrors other
        states: prior ownership tests, occupancy requirements, and citizenship or permanent
        residency conditions.
      </p>
      <p>
        Foreign buyers pay a foreign buyer duty of 7 percent in addition to standard transfer duty.
        WA has historically offered relatively accessible first home thresholds compared with Sydney
        and Melbourne, though Perth median prices have risen and more buyers now exceed concessional
        caps. Off-the-plan purchases may qualify for deferral arrangements — confirm with your
        conveyancer whether duty is assessed on the contract price at exchange or on the value at
        settlement after construction.
      </p>

      <div className="my-5 rounded-r-xl border-l-4 border-violet-400 bg-white p-5 shadow-sm">
        <h4 className="mb-1 font-bold text-slate-800">Western Australia Quick Reference</h4>
        <ul className="mb-0 space-y-1 text-sm text-slate-600">
          <li>Revenue authority: WA Department of Finance / OSR</li>
          <li>First home nil duty: up to approximately $430,000</li>
          <li>First home taper: up to approximately $530,000</li>
          <li>Foreign buyer duty: 7 percent</li>
          <li>Top marginal rate: approximately 5.15 percent</li>
        </ul>
      </div>

      <h3>South Australia (SA)</h3>
      <p>
        RevenueSA administers stamp duty on property transfers in South Australia. The rate
        schedule features numerous narrow brackets by historical design, progressing to a top rate
        of 5.5 percent on the highest value band. Adelaide&apos;s relatively moderate median prices
        compared with east coast capitals mean many buyers face mid-bracket marginal rates rather
        than top-tier rates.
      </p>
      <p>
        First home buyer relief in SA has included full stamp duty exemption on eligible new homes
        and substantial relief on vacant land intended for first home construction, with price caps
        and eligibility criteria updated in recent budgets. Established home purchases by first
        home buyers may receive different treatment than new builds — check current policy
        distinguishing between new and existing stock.
      </p>
      <p>
        Foreign ownership surcharge duty of 7 percent applies to foreign persons acquiring
        residential land. SA also offers off-the-plan stamp duty concession arrangements for
        eligible apartment purchases, deferring or reducing duty when buying before construction
        completes. Pensioners may access concessions in limited circumstances when downsizing or
        moving to retirement accommodation, though schemes are narrower than first home programs.
      </p>

      <div className="my-5 rounded-r-xl border-l-4 border-pink-400 bg-white p-5 shadow-sm">
        <h4 className="mb-1 font-bold text-slate-800">South Australia Quick Reference</h4>
        <ul className="mb-0 space-y-1 text-sm text-slate-600">
          <li>Revenue authority: RevenueSA</li>
          <li>First home: exemptions on eligible new homes and land (caps apply)</li>
          <li>Foreign ownership surcharge: 7 percent</li>
          <li>Top marginal rate: 5.5 percent</li>
          <li>Off-the-plan concessions available for eligible purchases</li>
        </ul>
      </div>

      <h3>Tasmania (TAS)</h3>
      <p>
        The State Revenue Office Tasmania collects duty on property transfers. Tasmania uses a
        progressive schedule with a top rate of 4.5 percent on higher bands — lower than most
        mainland states&apos; top marginal rates, though the bracket structure means effective rates
        on mid-priced Hobart homes remain material. Strong migration and limited supply have
        increased Hobart prices substantially over the past decade, pushing more purchases into
        higher brackets.
      </p>
      <p>
        Eligible first home buyers may receive a fifty percent reduction in duty on purchases up to
        approximately $600,000, and a partial reduction up to $750,000 under the first home duty
        concession. The First Home Owner Grant provides additional assistance for new builds.
        Tasmania&apos;s concession is structured as a percentage reduction rather than a full
        exemption at lower thresholds, which produces different dollar outcomes compared with NSW or
        Victoria nil-duty caps.
      </p>
      <p>
        Foreign investor duty of 8 percent applies to foreign persons acquiring residential property.
        Tasmania&apos;s smaller market means fewer off-the-plan developments than mainland capitals,
        but duty on land-plus-build packages in growth corridors still follows standard assessment
        rules. Verify whether chattels and fixtures are correctly allocated in the contract to avoid
        overpaying duty on removable items.
      </p>

      <div className="my-5 rounded-r-xl border-l-4 border-teal-400 bg-white p-5 shadow-sm">
        <h4 className="mb-1 font-bold text-slate-800">Tasmania Quick Reference</h4>
        <ul className="mb-0 space-y-1 text-sm text-slate-600">
          <li>Revenue authority: State Revenue Office Tasmania</li>
          <li>First home: 50 percent duty reduction up to approximately $600,000</li>
          <li>Partial first home reduction: up to approximately $750,000</li>
          <li>Foreign investor duty: 8 percent</li>
          <li>Top marginal rate: 4.5 percent</li>
        </ul>
      </div>

      <h3>Australian Capital Territory (ACT)</h3>
      <p>
        The ACT Revenue Office administers conveyance duty on territory property transactions. The
        ACT has pursued a long-term policy of phasing out stamp duty for owner-occupiers, replacing
        it over time with higher general rates land tax on investment properties — a structural
        reform unlike other jurisdictions. Owner-occupier purchases below certain price thresholds
        may pay nil or reduced conveyance duty under income-tested home buyer concession schemes.
      </p>
      <p>
        The Home Buyer Concession Scheme provides duty-free thresholds for eligible purchasers whose
        household income falls below published caps, with tapering relief above lower thresholds.
        Because eligibility is income-tested rather than purely price-tested, two buyers purchasing
        identical Canberra townhouses may pay different duty based on combined household income.
        Investment property purchases continue to pay full conveyance duty at standard rates.
      </p>
      <p>
        Foreign ownership surcharge of 8 percent applies to foreign persons acquiring residential
        land in the ACT. Unit titles and leasehold land in the territory are dutiable on the
        capital value of the interest acquired. The ACT&apos;s unique transition toward annual
        property tax for some owners means long-term cost comparisons with NSW or Victoria should
        include both upfront duty and ongoing land tax implications for investors.
      </p>

      <div className="my-5 rounded-r-xl border-l-4 border-indigo-400 bg-white p-5 shadow-sm">
        <h4 className="mb-1 font-bold text-slate-800">ACT Quick Reference</h4>
        <ul className="mb-0 space-y-1 text-sm text-slate-600">
          <li>Revenue authority: ACT Revenue Office</li>
          <li>Home Buyer Concession: income-tested nil/reduced duty</li>
          <li>Phasing out duty for owner-occupiers over time</li>
          <li>Foreign ownership surcharge: 8 percent</li>
          <li>Top marginal rate: approximately 6.4 percent on highest band</li>
        </ul>
      </div>

      <h3>Northern Territory (NT)</h3>
      <p>
        Territory Revenue Office administers stamp duty in the Northern Territory. The duty schedule
        uses relatively few brackets with a principal rate of approximately 3.95 percent up to
        $525,000, 4.95 percent on the portion between $525,000 and $3 million, and 5.95 percent
        above $3 million for the general formula — producing lower headline rates than many states
        though Darwin prices and bracket thresholds determine effective outcomes.
      </p>
      <p>
        The first home owner discount provides up to approximately $18,601 off stamp duty for
        eligible first home buyers on purchases up to roughly $650,000, with a tapering discount to
        approximately $750,000. Above the upper cap, no first home discount applies. The Northern
        Territory First Home Owner Grant offers separate cash assistance. Eligibility follows standard
        prior ownership and occupancy tests.
      </p>
      <p>
        The Northern Territory does not impose a separate foreign acquirer stamp duty surcharge
        equivalent to the 7 to 9 percent imposts in eastern states at the time of writing, though
        policy may change and foreign buyers still require FIRB approval where applicable. Remote
        and regional NT property markets include unique tenure arrangements; verify dutiable value
        with a local conveyancer when purchasing pastoral or indigenous land lease interests.
      </p>

      <div className="my-5 rounded-r-xl border-l-4 border-slate-400 bg-white p-5 shadow-sm">
        <h4 className="mb-1 font-bold text-slate-800">Northern Territory Quick Reference</h4>
        <ul className="mb-0 space-y-1 text-sm text-slate-600">
          <li>Revenue authority: Territory Revenue Office</li>
          <li>First home discount: up to approximately $18,601 (caps apply)</li>
          <li>No foreign acquirer surcharge equivalent to eastern states (verify current policy)</li>
          <li>Principal rate: approximately 3.95 percent up to $525,000</li>
          <li>Top rate: approximately 5.95 percent above $3 million</li>
        </ul>
      </div>

      <h2>Worked Examples at Different Price Points</h2>
      <p>
        The following illustrative examples use approximate standard rates without first home
        concessions or foreign surcharges. Actual duty depends on current brackets and your
        eligibility. Use our calculator to model your specific scenario.
      </p>

      <h3>Example 1: $500,000 Purchase Price</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Owner-occupier, not first home — indicative comparison</h4>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[320px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="pb-2 font-semibold text-slate-700">Jurisdiction</th>
                <th className="pb-2 text-right font-semibold text-slate-700">Approx. Duty</th>
                <th className="pb-2 text-right font-semibold text-slate-700">Effective Rate</th>
              </tr>
            </thead>
            <tbody className="font-mono text-slate-600">
              <tr className="border-b border-slate-100">
                <td className="py-2">NSW</td>
                <td className="py-2 text-right">$17,500</td>
                <td className="py-2 text-right">3.50%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2">VIC</td>
                <td className="py-2 text-right">$21,000</td>
                <td className="py-2 text-right">4.20%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2">QLD (home)</td>
                <td className="py-2 text-right">$15,500</td>
                <td className="py-2 text-right">3.10%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2">WA</td>
                <td className="py-2 text-right">$17,800</td>
                <td className="py-2 text-right">3.56%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2">NT</td>
                <td className="py-2 text-right">$19,750</td>
                <td className="py-2 text-right">3.95%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          At $500,000, duty typically falls in the $15,000 to $22,000 range for standard
          owner-occupier purchases. An eligible first home buyer in Victoria at this price might pay
          zero duty; in Queensland with home concession, duty may be lower still; in NSW a first home
          buyer receives a substantial reduction but not necessarily full exemption at $500,000
          under current thresholds.
        </p>
      </div>

      <h3>Example 2: $800,000 Purchase Price</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Standard purchase — no concessions</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Purchase price:</span>
          <span className="text-right font-mono">$800,000</span>
          <span className="text-slate-500">NSW approximate duty:</span>
          <span className="text-right font-mono">$31,000</span>
          <span className="text-slate-500">VIC approximate duty:</span>
          <span className="text-right font-mono">$43,500</span>
          <span className="text-slate-500">QLD home concession duty:</span>
          <span className="text-right font-mono">$28,000</span>
          <span className="text-slate-500">QLD investor duty:</span>
          <span className="text-right font-mono text-red-500">$34,000</span>
        </div>
        <p className="my-4 text-sm text-slate-600">
          Victoria&apos;s premium rate threshold at $960,000 means $800,000 sits below premium
          treatment, but marginal rates still produce higher duty than NT or QLD home concession
          scenarios. An eligible NSW first home buyer at exactly $800,000 may receive full exemption
          — saving approximately $31,000 — whereas at $850,000 the same buyer enters the sliding
          concession zone and pays materially more.
        </p>
        <div className="inline-block rounded-lg border border-emerald-100 bg-white px-4 py-2 text-sm shadow-sm">
          First home NSW at $800,000: potential saving of approximately{' '}
          <strong className="font-mono text-emerald-600">$31,000</strong> vs standard duty
        </div>
      </div>

      <h3>Example 3: $1,200,000 Purchase Price</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Upper-mid market — premium rates may apply</h4>
        <div className="space-y-3 text-sm">
          <div className="flex flex-col justify-between gap-1 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center">
            <span className="text-slate-500">NSW standard duty (approx.):</span>
            <span className="font-mono font-semibold">$51,000</span>
          </div>
          <div className="flex flex-col justify-between gap-1 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center">
            <span className="text-slate-500">VIC duty incl. premium band above $960k (approx.):</span>
            <span className="font-mono font-semibold">$66,000</span>
          </div>
          <div className="flex flex-col justify-between gap-1 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center">
            <span className="text-slate-500">Foreign buyer NSW surcharge (9%) additional:</span>
            <span className="font-mono font-semibold text-red-500">$108,000</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          At $1.2 million, duty exceeds $50,000 in all major eastern states for standard buyers.
          Victoria&apos;s premium rate on the $240,000 portion above $960,000 adds roughly $2,400
          compared with applying only standard top rates. Foreign purchasers in NSW would pay
          standard duty near $51,000 plus $108,000 surcharge — total stamp duty near $159,000 before
          legal and registration fees. First home concessions generally do not apply at this price
          except partial NSW concession below $1 million.
        </p>
      </div>

      <h2>Off-the-Plan Purchases</h2>
      <p>
        Buying off the plan means signing a contract to purchase a property before construction is
        complete — common for apartment developments in capital cities. Stamp duty treatment for
        off-the-plan purchases varies by state and can significantly affect when you need cash
        available for duty. Some jurisdictions allow deferral of duty until settlement or within a
        specified period after completion, meaning you might not pay duty at exchange despite
        having committed to the purchase years earlier.
      </p>
      <p>
        Victoria has offered off-the-plan concessions calculating duty on the dutiable value net of
        construction costs incurred after contract date in eligible cases, or deferral until
        settlement. New South Wales provides deferral for eligible off-the-plan purchases until
        completion or earlier occupation. Queensland, South Australia, and Western Australia have
        their own off-the-plan frameworks — eligibility often requires the property to be new, the
        buyer to intend owner-occupation, and the developer to meet compliance conditions.
      </p>
      <p>
        Investors purchasing off the plan generally face less favourable treatment than
        owner-occupiers and may pay duty on the full contract price at exchange or settlement
        without deferral. The dutiable value is usually the contract price; if the market falls
        before settlement, duty is still typically assessed on the contract price unless the
        contract is renegotiated or rescinded under permitted terms — a risk factor in declining
        markets.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            title: 'Deferral advantage',
            desc: 'Deferring duty until settlement frees cash for deposit, deposits on other costs, or investment elsewhere during the construction period. Model both timing and ultimate duty amount.',
          },
          {
            title: 'Sunset clauses',
            desc: 'If a development fails to complete and the contract rescinds, duty may not become payable. If you settle, duty falls due — budget conservatively assuming completion.',
          },
          {
            title: 'Contract variations',
            desc: 'Upgrades and variations that increase price after exchange may trigger additional duty on the uplift. Notify your conveyancer of post-exchange amendments.',
          },
          {
            title: 'Investor distinction',
            desc: 'Off-the-plan concessions frequently exclude pure investors. Selecting investment property in the calculator reflects that many schemes will not apply.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
            <h4 className="mb-2 font-bold text-blue-600">{item.title}</h4>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Pensioner and Downsizer Concessions</h2>
      <p>
        Several states offer stamp duty relief for pensioners, seniors, or downsizers, though schemes
        are generally narrower than first home buyer programs and may require age thresholds,
        pension card status, or purchase of a smaller replacement home. New South Wales has
        operated downsizing concessions for seniors selling and purchasing lower-value homes.
        South Australia and Victoria have offered targeted relief in specific budget years. Western
        Australia provides concessions for eligible seniors in defined circumstances.
      </p>
      <p>
        Pensioner concessions often require the purchaser to hold a relevant Centrelink or Department
        of Veterans&apos; Affairs pension card, to purchase below a price cap, and to occupy the new
        home as a principal residence. Relief may take the form of a fixed dollar reduction, a
        percentage concession, or exemption on the portion of duty attributable to the downsizing
        transaction. These schemes change frequently and may be capped by number of transactions
        per year statewide.
      </p>
      <p>
        Do not assume pensioner status automatically reduces duty — verify active schemes with your
        state revenue office at the time of purchase. Our calculator does not model pensioner
        concessions; obtain a formal ruling or use official revenue office calculators where
        available. Separately, the Commonwealth downsizer superannuation contribution scheme allows
        eligible over-55s to contribute home sale proceeds to super — this is not a stamp duty
        concession but is often relevant in the same downsizing decision.
      </p>

      <h2>Tips to Reduce Stamp Duty</h2>
      <p>
        Stamp duty is legally imposed and cannot be avoided through informal arrangements, but
        legitimate planning can reduce liability or improve cash flow timing.
      </p>

      <div className="my-6 space-y-4">
        {[
          {
            n: '1',
            title: 'First home buyer eligibility',
            desc: 'Structure your purchase to qualify for first home concessions if you genuinely meet prior ownership and occupancy tests. Consider whether buying vacant land and building, or purchasing a new versus existing home, affects concession availability in your state.',
          },
          {
            n: '2',
            title: 'Owner-occupier classification',
            desc: 'In Queensland and similar jurisdictions, ensure you claim the home concession if you will occupy the property. Investors on the same price pay materially more.',
          },
          {
            n: '3',
            title: 'Purchase price near threshold boundaries',
            desc: 'Duty concessions often taper at specific caps. A purchase at $605,000 versus $595,000 in Victoria may differ dramatically in duty for a first home buyer. Model prices just below thresholds where appropriate and ethical.',
          },
          {
            n: '4',
            title: 'Off-the-plan deferral',
            desc: 'If buying off the plan as an owner-occupier, use statutory deferral to delay duty payment until settlement, preserving cash during construction.',
          },
          {
            n: '5',
            title: 'Separate chattels in contract',
            desc: 'Negotiate to identify removable chattels — furniture, appliances not fixed — and allocate genuine market value separately where state law permits exclusion from dutiable value. Avoid artificial apportionment; revenue offices scrutinise inflated chattel allocations.',
          },
          {
            n: '6',
            title: 'Joint ownership with eligible buyer',
            desc: 'Where one party qualifies for concessions and another does not, duty may be apportioned by interest share in some circumstances. Specialist advice is essential — improper structuring can constitute avoidance.',
          },
        ].map((s) => (
          <div key={s.n} className="flex gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
              {s.n}
            </div>
            <div>
              <h4 className="mb-1 font-bold text-slate-800">{s.title}</h4>
              <p className="text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-sm text-blue-900">
        <strong>Planning tip:</strong> Include stamp duty in your total funds required when seeking
        loan pre-approval. Lenders do not finance stamp duty — it must come from savings unless
        using other equity or gifts. Underestimating duty is a leading cause of settlement stress.
      </div>

      <h2>Common Mistakes When Estimating Stamp Duty</h2>
      <ol className="space-y-4">
        {[
          {
            title: 'Using the wrong state',
            desc: 'Duty is assessed in the state where the property sits, not where you live or where your lender is headquartered. Border cities like Albury-Wodonga require careful identification of the jurisdiction.',
          },
          {
            title: 'Ignoring foreign surcharge',
            desc: 'Temporary residents and foreign nationals often assume they pay the same duty as citizens. The additional 7 to 9 percent surcharge transforms affordability calculations and must be budgeted from the outset.',
          },
          {
            title: 'Assuming first home status without checking spouse history',
            desc: 'Most states aggregate prior property ownership with a spouse or de facto partner. Prior partial ownership, inherited property, or commercial property interests may disqualify you.',
          },
          {
            title: 'Confusing grants with duty exemptions',
            desc: 'The First Home Owner Grant is cash paid separately — often for new builds — and does not automatically eliminate stamp duty. Concessions and grants have different eligibility rules and caps.',
          },
          {
            title: 'Calculating flat percentage',
            desc: 'Applying a single rate like 4 percent to the entire purchase price overstates or understates duty. Always use progressive brackets or a verified calculator.',
          },
          {
            title: 'Forgetting premium thresholds',
            desc: 'Victoria premium duty above $960,000 and NSW premium above $3.636 million catch buyers who modelled only standard top rates. High-value purchases need bracket-by-bracket analysis.',
          },
          {
            title: 'Missing payment deadlines',
            desc: 'Late payment incurs interest and penalties. Relying on settlement to coincide with duty due dates without conveyancer coordination risks delayed title registration.',
          },
          {
            title: 'Misdeclaring occupancy intention',
            desc: 'Claiming owner-occupier or first home concessions without genuine intent to occupy triggers clawback, penalties, and reputational risk with revenue authorities.',
          },
        ].map((item, i) => (
          <li key={item.title} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 sm:p-5">
            <strong className="text-slate-800">{i + 1}. {item.title}:</strong>{' '}
            <span className="text-slate-600">{item.desc}</span>
          </li>
        ))}
      </ol>

      <h2>Frequently Asked Questions</h2>

      <div className="my-6 space-y-4">
        {[
          {
            q: 'Is stamp duty tax deductible?',
            a: 'For owner-occupiers, stamp duty is not income tax deductible. For investment properties, duty is not deductible against rental income but forms part of the cost base for capital gains tax when you sell, reducing future CGT liability.',
          },
          {
            q: 'Who pays stamp duty — buyer or seller?',
            a: 'The purchaser generally pays stamp duty in all Australian states and territories. Contract terms occasionally address negotiated rebates, but statutory liability rests with the buyer.',
          },
          {
            q: 'Do I pay stamp duty on a gifted property?',
            a: 'Yes, in many cases duty is assessed on market value even when no purchase price is paid, subject to exemptions for certain family transfers and deceased estates. Rules vary — obtain legal advice before accepting a gifted property.',
          },
          {
            q: 'Can I add stamp duty to my home loan?',
            a: 'Some lenders allow capitalising costs if your loan-to-value ratio permits, but stamp duty cannot be borrowed on a standalone basis without lending against equity. Most buyers pay duty from savings.',
          },
          {
            q: 'Does stamp duty apply to vacant land?',
            a: 'Yes. Transfer duty applies to vacant land purchases at rates generally aligned with or specific to land-only transactions. First home concessions on land often have lower price caps than home concessions.',
          },
          {
            q: 'What if I buy at auction?',
            a: 'Signing the contract at auction creates immediate contractual commitment. Duty is calculated on the hammer price plus any applicable buyer premium. Budget duty before bidding, not after.',
          },
          {
            q: 'Are there exemptions for transfers between spouses?',
            a: 'Many states provide partial or full exemption for transfers between spouses or de facto partners in defined circumstances, such as relationship breakdown property settlement transfers. Casual transfers without breakdown may still attract duty.',
          },
          {
            q: 'How often do stamp duty rates change?',
            a: 'State budgets typically occur annually and may adjust brackets, thresholds, and concessions. Major policy reforms — such as ACT duty phase-out — occur over multi-year horizons. Always verify current rates before exchange.',
          },
          {
            q: 'Does building and pest inspection affect stamp duty?',
            a: 'No. Inspection costs are separate buyer expenses. Duty is based on dutiable value of the property interest acquired, not on ancillary purchase costs.',
          },
          {
            q: 'I owned property overseas — am I a first home buyer?',
            a: 'Australian first home buyer schemes generally consider prior ownership of residential property in Australia only, but definitions differ. Overseas ownership may not disqualify you — confirm with your state revenue office.',
          },
        ].map((faq) => (
          <div key={faq.q} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-slate-800">{faq.q}</h4>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">{faq.a}</p>
          </div>
        ))}
      </div>

      <h2>Stamp Duty vs Other Purchase Costs</h2>
      <p>
        Stamp duty is often the largest government charge in a property purchase but not the only
        one. Buyers also face mortgage registration fees, transfer of land registration fees charged
        by land titles offices, legal or conveyancing fees typically ranging from $1,000 to $2,500
        or more for complex transactions, building and pest inspection costs, loan application or
        establishment fees, and lenders mortgage insurance when borrowing above 80 percent
        loan-to-value ratio. Foreign buyers add FIRB application fees and ongoing land tax surcharges
        in several states.
      </p>
      <p>
        When comparing properties across state borders for relocation or investment, construct a
        total cost table including stamp duty, ongoing land tax, insurance, and management costs —
        not headline property prices alone. A $550,000 home in Brisbane with first home concession
        may cost less upfront in duty than a $550,000 home in Melbourne, but ongoing holding costs
        differ by market and ownership structure.
      </p>

      <h2>Using This Guide With the Calculator</h2>
      <p>
        Read the state section relevant to your purchase, confirm your first home and
        owner-occupier status against official eligibility rules, then enter your inputs into the
        stamp duty calculator for an indicative estimate. Cross-check the result with the official
        online calculator published by your state revenue office. Provide the estimate to your
        mortgage broker or bank when demonstrating total funds required, and to your conveyancer
        when they prepare the settlement statement. If you are near a concession threshold, model
        both sides of the threshold before finalising negotiation — a small price difference can
        change duty by tens of thousands of dollars.
      </p>
      <p>
        Property taxation in Australia is complex, politically sensitive, and subject to frequent
        reform. First home buyer assistance, foreign surcharge rates, premium thresholds, and
        off-the-plan deferral rules have all changed within recent budget cycles. This guide
        provides educational context for Australian residents researching transfer duty; it is not
        legal, financial, or tax advice. Consult a qualified conveyancer, solicitor, or accountant
        before exchanging contracts on any property transaction.
      </p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 sm:p-6">
        <p className="mb-0">
          <strong className="text-slate-800">Disclaimer:</strong> Stamp duty rates, thresholds, and
          concessions change regularly and differ by transaction type. Figures in worked examples are
          approximate and for illustration only. Verify all amounts with the relevant state or
          territory revenue office before making financial decisions.
        </p>
      </div>
    </div>
  );
}
