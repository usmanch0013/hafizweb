export default function SuperGuide() {
  return (
    <div className="guide-article">
      <p className="guide-intro">
        Superannuation is the cornerstone of retirement planning for most Australians. Whether you
        are just starting your first job, midway through your career, or approaching preservation
        age, understanding how super works — and how your balance might grow over time — is one of
        the most valuable financial skills you can develop. This guide explains the Australian
        super system in plain language: employer contributions, voluntary contributions, tax
        treatment, contribution caps, investment options, fees, and common pitfalls. Use it alongside
        our superannuation calculator to project your balance at retirement and explore how small
        changes today can compound into meaningful outcomes decades from now.
      </p>

      <h2>What Is Superannuation?</h2>
      <p>
        Superannuation, commonly called super, is a long-term savings system designed to provide
        Australians with income in retirement. Unlike a regular bank account, super is held in a
        complying super fund and invested on your behalf according to your chosen investment
        option. The system is supported by compulsory employer contributions, tax concessions on
        contributions and investment earnings, and strict rules about when you can access your money.
      </p>
      <p>
        Most employees receive super through the Superannuation Guarantee (SG), a legal requirement
        for employers to pay a minimum percentage of an employee&apos;s ordinary time earnings into
        a complying super fund. You can also make voluntary contributions — before tax, after tax,
        or both — subject to annual caps set by the Australian Taxation Office (ATO). Because super
        earnings are generally taxed at a concessional rate of 15% inside the fund (rather than your
        marginal personal tax rate), the system is designed to reward long-term saving.
      </p>
      <p>
        Super is not a government pension. It is your money, held in trust for your retirement.
        However, access is restricted until you reach your preservation age and satisfy a condition
        of release, such as retiring or reaching age 65. This preservation rule is what makes super
        effective as a retirement vehicle: it prevents early spending and allows decades of compound
        investment growth.
      </p>

      <h2>The Superannuation Guarantee: 12%</h2>
      <p>
        The Superannuation Guarantee rate is the minimum percentage of ordinary time earnings that
        eligible employers must contribute to an employee&apos;s super fund. For the 2026-27 financial
        year, the SG rate is 12%, where it is legislated to remain. This gradual increase — from
        9.5% a few years ago to the final 12% — reflects policy aimed at improving retirement
        outcomes for working Australians.
      </p>
      <p>
        SG contributions are calculated on ordinary time earnings (OTE), which generally includes
        wages, salary, commissions, and certain loadings and allowances, but excludes overtime in
        most cases. Employers must pay SG at least quarterly, though many pay with each pay cycle.
        If your employer fails to pay the correct SG amount by the due date, they may owe the
        Superannuation Guarantee Charge (SGC), which includes the shortfall plus interest and an
        administration fee — and SGC amounts are not tax-deductible to the employer.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-emerald-50/40 p-5 shadow-sm sm:p-8">
        <h4 className="mb-4 text-center font-bold text-slate-800">Superannuation Guarantee Rate Schedule</h4>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-100 bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">2026-27</p>
            <p className="mt-1 font-mono text-2xl font-bold text-emerald-600">12.0%</p>
            <p className="mt-1 text-sm text-slate-600">Current rate</p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-white p-4 text-center shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">2025-26</p>
            <p className="mt-1 font-mono text-2xl font-bold text-slate-600">11.5%</p>
            <p className="mt-1 text-sm text-slate-600">Previous rate</p>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-slate-600">
          On a salary of $90,000, 12% SG equals $10,800 per year before any voluntary contributions
          or investment growth.
        </p>
      </div>

      <p>
        It is worth noting that SG applies only to eligible employees. Contractors who are genuinely
        self-employed must arrange their own super contributions. Casual and part-time workers are
        entitled to SG if they earn at least $450 or more (before tax) in a calendar month and meet
        age and work-type requirements. Always check that SG appears on your payslip and lands in
        the correct fund — lost or unpaid super is one of the most common and costly oversights in
        the system.
      </p>

      <h2>Concessional vs Non-Concessional Contributions</h2>
      <p>
        Understanding the difference between concessional and non-concessional contributions is
        essential for tax-effective super planning. The labels refer to how contributions are taxed
        when they enter your fund, not to whether they are compulsory or voluntary.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <h4 className="mb-2 font-bold text-blue-600">Concessional (Before-Tax)</h4>
          <p className="text-sm leading-relaxed text-slate-600">
            Concessional contributions include employer SG, salary sacrifice amounts, and personal
            contributions you claim as a tax deduction. These contributions are taxed at 15% inside
            your super fund — which is typically lower than most workers&apos; marginal tax rates.
            They count toward the concessional contributions cap.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
          <h4 className="mb-2 font-bold text-emerald-600">Non-Concessional (After-Tax)</h4>
          <p className="text-sm leading-relaxed text-slate-600">
            Non-concessional contributions are made from money you have already paid income tax on,
            such as savings from your bank account. No further 15% contributions tax applies when
            the money enters super (because tax was already paid). These count toward the separate
            non-concessional cap and can be useful when you receive a windfall or inherit funds.
          </p>
        </div>
      </div>

      <p>
        High-income earners may pay additional tax under Division 293 rules. If your income for
        Division 293 purposes plus low-tax super contributions exceeds $250,000, an extra 15% tax
        may apply to some or all of your concessional contributions, effectively bringing the total
        tax on those contributions up to 30%. This does not remove the benefit of super for most
        people, but it reduces the tax advantage at the highest income levels.
      </p>
      <p>
        Exceeding either cap can trigger excess contributions tax and administrative headaches.
        The ATO generally allows you to withdraw excess non-concessional amounts, but planning
        within the caps each financial year is far simpler than fixing a breach after the fact.
      </p>

      <h2>Contribution Caps for 2026-27</h2>
      <p>
        The ATO sets annual limits on how much you can contribute to super at concessional and
        non-concessional tax rates. These caps apply per financial year (1 July to 30 June) and are
        indexed periodically. For 2026-27, the key caps are:
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left">
              <th className="pb-3 pr-4 font-bold text-slate-800">Cap Type</th>
              <th className="pb-3 pr-4 font-bold text-slate-800">2026-27 Limit</th>
              <th className="pb-3 font-bold text-slate-800">What Counts</th>
            </tr>
          </thead>
          <tbody className="text-slate-600">
            <tr className="border-b border-slate-100">
              <td className="py-3 pr-4 font-medium text-slate-700">Concessional</td>
              <td className="py-3 pr-4 font-mono font-semibold text-blue-600">$30,000</td>
              <td className="py-3">SG, salary sacrifice, deductible personal contributions</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 pr-4 font-medium text-slate-700">Non-concessional</td>
              <td className="py-3 pr-4 font-mono font-semibold text-emerald-600">$120,000</td>
              <td className="py-3">After-tax contributions (no deduction claimed)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium text-slate-700">Bring-forward (NCC)</td>
              <td className="py-3 pr-4 font-mono font-semibold text-emerald-600">Up to $360,000</td>
              <td className="py-3">Available if under 75 and Total Super Balance rules permit</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The concessional cap of $30,000 replaced the previous $27,500 limit from 1 July 2024.
        Unused concessional cap space from up to five previous years may be carried forward if your
        total super balance was below $500,000 at the end of the previous financial year — a
        valuable provision for people returning to work after a career break or those who had lower
        incomes in prior years.
      </p>
      <p>
        Non-concessional contributions are subject to a Total Super Balance (TSB) test. If your TSB
        equals or exceeds the general transfer balance cap (currently $1.9 million, indexed) at the
        end of the previous financial year, you generally cannot make non-concessional contributions
        at all. The bring-forward rule allows eligible individuals under age 75 to contribute up to
        three years of non-concessional cap in a single year ($360,000 in 2026-27), which can be
        useful when selling an asset or receiving a large after-tax lump sum.
      </p>

      <h2>Preservation Age and Retirement Age</h2>
      <p>
        Super is preserved — meaning you generally cannot withdraw it until you meet a condition of
        release. Your preservation age depends on your date of birth and ranges from 55 to 60 for
        Australians born after 30 June 1960. Once you reach preservation age, you may access super
        if you permanently retire (generally with no intention of working more than 10 hours per
        week). Reaching age 60 opens additional flexible access options even if you are still
        working, through transition-to-retirement arrangements.
      </p>

      <div className="my-6 space-y-3">
        {[
          { birth: 'Before 1 July 1960', age: '55' },
          { birth: '1 July 1960 – 30 June 1961', age: '56' },
          { birth: '1 July 1961 – 30 June 1962', age: '57' },
          { birth: '1 July 1962 – 30 June 1963', age: '58' },
          { birth: '1 July 1963 – 30 June 1964', age: '59' },
          { birth: 'From 1 July 1964', age: '60' },
        ].map((row) => (
          <div
            key={row.birth}
            className="flex flex-col justify-between gap-1 rounded-lg border border-slate-100 bg-white px-4 py-3 sm:flex-row sm:items-center"
          >
            <span className="text-sm text-slate-600">Born {row.birth}</span>
            <span className="font-mono text-sm font-bold text-blue-600">Preservation age: {row.age}</span>
          </div>
        ))}
      </div>

      <p>
        Age 65 is a significant milestone in the super system. From age 65, you can access your
        super even if you have not retired — there is no work test for withdrawals. Age 65 is also
        commonly used as a retirement planning anchor in calculators and financial plans, though your
        personal target may differ. The Age Pension eligibility age is currently 67 and is separate
        from super preservation rules; many retirees draw on super first and may later qualify for
        a part or full Age Pension depending on assets and income tests.
      </p>
      <p>
        When planning, distinguish between preservation age (when restricted access may begin),
        Age Pension age (currently 67), and your personal desired retirement age. Our calculator
        uses years until retirement as an input — if you plan to stop work at 60 but cannot access
        all super until preservation age, factor that into your cash-flow planning outside the
        calculator.
      </p>

      <h2>The Power of Compound Growth in Super</h2>
      <p>
        Compound growth is the engine that transforms regular super contributions into a substantial
        retirement balance. Inside super, your contributions are invested and generate returns; those
        returns are reinvested, and future returns apply to the enlarged balance. Over 30 or 40
        years, this compounding effect often exceeds the total value of contributions themselves —
        especially when returns are positive and fees are low.
      </p>
      <p>
        Consider a simplified illustration. If you contribute $10,000 at the start of each year and
        earn a constant 7% return, after 30 years your balance is not $300,000 plus simple interest —
        it is approximately $944,000. The extra $644,000 comes from compounding. In real super funds,
        returns vary year to year, but the principle holds: time in the market and consistent
        contributions matter enormously.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/40 p-5 shadow-sm sm:p-8">
        <div className="space-y-4 text-center">
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            Future Balance ≈ Current Balance × (1 + r)<sup>n</sup> + Annual Contribution × [((1 + r)<sup>n</sup> − 1) / r]
          </p>
          <p className="text-sm text-slate-600">
            Where <strong>r</strong> = annual return rate (decimal) and <strong>n</strong> = years to retirement
          </p>
        </div>
      </div>

      <p>
        Our superannuation calculator uses a similar year-by-year projection: each year, the balance
        grows by the assumed return rate, then annual contributions (employer SG plus any extra
        amount) are added. This is a simplified model — it assumes constant returns and contributions,
        ignores fees, taxes on earnings inside the fund, insurance premiums, and changing SG rates.
        Use it for directional planning rather than precise forecasting.
      </p>
      <p>
        Starting early amplifies compounding because each dollar has more years to grow. A 25-year-old
        contributing consistently may end up with a larger balance at 65 than a 45-year-old who
        contributes twice as much but has half the time horizon. That is why even small voluntary
        contributions in your twenties and thirties can be disproportionately valuable, provided
        you stay within caps and choose appropriate investments for your risk tolerance and time
        horizon.
      </p>

      <h2>What to Enter in the Superannuation Calculator</h2>
      <p>
        To get meaningful projections from our super calculator, gather accurate figures for each
        input field. The calculator models employer SG at 11.5% of your entered salary and adds any
        extra annual contributions you specify.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            title: 'Current Super Balance',
            desc: 'Your total balance across all super accounts. Log into myGov and ATO online services, or check each fund\'s member portal. Consolidating multiple accounts can reduce duplicate fees.',
          },
          {
            title: 'Annual Salary',
            desc: 'Your gross ordinary time earnings used for SG calculations. The calculator applies 11.5% to estimate employer contributions. If your employer pays above the SG minimum, add the difference to extra contributions.',
          },
          {
            title: 'Extra Annual Contributions',
            desc: 'Voluntary before-tax or after-tax contributions you plan to make each year — salary sacrifice, personal deductible contributions, or regular after-tax top-ups. Enter the total annual amount.',
          },
          {
            title: 'Years Until Retirement',
            desc: 'The number of years until your target retirement age. If you plan to retire at 65 and are currently 40, enter 25. Adjust if you expect to work longer or retire earlier.',
          },
          {
            title: 'Expected Return Rate',
            desc: 'An assumed average annual investment return after tax and fees inside super. Many planners use 6% to 7% for balanced growth options over long periods. Higher assumed returns produce optimistic projections.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-1.5 font-bold text-blue-600">{item.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        The calculator output shows projected balance, employer contributions at 11.5%, your extra
        contributions, total contributions over the period, and estimated investment growth. Compare
        scenarios by changing one input at a time — for example, increase extra contributions by
        $5,000 to see the long-term impact of salary sacrifice, or reduce the return assumption to
        stress-test your plan against lower market performance.
      </p>

      <h2>Worked Examples: Projecting Your Balance at Age 65</h2>
      <p>
        The following scenarios use the same projection method as our calculator: starting balance
        grows at the stated return each year, then annual contributions (11.5% SG plus extras) are
        added. Figures are rounded and illustrative; actual outcomes depend on market performance,
        fees, legislative changes, and career interruptions.
      </p>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Scenario 1: Early Career — Steady SG Only</h4>
        <div className="grid max-w-lg grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Current age:</span>
          <span className="text-right font-mono">30</span>
          <span className="text-slate-500">Current balance:</span>
          <span className="text-right font-mono">$45,000</span>
          <span className="text-slate-500">Annual salary:</span>
          <span className="text-right font-mono">$85,000</span>
          <span className="text-slate-500">Employer SG (11.5%):</span>
          <span className="text-right font-mono">$9,775</span>
          <span className="text-slate-500">Extra contributions:</span>
          <span className="text-right font-mono">$0</span>
          <span className="text-slate-500">Years to age 65:</span>
          <span className="text-right font-mono">35</span>
          <span className="text-slate-500">Assumed return:</span>
          <span className="text-right font-mono">7% p.a.</span>
        </div>
        <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-600">
            After 35 years of 7% growth and $9,775 annual SG contributions, the projected balance at
            age 65 is approximately <strong className="font-mono text-emerald-600">$1,832,000</strong>.
            Investment growth accounts for roughly $1.49 million of that total, compared with
            $387,000 in contributions (including the starting balance).
          </p>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Lesson: Starting with a modest balance and relying solely on SG can still produce a
          substantial nest egg over a long horizon — but lifestyle in retirement depends on spending
          needs and whether $1.8 million in future dollars meets your goals.
        </p>
      </div>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Scenario 2: Mid-Career — Salary Sacrifice Boost</h4>
        <div className="grid max-w-lg grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Current age:</span>
          <span className="text-right font-mono">45</span>
          <span className="text-slate-500">Current balance:</span>
          <span className="text-right font-mono">$280,000</span>
          <span className="text-slate-500">Annual salary:</span>
          <span className="text-right font-mono">$120,000</span>
          <span className="text-slate-500">Employer SG (11.5%):</span>
          <span className="text-right font-mono">$13,800</span>
          <span className="text-slate-500">Salary sacrifice (extra):</span>
          <span className="text-right font-mono">$10,000</span>
          <span className="text-slate-500">Total annual contributions:</span>
          <span className="text-right font-mono font-semibold">$23,800</span>
          <span className="text-slate-500">Years to age 65:</span>
          <span className="text-right font-mono">20</span>
          <span className="text-slate-500">Assumed return:</span>
          <span className="text-right font-mono">7% p.a.</span>
        </div>
        <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-600">
            Projected balance at 65: approximately <strong className="font-mono text-emerald-600">$2,059,000</strong>.
            Without the $10,000 salary sacrifice, the projection would be around $1.55 million — a
            difference of over $500,000 from an extra $200,000 in contributions over 20 years,
            thanks to compounding.
          </p>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Lesson: Salary sacrifice in your peak earning years can materially shift retirement
          outcomes, especially when marginal tax rates exceed the 15% super contributions tax.
        </p>
      </div>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Scenario 3: Late Starter — Catching Up</h4>
        <div className="grid max-w-lg grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Current age:</span>
          <span className="text-right font-mono">50</span>
          <span className="text-slate-500">Current balance:</span>
          <span className="text-right font-mono">$95,000</span>
          <span className="text-slate-500">Annual salary:</span>
          <span className="text-right font-mono">$72,000</span>
          <span className="text-slate-500">Employer SG (11.5%):</span>
          <span className="text-right font-mono">$8,280</span>
          <span className="text-slate-500">Extra contributions:</span>
          <span className="text-right font-mono">$15,000</span>
          <span className="text-slate-500">Years to age 65:</span>
          <span className="text-right font-mono">15</span>
          <span className="text-slate-500">Assumed return:</span>
          <span className="text-right font-mono">6.5% p.a.</span>
        </div>
        <div className="mt-4 rounded-xl border border-amber-100 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-600">
            Projected balance at 65: approximately <strong className="font-mono text-emerald-600">$808,000</strong>.
            A shorter time horizon and conservative return assumption produce a more modest outcome,
            highlighting the challenge of catching up after a late start — but aggressive voluntary
            contributions still make a meaningful difference compared with SG alone (~$552,000).
          </p>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Lesson: It is never too late to improve your position, but late starters may need higher
          savings rates, working longer, or adjusted retirement expectations.
        </p>
      </div>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Scenario 4: Maximising the Concessional Cap</h4>
        <div className="grid max-w-lg grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Current age:</span>
          <span className="text-right font-mono">38</span>
          <span className="text-slate-500">Current balance:</span>
          <span className="text-right font-mono">$180,000</span>
          <span className="text-slate-500">Annual salary:</span>
          <span className="text-right font-mono">$150,000</span>
          <span className="text-slate-500">Employer SG (11.5%):</span>
          <span className="text-right font-mono">$17,250</span>
          <span className="text-slate-500">Salary sacrifice to cap:</span>
          <span className="text-right font-mono">$12,750</span>
          <span className="text-slate-500">Total concessional:</span>
          <span className="text-right font-mono font-semibold">$30,000</span>
          <span className="text-slate-500">Years to age 65:</span>
          <span className="text-right font-mono">27</span>
          <span className="text-slate-500">Assumed return:</span>
          <span className="text-right font-mono">7.5% p.a.</span>
        </div>
        <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-600">
            Projected balance at 65: approximately <strong className="font-mono text-emerald-600">$4,233,000</strong>.
            Consistently hitting the $30,000 concessional cap from age 38 demonstrates how high
            earners who prioritise super can accumulate significant wealth, subject to Division 293
            considerations at higher income levels.
          </p>
        </div>
      </div>

      <h2>Salary Sacrifice: Tax Benefits and Practical Considerations</h2>
      <p>
        Salary sacrifice to super is an arrangement where you agree with your employer to receive
        less take-home pay in exchange for additional before-tax super contributions. These
        sacrificed amounts count as concessional contributions and are taxed at 15% in the fund.
        If your marginal tax rate is 32.5%, 37%, or 45% (plus Medicare levy), salary sacrifice can
        deliver an immediate tax saving on each dollar sacrificed.
      </p>
      <p>
        For example, sacrificing $10,000 from a salary taxed at 37% (excluding levy) saves roughly
        $3,700 in personal tax, while the super fund pays $1,500 contributions tax — a net tax
        benefit of about $2,200, before considering any Division 293 liability. The sacrificed
        amount also compounds inside super until retirement.
      </p>

      <div className="my-6 space-y-4">
        {[
          {
            n: '1',
            title: 'Check your concessional cap space',
            desc: 'Add employer SG to your planned sacrifice to ensure the total stays at or below $30,000 (or your available cap including carry-forward).',
          },
          {
            n: '2',
            title: 'Review cash flow',
            desc: 'Sacrifice reduces take-home pay. Ensure you can still meet mortgage, rent, and living costs comfortably.',
          },
          {
            n: '3',
            title: 'Consider insurance inside super',
            desc: 'Salary sacrifice does not typically reduce insurance premiums attached to super, but reduced take-home pay may affect your overall budget for cover.',
          },
          {
            n: '4',
            title: 'Submit a valid salary sacrifice agreement',
            desc: 'The arrangement must be documented before the work is performed. Retrospective sacrifice of already earned salary is not valid.',
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

      <p>
        Salary sacrifice is not automatically optimal for everyone. Lower-income earners in the 16%
        or 18% tax brackets (including Medicare levy) gain less from converting income taxed at
        those rates into 15% super contributions. In some cases, after-tax contributions paired with
        the government co-contribution may produce a better outcome for eligible low and middle
        income earners.
      </p>

      <h2>Government Co-Contribution</h2>
      <p>
        The super co-contribution is a government payment designed to help low and middle-income
        earners save for retirement. If you make eligible personal after-tax contributions and meet
        income and other tests, the government may contribute up to $500 to your super — the maximum
        applies when you contribute $1,000 and your income is below the lower threshold.
      </p>
      <p>
        For the 2026-27 year, the maximum co-contribution is paid if your total income is $43,445
        or less and you contribute $1,000 from after-tax income. The payment phases out until total
        income reaches $58,445. You must be under 71 at the end of the financial year, not hold a
        temporary visa (with limited exceptions), and lodge a tax return. The ATO calculates and pays
        the co-contribution automatically — you do not apply separately.
      </p>

      <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-sm text-blue-900">
        <strong>Example:</strong> If you earn $40,000 and contribute $800 as a non-concessional
        personal contribution, the government may contribute up to $400 (at the matching rate of 50
        cents per dollar), boosting your super without any additional tax cost beyond what you already
        paid on your income.
      </div>

      <h2>Downsizer Contributions</h2>
      <p>
        The downsizer measure allows eligible Australians aged 55 or older to contribute up to
        $300,000 from the proceeds of selling their home to super, without counting toward the
        non-concessional cap. Couples can contribute up to $600,000 combined ($300,000 each) from
        the same sale. The home must have been owned for at least 10 years and been your main
        residence; the contribution must generally be made within 90 days of settlement.
      </p>
      <p>
        Downsizer contributions are non-concessional and do not count toward the $120,000 annual
        non-concessional cap, making them valuable for retirees who sell a large family home and
        want to invest surplus proceeds in a tax-effective environment. However, downsizer amounts
        count toward the Age Pension assets test once contributed, which can reduce pension
        entitlements. There is no requirement to buy a new home after selling, and you can only use
        the downsizer option once in your lifetime.
      </p>

      <h2>Investment Options Inside Super</h2>
      <p>
        Most super funds offer a range of investment options, from cash and conservative balanced
        portfolios to high-growth and sector-specific choices. Your selection affects long-term
        returns and short-term volatility. Younger members with decades until retirement can often
        tolerate higher growth allocations because they have time to recover from market downturns.
        Members nearing preservation age may prefer stable or capital-protected options to reduce
        sequencing risk — the danger of large losses just before or after retirement when withdrawals
        begin.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            title: 'Growth / High Growth',
            desc: 'Higher allocation to shares and property. Historically higher long-term returns with greater year-to-year volatility. Common default for younger members.',
          },
          {
            title: 'Balanced / MySuper',
            desc: 'Moderate mix of growth and defensive assets. MySuper is the default option for members who do not choose otherwise — designed as a simple, low-fee default.',
          },
          {
            title: 'Conservative / Cash',
            desc: 'Lower volatility, lower expected returns. May suit members close to retirement or those with low risk tolerance, but may not keep pace with inflation over long periods.',
          },
        ].map((opt) => (
          <div key={opt.title} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
            <h4 className="mb-2 font-bold text-blue-600">{opt.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{opt.desc}</p>
          </div>
        ))}
      </div>

      <p>
        Many funds also offer ethical or ESG options, direct investment choice (limited menus of
        ASX-listed securities), and lifecycle options that automatically shift from growth to
        conservative as you age. Review your investment strategy at least annually and after major
        life events — marriage, children, career change, or inheriting funds. Passive index options
        often have lower fees than actively managed alternatives, and fee differences compound over
        decades just like returns.
      </p>
      <p>
        Self-managed super funds (SMSFs) offer maximum control but come with legal responsibilities,
        audit costs, and time commitment. SMSFs suit some experienced investors with substantial
        balances; they are not appropriate for most Australians with average balances and limited
        financial expertise.
      </p>

      <h2>How Fees Erode Your Super Balance</h2>
      <p>
        Super fees are often overlooked because they are deducted automatically inside the fund.
        Typical fees include administration fees, investment management fees, insurance premiums,
        and sometimes advice fees. Even a difference of 0.5% per year in total fees can cost tens
        of thousands of dollars over a working life — and hundreds of thousands for larger balances
        over long periods.
      </p>
      <p>
        Compare your fund&apos;s Product Disclosure Statement (PDS) and check the ATO YourSuper
        comparison tool, which ranks MySuper products by fees and net returns. Consolidating multiple
        accounts eliminates duplicate admin fees and simplifies tracking. Be cautious about insurance
        inside super: default life and TPD cover helps many members, but duplicate policies across
        funds waste premiums.
      </p>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Fee Impact Example</h4>
        <p className="mb-4 text-sm text-slate-600">
          Two funds both earn 7% gross investment return. Fund A charges 0.8% total fees; Fund B
          charges 1.3%. Starting balance $100,000, no further contributions, 25 years:
        </p>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Fund A net return (~6.2%):</span>
          <span className="text-right font-mono font-semibold text-emerald-600">~$424,000</span>
          <span className="text-slate-500">Fund B net return (~5.7%):</span>
          <span className="text-right font-mono font-semibold text-red-500">~$379,000</span>
          <span className="border-t border-slate-200 pt-2 font-medium text-slate-700">Difference:</span>
          <span className="border-t border-slate-200 pt-2 text-right font-mono font-bold">~$45,000</span>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          A 0.5% fee difference on $100,000 over 25 years costs roughly $45,000 — without any
          additional contributions. On a growing balance with ongoing SG, the gap widens further.
        </p>
      </div>

      <h2>Frequently Asked Questions</h2>

      <div className="my-6 space-y-4">
        {[
          {
            q: 'Can I access my super before preservation age?',
            a: 'Generally no, except in limited circumstances such as severe financial hardship, compassionate grounds, terminal medical condition, or permanent incapacity. Early access rules are strict to protect retirement savings.',
          },
          {
            q: 'What happens to my super when I change jobs?',
            a: 'Your super stays in the fund you nominated, unless you choose a new fund or your new employer has a different default. You can consolidate accounts through myGov. Always verify SG is being paid to your intended fund.',
          },
          {
            q: 'Is super taxed when I withdraw in retirement?',
            a: 'From age 60, withdrawals from a taxed super fund are generally tax-free. Between preservation age and 60, tax may apply depending on the components of your benefit (tax-free vs taxable elements).',
          },
          {
            q: 'Should I pay extra off my mortgage or contribute to super?',
            a: 'It depends on interest rates, tax benefits, risk tolerance, and how close you are to retirement. Super offers tax concessions and compounding but is illiquid until preservation age. Mortgage repayments guarantee a return equal to the interest rate saved.',
          },
          {
            q: 'What is the transfer balance cap?',
            a: 'The transfer balance cap limits how much super you can move into the tax-free retirement phase (pension accounts). It is currently $1.9 million and indexed. Amounts above the cap remain in accumulation phase, where earnings are taxed at 15%.',
          },
          {
            q: 'Do I need life insurance inside super?',
            a: 'Default insurance in super provides basic cover for many members, but may be insufficient for dependents or large debts. Review cover amounts, premiums, and whether standalone policies outside super better suit your needs.',
          },
          {
            q: 'How does the 12% SG rate affect my projection?',
            a: 'From 1 July 2025, employer contributions increase from 11.5% to 12%. Our calculator currently uses 11.5%; for post-2025 projections, mentally add roughly 0.5% of salary per year or increase extra contributions slightly to approximate the change.',
          },
        ].map((faq) => (
          <div key={faq.q} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-slate-800">{faq.q}</h4>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">{faq.a}</p>
          </div>
        ))}
      </div>

      <h2>Common Mistakes to Avoid</h2>
      <p>
        Even diligent savers can undermine their retirement outcomes through avoidable errors. Being
        aware of these common mistakes helps you stay on track and use tools like our calculator
        more effectively.
      </p>

      <ol className="space-y-4">
        {[
          {
            title: 'Ignoring lost or duplicate super accounts',
            desc: 'Multiple accounts mean multiple sets of fees and insurance premiums. Use ATO online services via myGov to find and consolidate lost super.',
          },
          {
            title: 'Not checking employer SG payments',
            desc: 'Employers occasionally underpay or pay late. Check payslips and annual payment summaries. Unpaid SG can be reported to the ATO.',
          },
          {
            title: 'Exceeding contribution caps',
            desc: 'Breaching concessional or non-concessional caps triggers excess contributions tax and paperwork. Track SG, sacrifice, and personal contributions across all funds.',
          },
          {
            title: 'Choosing inappropriate investment options',
            desc: 'Leaving super in default MySuper may be fine, but staying in high-growth options when nearing retirement — or conservative options too early in your career — can hurt outcomes.',
          },
          {
            title: 'Underestimating fees',
            desc: 'A “performance-focused” fund with high fees may underperform a low-cost index option after fees. Always compare net returns, not gross returns.',
          },
          {
            title: 'Withdrawing super early when changing jobs',
            desc: 'Former temporary residents aside, most Australians cannot withdraw super when leaving a job unless they meet a condition of release. Do not assume you can cash out super between roles.',
          },
          {
            title: 'Relying on SG alone without a plan',
            desc: 'The ASFA comfortable retirement standard for a couple is substantially higher than SG-only projections for many earners. Voluntary contributions, debt reduction, and non-super investments may all be needed.',
          },
          {
            title: 'Using overly optimistic return assumptions',
            desc: 'Projecting 10% returns every year creates false confidence. Stress-test with 5% to 6% scenarios and account for fees and inflation when judging whether your projected balance supports your desired lifestyle.',
          },
        ].map((item, i) => (
          <li key={item.title} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 sm:p-5">
            <strong className="text-slate-800">{i + 1}. {item.title}:</strong>{' '}
            <span className="text-slate-600">{item.desc}</span>
          </li>
        ))}
      </ol>

      <h2>Planning Your Next Steps</h2>
      <p>
        Australian superannuation is a powerful, tax-advantaged system, but it rewards informed
        decisions made consistently over decades. Check your current balance and investment option,
        confirm employer SG is being paid correctly, and estimate whether you are on track using our
        superannuation calculator. If you have cap space, explore salary sacrifice or after-tax
        contributions — and if you are eligible, do not overlook the government co-contribution.
      </p>
      <p>
        Super rules change periodically. Caps are indexed, SG rates adjust, and Age Pension tests
        evolve. Review your strategy when budgets are handed down and consider speaking with a
        licensed financial adviser for personalised advice tailored to your income, family
        situation, and retirement goals. This guide and calculator provide general educational
        information only and do not constitute financial product advice.
      </p>

      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5 sm:p-6">
        <h4 className="mb-2 font-bold text-amber-900">Disclaimer</h4>
        <p className="mb-0 text-sm text-amber-900/80">
          This guide is for general information purposes only. Superannuation rules, caps, and tax
          treatment depend on individual circumstances and may change. Projections from the calculator
          assume constant returns and contributions and do not account for fees, insurance, or
          legislative changes. Consult the ATO, your super fund, or a qualified financial adviser
          before making contribution or investment decisions.
        </p>
      </div>
    </div>
  );
}
