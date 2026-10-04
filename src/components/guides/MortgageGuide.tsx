export default function MortgageGuide() {
  return (
    <div className="guide-article">
      {/* Intro */}
      <p className="guide-intro">
        Buying a home is one of the largest financial commitments most Australians will ever make,
        and understanding how mortgage repayments work is essential before you sign on the dotted
        line. Whether you are a first home buyer saving for a deposit in Sydney, upgrading to a
        larger property in Melbourne, or refinancing an existing loan in Brisbane, your monthly
        repayment amount will shape your household budget for decades. This guide explains how
        Australian home loans work, how principal and interest repayments are calculated, and how
        variables such as interest rates, loan terms, offset accounts, and extra repayments affect
        the total cost of borrowing. Use it alongside our mortgage repayment calculator to model
        different scenarios in AUD and make informed decisions about one of the biggest purchases
        of your life.
      </p>

      <h2>How Mortgages Work in Australia</h2>
      <p>
        A mortgage — also called a home loan in Australia — is a secured loan where the property
        you purchase acts as collateral for the lender. When you borrow money to buy a home, the bank
        or non-bank lender registers a mortgage over the title. If you default on repayments, the
        lender has the legal right to sell the property to recover the outstanding debt. In return
        for taking this risk, the lender charges interest on the amount you owe.
      </p>
      <p>
        Most Australian residential mortgages are full-doc loans, meaning you provide proof of
        income, employment, assets, and liabilities during the application process. Lenders assess
        your borrowing capacity using serviceability tests that typically apply a buffer above the
        actual interest rate — often around three percentage points — to ensure you can still afford
        repayments if rates rise. As of 2025 and 2026, typical variable home loan rates for
        owner-occupiers with a good credit profile and reasonable loan-to-value ratio sit roughly
        between 5.5% and 7% per annum, though advertised rates vary by lender, product, and
        borrower profile.
      </p>
      <p>
        Repayments are usually made monthly, though some lenders offer fortnightly or weekly
        schedules. Each payment comprises two components: interest, which is the cost of borrowing,
        and principal, which reduces the outstanding loan balance. In the early years of a standard
        principal and interest loan, a larger share of each repayment goes toward interest because
        interest is calculated on the remaining balance, which is at its highest at the start of the
        loan. As the balance falls over time, more of each repayment goes toward paying down
        principal — a process called amortisation, covered in detail later in this guide.
      </p>
      <p>
        Australian home loans are regulated under the National Consumer Credit Protection Act, with
        the Australian Securities and Investments Commission (ASIC) and the Australian Prudential
        Regulation Authority (APRA) overseeing lending standards. Responsible lending obligations
        require lenders to make reasonable inquiries about your financial situation and verify that
        a loan is &quot;not unsuitable&quot; before approval. This framework exists to protect
        borrowers from taking on debt they cannot reasonably service.
      </p>

      <div className="my-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5 text-sm text-blue-900 sm:p-6">
        <strong>Key concept:</strong> Your mortgage repayment is not fixed in isolation — it
        depends on the loan amount, interest rate, loan term, repayment type (principal and
        interest or interest-only), and any offset or redraw facilities you use. Small changes to
        any of these inputs can shift your total interest paid by tens or even hundreds of
        thousands of dollars over a 30-year term.
      </div>

      <h2>Principal and Interest vs Interest-Only</h2>
      <p>
        The two main repayment structures available on Australian home loans are principal and
        interest (P&amp;I) and interest-only (IO). Understanding the difference is critical because
        it affects not only your monthly cash flow but also how quickly you build equity and how
        much total interest you pay over the life of the loan.
      </p>

      <h3>Principal and Interest (P&amp;I)</h3>
      <p>
        With a P&amp;I loan, each monthly repayment covers both the interest charged on the
        outstanding balance and a portion of the principal. From day one, your loan balance
        decreases with every payment. Over a standard 30-year term, P&amp;I repayments are
        calculated so that the loan is fully repaid — zero balance — by the end of the term,
        assuming rates and repayments remain unchanged.
      </p>
      <p>
        P&amp;I is the default and most common structure for owner-occupier home loans in Australia.
        Lenders generally prefer it because the risk reduces over time as equity builds. For
        borrowers, the main trade-off is higher initial repayments compared to interest-only, but
        significantly lower total interest over the full loan term.
      </p>

      <h3>Interest-Only (IO)</h3>
      <p>
        An interest-only loan requires you to pay only the interest component for a set period —
        typically one to five years, though some investment loans offer longer IO terms. During this
        period, the principal balance does not reduce unless you make voluntary extra repayments.
        When the IO period ends, the loan usually reverts to P&amp;I repayments, often calculated
        over the remaining term, which can cause a sharp increase in monthly payments.
      </p>
      <p>
        Interest-only loans are more commonly used by property investors who want to maximise cash
        flow and potential tax deductions on interest (consult a tax professional for advice
        specific to your situation). APRA has tightened lending standards on IO loans in recent
        years, and many lenders now restrict IO terms or charge higher rates for IO products.
        Owner-occupiers can access IO loans in some cases, but P&amp;I remains the norm for
        homebuyers living in the property.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h4 className="mb-2 font-bold text-blue-600">Principal &amp; Interest</h4>
          <ul className="mb-0 space-y-1 text-sm text-slate-600">
            <li>Builds equity from the first repayment</li>
            <li>Lower total interest over the loan term</li>
            <li>Higher monthly repayments initially</li>
            <li>Standard for owner-occupiers</li>
            <li>Loan fully repaid at end of term</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h4 className="mb-2 font-bold text-orange-600">Interest-Only</h4>
          <ul className="mb-0 space-y-1 text-sm text-slate-600">
            <li>Lower repayments during IO period</li>
            <li>Principal unchanged unless extra paid</li>
            <li>Higher total interest over full term</li>
            <li>Repayment jump when IO period ends</li>
            <li>More common for investment properties</li>
          </ul>
        </div>
      </div>

      <p>
        For example, on a $600,000 loan at 6.5% p.a., monthly P&amp;I repayments over 30 years
        would be approximately $3,792, while interest-only repayments would be approximately $3,250
        per month — a difference of around $542. That lower IO payment comes at a cost: over 30
        years, total interest on P&amp;I would be roughly $765,000, whereas paying interest only
        for the full term (an unlikely but illustrative scenario) would mean you still owe the full
        $600,000 at the end and would have paid $1.17 million in interest alone.
      </p>

      <h2>Fixed vs Variable Interest Rates</h2>
      <p>
        Australian borrowers can choose between variable-rate loans, where the interest rate moves
        with market conditions and lender pricing decisions, and fixed-rate loans, where the rate is
        locked for a set period — commonly one, two, three, or five years. Some lenders also offer
        longer fixed terms, though these are less common.
      </p>

      <h3>Variable Rates</h3>
      <p>
        Variable home loan rates in Australia are influenced by the Reserve Bank of Australia (RBA)
        cash rate, funding costs, competition among lenders, and regulatory settings. When the RBA
        raises or lowers the cash rate, variable rates typically follow, though not always by the
        same amount or at the same time. Variable loans offer flexibility: you can usually make
        unlimited extra repayments, use offset accounts freely, and refinance without break costs
        (though discharge fees may apply).
      </p>
      <p>
        The downside is uncertainty. A rate that seems affordable at 5.8% today could become
        stressful at 7.5% if rates rise significantly. This is why lenders apply serviceability
        buffers during approval — to stress-test your ability to repay at higher rates.
      </p>

      <h3>Fixed Rates</h3>
      <p>
        A fixed-rate loan gives you certainty: your interest rate and minimum repayment amount stay
        the same for the fixed period regardless of RBA movements. This can help with budgeting,
        especially for first home buyers adjusting to homeownership costs. Fixed rates are often
        slightly higher than discounted variable rates at the time of settlement, reflecting the
        lender&apos;s cost of locking in funding.
      </p>
      <p>
        Fixed loans typically come with restrictions: limited extra repayments (often capped at
        $10,000–$30,000 per year), no offset account or a partial offset only, and break costs if
        you refinance or pay out the loan early. At the end of the fixed term, the loan usually
        reverts to the lender&apos;s standard variable rate unless you negotiate a new fixed term
        or switch products.
      </p>

      <div className="my-6 space-y-4">
        {[
          {
            color: 'border-blue-400',
            title: 'Variable rate — best when',
            desc: 'You value flexibility, expect to make extra repayments, want full offset functionality, or believe rates may fall or stay stable. Suitable if you can absorb moderate rate increases in your budget.',
          },
          {
            color: 'border-emerald-400',
            title: 'Fixed rate — best when',
            desc: 'You prioritise repayment certainty, are on a tight budget with limited buffer for rate rises, or expect rates to increase over the fixed period. Less ideal if you plan to sell or refinance within the fixed term.',
          },
          {
            color: 'border-orange-400',
            title: 'Split loan — a middle ground',
            desc: 'Many Australians fix a portion of their loan (e.g. 60%) and leave the remainder variable. This balances certainty with flexibility and allows partial use of offset and extra repayments on the variable portion.',
          },
        ].map((item) => (
          <div key={item.title} className={`rounded-r-xl border-l-4 ${item.color} bg-white p-5 shadow-sm`}>
            <h4 className="mb-1 font-bold text-slate-800">{item.title}</h4>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        In the current Australian market, fixed rates for two- to three-year terms often sit in a
        similar range to variable rates — roughly 5.5% to 6.8% for quality borrowers — though the
        spread changes frequently. Always compare the comparison rate, which includes most fees and
        charges expressed as an annual percentage rate, not just the headline interest rate.
      </p>

      <h2>How Loan Term Affects Your Repayments</h2>
      <p>
        The loan term is the number of years over which you agree to repay the mortgage. The most
        common term in Australia is 30 years, though 25-year and 20-year terms are also available.
        Some lenders offer terms up to 35 or even 40 years, particularly for certain products aimed
        at improving affordability — though longer terms mean substantially more interest paid
        over time.
      </p>
      <p>
        Shorter loan terms result in higher monthly repayments but dramatically lower total interest.
        Longer loan terms reduce the monthly payment but increase the total cost of the loan because
        interest accrues over a greater number of years. The relationship is not linear — the
        difference between 30 and 25 years is more significant than between 25 and 20 years in
        terms of total interest saved, because the early years of any loan are the most
        interest-heavy.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/40 p-5 shadow-sm sm:p-8">
        <h4 className="mb-4 text-center font-bold text-slate-800">Standard P&amp;I Repayment Formula</h4>
        <div className="space-y-4 text-center">
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            M = P × [r(1 + r)<sup>n</sup>] / [(1 + r)<sup>n</sup> − 1]
          </p>
          <div className="mx-auto max-w-lg text-left text-sm text-slate-600">
            <p><strong>M</strong> = monthly repayment</p>
            <p><strong>P</strong> = loan principal (amount borrowed)</p>
            <p><strong>r</strong> = monthly interest rate (annual rate ÷ 12)</p>
            <p><strong>n</strong> = total number of monthly payments (years × 12)</p>
          </div>
        </div>
      </div>

      <p>
        Consider a $500,000 loan at 6.0% p.a. Over 30 years, monthly repayments would be
        approximately $2,998, with total interest of roughly $579,000. Over 25 years, repayments
        rise to about $3,222 per month, but total interest falls to around $467,000 — a saving of
        approximately $112,000. Over 20 years, repayments jump to about $3,583 per month, with
        total interest of roughly $360,000. The trade-off is clear: paying an extra $585 per month
        (30 years vs 20 years) saves nearly $219,000 in interest over the life of the loan.
      </p>

      <p>
        When choosing a loan term, balance affordability with long-term cost. A 30-year term with
        a plan to make voluntary extra repayments when your income grows can achieve a similar
        outcome to a shorter term while preserving flexibility during tighter periods. Our
        calculator lets you model different terms instantly to see how repayments and total interest
        change.
      </p>

      <h2>Loan-to-Value Ratio (LVR) and Lenders Mortgage Insurance (LMI)</h2>
      <p>
        The loan-to-value ratio (LVR) expresses your loan amount as a percentage of the
        property&apos;s value. If you buy a home worth $800,000 with a $640,000 loan, your LVR is
        80%. LVR is a key metric lenders use to assess risk: higher LVR means less equity buffer
        for the lender if the property must be sold.
      </p>
      <p>
        In Australia, borrowers who cannot provide a deposit of at least 20% — meaning an LVR above
        80% — are generally required to pay Lenders Mortgage Insurance (LMI). LMI protects the
        lender, not you, if you default on the loan. The premium is typically a one-off payment
        that can be added to the loan amount, and it varies based on LVR, loan size, and insurer.
        For a $600,000 loan at 90% LVR, LMI might cost between $10,000 and $15,000 depending on the
        insurer and borrower profile.
      </p>
      <p>
        Some pathways reduce or eliminate the need for LMI. The First Home Guarantee (formerly
        First Home Loan Deposit Scheme) allows eligible first home buyers to purchase with as little
        as 5% deposit without LMI, with the government guaranteeing the shortfall. Individual banks
        also occasionally offer LMI waivers for certain professions or as promotional offers for
        high-LVR loans to strong borrowers. Family guarantee loans, where a parent uses equity in
        their property as additional security, can also help avoid LMI.
      </p>

      <div className="my-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5 sm:p-6">
        <h4 className="mb-2 font-bold text-amber-900">LVR quick reference</h4>
        <ul className="mb-0 space-y-1 text-sm text-amber-900/80">
          <li><strong>80% LVR or below:</strong> Generally no LMI required; best interest rates often available.</li>
          <li><strong>80–90% LVR:</strong> LMI usually required; rates may be slightly higher.</li>
          <li><strong>90–95% LVR:</strong> Higher LMI premiums; stricter serviceability assessment.</li>
          <li><strong>Above 95% LVR:</strong> Limited lender options; government guarantee schemes may help eligible buyers.</li>
        </ul>
      </div>

      <p>
        While LMI adds upfront cost, it can enable earlier entry into the property market. The
        decision depends on whether paying LMI and buying sooner outweighs the cost of continuing
        to rent while saving a larger deposit — a calculation that varies by location, rent levels,
        and expected property price growth. Our mortgage calculator focuses on repayments and does
        not include LMI in its estimates; factor LMI separately when budgeting your total
        borrowing cost.
      </p>

      <h2>Offset Accounts</h2>
      <p>
        An offset account is a transaction or savings account linked to your home loan. The balance
        in the offset account is deducted from your loan balance when the lender calculates interest.
        If you owe $500,000 and hold $50,000 in your offset, interest is charged on $450,000 instead
        of the full amount. This can significantly reduce total interest paid and shorten the
        effective loan term without changing your minimum repayment amount.
      </p>
      <p>
        Offset accounts are popular in Australia because they offer flexibility. Unlike making a
        direct extra repayment into the loan, money in an offset remains accessible — you can withdraw
        it for emergencies, renovations, or other expenses. This makes offsets particularly valuable
        for borrowers who receive irregular income, run a small business, or want to park savings
        while retaining liquidity.
      </p>
      <p>
        There are two types: 100% offset accounts, where every dollar offsets interest, and partial
        offset accounts, where only a portion of the balance reduces interest. Most full-feature
        variable home loans offer 100% offset. Fixed-rate loans often exclude offset entirely or
        offer limited offset on a portion of the loan. Some lenders charge an annual fee for offset
        accounts — typically $250 to $400 — so weigh the fee against expected interest savings.
      </p>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Offset example: $500,000 loan at 6.5% p.a.</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Loan balance:</span>
          <span className="text-right font-mono">$500,000</span>
          <span className="text-slate-500">Offset balance:</span>
          <span className="text-right font-mono">$80,000</span>
          <span className="text-slate-500">Interest charged on:</span>
          <span className="border-b border-slate-300 pb-2 text-right font-mono">$420,000</span>
          <span className="pt-2 text-slate-500">Annual interest without offset:</span>
          <span className="pt-2 text-right font-mono">$32,500</span>
          <span className="text-slate-500">Annual interest with offset:</span>
          <span className="text-right font-mono text-emerald-600">$27,300</span>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Keeping $80,000 in offset saves approximately $5,200 per year in interest — equivalent
          to earning 6.5% on those savings tax-free, since mortgage interest for owner-occupiers
          is paid from after-tax income.
        </p>
      </div>

      <p>
        Note that our standard mortgage calculator does not model offset accounts directly. To
        approximate the effect, subtract your average offset balance from the loan amount before
        entering it into the calculator, or mentally adjust the results knowing your actual interest
        cost will be lower.
      </p>

      <h2>Benefits of Extra Repayments</h2>
      <p>
        Making voluntary repayments above the minimum required amount is one of the most effective
        ways to reduce total interest and pay off your home loan faster. Because interest is
        calculated daily on the outstanding balance in Australia, every extra dollar paid reduces
        future interest charges immediately.
      </p>
      <p>
        Extra repayments can take several forms: regular additional amounts each month (e.g. paying
        $200 more than the minimum), lump-sum payments from bonuses or tax refunds, or switching
        to fortnightly repayments equivalent to half the monthly amount — which results in 26
        half-payments per year rather than 12 full monthly payments, effectively making one extra
        month of repayments annually.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            title: 'Reduce total interest',
            desc: 'Every extra repayment cuts the principal balance, meaning less interest accrues over the remaining term. On a $600,000 loan at 6.5%, paying an extra $300 per month can save over $150,000 in interest and shave 7–8 years off a 30-year term.',
          },
          {
            title: 'Build equity faster',
            desc: 'Higher equity improves your LVR, which can help when refinancing, accessing equity for renovations, or removing LMI if your LVR drops below 80%.',
          },
          {
            title: 'Redraw facility',
            desc: 'Many variable loans with extra repayments include a redraw facility, allowing you to withdraw surplus payments if needed. Terms and minimum redraw amounts vary by lender.',
          },
          {
            title: 'Psychological benefit',
            desc: 'Seeing your loan balance fall ahead of schedule provides motivation and financial security, especially as you approach retirement or other life milestones.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-1.5 font-bold text-blue-600">{item.title}</h4>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        Be aware that fixed-rate loans often cap extra repayments, and exceeding the cap can trigger
        break costs. Always check your loan contract before making substantial additional payments
        on a fixed loan. For variable loans, extra repayments are typically unlimited.
      </p>

      <h2>What to Enter in the Mortgage Calculator</h2>
      <p>
        Our mortgage repayment calculator estimates your monthly repayment, total interest, and total
        repayments over the loan term. To get meaningful results, enter the following fields
        accurately:
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            title: 'Loan amount',
            desc: 'Enter the total amount you plan to borrow in AUD — not the property price. If you are buying an $850,000 home with a $170,000 deposit (20%), enter $680,000. Include any LMI you plan to capitalise into the loan if applicable.',
          },
          {
            title: 'Interest rate (p.a.)',
            desc: 'Enter the annual interest rate as a percentage. Use your lender\'s advertised rate or a realistic estimate — currently 5.5% to 7% for many Australian owner-occupier loans. For fixed-rate modelling, enter the fixed rate; remember variable rates may change over time.',
          },
          {
            title: 'Loan term',
            desc: 'Enter the repayment period in years. The default is 30 years, which is standard in Australia. Try 25 or 20 years to see how shorter terms affect repayments and total interest.',
          },
          {
            title: 'Repayment type',
            desc: 'Select Principal & Interest for standard repayments that reduce the balance over time, or Interest Only to model IO repayments where the principal stays constant during the IO period. Most owner-occupiers should use P&I.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-1.5 font-bold text-blue-600">{item.title}</h4>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        The calculator uses standard amortisation formulas and assumes a constant interest rate for
        the entire loan term. It does not include ongoing fees (annual package fees, discharge fees),
        LMI, stamp duty, council rates, insurance, or offset account effects. Results are
        illustrative only and should not be treated as a loan offer or financial advice. For a
        complete picture of homeownership costs, also budget for strata levies if applicable,
        maintenance, and utilities.
      </p>

      <h2>Amortisation Explained</h2>
      <p>
        Amortisation is the process of gradually paying off a loan through regular repayments that
        cover both interest and principal. The term comes from the Latin root meaning &quot;to
        kill off&quot; — over time, the loan is extinguished. In Australia, home loan amortisation
        schedules are typically calculated on a monthly basis, with interest computed daily and
        charged monthly.
      </p>
      <p>
        Because interest is calculated on the remaining balance, the composition of each repayment
        shifts over time. In month one of a $600,000 loan at 6.5% p.a. over 30 years, your
        repayment of approximately $3,792 includes roughly $3,250 in interest and only $542 in
        principal. By year 15, the same repayment might comprise roughly $2,400 in interest and
        $1,392 in principal. In the final year, almost the entire payment goes toward principal.
      </p>
      <p>
        This front-loaded interest structure explains why extra repayments in the early years of a
        loan have an outsized impact on total interest saved. Paying an extra $10,000 in year one
        saves more interest over 30 years than paying $10,000 extra in year 20, because that $10,000
        is no longer accruing interest for the remaining decades.
      </p>

      <div className="my-5 overflow-x-auto rounded-xl bg-slate-900 p-5 font-mono text-sm text-slate-100 shadow-inner sm:p-6">
        <p className="text-slate-400">Monthly interest = (Annual rate ÷ 12) × Remaining balance</p>
        <p className="mt-2 text-slate-400">Principal portion = Total repayment − Interest portion</p>
        <p className="mt-2">New balance = Previous balance − Principal portion</p>
        <p className="mt-4 text-slate-400">Example — Month 1 on $600,000 at 6.5%:</p>
        <p className="mt-2">Interest = (0.065 ÷ 12) × $600,000 = $3,250</p>
        <p className="mt-2">Principal = $3,792 − $3,250 = $542</p>
        <p className="mt-2 text-green-400">New balance = $599,458</p>
      </div>

      <p>
        An amortisation schedule is a table showing each payment, its interest and principal split,
        and the remaining balance after each period. Most lenders provide this when you settle, and
        many online banking portals display an updated schedule. Reviewing your amortisation schedule
        helps you understand how far you have come and how extra repayments accelerate the payoff
        timeline.
      </p>

      <h2>Worked Examples</h2>
      <p>
        The following examples use our calculator&apos;s assumptions: standard P&amp;I repayments,
        constant interest rate, monthly payments, no fees. Figures are rounded to the nearest dollar.
      </p>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Example 1: First home buyer — $550,000 at 6.2% over 30 years</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Loan amount:</span>
          <span className="text-right font-mono">$550,000</span>
          <span className="text-slate-500">Interest rate:</span>
          <span className="text-right font-mono">6.2% p.a.</span>
          <span className="text-slate-500">Loan term:</span>
          <span className="border-b border-slate-300 pb-2 text-right font-mono">30 years</span>
          <span className="pt-2 font-medium text-slate-700">Monthly repayment:</span>
          <span className="pt-2 text-right font-mono font-bold text-blue-600">$3,366</span>
          <span className="text-slate-500">Total interest:</span>
          <span className="text-right font-mono text-red-500">$661,760</span>
          <span className="text-slate-500">Total repayments:</span>
          <span className="text-right font-mono">$1,211,760</span>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Sarah and James purchase a townhouse in Adelaide with a 10% deposit. Their monthly
          repayment of $3,366 represents roughly 28% of their combined net income — within typical
          serviceability guidelines. Over 30 years, they will pay more in interest than the original
          loan amount, highlighting the value of even modest extra repayments as their careers
          progress.
        </p>
      </div>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Example 2: Upgrader — $900,000 at 5.9% over 25 years</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Loan amount:</span>
          <span className="text-right font-mono">$900,000</span>
          <span className="text-slate-500">Interest rate:</span>
          <span className="text-right font-mono">5.9% p.a.</span>
          <span className="text-slate-500">Loan term:</span>
          <span className="border-b border-slate-300 pb-2 text-right font-mono">25 years</span>
          <span className="pt-2 font-medium text-slate-700">Monthly repayment:</span>
          <span className="pt-2 text-right font-mono font-bold text-blue-600">$5,694</span>
          <span className="text-slate-500">Total interest:</span>
          <span className="text-right font-mono text-red-500">$808,200</span>
          <span className="text-slate-500">Total repayments:</span>
          <span className="text-right font-mono">$1,708,200</span>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Mark and Priya sell their first home and upgrade to a family house in Melbourne&apos;s
          outer suburbs. Choosing a 25-year term instead of 30 saves approximately $180,000 in
          interest compared to the same loan over 30 years at the same rate, at the cost of roughly
          $450 more per month. They also maintain a $60,000 offset from the sale proceeds, which
          further reduces their effective interest cost beyond what this example shows.
        </p>
      </div>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Example 3: Investor — $750,000 interest-only at 6.8% for 5 years</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Loan amount:</span>
          <span className="text-right font-mono">$750,000</span>
          <span className="text-slate-500">Interest rate:</span>
          <span className="text-right font-mono">6.8% p.a.</span>
          <span className="text-slate-500">IO period:</span>
          <span className="border-b border-slate-300 pb-2 text-right font-mono">5 years (then P&amp;I 25 yrs)</span>
          <span className="pt-2 font-medium text-slate-700">Monthly IO repayment:</span>
          <span className="pt-2 text-right font-mono font-bold text-blue-600">$4,250</span>
          <span className="text-slate-500">Interest paid (5 yrs IO):</span>
          <span className="text-right font-mono text-red-500">$255,000</span>
          <span className="text-slate-500">Principal after IO:</span>
          <span className="text-right font-mono">$750,000 (unchanged)</span>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          David purchases an investment unit in Brisbane with an interest-only loan. During the
          five-year IO period, he pays $4,250 per month — lower than P&amp;I would be — but the
          balance remains $750,000. When the loan reverts to P&amp;I over the remaining 25 years,
          repayments jump to approximately $5,230 per month. Total interest over the full 30-year
          horizon significantly exceeds what a P&amp;I loan from day one would have cost.
        </p>
      </div>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Example 4: Regional buyer — $420,000 at 6.5% over 30 years</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Loan amount:</span>
          <span className="text-right font-mono">$420,000</span>
          <span className="text-slate-500">Interest rate:</span>
          <span className="text-right font-mono">6.5% p.a.</span>
          <span className="text-slate-500">Loan term:</span>
          <span className="border-b border-slate-300 pb-2 text-right font-mono">30 years</span>
          <span className="pt-2 font-medium text-slate-700">Monthly repayment:</span>
          <span className="pt-2 text-right font-mono font-bold text-blue-600">$2,655</span>
          <span className="text-slate-500">Total interest:</span>
          <span className="text-right font-mono text-red-500">$535,800</span>
          <span className="text-slate-500">Total repayments:</span>
          <span className="text-right font-mono">$955,800</span>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Emma buys her first home in regional New South Wales. With a lower purchase price and a
          20% deposit, her loan is manageable on a single income. She plans to pay an extra $200
          per month, which would reduce total interest by approximately $90,000 and pay off the
          loan roughly six years early — demonstrating how extra repayments disproportionately
          benefit borrowers on smaller loan amounts as well as larger ones.
        </p>
      </div>

      <h2>Comparison Scenario: 30 Years vs 20 Years vs Extra Repayments</h2>
      <p>
        To illustrate how loan term and extra repayments interact, consider a uniform scenario: a
        $650,000 loan at 6.4% p.a. with P&amp;I repayments.
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 font-bold text-slate-700">Scenario</th>
              <th className="px-4 py-3 font-bold text-slate-700">Monthly payment</th>
              <th className="px-4 py-3 font-bold text-slate-700">Total interest</th>
              <th className="px-4 py-3 font-bold text-slate-700">Loan paid off</th>
            </tr>
          </thead>
          <tbody className="text-slate-600">
            <tr className="border-b border-slate-100">
              <td className="px-4 py-3">30-year standard</td>
              <td className="px-4 py-3 font-mono">$4,073</td>
              <td className="px-4 py-3 font-mono text-red-500">$816,280</td>
              <td className="px-4 py-3">Year 30</td>
            </tr>
            <tr className="border-b border-slate-100 bg-blue-50/30">
              <td className="px-4 py-3 font-medium">20-year term</td>
              <td className="px-4 py-3 font-mono">$4,833</td>
              <td className="px-4 py-3 font-mono text-emerald-600">$509,920</td>
              <td className="px-4 py-3">Year 20</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-4 py-3">30-year + $400/month extra</td>
              <td className="px-4 py-3 font-mono">$4,473</td>
              <td className="px-4 py-3 font-mono text-emerald-600">$558,400</td>
              <td className="px-4 py-3">~Year 23</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">20-year + $200/month extra</td>
              <td className="px-4 py-3 font-mono">$5,033</td>
              <td className="px-4 py-3 font-mono font-bold text-emerald-600">$458,120</td>
              <td className="px-4 py-3">~Year 18</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The 20-year term saves over $306,000 in interest compared to the standard 30-year loan,
        requiring an additional $760 per month. Adding $400 per month to the 30-year loan saves
        roughly $258,000 and cuts seven years off the term — a middle path that preserves lower
        mandatory repayments while still achieving substantial savings. The optimal strategy depends
        on your income stability, other financial goals, and whether you could earn a better
        after-tax return by investing surplus funds elsewhere.
      </p>

      <h2>First Home Buyer Grants and Assistance</h2>
      <p>
        Australian first home buyers may be eligible for several government schemes that reduce the
        upfront cost of purchasing a property. These programs do not directly change your mortgage
        repayment calculation, but they affect how much you need to borrow — which in turn affects
        every figure our calculator produces.
      </p>

      <div className="my-6 space-y-4">
        {[
          {
            title: 'First Home Owner Grant (FHOG)',
            desc: 'A one-off payment available to eligible first home buyers who purchase or build a new home. The grant amount and eligibility criteria vary by state and territory. In many states, the FHOG applies only to new dwellings, not established homes. Check your state revenue office for current amounts — typically $10,000 to $25,000 depending on location and property type.',
          },
          {
            title: 'First Home Guarantee',
            desc: 'A federal scheme allowing eligible first home buyers to purchase with as little as 5% deposit without paying LMI. The government guarantees up to 15% of the property value. Places are limited each financial year and administered through participating lenders. Income caps and property price caps apply and differ by region.',
          },
          {
            title: 'Stamp duty concessions and exemptions',
            desc: 'Most states offer stamp duty discounts or full exemptions for first home buyers below certain price thresholds. In Victoria, first home buyers may pay no stamp duty on properties up to $600,000; in NSW, concessions apply up to $800,000 for new and existing homes. These savings reduce the cash you need at settlement.',
          },
          {
            title: 'First Home Super Saver Scheme',
            desc: 'Allows eligible individuals to make voluntary contributions to superannuation and withdraw up to $50,000 (plus earnings) for a first home deposit. Contributions are taxed at 15% on entry rather than marginal rates, providing a tax-effective way to accelerate deposit savings.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 sm:p-5">
            <h4 className="mb-1 font-bold text-slate-800">{item.title}</h4>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        Eligibility for these schemes depends on factors including prior property ownership (including
        whether your partner has owned property), property type, price caps, and citizenship or
        residency status. A smaller deposit or reduced upfront costs mean a smaller loan amount —
        enter the net amount you will actually borrow into our calculator after accounting for grants
        and concessions.
      </p>

      <h2>Refinancing Tips</h2>
      <p>
        Refinancing involves replacing your existing home loan with a new one — either with your
        current lender or a different institution. Australians refinance for many reasons: to secure
        a lower interest rate, access equity, consolidate debt, change loan features, or switch
        between fixed and variable rates. Done well, refinancing can save thousands of dollars
        annually; done poorly, break costs and fees can erode the benefit.
      </p>

      <div className="my-6 space-y-4">
        {[
          { n: '1', title: 'Compare the comparison rate', desc: 'Look beyond headline rates. The comparison rate incorporates most fees and gives a truer picture of loan cost. A loan at 5.9% with $395 annual fee may cost more than one at 6.1% with no fee.' },
          { n: '2', title: 'Calculate break-even point', desc: 'Add up discharge fees from your current lender, application fees, valuation fees, and any break costs on fixed loans. Divide total switching costs by monthly savings to find how many months until refinancing pays for itself.' },
          { n: '3', title: 'Check your LVR', desc: 'If your property has appreciated and your LVR has fallen below 80%, refinancing may eliminate LMI on future borrowing and unlock better rates. Get a current valuation before applying.' },
          { n: '4', title: 'Negotiate with your existing lender', desc: 'Before switching, ask your current lender for a retention offer. Many borrowers receive rate reductions simply by calling and requesting a better deal — avoiding switching costs entirely.' },
          { n: '5', title: 'Maintain consistent repayments after refinancing', desc: 'If you refinance to a lower rate but keep paying the same amount as before, the extra goes directly to principal — accelerating payoff without lifestyle impact.' },
        ].map((s) => (
          <div key={s.n} className="flex gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
              {s.n}
            </div>
            <div>
              <h4 className="mb-1 font-bold text-slate-800">{s.title}</h4>
              <p className="mb-0 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p>
        Timing matters for fixed-rate borrowers: refinancing mid-fixed-term usually triggers break
        costs, which can be substantial. Variable-rate borrowers generally face lower switching
        barriers. Also consider whether you may sell the property within the next few years — if so,
        the upfront cost of refinancing may not be recovered in time.
      </p>

      <h2>Common Mistakes to Avoid</h2>
      <p>
        Home loan decisions have long-lasting consequences. These are among the most frequent errors
        Australian borrowers make when assessing mortgage repayments and choosing a loan product.
      </p>

      <ol className="list-decimal marker:font-semibold marker:text-blue-600">
        <li className="mb-4">
          <strong>Borrowing at maximum capacity.</strong> Lenders may approve you for more than you
          comfortably afford once you factor in lifestyle costs, children, and rate rises. Leave a
          buffer — many advisers suggest keeping housing costs below 30% of gross household income.
        </li>
        <li className="mb-4">
          <strong>Ignoring the comparison rate and fees.</strong> A low advertised rate with high
          annual package fees, offset account fees, and discharge costs can be more expensive than
          a slightly higher-rate loan with no fees.
        </li>
        <li className="mb-4">
          <strong>Choosing interest-only for affordability without a plan.</strong> IO repayments
          feel manageable until the revert date. Model the post-IO P&amp;I repayment before
          committing, not just the IO payment.
        </li>
        <li className="mb-4">
          <strong>Setting and forgetting.</strong> Many borrowers stay on their lender&apos;s
          standard variable rate for years without reviewing. Loyalty rarely pays — the best rates
          are often offered to new customers, not existing ones.
        </li>
        <li className="mb-4">
          <strong>Underestimating total ownership costs.</strong> Mortgage repayments are only part
          of the picture. Council rates, insurance, maintenance (budget 1–2% of property value
          annually), strata fees, and utilities add significantly to monthly housing costs.
        </li>
        <li className="mb-4">
          <strong>Not using offset when available.</strong> Holding large savings in a standard
          savings account earning 4–5% while paying 6%+ on a mortgage is inefficient for most
          owner-occupiers. An offset account effectively earns the mortgage rate, tax-free.
        </li>
        <li className="mb-4">
          <strong>Focusing only on monthly repayment, not total interest.</strong> Extending the
          loan term or choosing IO to lower monthly payments can cost hundreds of thousands in
          additional interest over time. Always check total cost, not just the monthly figure.
        </li>
      </ol>

      <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-sm text-blue-900">
        <strong>Remember:</strong> Our calculator is a starting point for understanding repayments.
        Speak with a licensed mortgage broker or financial adviser for advice tailored to your
        circumstances, especially for complex situations involving investment portfolios, trust
        structures, or self-employed income.
      </div>

      <h2>Frequently Asked Questions</h2>

      <div className="my-6 space-y-4">
        {[
          {
            q: 'What is a typical mortgage interest rate in Australia?',
            a: 'As of 2025–2026, owner-occupier variable rates for borrowers with good credit and LVR at or below 80% typically range from about 5.5% to 7% p.a. Fixed rates for two- to three-year terms are often in a similar band. Investment loans and high-LVR loans may attract rates 0.2% to 0.5% higher. Rates change frequently — always check current offers from multiple lenders.',
          },
          {
            q: 'How much deposit do I need for a home loan in Australia?',
            a: 'A 20% deposit avoids LMI and generally unlocks the most competitive rates. However, many buyers purchase with 10% or even 5% deposits using LMI or government guarantee schemes. The minimum deposit depends on lender policy, your income, property type, and whether you qualify for first home buyer assistance.',
          },
          {
            q: 'Should I choose fortnightly or monthly repayments?',
            a: 'Fortnightly repayments equal to half your monthly amount result in 26 half-payments per year — equivalent to 13 monthly payments instead of 12. This pays off the loan faster and reduces total interest without a large budget impact. Most lenders offer this option at no extra cost on variable P&I loans.',
          },
          {
            q: 'Can I make extra repayments on a fixed-rate loan?',
            a: 'Most fixed-rate loans allow limited extra repayments — typically $10,000 to $30,000 per year. Exceeding the cap may incur break costs. Variable loans generally allow unlimited extra repayments. Check your loan contract for specific terms.',
          },
          {
            q: 'What happens if interest rates rise?',
            a: 'On a variable loan, your minimum repayment increases when rates rise, assuming P&I structure. On a fixed loan, your rate stays the same until the fixed period ends. This is why lenders stress-test your application at a rate buffer — usually the higher of your actual rate plus 3% or a floor rate around 5.4%.',
          },
          {
            q: 'How does an offset account differ from making extra repayments?',
            a: 'Both reduce interest charged. Extra repayments permanently reduce the loan balance (though redraw may allow withdrawal). Offset keeps your savings separate but deducts the balance from interest calculations. Offset offers more flexibility; extra repayments may provide slightly more interest saving since the balance reduction is permanent unless redrawn.',
          },
          {
            q: 'Is it better to pay off my mortgage or invest spare funds?',
            a: 'Paying off your mortgage provides a guaranteed, after-tax return equal to your interest rate — attractive when rates are 6%+. Investing in shares or super may deliver higher long-term returns but with risk and volatility. The right choice depends on your risk tolerance, tax situation, time horizon, and whether the property is owner-occupied or investment.',
          },
          {
            q: 'What fees are not included in the calculator results?',
            a: 'Our calculator excludes LMI, stamp duty, annual loan package fees, discharge and settlement fees, valuation fees, and government charges. It also assumes a constant interest rate for the full term. Actual costs will vary based on your lender, product, and personal circumstances.',
          },
          {
            q: 'Can I use this calculator for investment property loans?',
            a: 'Yes. Enter the investment loan amount, rate, term, and select P&I or interest-only as appropriate. Remember that investment loans may have different rates, and tax treatment of interest differs from owner-occupier loans. Consult a tax professional for investment-specific advice.',
          },
          {
            q: 'How accurate are the calculator results?',
            a: 'The calculator uses standard amortisation mathematics identical to those used by lenders for P&I and IO estimates. Results are accurate for the inputs provided under the assumption of a constant rate and no fees. Real-world repayments may differ due to rate changes, fees, offset balances, and rounding conventions used by your specific lender.',
          },
        ].map((item) => (
          <div key={item.q} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-slate-800">{item.q}</h4>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">{item.a}</p>
          </div>
        ))}
      </div>

      <p>
        Understanding Australian mortgage repayments empowers you to compare loan offers confidently,
        plan your budget realistically, and use strategies like offset accounts and extra repayments
        to reduce the total cost of homeownership. Enter your figures into our calculator, model
        different rates and terms, and revisit your plan regularly as your financial situation and
        the interest rate environment evolve.
      </p>
    </div>
  );
}
