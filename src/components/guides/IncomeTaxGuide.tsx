export default function IncomeTaxGuide() {
  return (
    <div className="guide-article">
      {/* Intro */}
      <p className="guide-intro">
        Understanding how much income tax you owe is one of the most practical financial skills
        any working Australian can develop. Whether you are starting your first job, negotiating
        a pay rise, planning a career change, or simply trying to figure out how much of your
        salary actually lands in your bank account each fortnight, income tax sits at the centre
        of the calculation. The Australian Taxation Office (ATO) collects income tax on behalf of
        the federal government, and the amount you pay depends on how much you earn, what deductions
        you can claim, and which offsets or levies apply to your situation. This guide explains
        everything you need to know about Australian income tax for the 2026-27 financial year,
        and shows you exactly how to use our income tax calculator to estimate your liability,
        marginal rate, Medicare levy, and take-home pay. It is written for everyday Australians
        who want clear answers without wading through pages of legislative jargon.
      </p>

      <h2>What Is Income Tax?</h2>
      <p>
        Income tax is a tax levied by the Australian government on the income earned by individuals,
        companies, trusts, and other entities during a financial year. For most people reading this
        guide, that means the money you earn from employment, self-employment, investments, rental
        properties, and certain government payments. The financial year in Australia runs from
        1 July to 30 June, so the 2026-27 financial year covers the period from 1 July 2024 to
        30 June 2025.
      </p>
      <p>
        Australia uses a progressive tax system, which means the rate of tax increases as your
        taxable income rises. You do not pay the same percentage on every dollar you earn. Instead,
        different portions of your income are taxed at different rates as they pass through each
        tax bracket. This is a fundamental concept that many people misunderstand, and it leads
        to one of the most common tax myths in Australia: the idea that earning a dollar more can
        somehow leave you worse off because you have moved into a higher tax bracket. We will
        address that misconception later in this guide.
      </p>
      <p>
        The ATO administers the income tax system and requires most taxpayers to lodge an annual
        tax return. Your employer typically withholds tax from your pay throughout the year under
        the Pay As You Go (PAYG) withholding system. At the end of the financial year, your tax
        return reconciles what was withheld against what you actually owe, which may result in a
        refund or an additional tax bill.
      </p>

      <div className="my-6 rounded-xl border border-blue-100 bg-blue-50/60 p-5 text-sm text-slate-700 sm:p-6">
        <strong>Key distinction:</strong> Your <em>gross income</em> is everything you earn before
        tax. Your <em>taxable income</em> is what remains after allowable deductions are subtracted.
        Income tax is calculated on taxable income, not gross income.
      </div>

      <h2>Who Pays Income Tax in Australia?</h2>
      <p>
        Australian residents for tax purposes are generally taxed on their worldwide income. If you
        live in Australia, hold permanent residency, or satisfy the resides test or domicile test,
        you are likely an Australian tax resident. Non-residents are taxed differently: they pay
        tax on Australian-sourced income only and do not receive the tax-free threshold on the
        first $18,200 of income.
      </p>
      <p>
        Temporary residents may also have different rules depending on their visa status and
        circumstances. This guide focuses on Australian resident individuals, which covers the
        vast majority of people using a standard income tax calculator for salary and wage
        earners.
      </p>

      <h2>Tax Brackets for 2026-27</h2>
      <p>
        The tax brackets for Australian resident individuals changed on 1 July 2024 as a result of
        the Stage 3 tax cuts legislated by the federal government. These changes reduced tax for
        most income earners by lowering marginal rates and adjusting bracket thresholds. Our
        calculator uses the current 2026-27 resident individual rates shown in the table below.
      </p>

      <div className="not-prose my-6 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Taxable Income</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Tax Rate</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700">Tax on This Bracket</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-4 py-2.5">$0 – $18,200</td>
              <td className="px-4 py-2.5">0%</td>
              <td className="px-4 py-2.5 text-slate-500">Nil</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">$18,201 – $45,000</td>
              <td className="px-4 py-2.5">16%</td>
              <td className="px-4 py-2.5 text-slate-500">16c for each $1 over $18,200</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">$45,001 – $135,000</td>
              <td className="px-4 py-2.5">30%</td>
              <td className="px-4 py-2.5 text-slate-500">$4,288 plus 30c for each $1 over $45,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">$135,001 – $190,000</td>
              <td className="px-4 py-2.5">37%</td>
              <td className="px-4 py-2.5 text-slate-500">$35,100 plus 37c for each $1 over $135,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5">$190,001 and over</td>
              <td className="px-4 py-2.5">45%</td>
              <td className="px-4 py-2.5 text-slate-500">$51,600 plus 45c for each $1 over $190,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The tax-free threshold of $18,200 means that if your taxable income is at or below this
        amount, you pay no income tax at all. This threshold has been a feature of the Australian
        system for many years and provides meaningful relief for low-income earners, part-time
        workers, and students who only work casually during the year.
      </p>
      <p>
        The jump from 16% to 30% at $45,001 is the largest bracket change in the 2026-27 scale.
        If your taxable income is $45,000 exactly, your income tax is $4,288. If it is $45,001,
        you pay $4,288 plus 30 cents on that extra dollar, which is $4,288.30. Moving into a
        higher bracket never reduces your overall take-home pay.
      </p>

      <h2>Medicare Levy</h2>
      <p>
        In addition to income tax, most Australian residents pay the Medicare levy. This is a
        separate charge that helps fund Australia&apos;s public health system. For the 2026-27
        financial year, the standard Medicare levy rate is 2% of your taxable income.
      </p>
      <p>
        However, low-income earners may pay a reduced levy or no levy at all. For singles with no
        dependants, the full 2% levy generally applies once taxable income exceeds $23,226. Below
        that threshold, no Medicare levy is payable. Between $23,226 and $29,033, a shaded
        reduction applies, meaning you pay a partial levy rather than the full 2%.
      </p>
      <p>
        Our calculator applies a simplified Medicare levy estimate: if your taxable income is
        above $23,226, it calculates 2% of your entire taxable income. If your income is at or
        below $23,226, no Medicare levy is included. This is a reasonable approximation for most
        middle and higher income earners but may overstate the levy slightly for those in the
        shaded zone just above the threshold.
      </p>

      <div className="my-6 rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-6">
        <h4 className="mb-2 font-bold text-emerald-900">Medicare Levy Surcharge</h4>
        <p className="mb-0 text-sm text-emerald-900/80">
          High-income earners without appropriate private hospital cover may also be liable for
          the Medicare Levy Surcharge (MLS), which is an additional 1% to 1.5% on top of the
          standard levy. The MLS applies to singles earning above $97,000 and families above
          $194,000 (2026-27 thresholds, with adjustments for dependants). Our basic income tax
          calculator does not include the MLS, so if you are a high earner without private
          hospital insurance, your actual liability may be higher than the estimate shown.
        </p>
      </div>

      <h2>HELP and HECS Repayments</h2>
      <p>
        If you have a Higher Education Loan Program (HELP) debt, formerly known as HECS, your
        repayments are handled separately from standard income tax withholding but are still
        collected through the tax system. Once your repayment income exceeds the minimum threshold,
        the ATO calculates a compulsory repayment as a percentage of your income. For 2026-27, the
        minimum repayment threshold is $54,435, at which point the repayment rate is 1% of your
        repayment income. The rate increases progressively, reaching 10% for repayment income of
        $159,664 and above.
      </p>
      <p>
        Repayment income includes your taxable income plus any reportable fringe benefits, net
        investment losses, and other adjustments. This means your HELP repayment can be triggered
        even if your salary alone appears below a threshold once other income sources are included.
      </p>

      <div className="my-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5 sm:p-6">
        <h4 className="mb-2 font-bold text-amber-900">Important Note</h4>
        <p className="mb-0 text-sm text-amber-900/80">
          Our income tax calculator does <strong>not</strong> include HELP or HECS compulsory
          repayments. If you have a student loan, your actual take-home pay after all obligations
          will be lower than the calculator shows. Check the ATO&apos;s HELP repayment thresholds
          and rates for 2026-27 to estimate your additional repayment amount.
        </p>
      </div>

      <h2>Tax Offsets Overview</h2>
      <p>
        Tax offsets, sometimes called rebates, directly reduce the amount of tax you owe rather
        than reducing your taxable income. Deductions lower the income figure that tax is calculated
        on; offsets reduce the tax bill itself. Understanding the difference matters when you are
        trying to estimate your liability.
      </p>

      <h3>Low Income Tax Offset (LITO)</h3>
      <p>
        The Low Income Tax Offset is the primary offset available to resident individuals in
        2026-27. The maximum offset is $700 for those with taxable income of $37,500 or less.
        The offset gradually reduces as income rises: it decreases by 5 cents for each dollar of
        taxable income between $37,500 and $45,000, and then by 1.5 cents for each dollar between
        $45,000 and $66,667. Once taxable income reaches $66,667, the LITO is fully phased out
        and no longer applies.
      </p>
      <p>
        For example, someone with taxable income of $40,000 receives a LITO of $575 (the maximum
        $700 minus 5 cents times the $2,500 above $37,500). Someone earning $60,000 receives a
        much smaller offset. Our calculator does not currently apply LITO automatically, so your
        actual tax may be slightly lower than shown if you qualify for this offset.
      </p>

      <h3>Other Offsets</h3>
      <p>
        Several other offsets exist for specific circumstances, though they are less commonly
        encountered in a basic salary calculator:
      </p>
      <ul className="list-disc">
        <li>
          <strong>Seniors and pensioners tax offset (SAPTO):</strong> Available to eligible
          seniors and pensioners who meet age and income requirements.
        </li>
        <li>
          <strong>Private health insurance rebate:</strong> A partial rebate on the cost of
          private health insurance premiums, income-tested and claimed either as a premium
          reduction or a tax offset in your return.
        </li>
        <li>
          <strong>Zone and overseas forces offsets:</strong> For taxpayers living in remote areas
          or serving in specified overseas locations.
        </li>
        <li>
          <strong>Spouse super contributions offset:</strong> For contributions made on behalf of
          a low-income or non-working spouse.
        </li>
      </ul>
      <p>
        The Low and Middle Income Tax Offset (LMITO), which provided temporary relief of up to
        $1,500 during previous years, has not been extended and does not apply in 2026-27.
      </p>

      <h2>PAYG Withholding vs Annual Tax</h2>
      <p>
        Most employees in Australia do not pay their entire tax bill in one lump sum at the end of
        the year. Instead, employers withhold tax from each pay cycle under the Pay As You Go
        (PAYG) withholding system. The amount withheld is based on tables published by the ATO
        that account for your income, tax file number declaration, and any claimed tax-free
        threshold.
      </p>
      <p>
        PAYG withholding is designed to spread your tax liability across the year. When you lodge
        your tax return after 30 June, the ATO compares the total tax withheld during the year
        against your actual tax liability calculated on your full annual income, deductions, and
        offsets. If too much was withheld, you receive a refund. If too little was withheld, you
        owe the difference.
      </p>
      <p>
        Several situations commonly cause a difference between PAYG withholding and your final
        tax bill. You may have changed jobs mid-year, earned income from multiple employers,
        had significant deductions that were not reflected in withholding, received a bonus taxed
        at a higher marginal rate through the schedule, or earned investment income that had no
        tax withheld at all. Self-employed individuals and contractors typically pay tax through
        PAYG instalments rather than withholding, making annual reconciliation even more important.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h4 className="mb-1.5 font-bold text-blue-600">PAYG Withholding</h4>
          <p className="text-sm leading-relaxed text-slate-600">
            Tax deducted from your salary each pay period by your employer. Based on estimated
            annual income and ATO withholding schedules. Provides regular prepayment of your
            expected tax liability throughout the year.
          </p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h4 className="mb-1.5 font-bold text-blue-600">Annual Tax Assessment</h4>
          <p className="text-sm leading-relaxed text-slate-600">
            Your actual tax calculated when you lodge your return. Accounts for total income,
            all deductions, offsets, Medicare levy, and any other adjustments. The final word
            on what you owe or are owed.
          </p>
        </div>
      </div>

      <h2>How to Use the Income Tax Calculator</h2>
      <p>
        Our Australian income tax calculator for 2026-27 is designed to give you a quick, clear
        estimate of your tax position based on two simple inputs. Here is what each field means
        and how to enter your information accurately.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h4 className="mb-1.5 font-bold text-blue-600">Annual Gross Income</h4>
          <p className="text-sm leading-relaxed text-slate-600">
            Enter your total income before any tax is deducted. For salaried employees, this is
            your annual salary plus any regular taxable allowances, bonuses, and overtime expected
            over the full financial year. Include bank interest, dividend income, and rental
            income if you want a complete picture, or enter salary alone for a employment-only
            estimate. Do not subtract superannuation contributions made by your employer, as
            employer super is not part of your assessable income.
          </p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h4 className="mb-1.5 font-bold text-blue-600">Tax Deductions</h4>
          <p className="text-sm leading-relaxed text-slate-600">
            Enter the total amount of allowable tax deductions you expect to claim for the year.
            Common deductions include work-related expenses, charitable donations, tax agent fees,
            and the cost of managing tax affairs. If you are unsure, enter zero for a baseline
            estimate based on gross income alone. The calculator subtracts deductions from gross
            income to arrive at taxable income.
          </p>
        </div>
      </div>

      <h3>What the Results Mean</h3>
      <p>
        After entering your figures, the calculator displays several results that together paint
        a picture of your tax position:
      </p>
      <ul className="list-disc">
        <li><strong>Taxable Income:</strong> Gross income minus deductions. This is the figure used to calculate tax.</li>
        <li><strong>Income Tax:</strong> Tax calculated using the 2026-27 progressive rate scale.</li>
        <li><strong>Medicare Levy:</strong> Estimated 2% levy if taxable income exceeds $23,226.</li>
        <li><strong>Total Tax:</strong> Income tax plus Medicare levy combined.</li>
        <li><strong>Marginal Rate:</strong> The tax rate that applies to your next dollar of income.</li>
        <li><strong>Effective Rate:</strong> Total tax as a percentage of taxable income, showing your overall tax burden.</li>
        <li><strong>Estimated Take-Home Pay:</strong> Gross income minus total tax, representing what you keep.</li>
      </ul>

      <h2>Step-by-Step: How Income Tax Is Calculated</h2>
      <p>
        Calculating Australian income tax manually follows a clear sequence. Understanding each
        step helps you verify calculator results and builds intuition about how changes to income
        or deductions affect your tax bill.
      </p>

      <ol className="list-decimal marker:font-semibold marker:text-blue-600">
        <li>
          <strong>Determine gross income.</strong> Add up all assessable income for the financial
          year, including salary, wages, bonuses, interest, dividends, rental income, and business
          income.
        </li>
        <li>
          <strong>Subtract allowable deductions.</strong> Deduct work-related expenses, gifts to
          deductible gift recipients, and other eligible claims to arrive at taxable income.
        </li>
        <li>
          <strong>Apply the tax-free threshold.</strong> No tax is payable on the first $18,200
          of taxable income.
        </li>
        <li>
          <strong>Calculate tax in each bracket.</strong> Apply the relevant rate to each portion
          of income that falls within each bracket, using the cumulative amounts shown in the
          tax table.
        </li>
        <li>
          <strong>Add the Medicare levy.</strong> If taxable income exceeds $23,226, apply 2%
          (subject to low-income exemptions and shading).
        </li>
        <li>
          <strong>Subtract any tax offsets.</strong> Offsets such as LITO reduce the tax payable.
          Our calculator does not apply offsets automatically.
        </li>
        <li>
          <strong>Calculate take-home pay.</strong> Subtract total tax from gross income to find
          what remains.
        </li>
      </ol>

      <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/40 p-5 shadow-sm sm:p-8">
        <div className="space-y-4 text-center">
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            Taxable Income = Gross Income − Deductions
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Then</span>
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
          </div>
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            Income Tax = Progressive rates applied to taxable income
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Then</span>
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
          </div>
          <p className="inline-block rounded-xl border border-blue-100 bg-white px-5 py-3 font-mono text-base font-bold text-blue-600 shadow-sm sm:text-lg">
            Take-Home Pay = Gross Income − Income Tax − Medicare Levy
          </p>
        </div>
      </div>

      <h2>Worked Examples</h2>
      <p>
        The best way to understand income tax is to walk through real numbers. The following
        examples use the 2026-27 tax rates and match the logic in our calculator.
      </p>

      <h3>Example 1: Part-Time Worker on $35,000</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Sarah, retail assistant, no deductions</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Gross income:</span>
          <span className="text-right font-mono">$35,000</span>
          <span className="text-slate-500">Deductions:</span>
          <span className="text-right font-mono">$0</span>
          <span className="text-slate-500">Taxable income:</span>
          <span className="border-b border-slate-300 pb-2 text-right font-mono">$35,000</span>
        </div>
        <p className="my-4 text-sm text-slate-600">
          Tax on income above $18,200: ($35,000 − $18,200) × 16% = $2,688
        </p>
        <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <span className="text-slate-500">Income tax:</span>
            <span className="font-mono font-bold">$2,688</span>
          </div>
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <span className="text-slate-500">Medicare levy (2%):</span>
            <span className="font-mono font-bold">$700</span>
          </div>
          <div className="flex flex-col justify-between gap-1 border-t border-slate-100 pt-2 sm:flex-row sm:items-center">
            <span className="font-medium text-slate-700">Total tax:</span>
            <span className="font-mono font-bold text-red-600">$3,388</span>
          </div>
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <span className="font-medium text-slate-700">Take-home pay:</span>
            <span className="font-mono font-bold text-emerald-600">$31,612</span>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Sarah&apos;s marginal rate is 16%. Her effective rate is 9.7%. She may also qualify for
          a LITO of around $575, which would reduce her actual tax below this estimate.
        </p>
      </div>

      <h3>Example 2: Full-Time Professional on $85,000</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">James, accountant, no deductions</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Gross income:</span>
          <span className="text-right font-mono">$85,000</span>
          <span className="text-slate-500">Deductions:</span>
          <span className="text-right font-mono">$0</span>
          <span className="text-slate-500">Taxable income:</span>
          <span className="border-b border-slate-300 pb-2 text-right font-mono">$85,000</span>
        </div>
        <p className="my-4 text-sm text-slate-600">
          Bracket 2 ($18,201–$45,000): ($45,000 − $18,200) × 16% = $4,288<br />
          Bracket 3 ($45,001–$85,000): ($85,000 − $45,000) × 30% = $12,000<br />
          Total income tax: $4,288 + $12,000 = $16,288
        </p>
        <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <span className="text-slate-500">Income tax:</span>
            <span className="font-mono font-bold">$16,288</span>
          </div>
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <span className="text-slate-500">Medicare levy (2%):</span>
            <span className="font-mono font-bold">$1,700</span>
          </div>
          <div className="flex flex-col justify-between gap-1 border-t border-slate-100 pt-2 sm:flex-row sm:items-center">
            <span className="font-medium text-slate-700">Total tax:</span>
            <span className="font-mono font-bold text-red-600">$17,988</span>
          </div>
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <span className="font-medium text-slate-700">Take-home pay:</span>
            <span className="font-mono font-bold text-emerald-600">$67,012</span>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          James&apos;s marginal rate is 30%. His effective rate is 21.2%. Every additional dollar
          he earns is taxed at 30 cents plus 2 cents Medicare levy until he reaches $135,001.
        </p>
      </div>

      <h3>Example 3: Senior Manager on $120,000 with Deductions</h3>
      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Priya, project manager, $5,000 in deductions</h4>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Gross income:</span>
          <span className="text-right font-mono">$120,000</span>
          <span className="text-slate-500">Deductions:</span>
          <span className="text-right font-mono">$5,000</span>
          <span className="text-slate-500">Taxable income:</span>
          <span className="border-b border-slate-300 pb-2 text-right font-mono">$115,000</span>
        </div>
        <p className="my-4 text-sm text-slate-600">
          Bracket 2: $4,288<br />
          Bracket 3: ($115,000 − $45,000) × 30% = $21,000<br />
          Total income tax: $4,288 + $21,000 = $25,288
        </p>
        <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <span className="text-slate-500">Income tax:</span>
            <span className="font-mono font-bold">$25,288</span>
          </div>
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <span className="text-slate-500">Medicare levy (2%):</span>
            <span className="font-mono font-bold">$2,300</span>
          </div>
          <div className="flex flex-col justify-between gap-1 border-t border-slate-100 pt-2 sm:flex-row sm:items-center">
            <span className="font-medium text-slate-700">Total tax:</span>
            <span className="font-mono font-bold text-red-600">$27,588</span>
          </div>
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <span className="font-medium text-slate-700">Take-home pay:</span>
            <span className="font-mono font-bold text-emerald-600">$92,412</span>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Priya&apos;s $5,000 in deductions saved her approximately $1,600 in income tax plus
          $100 in Medicare levy compared to claiming nothing. Her marginal rate is 30% and her
          effective rate is 24.0%.
        </p>
      </div>

      <h2>Tax Deductions Explained</h2>
      <p>
        Deductions reduce your taxable income, which in turn reduces the amount of tax you pay.
        The value of a deduction depends on your marginal tax rate: a $1,000 deduction saves you
        $160 if you are in the 16% bracket, but $450 if you are in the 45% bracket. You can only
        claim deductions for expenses that are directly related to earning your income, and you
        must be able to substantiate your claims with records.
      </p>

      <h3>Common Work-Related Deductions</h3>
      <ul className="list-disc">
        <li>
          <strong>Vehicle and travel expenses:</strong> Costs for travel between work sites (not
          commuting from home to your regular workplace), using either the cents-per-kilometre
          method or a logbook.
        </li>
        <li>
          <strong>Uniforms and protective clothing:</strong> Occupation-specific clothing, protective
          gear, and laundry costs for eligible items.
        </li>
        <li>
          <strong>Self-education expenses:</strong> Courses and study materials directly connected
          to your current employment, subject to certain restrictions.
        </li>
        <li>
          <strong>Tools and equipment:</strong> Items you purchase for work use, which may be
          claimed outright if under $300 or depreciated over time if more expensive.
        </li>
        <li>
          <strong>Working from home expenses:</strong> A fixed rate of 67 cents per hour or actual
          cost methods for home office running expenses.
        </li>
        <li>
          <strong>Phone and internet:</strong> The work-related portion of mobile phone and internet
          bills.
        </li>
      </ul>

      <h3>Other Deductions</h3>
      <ul className="list-disc">
        <li>
          <strong>Charitable donations:</strong> Gifts of $2 or more to deductible gift recipients
          (DGRs) registered with the ATO.
        </li>
        <li>
          <strong>Cost of managing tax affairs:</strong> Fees paid to a registered tax agent for
          preparing and lodging your return.
        </li>
        <li>
          <strong>Income protection insurance:</strong> Premiums for policies that replace lost
          income (but not life, trauma, or critical illness insurance).
        </li>
        <li>
          <strong>Investment expenses:</strong> Costs related to managing investments, such as
          account-keeping fees and advice fees, though capital expenses are treated differently.
        </li>
      </ul>

      <div className="my-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5 sm:p-6">
        <h4 className="mb-2 font-bold text-amber-900">The $300 Rule</h4>
        <p className="mb-0 text-sm text-amber-900/80">
          For many work-related expense categories, you can claim up to $300 without written
          evidence, provided the claims are reasonable. Above $300 total for a category, you need
          receipts and records. The ATO uses data matching and random audits to verify claims,
          so keep your records for at least five years.
        </p>
      </div>

      <h2>Marginal Rate vs Effective Rate</h2>
      <p>
        These two rates answer different questions and are both displayed in our calculator for
        good reason. Confusing them leads to poor financial decisions, so it is worth taking a
        moment to understand the distinction clearly.
      </p>

      <h3>Marginal Tax Rate</h3>
      <p>
        Your marginal tax rate is the rate of tax applied to your last dollar of income. It tells
        you how much tax you would pay on the next dollar you earn. If your taxable income is
        $85,000, your marginal rate is 30% because the next dollar falls in the $45,001 to
        $135,000 bracket. Marginal rate is the number you should use when evaluating decisions
        like overtime, a salary increase, or the tax impact of additional investment income.
      </p>

      <h3>Effective Tax Rate</h3>
      <p>
        Your effective tax rate is your total tax (including Medicare levy) divided by your
        taxable income, expressed as a percentage. It represents your overall tax burden as a
        share of everything you earn. For someone on $85,000 with no deductions, the effective
        rate is approximately 21.2%, well below the 30% marginal rate, because a large portion
        of income is taxed at 0% and 16%.
      </p>

      <div className="my-6 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <h4 className="mb-3 font-bold text-slate-800">Quick Comparison at $85,000 Taxable Income</h4>
        <div className="grid max-w-sm grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">Marginal rate:</span>
          <span className="text-right font-mono font-bold text-blue-600">30%</span>
          <span className="text-slate-500">Effective rate:</span>
          <span className="text-right font-mono font-bold text-emerald-600">21.2%</span>
        </div>
        <p className="mt-4 mb-0 text-sm text-slate-600">
          The gap between these two figures illustrates why the progressive system is designed
          to be fair: lower portions of income are taxed lightly, while higher portions bear
          more of the burden.
        </p>
      </div>

      <h2>Tax Planning Tips for 2026-27</h2>
      <p>
        Smart tax planning is not about avoiding tax illegally. It is about understanding the
        rules and making informed decisions within them. Here are practical strategies relevant
        to the current financial year.
      </p>

      <div className="my-6 space-y-4">
        {[
          {
            n: '1',
            title: 'Salary Sacrifice into Superannuation',
            desc: 'Contributions from pre-tax income into your super fund are taxed at 15% rather than your marginal rate. This can be especially valuable if you earn above $45,000. Be mindful of the concessional contributions cap of $30,000 per year (including employer contributions).',
          },
          {
            n: '2',
            title: 'Track Deductions Throughout the Year',
            desc: 'Do not wait until tax time to hunt for receipts. Use a simple spreadsheet or app to log work expenses as they occur. Missing deductions is effectively leaving money on the table.',
          },
          {
            n: '3',
            title: 'Consider Private Health Insurance',
            desc: 'If your income exceeds the Medicare Levy Surcharge thresholds ($97,000 for singles in 2026-27), appropriate private hospital cover can save you from paying the surcharge of 1% to 1.5%. Compare the cost of premiums against the surcharge amount.',
          },
          {
            n: '4',
            title: 'Time Deductions and Income Where Possible',
            desc: 'If you expect to be in a higher tax bracket next year, consider deferring deductions or accelerating income strategically. This is more relevant for self-employed individuals and those with variable income.',
          },
          {
            n: '5',
            title: 'Review Your PAYG Withholding',
            desc: 'If you consistently receive large refunds or tax bills, adjust your withholding by updating your tax file number declaration with your employer or requesting a variation through the ATO.',
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

      <h2>Common Mistakes to Avoid</h2>
      <p>
        Even experienced taxpayers make errors that cost them money or attract ATO attention.
        Being aware of the most frequent mistakes helps you lodge an accurate return and set
        realistic expectations when using a calculator.
      </p>

      <ol className="space-y-4">
        {[
          {
            title: 'Thinking your entire income is taxed at your top rate',
            desc: 'This is the most pervasive myth in Australian tax. Moving from $44,999 to $45,001 does not mean all your income is suddenly taxed at 30%. Only the dollar above $45,000 is taxed at the higher rate.',
          },
          {
            title: 'Forgetting to include all income sources',
            desc: 'The ATO receives data from employers, banks, share registries, and other sources. Omitting interest, dividends, or a second job from your return will likely be detected through data matching.',
          },
          {
            title: 'Claiming personal expenses as work deductions',
            desc: 'Commuting from home to your regular workplace, everyday clothing, and personal meals are not deductible. The ATO publishes occupation-specific guides listing what is and is not claimable.',
          },
          {
            title: 'Ignoring the Medicare Levy Surcharge',
            desc: 'High earners without private hospital cover may owe significantly more than a basic calculator shows. Check whether the surcharge applies to you before relying on a simple estimate.',
          },
          {
            title: 'Not accounting for HELP repayments',
            desc: 'Graduates with student debt face compulsory repayments on top of income tax. A salary of $60,000 triggers a 2% HELP repayment on repayment income, which is not reflected in our calculator.',
          },
          {
            title: 'Using gross salary when you have significant deductions',
            desc: 'Entering your full salary without subtracting expected deductions overstates your tax. If you know you will claim $3,000 in work expenses, include that in the deductions field.',
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
            q: 'When do the 2026-27 tax rates apply?',
            a: 'The 2026-27 financial year runs from 1 July 2024 to 30 June 2025. The updated tax brackets and Stage 3 tax cuts took effect from 1 July 2024. When you lodge your tax return for this year (typically between July and October 2025), these are the rates that apply.',
          },
          {
            q: 'Do I need to lodge a tax return?',
            a: 'You must lodge a tax return if your taxable income exceeds the tax-free threshold of $18,200, unless the ATO has notified you that lodging is not necessary. Even if your income is below the threshold, you may want to lodge to claim a refund of tax withheld or to report deductible expenses.',
          },
          {
            q: 'Is superannuation taxed?',
            a: 'Employer superannuation guarantee contributions are not included in your assessable income and do not appear in the income tax calculator. Contributions are taxed at 15% within the super fund. When you access super in retirement, different tax rules apply depending on your age and the type of benefit.',
          },
          {
            q: 'What is the difference between a tax deduction and a tax offset?',
            a: 'A deduction reduces your taxable income before tax is calculated. An offset reduces the tax payable after it has been calculated. A $1,000 deduction saves you tax at your marginal rate (e.g. $300 at 30%), while a $1,000 offset reduces your tax bill by the full $1,000 (subject to offset caps and phase-outs).',
          },
          {
            q: 'How accurate is this calculator?',
            a: 'Our calculator provides a solid estimate for Australian resident individuals using the official 2026-27 tax brackets and a simplified Medicare levy calculation. It does not include LITO, HELP repayments, Medicare Levy Surcharge, private health rebate, or other offsets and adjustments. Use it for planning purposes and consult a registered tax agent for your actual return.',
          },
          {
            q: 'Can I claim working from home expenses?',
            a: 'Yes. For 2026-27, the ATO offers a fixed rate method of 67 cents per hour worked from home, covering electricity, internet, phone, stationery, and computer consumables. Alternatively, you can use the actual cost method if you keep detailed records. You cannot claim mortgage interest or rent under the fixed rate method.',
          },
          {
            q: 'What happens if I have two jobs?',
            a: 'Each employer withholds tax based on the assumption that their job is your only source of income. If you work two part-time jobs that individually fall below the tax-free threshold but combined exceed it, you may end up with a tax bill at the end of the year because insufficient tax was withheld overall. Consider requesting no tax-free threshold from one employer.',
          },
          {
            q: 'Are COVID-related tax concessions still available?',
            a: 'Most temporary COVID-19 tax measures have expired. The fixed rate for working from home was updated to 67 cents per hour from 1 July 2022 and continues to apply. Temporary full expensing for business assets has also ended, replaced by the permanent instant asset write-off for eligible small businesses.',
          },
        ].map((faq) => (
          <div key={faq.q} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-slate-800">{faq.q}</h4>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">{faq.a}</p>
          </div>
        ))}
      </div>

      <h2>Recent Tax Changes for 2026-27</h2>
      <p>
        The most significant change for the 2026-27 financial year is the implementation of the
        revised Stage 3 tax cuts. Originally legislated in 2019 with different parameters, the
        cuts were modified in early 2024 to provide greater relief to lower and middle income
        earners. The key changes that took effect from 1 July 2024 include:
      </p>

      <ul className="list-disc">
        <li>
          The rate on income between $18,201 and $45,000 was reduced from 19% to <strong>16%</strong>.
        </li>
        <li>
          The 32.5% and 37% brackets were consolidated into a single <strong>30%</strong> bracket
          covering income from $45,001 to $135,000.
        </li>
        <li>
          The threshold for the 37% rate was lifted from $120,000 to <strong>$135,000</strong>.
        </li>
        <li>
          The threshold for the top 45% rate was lifted from $180,000 to <strong>$190,000</strong>.
        </li>
      </ul>

      <p>
        These changes mean that most taxpayers pay less income tax in 2026-27 compared to the
        previous financial year. Someone earning $60,000 saves approximately $804 in income tax.
        Someone earning $100,000 saves approximately $2,179. Higher earners above $146,000 also
        benefit, though the savings are proportionally smaller relative to income at the top end.
      </p>

      <div className="my-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5 sm:p-6">
        <h4 className="mb-2 font-bold text-blue-900">Other Notable Updates</h4>
        <ul className="mb-0 space-y-2 text-sm text-blue-900/80">
          <li>
            The Medicare levy low-income threshold for singles increased to $23,226, with the
            shade-in threshold at $29,033.
          </li>
          <li>
            The HELP minimum repayment threshold for 2026-27 is $54,435, with the lowest
            repayment rate at 1%.
          </li>
          <li>
            The concessional superannuation contributions cap remains at $30,000, with unused cap
            amounts able to be carried forward for up to five years if your total super balance
            is below $500,000.
          </li>
          <li>
            The tax-free threshold of $18,200 remains unchanged and continues to benefit all
            resident individual taxpayers.
          </li>
        </ul>
      </div>

      <h2>Putting It All Together</h2>
      <p>
        Income tax affects nearly every financial decision you make, from accepting a job offer
        to choosing how many hours of overtime to work. The Australian system is progressive by
        design, ensuring that those who earn more contribute a larger share while protecting
        low-income earners through the tax-free threshold and offsets like LITO. Our income tax
        calculator gives you a fast, reliable starting point for the 2026-27 financial year,
        using the official ATO resident individual rates and a Medicare levy estimate.
      </p>
      <p>
        Use the calculator to compare scenarios: what happens if you earn a bonus, claim an extra
        $2,000 in deductions, or move from part-time to full-time work. Understand your marginal
        rate so you can evaluate the true value of additional income. Remember that the estimate
        is a guide, not a substitute for a lodged tax return, and that factors like HELP
        repayments, the Medicare Levy Surcharge, and tax offsets may adjust your final position.
      </p>
      <p>
        Tax law changes regularly, and individual circumstances vary widely. If your situation
        involves investment properties, trust distributions, foreign income, or business structures,
        seek advice from a registered tax agent. For the majority of Australian salary and wage
        earners, however, understanding the brackets, knowing your deductions, and running the
        numbers through a calculator is enough to take control of your tax planning with confidence.
      </p>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        <strong>Disclaimer:</strong> This guide and calculator are for general educational purposes
        only and do not constitute tax advice. Tax outcomes depend on individual circumstances.
        Consult a registered tax agent or the ATO for advice specific to your situation.
      </div>
    </div>
  );
}
