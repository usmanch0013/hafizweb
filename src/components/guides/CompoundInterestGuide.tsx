export default function CompoundInterestGuide() {
  return (
    <div className="guide-article">
      <p className="guide-intro">
        Compound interest is one of the most powerful forces in personal finance, yet it remains
        poorly understood by many Australian savers and investors. Whether you are building an
        emergency fund in a high-interest savings account, contributing regularly to superannuation,
        or investing in a diversified portfolio of ETFs and shares, understanding how compounding
        works can dramatically improve the decisions you make today. This guide explains compound
        interest in plain language for Australian readers: what it is, how it differs from simple
        interest, why starting early matters, how regular contributions accelerate growth, and what
        realistic return assumptions look like in the current economic environment. Use it alongside
        our compound interest calculator to model your own scenarios and see how small changes in
        timing, contribution rate, or compounding frequency can reshape your financial future over
        decades.
      </p>

      <h2>What Is Compound Interest?</h2>
      <p>
        Compound interest is interest calculated on both your original principal and on any interest
        that has already been earned in previous periods. In other words, you earn returns not only
        on the money you put in, but also on the growth that money has already generated. Over short
        time frames the difference can seem modest. Over ten, twenty, or thirty years it becomes
        transformative. This is why Albert Einstein is often quoted — perhaps apocryphally — as
        calling compound interest the eighth wonder of the world: those who understand it, earn it;
        those who do not, pay it.
      </p>
      <p>
        For Australian savers, compound interest shows up everywhere. Your bank savings account
        may compound daily or monthly, with the advertised annual percentage rate reflecting how
        often interest is credited. Term deposits typically pay interest at maturity or on a fixed
        schedule. Superannuation funds compound investment returns inside the fund, with earnings
        generally taxed at concessional rates until you reach preservation age. Even your mortgage
        works in reverse: the lender charges compound interest on the outstanding balance, which is
        why paying extra principal early saves far more than the face value of each extra payment
        suggests.
      </p>
      <p>
        The standard formula for compound interest with no additional contributions is: Future Value
        equals Principal multiplied by one plus the periodic rate, raised to the power of the number
        of periods. When you add regular contributions — as most Australians do through super,
        salary sacrifice, or automated investing — the maths becomes slightly more complex, but the
        underlying principle remains the same: each period&apos;s growth builds on everything that
        came before.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-emerald-50/40 p-5 shadow-sm sm:p-8">
        <div className="space-y-4 text-center">
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            FV = P × (1 + r/n)<sup>nt</sup>
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Where</span>
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
          </div>
          <p className="text-sm text-slate-600">
            P = principal, r = annual rate (decimal), n = compounding periods per year, t = years
          </p>
        </div>
      </div>

      <h2>Simple Interest vs Compound Interest</h2>
      <p>
        Simple interest is calculated only on the original principal. If you invest $10,000 at a
        simple rate of 7% per year, you receive $700 every year — never more, never less — regardless
        of how long the money stays invested. After 30 years you would have $10,000 in principal plus
        $21,000 in interest, for a total of $31,000. The interest never feeds back into the base that
        earns the next round of returns.
      </p>
      <p>
        Compound interest, by contrast, reinvests each period&apos;s earnings. The same $10,000 at
        7% compounded annually grows to roughly $76,123 after 30 years — more than double the simple
        interest outcome. The gap widens with time because compound growth is exponential, not linear.
        Year one adds 7% on $10,000. Year thirty adds 7% on approximately $71,068. That accelerating
        curve is the signature of compounding, and it is why long investment horizons favour patient
        investors.
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 font-bold text-slate-700">After</th>
              <th className="px-4 py-3 font-bold text-slate-700">Simple Interest (7%)</th>
              <th className="px-4 py-3 font-bold text-slate-700">Compound Interest (7%)</th>
              <th className="px-4 py-3 font-bold text-emerald-700">Difference</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-4 py-3 text-slate-600">10 years</td>
              <td className="px-4 py-3 font-mono">$17,000</td>
              <td className="px-4 py-3 font-mono">$19,672</td>
              <td className="px-4 py-3 font-mono text-emerald-600">+$2,672</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 text-slate-600">20 years</td>
              <td className="px-4 py-3 font-mono">$24,000</td>
              <td className="px-4 py-3 font-mono">$38,697</td>
              <td className="px-4 py-3 font-mono text-emerald-600">+$14,697</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-slate-600">30 years</td>
              <td className="px-4 py-3 font-mono">$31,000</td>
              <td className="px-4 py-3 font-mono">$76,123</td>
              <td className="px-4 py-3 font-mono text-emerald-600">+$45,123</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Most real-world financial products in Australia use compound interest, not simple interest.
        Credit cards compound daily. Home loans compound monthly. Investment returns inside managed
        funds and ETFs compound continuously as distributions are reinvested. When comparing products,
        always check whether quoted rates are nominal, whether fees are deducted before or after
        returns are calculated, and how often interest or returns are credited. A headline rate means
        little if compounding frequency or fees erode the effective yield.
      </p>

      <h2>The Rule of 72</h2>
      <p>
        The Rule of 72 is a quick mental shortcut for estimating how long it takes an investment to
        double in value at a given compound rate of return. Divide 72 by the annual percentage rate,
        and the result approximates the number of years to double. At 7% per year, 72 divided by 7
        equals roughly 10.3 years. At 4%, it takes about 18 years. At 9%, just eight years.
      </p>
      <p>
        The rule works because of the mathematics of exponential growth and is most accurate for
        rates between about 4% and 12%. It is not a substitute for precise calculations — especially
        when regular contributions, taxes, fees, or inflation are involved — but it is invaluable
        for sanity-checking projections. If someone tells you they can reliably double your money
        every three years with no risk, the Rule of 72 suggests they are implying a return above 24%
        per year, which should immediately prompt scepticism.
      </p>

      <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { rate: '4%', years: '~18 years' },
          { rate: '6%', years: '~12 years' },
          { rate: '7%', years: '~10 years' },
          { rate: '9%', years: '~8 years' },
        ].map((item) => (
          <div key={item.rate} className="rounded-xl border border-slate-100 bg-white p-4 text-center shadow-sm">
            <p className="text-lg font-bold text-blue-600">{item.rate}</p>
            <p className="mt-1 text-xs text-slate-500">to double</p>
            <p className="mt-2 text-sm font-semibold text-slate-700">{item.years}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-sm text-blue-900">
        <strong>Tip:</strong> You can also use the Rule of 72 in reverse. If you want your money to
        double in 15 years, divide 72 by 15 to estimate you need roughly 4.8% annual returns after
        fees and inflation to achieve that goal in real terms.
      </div>

      <h2>The Power of Starting Early</h2>
      <p>
        Time is the ingredient that makes compound interest extraordinary. Two investors can
        contribute the same total amount of money and end up with vastly different outcomes based
        solely on when they start. This is not a motivational platitude — it is arithmetic. Early
        contributions have more periods to compound, and the growth from those early dollars
        eventually does more heavy lifting than later contributions, even if the later ones are
        larger in nominal terms.
      </p>
      <p>
        Consider two Australian workers, both earning similar incomes. Priya begins investing $300
        per month at age 25 and stops completely at age 35, contributing for only ten years ($36,000
        total). James waits until age 35 and then invests $300 per month until age 65, contributing
        for thirty years ($108,000 total). Assuming a 7% annual return compounded monthly, Priya
        ends up with approximately $338,000 at age 65. James, despite contributing three times as
        much money, ends up with roughly $304,000. Priya&apos;s decade head start outweighs James&apos;s
        two extra decades of contributions because her earliest dollars compounded for forty years.
      </p>
      <p>
        This example assumes constant returns, which never happens in real markets. It also ignores
        taxes, fees, and inflation. But the directional lesson holds across virtually every realistic
        scenario: the earlier you establish the habit of saving and investing, the less total capital
        you need to reach the same goal. For young Australians entering the workforce, even modest
        contributions to super through employer SG (Superannuation Guarantee) plus a small voluntary
        top-up can leverage decades of compounding before retirement.
      </p>
      <p>
        Starting early also provides a buffer against volatility. An investor with a thirty-year
        horizon can weather bear markets and still benefit from compounding on recovered and
        subsequently higher balances. Someone who begins at fifty-five has far less room to recover
        from a downturn and must typically accept lower-risk, lower-return allocations or higher
        contribution rates. Time cannot be bought back at any price.
      </p>

      <h2>How Fees Erode Compound Growth</h2>
      <p>
        Management fees, account-keeping fees, and transaction costs are often dismissed as minor
        line items on a statement. Over a thirty-year investment horizon, however, even a 0.5%
        difference in annual fees can cost tens of thousands of dollars in lost compound growth.
        Consider two identical portfolios of $100,000 growing at 7% gross return over thirty years.
        Portfolio A pays 0.20% in fees (net return 6.80%); Portfolio B pays 1.00% (net return 6.00%).
        Portfolio A grows to roughly $768,000. Portfolio B grows to roughly $574,000 — a difference
        of nearly $194,000, even though the fee gap is only 0.80% per year.
      </p>
      <p>
        This is compounding working against you. Every dollar paid in fees is a dollar that never
        enters your growth base. The effect accelerates over time because the forgone growth itself
        would have compounded. When comparing super funds, ETFs, or managed funds, always look at
        the total expense ratio and any additional performance fees, buy-sell spreads, or brokerage
        costs. A fund that outperforms by 0.5% but charges 1% more in fees is a net loser. For
        passive, long-term investors, low-cost index ETFs on the ASX remain among the most
        fee-efficient vehicles for capturing compound market returns.
      </p>

      <h2>Superannuation: Australia&apos;s Compounding Powerhouse</h2>
      <p>
        Superannuation deserves special mention because it combines compound investment returns
        with structural advantages that are difficult to replicate outside the system. Your employer
        must contribute at least 11.5% of your ordinary time earnings (the Superannuation Guarantee
        rate, rising incrementally toward 12%) into a complying fund. You can add concessional
        (pre-tax) contributions up to the annual cap — $30,000 as of the 2024–25 financial year,
        with carry-forward provisions for unused caps in some circumstances — and non-concessional
        (after-tax) contributions up to $120,000 per year or $360,000 using the bring-forward rule.
      </p>
      <p>
        Inside the accumulation phase, investment earnings are taxed at up to 15%, which is lower
        than most workers&apos; marginal income tax rates. Capital gains on assets held longer than
        twelve months within super receive a one-third discount, reducing the effective CGT rate to
        10%. When you transition to retirement phase (pension phase), investment earnings on up to
        the transfer balance cap (currently $1.9 million indexed) are tax-free. These tax concessions
        mean more of each dollar of return stays invested and compounds rather than being paid to the
        ATO.
      </p>
      <p>
        The compounding maths inside super can be staggering over a full career. A 25-year-old
        earning $70,000 per year with only employer SG contributions (no voluntary top-ups) at 7%
        net return could accumulate roughly $850,000 to $950,000 by age 65, depending on wage growth
        assumptions. Add a modest $200 per month in salary-sacrificed concessional contributions and
        the balance could exceed $1.3 million. These projections assume uninterrupted employment and
        constant returns — real careers are messier — but they illustrate why super is the foundation
        of retirement compounding for most Australians.
      </p>

      <h2>Regular Contributions and Dollar-Cost Averaging</h2>
      <p>
        Lump-sum investing can work well if you have capital ready and the discipline to stay
        invested through volatility. For most Australians, however, wealth is built gradually through
        regular contributions: employer super, salary sacrifice, fortnightly ETF purchases, or
        automated transfers to a savings account. Each contribution adds fresh principal that
        immediately begins compounding alongside everything already in the portfolio.
      </p>
      <p>
        Regular contributions also smooth out the timing risk of entering the market at a peak.
        When you invest a fixed dollar amount on a schedule — say $500 every month into an ASX 200
        ETF — you automatically buy more units when prices are low and fewer when prices are high.
        This approach, known as dollar-cost averaging, does not guarantee profits, but it removes
        the need to predict market tops and bottoms, which even professional fund managers
        consistently fail to do.
      </p>
      <p>
        The compounding effect of regular contributions is often underestimated because people focus
        on the contribution amount rather than the total capital base it builds. Contributing $200
        per month might feel insignificant, but over twenty-five years at 6% annual returns that
        stream alone grows to roughly $138,000 — of which more than $78,000 is compound growth, not
        money from your pocket. Increase the contribution to $500 per month and the same horizon
        produces approximately $346,000. The maths rewards consistency more than occasional bursts
        of effort.
      </p>

      <h2>Compounding Frequency: Does It Matter?</h2>
      <p>
        Compounding frequency refers to how often earned interest or returns are calculated and
        added back to your balance. Common frequencies include daily, monthly, quarterly, and
        annually. The more frequently interest compounds, the slightly higher your effective annual
        yield, all else being equal. This is called the effective annual rate, and it exceeds the
        nominal rate whenever compounding occurs more than once per year.
      </p>
      <p>
        On a $50,000 balance at a nominal 5% annual rate, the difference between annual and monthly
        compounding is modest: annual compounding yields $2,500 in interest after one year, while
        monthly compounding yields approximately $2,512 — about $12 more. Over one year on a savings
        account, the practical impact is small. Over decades across a large portfolio, it adds up,
        but it is rarely the dominant factor in your financial outcome. Contribution rate, time
        horizon, fees, and the underlying return assumption matter far more.
      </p>

      <div className="my-6 space-y-4">
        {[
          {
            color: 'border-blue-400',
            title: 'Daily compounding',
            desc: 'Common for savings accounts and some term deposits. Interest is calculated every day and credited monthly. Maximises effective yield on cash holdings.',
          },
          {
            color: 'border-emerald-400',
            title: 'Monthly compounding',
            desc: 'Standard for many investment calculators, home loans, and managed funds. Aligns naturally with monthly contribution schedules.',
          },
          {
            color: 'border-orange-400',
            title: 'Annual compounding',
            desc: 'Used for some bonds and simplified projections. Produces slightly lower effective yields than more frequent compounding at the same nominal rate.',
          },
        ].map((item) => (
          <div key={item.title} className={`rounded-r-xl border-l-4 ${item.color} bg-white p-5 shadow-sm`}>
            <h4 className="mb-1 font-bold text-slate-800">{item.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        When using our compound interest calculator, you can select monthly, quarterly, or annual
        compounding to see how frequency affects projections. For long-term share and ETF investing,
        returns effectively compound continuously as dividends are reinvested and unit prices
        fluctuate — monthly compounding is a reasonable modelling assumption.
      </p>

      <h2>Inflation and Real Returns</h2>
      <p>
        Compound interest calculators typically show nominal future values — the dollar amount you
        might see on a statement, not adjusted for purchasing power. Inflation erodes the real value
        of those future dollars. If your portfolio grows at 7% per year but inflation averages 3%,
        your real (inflation-adjusted) return is closer to 4%. A projection showing $1,000,000 at
        retirement might feel like a fortune today, but in thirty years that amount may only buy
        what $400,000 buys now, depending on inflation outcomes.
      </p>
      <p>
        The Reserve Bank of Australia targets inflation of 2% to 3% per year over the medium term.
        Actual inflation varies: it spiked above 7% in 2022 before moderating. When setting return
        assumptions in a calculator, consider subtracting an inflation estimate to gauge real growth.
        A conservative real return assumption of 3% to 4% for a balanced growth portfolio is often
        used by financial planners in Australia, though individual circumstances and asset allocation
        will differ.
      </p>

      <div className="my-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5 sm:p-6">
        <h4 className="mb-2 font-bold text-amber-900">Nominal vs Real: A Quick Example</h4>
        <p className="mb-0 text-sm text-amber-900/80">
          $100,000 growing at 7% nominal for 20 years reaches roughly $387,000. After adjusting
          for 3% annual inflation, the purchasing power is closer to $214,000 in today&apos;s dollars.
          Both numbers are useful: nominal for account balance planning, real for lifestyle planning.
        </p>
      </div>

      <h2>What to Enter in the Compound Interest Calculator</h2>
      <p>
        Our calculator models future value based on an initial lump sum, ongoing monthly
        contributions, an annual return rate, an investment time horizon, and compounding frequency.
        Each field represents a lever you can adjust to explore different scenarios. Below is a
        guide to what each input means and sensible starting points for Australian users.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            title: 'Initial investment',
            desc: 'The lump sum you are starting with today. This might be existing savings, an inheritance, or a rollover from another account. Enter zero if you are starting from scratch with only regular contributions.',
          },
          {
            title: 'Monthly contribution',
            desc: 'The amount you plan to add each month. Include employer super contributions only if you are modelling super separately — otherwise use your voluntary personal contributions. Consistency matters more than the exact day of the month.',
          },
          {
            title: 'Annual return rate',
            desc: 'The expected average annual return before fees and taxes, expressed as a percentage. See the section on realistic return assumptions below. For cash savings, use your current high-interest savings rate. For diversified investments, 5% to 7% is a common planning range.',
          },
          {
            title: 'Investment period',
            desc: 'The number of years you plan to stay invested. Match this to your goal horizon: five years for a house deposit, twenty to forty years for retirement. Shorter periods reduce the compounding benefit and may warrant lower-risk assets.',
          },
          {
            title: 'Compounding frequency',
            desc: 'How often returns are reinvested. Monthly is appropriate for most super, ETF, and savings account scenarios. Quarterly suits some term deposits. Annual is a simplified assumption useful for conservative estimates.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-1.5 font-bold text-blue-600">{item.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        The calculator assumes a constant return rate throughout the investment period. Real markets
        do not deliver constant returns — some years are up 20%, others are down 15%. The output is
        a projection tool, not a guarantee. Use it to compare scenarios and understand sensitivity
        to contribution rate and time horizon, not to predict exact account balances.
      </p>

      <h2>Worked Examples</h2>
      <p>
        The following examples use our calculator&apos;s methodology: monthly compounding, fixed
        annual return rates, and contributions made at the end of each period. All figures are
        illustrative and rounded. Past performance is not indicative of future results.
      </p>

      <h3>Example 1: Young Saver vs Late Starter</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Mia starts at 22, Nathan starts at 42</h4>
        <p className="mb-4 text-sm text-slate-600">
          Both invest $400 per month at 7% annual return compounded monthly until age 65. Mia
          contributes for 43 years; Nathan for 23 years.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">Mia (starts at 22)</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Total contributed:</span><span className="font-mono">$206,400</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Future value at 65:</span><span className="font-mono font-bold text-emerald-600">~$1,234,000</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Interest earned:</span><span className="font-mono">~$1,027,600</span></div>
            </div>
          </div>
          <div className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-orange-600">Nathan (starts at 42)</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Total contributed:</span><span className="font-mono">$110,400</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Future value at 65:</span><span className="font-mono font-bold text-orange-600">~$282,000</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Interest earned:</span><span className="font-mono">~$171,600</span></div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Mia contributes nearly twice as much in total dollars yet ends up with more than four times
          Nathan&apos;s balance. The twenty-year head start is worth more than an extra $96,000 in
          contributions.
        </p>
      </div>

      <h3>Example 2: Small Monthly Contributions Over 30 Years</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Sarah: $150/month, no initial balance</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Monthly contribution:</span>
          <span className="text-right font-mono">$150</span>
          <span className="text-slate-500">Annual return:</span>
          <span className="text-right font-mono">6%</span>
          <span className="text-slate-500">Period:</span>
          <span className="text-right font-mono">30 years</span>
          <span className="text-slate-500">Total contributed:</span>
          <span className="text-right font-mono">$54,000</span>
          <span className="pt-2 font-medium text-slate-700">Future value:</span>
          <span className="pt-2 text-right font-mono font-bold text-emerald-600">~$150,600</span>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Less than the cost of a daily coffee habit, invested consistently, builds a meaningful
          nest egg. Compound interest contributes roughly $96,600 — nearly two-thirds of the final
          balance.
        </p>
      </div>

      <h3>Example 3: Lump Sum Plus Monthly Top-Ups</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">David: $20,000 inheritance plus $500/month</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Initial investment:</span>
          <span className="text-right font-mono">$20,000</span>
          <span className="text-slate-500">Monthly contribution:</span>
          <span className="text-right font-mono">$500</span>
          <span className="text-slate-500">Annual return:</span>
          <span className="text-right font-mono">7%</span>
          <span className="text-slate-500">Period:</span>
          <span className="text-right font-mono">20 years</span>
          <span className="text-slate-500">Total contributed:</span>
          <span className="text-right font-mono">$140,000</span>
          <span className="pt-2 font-medium text-slate-700">Future value:</span>
          <span className="pt-2 text-right font-mono font-bold text-emerald-600">~$342,000</span>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          The initial $20,000, left untouched and compounded, grows to roughly $77,000 on its own.
          Combined with contributions, the lump sum provides an immediate boost to the compounding
          base that persists for the entire horizon.
        </p>
      </div>

      <h3>Example 4: Increasing Contributions Over Time</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Aisha: starting small, stepping up later</h4>
        <p className="mb-4 text-sm text-slate-600">
          Aisha contributes $200 per month for the first ten years, then $600 per month for the next
          twenty years, at 6.5% annual return. This two-phase scenario approximates career progression.
        </p>
        <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
          <div className="flex flex-col justify-between gap-1 sm:flex-row">
            <span className="text-slate-500">Phase 1 (10 yrs at $200/mo):</span>
            <span className="font-mono">Contributes $24,000 → grows to ~$33,000</span>
          </div>
          <div className="flex flex-col justify-between gap-1 border-t border-slate-100 pt-2 sm:flex-row">
            <span className="text-slate-500">Phase 2 (20 yrs at $600/mo + Phase 1 balance):</span>
            <span className="font-mono font-bold text-emerald-600">Final value ~$362,000</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Total out-of-pocket contributions: $168,000. Compound growth adds approximately $194,000.
          Starting with what you can afford and increasing as income rises is a practical strategy
          that still captures substantial compounding benefits.
        </p>
      </div>

      <h3>Example 5: High-Interest Savings vs Balanced Portfolio</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Comparing 4.5% cash vs 7% diversified growth</h4>
        <p className="mb-4 text-sm text-slate-600">
          Tom invests $10,000 initially plus $300 per month for 15 years in two scenarios.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
            <p className="font-bold text-slate-700">High-interest savings (4.5%)</p>
            <p className="mt-2 font-mono text-emerald-600">Future value: ~$78,500</p>
            <p className="mt-1 text-slate-500">Interest earned: ~$24,500</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
            <p className="font-bold text-slate-700">Balanced ETF portfolio (7%)</p>
            <p className="mt-2 font-mono text-emerald-600">Future value: ~$108,000</p>
            <p className="mt-1 text-slate-500">Interest earned: ~$54,000</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          The higher-return scenario produces roughly $29,500 more — but comes with greater volatility
          and the possibility of negative years. The right choice depends on time horizon and risk
          tolerance, not returns alone.
        </p>
      </div>

      <h2>Investing in ETFs and Shares: Compounding in Practice</h2>
      <p>
        When Australians invest in ETFs (exchange-traded funds) or individual shares, compounding
        works through two channels: capital growth and reinvested income. Capital growth compounds
        as the value of your holdings increases over time — a 7% rise on a $100,000 portfolio adds
        $7,000, and next year&apos;s return applies to $107,000. Reinvested dividends and
        distributions compound as those payments buy additional units, which themselves generate
        future income and growth.
      </p>
      <p>
        Popular ASX-listed ETFs such as broad market index funds provide diversified exposure with
        relatively low management fees — often 0.07% to 0.30% per year. Lower fees mean more of
        your return stays invested and compounds. A 1% annual fee on a $200,000 portfolio costs
        $2,000 per year, but the true cost over decades includes the compound growth that $2,000
        would have generated if it had remained invested. Fee drag is one of the most overlooked
        enemies of compounding.
      </p>
      <p>
        Franking credits on Australian dividends can enhance after-tax returns for eligible
        investors, effectively boosting the income component of total return. However, tax treatment
        varies by entity type (individual, company, super fund) and personal circumstances. Inside
        superannuation, investment earnings are generally taxed at up to 15%, with tax-free earnings
        in pension phase — making super one of the most tax-effective compounding vehicles available
        to most Australians, provided you can accept the access restrictions until preservation age.
      </p>
      <p>
        Dividend reinvestment plans (DRPs) offered by many ASX companies automate the compounding
        process by using dividends to acquire additional shares without brokerage. Whether you use a
        DRP, manually reinvest through your broker, or invest in accumulation-class ETFs that
        automatically reinvest, the principle is identical: leave returns in the market to participate
        in future growth. Spending dividends as income only makes sense when you have reached the
        drawdown phase of your financial life.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { title: 'Broad market ETFs', desc: 'Diversified exposure to hundreds of companies. Compounding through unit price growth and reinvested distributions.' },
          { title: 'Superannuation', desc: 'Tax-advantaged compounding with employer contributions. Access restricted until preservation age (currently 60 for most).' },
          { title: 'Direct shares', desc: 'Single-company exposure with higher concentration risk. DRPs automate reinvestment for compounding.' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
            <h4 className="mb-2 font-bold text-blue-600">{item.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Emergency Fund vs Long-Term Compounding</h2>
      <p>
        Not every dollar should be chasing maximum compound returns. Financial planners in Australia
        typically recommend holding three to six months of essential expenses in an emergency fund
        before aggressively investing for long-term growth. This cash buffer covers unexpected events
        — job loss, medical bills, urgent home repairs — without forcing you to sell investments at
        a bad time or take on high-interest debt.
      </p>
      <p>
        Emergency fund money belongs in a safe, liquid account: a high-interest savings account or
        offset account linked to your mortgage. These vehicles offer modest compound returns (as of
        2025–2026, competitive savings rates in Australia have ranged from roughly 4% to 5% on
        bonus-rate accounts) but preserve capital and provide instant access. The compounding on
        emergency savings is real but intentionally limited — you are paying an opportunity cost for
        security and peace of mind.
      </p>
      <p>
        Long-term compounding belongs in assets with higher expected returns: super, ETFs, managed
        funds, investment property. The key distinction is time horizon. Money needed within five
        years should generally not be exposed to share market volatility, because sequence-of-returns
        risk can devastate a portfolio that must be liquidated during a downturn. Money needed in
        twenty or thirty years can ride out multiple market cycles and capture the full exponential
        curve of compound growth.
      </p>

      <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-sm text-blue-900">
        <strong>Rule of thumb:</strong> Build your emergency fund first, pay down high-interest debt
        second (credit cards above 15% destroy compound growth faster than any investment can create
        it), then direct surplus cash flow toward long-term compounding investments.
      </div>

      <h2>Realistic Return Assumptions for Australian Investors</h2>
      <p>
        One of the most common mistakes in compound interest projections is using unrealistically
        high return assumptions. Historical data provides context, but past performance does not
        guarantee future results. The following ranges are commonly used for planning purposes in
        Australia and should be adjusted for fees and taxes.
      </p>

      <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 font-bold text-slate-700">Asset type</th>
              <th className="px-4 py-3 font-bold text-slate-700">Typical planning range</th>
              <th className="px-4 py-3 font-bold text-slate-700">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-4 py-3 text-slate-600">High-interest savings</td>
              <td className="px-4 py-3 font-mono">3.5% – 5.5%</td>
              <td className="px-4 py-3 text-slate-500">Rates vary with RBA cash rate</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 text-slate-600">Term deposits</td>
              <td className="px-4 py-3 font-mono">3.5% – 5.0%</td>
              <td className="px-4 py-3 text-slate-500">Locked rate, limited liquidity</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-slate-600">Balanced super / ETF</td>
              <td className="px-4 py-3 font-mono">5% – 7%</td>
              <td className="px-4 py-3 text-slate-500">After fees, before tax</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-4 py-3 text-slate-600">Growth (shares-heavy)</td>
              <td className="px-4 py-3 font-mono">6% – 8%</td>
              <td className="px-4 py-3 text-slate-500">Higher volatility, long horizon needed</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-slate-600">ASX 200 (historical, nominal)</td>
              <td className="px-4 py-3 font-mono">~9% – 10%</td>
              <td className="px-4 py-3 text-slate-500">Long-term average incl. dividends; not a forecast</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        ASX data over very long periods shows nominal returns including dividends averaging roughly
        9% to 10% per year, but this figure includes periods of extraordinary growth and devastating
        crashes. Planning at 7% for a growth-oriented portfolio and 5% for a balanced allocation
        provides a margin of safety. Subtract 2% to 3% for inflation to think in real terms. If your
        calculator projection only works at 12% or 15% returns, your savings rate or timeline — not
        compound interest — is the variable that needs adjustment.
      </p>

      <h2>Common Mistakes That Undermine Compounding</h2>
      <div className="my-6 space-y-4">
        {[
          {
            n: '1',
            title: 'Waiting for the perfect moment',
            desc: 'Markets cannot be timed consistently. Delaying investment while sitting in cash forfeits months or years of compounding. Start with what you have and refine your strategy as you learn.',
          },
          {
            n: '2',
            title: 'Stopping contributions during downturns',
            desc: 'Bear markets are when your fixed contributions buy the most units. Pausing or panicking during a 20% drop removes the dollar-cost averaging advantage at the worst possible time.',
          },
          {
            n: '3',
            title: 'Ignoring fees and tax drag',
            desc: 'A 1% management fee or unnecessary trading costs compound against you just as surely as returns compound for you. Choose low-cost index funds and be mindful of capital gains tax when selling.',
          },
          {
            n: '4',
            title: 'Using nominal returns without considering inflation',
            desc: 'A million dollars in thirty years is not the same as a million today. Always sanity-check projections in both nominal and real terms to avoid retirement shortfalls.',
          },
          {
            n: '5',
            title: 'Chasing past performance',
            desc: 'Last year\'s top-performing fund or sector rarely repeats. Compounding rewards consistent, diversified exposure over decades — not hot tips and speculative bets.',
          },
          {
            n: '6',
            title: 'Raiding long-term investments for short-term needs',
            desc: 'Withdrawing from super early (where permitted) or selling ETF holdings for non-essential purchases resets the compounding clock. Maintain separate accounts for different goals.',
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
            q: 'How is compound interest different from the interest on my home loan?',
            a: 'Both use compounding, but with a home loan you owe the compounding interest to the lender. Each repayment reduces your principal, which reduces the base on which future interest is calculated. Making extra repayments early saves disproportionately because you reduce the compounding base for the remaining loan term.',
          },
          {
            q: 'Should I pay off my mortgage or invest for compound growth?',
            a: 'It depends on your mortgage rate versus expected investment returns after tax, your risk tolerance, and whether you have adequate insurance and emergency savings. Paying down a 6% mortgage provides a guaranteed 6% return equivalent; investing in shares offers higher expected returns but with volatility and no guarantee.',
          },
          {
            q: 'Does compound interest work inside superannuation?',
            a: 'Yes. Super funds invest your contributions in a diversified portfolio, and all earnings — dividends, interest, and capital gains — are reinvested within the fund and compound over your working life. Concessional tax rates inside accumulation phase make super particularly effective for long-term compounding.',
          },
          {
            q: 'How often should I check my portfolio?',
            a: 'For long-term compounding strategies, checking quarterly or even annually is sufficient. Frequent checking increases the temptation to react to short-term volatility, which is the primary behavioural threat to compounding. Set your contribution schedule, choose low-cost diversified investments, and let time do the work.',
          },
          {
            q: 'Can I lose money with compound interest?',
            a: 'Cash accounts with compound interest carry minimal risk (though inflation can erode purchasing power). Share and ETF investments can and do lose value in individual years. Over long periods, diversified portfolios have historically recovered and grown, but there are no guarantees. Compounding amplifies both gains and losses on your current balance.',
          },
          {
            q: 'What is the best compounding frequency for my calculator scenario?',
            a: 'Monthly compounding is the most common and appropriate choice for super, ETF investing, and most savings accounts. The difference between monthly and daily compounding is negligible for long-term projections. Choose the frequency that matches your actual product if known.',
          },
          {
            q: 'How do I account for taxes in compound interest calculations?',
            a: 'Our calculator does not model tax. For super, use pre-tax or after-tax return estimates depending on whether you are modelling concessional or non-concessional contributions. For investments outside super, a rough approach is to reduce your expected return by 1% to 2% to approximate ongoing tax drag, or consult a tax professional for your specific situation.',
          },
          {
            q: 'Is a 7% return assumption too optimistic?',
            a: 'For a diversified growth portfolio over twenty-plus years, 7% nominal is a widely used middle-of-the-road planning assumption — neither aggressive nor ultra-conservative. For cash savings, use your actual account rate. For conservative portfolios, 5% may be more appropriate. Always consider inflation and fees when setting your assumption.',
          },
        ].map((item) => (
          <div key={item.q} className="rounded-xl border border-slate-100 bg-slate-50/50 p-5">
            <h4 className="mb-2 font-bold text-slate-800">{item.q}</h4>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">{item.a}</p>
          </div>
        ))}
      </div>

      <h2>Volatility and the Long-Term Compounding Curve</h2>
      <p>
        Compound interest calculators produce smooth, upward-sloping curves that imply steady,
        predictable growth. Real investment journeys look nothing like that. The ASX 200 fell more
        than 50% during the global financial crisis of 2008–2009. It dropped sharply again in the
        COVID-19 crash of March 2020, then recovered to new highs within months. Investors who
        stayed the course and continued contributing during those downturns benefited enormously,
        because their regular contributions purchased units at depressed prices that subsequently
        compounded on the recovery.
      </p>
      <p>
        Sequence-of-returns risk is the technical term for how the order of good and bad years
        affects outcomes — especially when you are drawing down rather than accumulating. During
        accumulation, volatility is uncomfortable but generally survivable if your time horizon is
        long enough. During retirement drawdown, a bad market in the first few years can permanently
        impair a portfolio&apos;s ability to recover. This is one reason financial planners
        recommend gradually shifting from growth assets to more defensive allocations as you approach
        and enter retirement, even though it means accepting lower expected returns and slower
        compounding in exchange for stability.
      </p>
      <p>
        The psychological challenge of volatility is often harder than the mathematical one. Seeing
        a $500,000 portfolio drop to $350,000 triggers loss aversion that no spreadsheet can
        neutralise. Successful long-term compounders develop a plan before crises hit: a written
        investment policy, an appropriate asset allocation for their horizon, and a commitment to
        keep contributing regardless of headlines. The investors who capture the full benefit of
        compounding are rarely the ones who pick the best stocks — they are the ones who stay
        invested through the cycles that destroy the returns of those who panic.
      </p>

      <h2>Putting It All Together</h2>
      <p>
        Compound interest rewards patience, consistency, and realistic expectations. The formula is
        simple; the behaviour required to benefit from it is not. Start as early as you can, even
        with small amounts. Contribute regularly and increase your rate as income allows. Choose
        investments appropriate to your time horizon, keep fees low, and resist the urge to interrupt
        the process during market turbulence. Use our compound interest calculator to model your
        personal scenario — adjust the initial balance, monthly contribution, return rate, and time
        horizon to see which levers have the greatest impact on your outcome.
      </p>
      <p>
        Remember that every projection is a map, not the territory. Actual returns will vary year to
        year. Inflation will change the purchasing power of your future balance. Life events — career
        changes, family, health — will alter your capacity to contribute. The value of understanding
        compound interest is not in predicting an exact number but in internalising a principle: the
        decisions you make today about saving and investing echo forward for decades. For Australian
        savers and investors willing to play the long game, that echo can be worth hundreds of
        thousands of dollars.
      </p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 sm:p-6">
        <strong className="text-slate-800">Disclaimer:</strong> This guide is for general
        information only and does not constitute financial advice. Investment returns are not
        guaranteed and can go down as well as up. Tax rules and rates change. Consider speaking with
        a licensed financial adviser before making significant investment decisions.
      </div>
    </div>
  );
}
