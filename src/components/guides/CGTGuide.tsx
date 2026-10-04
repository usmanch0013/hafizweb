export default function CGTGuide() {
  return (
    <>
      {/* Intro */}
      <p className="guide-intro">
        If you sell an asset such as stocks, shares, property, cryptocurrency, precious metals,
        antiques, second homes, digital assets, or other investments for a profit, you may have to
        pay Capital Gains Tax (CGT) on the capital gain. If you want to define your potential CGT
        and find out how much tax you may need to pay based on your asset, you can use our Australian
        capital gains tax calculator to estimate how much CGT you may need to pay on your capital
        gain. This can be useful when you want to calculate property gain tax, calculate CGT on
        sale of property, or work out CGT on investment property sold within one year or after
        more than one year, with the amount of tax depending on the circumstances.
      </p>

      <h2 id="what-is-cgt">What is CGT?</h2>
      <p>
        CGT is a tax system imposed by the Australian government on the profit made from selling
        non-inventory assets. The CGT rate can be different depending on the types of business,
        asset being sold, time period of holding assets and financial year. If you sell an asset
        after holding it for a long period, the tax rate may be lower, while selling it after a
        short period may result in a higher CGT rate. CGT is generally charged on the profit made
        from the sale.
      </p>

      <h2 id="formula">Formula</h2>
      <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/40 p-5 shadow-sm sm:p-8">
        <div className="space-y-4 text-center">
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            Capital Gain = Selling Price − Purchase Price − Allowable Expenses
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Then</span>
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
          </div>
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            50% Discount (if applicable)
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Then</span>
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
          </div>
          <p className="inline-block rounded-xl border border-blue-100 bg-white px-5 py-3 font-mono text-base font-bold text-blue-600 shadow-sm sm:text-lg">
            Capital Gains Tax = Capital Gain × Applicable CGT Rate
          </p>
        </div>
      </div>

      <h2 id="how-to-calculate">How to Calculate Capital Gain Tax</h2>
      <p>
        To calculate capital gains tax, first subtract the cost base of an asset from its selling
        price. The amount remaining is your capital gain.
      </p>
      <p>
        For example: when you calculate capital gains tax on property, you first need to work out
        the capital gain from the sale of the property. This calculation can apply to an investment
        property, rental property, land, stocks, shares, cryptocurrency, precious metals, antiques,
        second homes, digital assets, and other assets.
      </p>

      <h3>How to Figure Out Capital Gains Tax</h3>
      <ol className="list-decimal marker:font-semibold marker:text-blue-600">
        <li><strong>Work out the selling price.</strong> Find exactly how much you sold the asset for.</li>
        <li><strong>Calculate the asset&apos;s cost base.</strong> This includes the purchase price and allowable expenses.</li>
        <li><strong>Subtract the cost base from the selling price.</strong> This gives your gross capital gain.</li>
        <li><strong>Apply any capital losses.</strong> Deduct previous or current year capital losses.</li>
        <li><strong>Apply the CGT discount.</strong> If eligible (held &gt; 12 months), apply a 50% discount.</li>
        <li><strong>Add the taxable capital gain to your taxable income.</strong></li>
        <li><strong>Calculate the tax based on your applicable tax rate.</strong></li>
      </ol>

      <h3>Capital Gains Tax Discount</h3>
      <p>
        You also need to know whether you are eligible for a capital gains tax discount. After
        applying the applicable discount to your capital gain, the remaining taxable capital gain
        is used to determine how much tax you may need to pay.
      </p>

      <h3>How Is Capital Gains Tax Calculated?</h3>
      <p>
        For example: if you bought an investment property for $500,000 and its adjusted cost base
        is $530,000, then sold it for $600,000, your capital gain would be $70,000 before applying
        any capital losses or CGT discount.
      </p>

      <h2>How to Calculate the Capital Gain Tax</h2>
      <p>
        To calculate your property gain tax, subtract the cost base of an asset from its selling
        price. The amount left after this calculation is your capital gain.
      </p>
      <p>
        For example, when you calculate capital gains tax on property, you first need to work out
        the capital gain from the sale of the property. This calculation can apply to an investment
        property, rental property, land, stocks, shares, property, cryptocurrency, precious metals,
        antiques, second homes, digital assets or other assets.
      </p>

      <h3>Discount</h3>
      <p>
        You also need to know whether you are eligible for a capital gains tax discount. After
        applying the applicable discount to your capital gain, the remaining capital gain is used
        to determine how much tax you may need to pay.
      </p>

      <h3>Example of Capital Gain With 50% Discount</h3>
      <p>
        Suppose you purchase an investment property for $1,000,000 and later sell it for $1,500,000.
        If you have $200,000 in allowable expenses, the capital gain is:
      </p>
      <div className="my-5 overflow-x-auto rounded-xl bg-slate-900 p-5 font-mono text-sm text-slate-100 shadow-inner sm:p-6">
        <p className="text-slate-400">Capital Gain = Selling Price − Purchase Price − Allowable Expenses</p>
        <p className="mt-2">= $1,500,000 − $1,000,000 − $200,000</p>
        <p className="mt-2 text-lg font-bold text-green-400">= $300,000</p>
      </div>
      <p>
        If an individual holds an asset for more than 12 months, they may receive a 50% CGT discount.
        The taxable capital gain is:
      </p>
      <p className="inline-block rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 font-mono text-sm font-semibold">
        $300,000 × 50% = $150,000
      </p>
      <p className="mt-4">If the CGT rate is 10%, the tax is:</p>
      <p className="inline-block rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 font-mono text-sm font-semibold">
        10/100 × $150,000 = $15,000
      </p>
      <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-4 text-sm text-slate-700 sm:p-5">
        So, after the 50% discount, the taxable capital gain is <strong>$150,000</strong>, and at
        a 10% CGT rate, the CGT is <strong>$15,000</strong>.
      </div>

      <h2 id="calculator-inputs">What to Enter into the Capital Gains Tax Calculator</h2>
      <p>When using the capital gains tax calculator, you need to enter the following information:</p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            title: 'Purchase price',
            desc: 'Enter the purchase price of the asset. This is needed to work out the difference between what you paid for the asset and what you receive when selling property.',
          },
          {
            title: 'Sold price',
            desc: 'Enter the sold price of the asset. The selling price is used when you calculate CGT on sale of property or calculate property gain tax. This can also apply to on sale of home, on selling house, or the sale of an investment property.',
          },
          {
            title: 'Length of ownership',
            desc: 'Enter how long you owned the asset. You need to know whether you sold the asset within 12 months or after owning it for more than 12 months, as the length of ownership can affect the capital gain calculation and applicable discount.',
          },
          {
            title: 'Current taxable income',
            desc: 'Enter your current taxable income. It is important to know how much taxable income you already have because the capital gain is added to your income when working out the tax payable.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-1.5 font-bold text-blue-600">{item.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <h3>Total Costs of Purchasing, Owning and Selling the Asset</h3>
      <p>
        Enter the total costs related to purchasing, owning and selling the asset. This may include
        costs incurred when purchasing the property, expenses during ownership such as renovation
        costs, and costs related to selling the property. These costs are considered when
        calculating CGT because they can be subtracted when working out the gain from the sale.
      </p>

      <h3>Capital Gain Losses / Previous Losses</h3>
      <p>
        If you have any capital losses from previous years, you can subtract them from your current
        capital gains before calculating CGT. This can reduce your taxable capital gain and the
        amount of Capital Gains Tax you need to pay.
      </p>

      <h3>How Long Owned Assets</h3>
      <p>
        Enter how many years and months you have held the asset. This information will help
        determine the applicable CGT rate.
      </p>

      <h3>Income Year</h3>
      <p>
        Select the income year in which you received the income, as your capital gain is added to
        your taxable income before the applicable tax is calculated. For example: 2023-2024,
        2025-2026, 2026-2027, 2027-2028.
      </p>

      <h2 id="ato-methods">How Does the ATO Calculate Capital Gains Tax?</h2>
      <p>
        Capital gains tax ATO uses three methods for calculating capital gains tax. Before applying
        any method, you need to consider several key factors, including the type of asset, ownership
        type, asset purchase date, and how long you have held the asset.
      </p>

      <div className="my-6 space-y-4">
        {[
          {
            color: 'border-blue-400',
            title: 'Indexation Method',
            desc: 'Under this method, assets purchased before 20 September 1999 are eligible for CGT calculation. The asset\'s cost base is adjusted for inflation under the proposed rules, and the capital gain is then calculated to determine the CGT.',
          },
          {
            color: 'border-emerald-400',
            title: 'Discount Method',
            desc: 'Under this method, individuals and trusts can receive a 50% CGT discount if they hold an asset for more than 12 months. Companies are generally not eligible for the 50% CGT discount. Superannuation Funds: Eligible superannuation funds may receive a 33.3% CGT discount on certain capital gains.',
          },
          {
            color: 'border-orange-400',
            title: 'Simple Method',
            desc: 'Under this method, if an asset is sold within 12 months of purchase, the 50% CGT discount does not apply. The full capital gain is included in taxable income. This applies whether you are calculating capital gains tax on shares, real estate, or tax on selling house properties.',
          },
        ].map((m) => (
          <div key={m.title} className={`rounded-r-xl border-l-4 ${m.color} bg-white p-5 shadow-sm`}>
            <h4 className="mb-1 font-bold text-slate-800">{m.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{m.desc}</p>
          </div>
        ))}
      </div>

      <h2 id="taxable-assets">Which Assets Are Taxable Under CGT?</h2>
      <p>
        CGT can apply to assets such as stocks, bonds, property, shares, cryptocurrency, precious
        metals, real estate, antiques, second homes, digital assets, and other properties when
        they are sold for a profit.
      </p>

      <h2 id="exemptions">Which Assets Are Not Taxable Under CGT?</h2>
      <ol className="space-y-4">
        {[
          { title: 'Assets Acquired Before 20 September 1985', desc: 'If an asset was purchased before 20 September 1985, it is generally exempt from CGT altogether. Capital gains tax rules only came into effect from that date onward.' },
          { title: 'Main Residence Exemption', desc: 'Your primary residence — the home you actually live in — is generally exempt from CGT when sold. This is a major relief for most homeowners dealing with capital gains on house sale calculations.' },
          { title: 'Granny Flat Arrangements', desc: 'Eligible granny flat arrangements are generally exempt from CGT when they are created, varied, or terminated — provided the required conditions are met.' },
          { title: 'Cars and Motorcycles', desc: 'Personal-use cars and motorcycles are generally exempt from CGT. Since these are typically depreciating assets used for personal transport, they fall outside the standard capital gains framework.' },
          { title: 'Personal-Use Assets Under $10,000', desc: 'If a personal-use asset was acquired for $10,000 or less, any capital gain made on it is generally exempt from CGT.' },
          { title: 'Awards, Compensation, and Damages', desc: 'Certain awards, compensation payments, and damages may also be exempt from CGT when specific conditions are met.' },
        ].map((item, i) => (
          <li key={item.title} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 sm:p-5">
            <strong className="text-slate-800">{i + 1}. {item.title}:</strong>{' '}
            <span className="text-slate-600">{item.desc}</span>
          </li>
        ))}
      </ol>

      <h2 id="small-business">Small Business CGT Concessions: A Complete Guide</h2>
      <p>
        Small business owners in Australia have access to a range of valuable capital gains tax
        concessions that can significantly reduce — or even completely eliminate — the tax payable
        on the sale of business assets.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          { title: '15-Year Exemption', desc: 'If continuously held for 15+ years and you are 55+ retiring, the eligible capital gain can be completely disregarded — meaning no CGT is payable at all.' },
          { title: '50% Active Asset Reduction', desc: 'Reduces the capital gain by 50%. Can be applied on top of the general 50% CGT discount, potentially reducing an eligible gain by up to 75% in total.' },
          { title: 'Retirement Exemption', desc: 'Lifetime limit of $500,000. If under 55, the amount must be paid into a complying super fund or RSA.' },
          { title: 'Small Business Rollover', desc: 'Defer all or part of a capital gain for at least 2 years to reinvest in replacement assets or eligible improvements.' },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
            <h4 className="mb-2 font-bold text-blue-600">{c.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="my-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5 sm:p-6">
        <h4 className="mb-2 font-bold text-amber-900">Important Upcoming Changes to CGT Rules</h4>
        <ul className="mb-0 space-y-1 text-sm text-amber-900/80">
          <li>The current 50% CGT discount will be replaced with a cost-base indexation treatment.</li>
          <li>A 30% minimum tax rate will apply to relevant real capital gains.</li>
          <li>These new rules will apply to capital gains accruing from 1 July 2027.</li>
        </ul>
      </div>

      <h2 id="reduce-cgt">How to Reduce Capital Gains Tax</h2>
      <p>
        Capital Gains Tax (CGT) may not apply in certain situations, and the taxable gain can be
        significantly lower depending on the type of asset and how it is utilized. Understanding
        these exemptions and strategies to reduce capital gains tax on property can help you
        minimize your tax liability legally.
      </p>

      <h3>Key Strategies to Reduce Capital Gains Tax</h3>
      <div className="my-6 space-y-4">
        {[
          { n: '1', title: 'Capital Loss Offset', desc: 'If you experienced a capital loss in the previous year, you can subtract it from your current year\'s capital gains. Reduce capital gains tax through loss offset is one of the most straightforward ways to reduce taxable income.' },
          { n: '2', title: 'CGT Discount for Long-Term Holdings', desc: 'If you sell the asset after holding it for more than 12 months, you may qualify for a 50% discount. Even a difference of a few months in how long you hold an asset can affect your capital gain and CGT.' },
          { n: '3', title: 'Deduct Expenses to Reduce Capital Gains Tax', desc: 'Expenses incurred when purchasing, maintaining, or selling the asset can be deducted from the sale price when calculating your capital gain, further lowering your CGT liability.' },
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
        <strong>Important:</strong> For individuals and trusts, a 50% CGT discount may be available,
        making this one of the most effective ways to reduce capital gains tax in Australia.
      </div>

      <h2 id="gain-or-loss">How to Calculate a Capital Gain or Capital Loss</h2>
      <p>
        First, determine the sale price (capital proceeds) of the asset and its purchase price
        (cost base). Then, add any eligible purchase and selling expenses to the cost base. Finally,
        subtract the adjusted cost base from the sale price.
      </p>
      <ul className="list-disc">
        <li>If the sale proceeds are higher than the cost base, you generally have a <strong className="text-emerald-600">capital gain</strong>.</li>
        <li>If the sale proceeds are lower than the cost base, you generally have a <strong className="text-red-500">capital loss</strong>.</li>
      </ul>

      <h2 id="recent-changes">Recent Capital Gains Tax Changes</h2>
      <p>
        Recent changes to Australia&apos;s Capital Gains Tax (CGT) rules include proposed changes
        that are expected to apply from 1 July 2027. Under the proposed changes, the existing 50%
        CGT discount will be replaced by an inflation-based treatment for relevant capital gains. A
        minimum 30% tax rate on relevant capital gains will also be introduced.
      </p>

      <h2>Will Capital Gains Tax Rules Change in the Future?</h2>
      <p>
        Yes, Capital Gains Tax (CGT) rules can change in the future. Australia&apos;s CGT system
        has already undergone significant changes over time. More recently, changes announced in
        2026 are intended to apply from 1 July 2027, subject to the relevant legislation and
        final rules. Therefore, it is important to check the latest Australian CGT rules when
        calculating capital gains tax on property, shares or other assets.
      </p>

      <h2>How CGT Events Affect Capital Gains and Losses</h2>
      <p>
        A CGT event happens when certain transactions or changes occur that may result in a capital
        gain or capital loss. Common CGT events include selling or giving away an asset, losing or
        destroying an asset, changes involving shares, leaving Australia, receiving certain payments
        from a company, and using your home for business purposes. Understanding these CGT events
        can help you determine when a capital gain or capital loss may arise and whether Capital
        Gains Tax applies to the transaction.
      </p>

      <h2>Why Calculate Your Capital Gains Tax Early?</h2>
      <p>
        Calculating your Capital Gains Tax (CGT) early helps you know approximately how much CGT
        you may need to pay before you sell an asset. Early CGT calculation also helps you manage
        your assets more effectively, allowing you to estimate which assets may help you reduce or
        avoid CGT and make better decisions about investment and selling assets.
      </p>

      <h2 id="single-asset">Calculating CGT for a Single Asset</h2>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Example: Emily sells an investment property</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Purchase price:</span>
          <span className="text-right font-mono">$420,000</span>
          <span className="text-slate-500">Selling price:</span>
          <span className="text-right font-mono">$520,000</span>
          <span className="text-slate-500">Total cost base:</span>
          <span className="border-b border-slate-300 pb-2 text-right font-mono">$450,000</span>
          <span className="pt-2 font-medium text-slate-700">Capital gain:</span>
          <span className="pt-2 text-right font-mono font-bold text-emerald-600">$70,000</span>
        </div>
        <p className="my-4 text-sm text-slate-600">
          As she owned the property for more than 12 months, she qualifies for the 50% CGT discount.
        </p>
        <div className="inline-block rounded-lg border border-emerald-100 bg-white px-4 py-2 text-sm shadow-sm">
          CGT discount: <span className="font-mono">$70,000 × 50% = </span>
          <strong className="font-mono text-emerald-600">$35,000</strong>
        </div>
        <p className="mt-4 text-base font-bold text-slate-800">Net capital gain: $35,000</p>
        <p className="mt-2 text-xs text-slate-500">
          Important: The CGT event generally occurs on the date the sale contract is signed, not the settlement date.
        </p>
      </div>

      <h2 id="multiple-assets">Calculating CGT for Multiple Assets</h2>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Example: Olivia sells property &amp; shares</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Property gain:</span>
          <span className="text-right font-mono text-emerald-600">+$85,000</span>
          <span className="mt-2 text-slate-500">Shares purchase:</span>
          <span className="mt-2 text-right font-mono">$18,000</span>
          <span className="text-slate-500">Shares sold:</span>
          <span className="text-right font-mono">$11,000</span>
          <span className="border-t border-slate-300 pt-2 font-medium text-slate-700">Capital loss on shares:</span>
          <span className="border-t border-slate-300 pt-2 text-right font-mono font-bold text-red-500">-$7,000</span>
        </div>
        <p className="my-4 text-sm text-slate-600">
          The share capital loss is deducted from the property capital gain, then the 50% CGT discount is applied.
        </p>
        <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <span className="text-slate-500">Offsetting gains:</span>
            <span className="font-mono">$85,000 − $7,000 = $78,000</span>
          </div>
          <div className="flex flex-col justify-between gap-1 border-t border-slate-100 pt-2 sm:flex-row sm:items-center">
            <span className="text-slate-500">Applying 50% discount:</span>
            <span className="font-mono font-bold text-emerald-600">$78,000 × 50% = $39,000</span>
          </div>
        </div>
        <p className="mt-4 text-base font-bold text-slate-800">Net capital gain: $39,000</p>
      </div>

      <h2 id="cgt-history">When Did Capital Gains Tax Start in Australia?</h2>
      <p>
        Australia introduced Capital Gains Tax (CGT) on 20 September 1985. This date is known as
        the pre-CGT date because assets acquired before 20 September 1985 are generally treated as
        pre-CGT assets and are usually exempt from CGT. Assets acquired on or after this date
        generally became subject to the new capital gains tax system.
      </p>
      <p>
        On 20 September 1999, Australia introduced the 50% CGT discount for eligible individuals
        and trusts that held an asset for more than 12 months. Companies generally cannot claim the
        50% CGT discount, while complying superannuation funds are generally entitled to a one-third
        CGT discount for eligible assets.
      </p>
      <p>
        More recently, proposed tax changes announced in May 2026 include an inflation-based
        treatment for relevant capital gains and a proposed minimum 30% tax rate on relevant real
        capital gains, intended to apply from 1 July 2027. Understanding the history of CGT and
        these tax changes in Australia is important when calculating capital gains tax on property,
        shares, businesses and other assets.
      </p>
    </>
  );
}
