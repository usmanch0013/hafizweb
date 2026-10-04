export default function GSTGuide() {
  return (
    <div className="guide-article">
      {/* Intro */}
      <p className="guide-intro">
        Goods and Services Tax (GST) affects almost every Australian business owner, sole trader,
        contractor, and many individuals who buy or sell taxable goods and services. Whether you
        are quoting a price to a customer, preparing a tax invoice, lodging a Business Activity
        Statement (BAS), or simply trying to understand why your receipt shows a separate GST
        line, knowing how the 10% tax works saves time, reduces errors, and helps you stay
        compliant with the Australian Taxation Office (ATO). This guide explains Australian GST
        in plain language for business owners and individuals. It covers how to add and remove GST
        from dollar amounts, when registration is required, how input tax credits work, what
        belongs on your BAS, and the practical details that trip people up every day. Use it
        alongside our GST calculator whenever you need a quick figure for invoices, quotes, or
        reconciling bank deposits.
      </p>

      <h2>What Is GST?</h2>
      <p>
        Goods and Services Tax is a broad-based consumption tax of 10% on most goods, services,
        and other supplies sold or consumed in Australia. It was introduced on 1 July 2000 and
        replaced a range of indirect taxes such as wholesale sales tax. GST is collected at each
        stage of the supply chain, but the economic burden generally falls on the final consumer.
        Registered businesses act as collection agents for the ATO: they charge GST on taxable
        sales, remit the net amount after claiming credits for GST paid on business purchases,
        and lodge regular activity statements.
      </p>
      <p>
        GST sits alongside other taxes such as income tax and fringe benefits tax, but it operates
        differently. Income tax is based on profit; GST is based on turnover and the net tax
        position after input tax credits. Not every transaction attracts GST. Some supplies are
        GST-free (no GST charged, but credits may still be claimable on related purchases), and
        some are input-taxed (no GST charged and limited or no credit on purchases). Understanding
        which category your sale or purchase falls into is essential before you price, invoice,
        or lodge a BAS.
      </p>
      <p>
        The ATO administers GST under the A New Tax System (Goods and Services Tax) Act 1999 and
        related legislation. Most registered entities report and pay GST through the BAS system,
        usually quarterly, although monthly and annual reporting options exist for eligible
        businesses. If you operate a company, trust, partnership, or sole trader structure, the
        GST rules apply to the entity that makes the supply, not necessarily to you personally,
        although sole traders and partnerships often blur that line in practice.
      </p>

      <h2>The 10% GST Rate</h2>
      <p>
        The standard GST rate in Australia is 10%. This rate applies to most taxable supplies
        unless a specific provision reduces it (which is rare) or the supply is GST-free or
        input-taxed. When you see a price that is GST-exclusive, the GST component is exactly
        one-tenth of that amount. When you see a GST-inclusive price, the GST embedded in the
        price is one-eleventh of the total, not one-tenth, because the tax is calculated on the
        pre-tax amount, not on the final price.
      </p>
      <p>
        The 10% rate has remained unchanged since GST was introduced, but that stability should
        not make you complacent about classification. A supply taxed at 10% is only taxable if
        it is a taxable supply in the first place. For example, basic food, some health services,
        and certain education courses may be GST-free at 0% effective rate. Financial supplies
        such as lending and certain insurance arrangements may be input-taxed. Always confirm the
        character of the supply before applying the 10% rate in your calculator or on an invoice.
      </p>
      <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-emerald-50/40 p-5 shadow-sm sm:p-8">
        <div className="space-y-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Standard rate</p>
          <p className="inline-block rounded-xl border border-emerald-100 bg-white px-6 py-4 font-mono text-2xl font-bold text-emerald-600 shadow-sm sm:text-3xl">
            GST = 10%
          </p>
          <p className="text-sm text-slate-600">
            Applies to most taxable supplies in Australia unless a specific exemption or special rule applies.
          </p>
        </div>
      </div>

      <h2>Registration Threshold: $75,000</h2>
      <p>
        You must register for GST if you carry on an enterprise and your current GST turnover
        meets or exceeds the registration turnover threshold. For most businesses, that threshold
        is $75,000 per year. The threshold is measured on a rolling twelve-month basis, not
        necessarily aligned with the financial year. That means you need to monitor turnover
        continuously. If you cross $75,000 in any twelve-month period, registration is required
        within 21 days.
      </p>
      <p>
        Non-profit bodies have a higher threshold of $150,000. Taxi drivers and ride-sourcing
        drivers must register for GST regardless of turnover, even if their annual turnover is
        below $75,000. If you are starting a business and expect turnover to exceed the threshold
        within the first twelve months, you may choose to register voluntarily before you reach
        the limit. Voluntary registration is common when you have significant set-up costs and
        want to claim input tax credits on purchases such as equipment, stock, and professional
        fees from day one.
      </p>
      <p>
        GST turnover is not the same as gross income for income tax purposes. It generally
        includes the value of taxable and GST-free supplies you make, but excludes input-taxed
        supplies and certain other items. If you are unsure whether a particular sale counts
        toward the threshold, check ATO guidance or speak with a registered tax agent. Failing
        to register when required can lead to backdating, interest, and penalties on GST you
        should have collected.
      </p>
      <div className="my-5 rounded-xl border border-blue-100 bg-blue-50/70 p-4 text-sm text-slate-700 sm:p-5">
        <strong>Quick check:</strong> Add up your taxable and GST-free turnover for the past
        twelve months. If the total is $75,000 or more (or you are a taxi or ride-sourcing driver),
        you generally need to be GST registered and charge GST on taxable sales.
      </div>

      <h2>Adding GST: The Formula</h2>
      <p>
        To add GST to a GST-exclusive amount, multiply the ex-GST amount by 10% (or 0.10), or
        multiply the ex-GST amount by 1.10 to get the GST-inclusive total in one step. The
        GST amount itself is one-tenth of the base. This is the calculation you use when your
        quote or invoice shows prices before tax and you need to tell the customer the total
        they will pay.
      </p>
      <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/40 p-5 shadow-sm sm:p-8">
        <div className="space-y-4 text-center">
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            GST Amount = Ex-GST Amount × 0.10
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Or</span>
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
          </div>
          <p className="inline-block rounded-xl border border-blue-100 bg-white px-5 py-3 font-mono text-base font-bold text-blue-600 shadow-sm sm:text-lg">
            Total Inc-GST = Ex-GST Amount × 1.10
          </p>
        </div>
      </div>
      <p>
        For example, if you sell consulting services for $2,500 ex-GST, the GST is $2,500 × 0.10
        = $250, and the total inc-GST is $2,750. On your tax invoice, you would typically show
        the ex-GST price, the GST amount, and the total payable. Rounding matters on invoices:
        GST amounts are usually rounded to the nearest cent per line or on the invoice total,
        following your consistent accounting method and ATO rounding rules.
      </p>

      <h2>Removing GST: The Formula</h2>
      <p>
        To remove GST from a GST-inclusive amount, divide the inc-GST amount by 11 and multiply
        by 10 to get the ex-GST amount, or simply divide by 1.10. The GST component is
        one-eleventh of the inclusive price. This is the calculation you use when a receipt,
        bank deposit, or supplier invoice shows a GST-inclusive figure and you need to split it
        for your BAS or internal reporting.
      </p>
      <div className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/40 p-5 shadow-sm sm:p-8">
        <div className="space-y-4 text-center">
          <p className="font-mono text-sm font-semibold text-slate-700 sm:text-base">
            GST Amount = Inc-GST Amount ÷ 11
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Or</span>
            <span className="hidden h-px w-12 bg-slate-200 sm:block" />
          </div>
          <p className="inline-block rounded-xl border border-blue-100 bg-white px-5 py-3 font-mono text-base font-bold text-blue-600 shadow-sm sm:text-lg">
            Ex-GST Amount = Inc-GST Amount ÷ 1.10
          </p>
        </div>
      </div>
      <p>
        A common mistake is to multiply an inc-GST price by 10% and subtract it. That method is
        incorrect because 10% of $110 is $11, but the actual GST embedded in $110 is $10. The
        correct GST component is always one-eleventh of the inclusive amount when the rate is 10%.
        Our GST calculator handles this automatically so you do not have to remember which divisor
        to use.
      </p>

      <h2>GST-Inclusive vs GST-Exclusive Pricing</h2>
      <p>
        Australian consumer-facing prices are often quoted GST-inclusive because the law requires
        displayed prices for most consumer supplies to include GST when sold to the public.
        Business-to-business quoting is mixed: some industries quote ex-GST plus GST, others quote
        inc-GST. Whatever you choose, be explicit on quotes and invoices so customers are not
        surprised at payment time.
      </p>
      <p>
        GST-exclusive pricing is common in wholesale, professional services, construction, and
        B2B contracts. The invoice shows the net price, adds GST, and states the total payable.
        GST-inclusive pricing is common in retail, hospitality, and online stores aimed at
        consumers. Your accounting system should store both figures where relevant so BAS
        preparation and profit reporting stay accurate.
      </p>
      <p>
        When comparing supplier quotes, ensure you compare on the same basis. A competitor quoting
        $5,500 inc-GST is not cheaper than one quoting $5,000 ex-GST ($5,500 total) unless
        delivery, discounts, or supply classification differ. Normalising to ex-GST or inc-GST
        before comparing prevents costly procurement mistakes.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h4 className="mb-1.5 font-bold text-blue-600">GST-exclusive (ex-GST)</h4>
          <p className="text-sm leading-relaxed text-slate-600">
            Price before tax. GST is calculated on top. Common in B2B invoices and professional
            quotes. A $1,000 ex-GST sale becomes $1,100 inc-GST at 10%.
          </p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h4 className="mb-1.5 font-bold text-emerald-600">GST-inclusive (inc-GST)</h4>
          <p className="text-sm leading-relaxed text-slate-600">
            Price includes GST. The tax component is one-eleventh of the total. Common in retail
            and consumer advertising. A $110 inc-GST price contains $10 GST and $100 ex-GST.
          </p>
        </div>
      </div>

      <h2>BAS Reporting Basics</h2>
      <p>
        Most GST-registered businesses report GST through a Business Activity Statement (BAS).
        The BAS captures GST on sales (label 1A), GST on purchases (label 1B), and the net
        amount payable or refundable. If 1A is greater than 1B, you owe the ATO the difference.
        If 1B is greater than 1A, you may receive a refund, subject to verification and
        compliance checks.
      </p>
      <p>
        Reporting cycles are typically quarterly for smaller businesses, monthly for larger
        turnover entities, and annually for some eligible participants in the GST instalment
        or simplified systems. Your BAS due date depends on your reporting cycle and whether
        you lodge yourself or through a tax agent, who may receive a later due date extension.
      </p>
      <p>
        Accurate BAS lodgment depends on good bookkeeping throughout the period. Every tax
        invoice received and issued should be recorded with the correct GST treatment. Bank
        reconciliations should match accounting records. Many businesses use cloud accounting
        software that pre-fills BAS labels, but you remain responsible for reviewing figures
        before lodgment. Errors on BAS can be corrected through revision or adjustment
        mechanisms, but repeated mistakes attract ATO scrutiny.
      </p>
      <h3>Key BAS Labels for GST</h3>
      <ol className="list-decimal marker:font-semibold marker:text-blue-600">
        <li><strong>G1 – Total sales:</strong> Include GST-inclusive turnover from taxable and GST-free supplies (with some exclusions per form instructions).</li>
        <li><strong>1A – GST on sales:</strong> Total GST you collected or are liable for on taxable supplies.</li>
        <li><strong>1B – GST on purchases:</strong> Total input tax credits claimed on creditable acquisitions.</li>
        <li><strong>Net GST:</strong> Generally 1A minus 1B, payable to or refundable from the ATO.</li>
      </ol>

      <h2>Input Tax Credits</h2>
      <p>
        An input tax credit (ITC) is a credit for the GST included in the price of goods and
        services you acquire for use in your enterprise. Registered businesses claim ITCs on
        their BAS to offset GST collected on sales. You can only claim an ITC if you hold a
        valid tax invoice (or qualifying document) at the time of lodgment, the acquisition is
        for a creditable purpose connected with your enterprise, and the supplier was registered
        or required to be registered for GST.
      </p>
      <p>
        Not all purchases qualify. Private or domestic expenses, some motor vehicle restrictions
        for sole traders and partners, entertainment expenses subject to fringe benefits rules,
        and acquisitions related to input-taxed supplies may be partially or fully blocked.
        If you use something for both business and private purposes, you apportion the ITC.
        Document your apportionment method and keep it consistent.
      </p>
      <p>
        Cash flow tip: ITCs reduce the net GST you remit, but only after you have paid the
        supplier and obtained proper documentation. A large purchase near quarter-end can
        significantly reduce your BAS payment if the invoice is dated and recorded in the
        correct period. Conversely, missing tax invoices is one of the most common reasons
        businesses overpay GST on BAS.
      </p>

      <h2>What to Enter in the GST Calculator</h2>
      <p>
        Our GST calculator has two modes: add GST and remove GST. Choose the mode that matches
        what you already know, then enter the dollar amount. The calculator applies the 10% rate
        and shows the GST component, the ex-GST amount, and the inc-GST total.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            title: 'Calculation mode',
            desc: 'Select "Add GST" when you have an ex-GST amount and need the inc-GST total (for example, preparing a quote from your net price). Select "Remove GST" when you have an inc-GST amount and need to split out the tax (for example, analysing a retail receipt or bank deposit).',
          },
          {
            title: 'Amount field',
            desc: 'Enter the dollar amount without commas. In Add mode, enter the ex-GST figure. In Remove mode, enter the inc-GST figure. The calculator computes the GST component as 10% of the base (add mode) or one-eleventh of the total (remove mode).',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-1.5 font-bold text-blue-600">{item.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        The calculator is a mathematical tool. It does not determine whether your supply is
        taxable, GST-free, or input-taxed. If you sell exempt education or export goods, the
        calculator still shows what 10% would be on a dollar amount, but you must apply the
        correct GST treatment for your actual transaction. Use the calculator for arithmetic,
        and use this guide or professional advice for classification.
      </p>

      <h2>Worked Examples</h2>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Example 1: Adding GST to a service quote</h4>
        <p className="mb-4 text-sm text-slate-600">
          Marcus, a graphic designer, quotes a logo package at $800 ex-GST. He needs the
          inc-GST total for the client invoice.
        </p>
        <div className="overflow-x-auto rounded-xl bg-slate-900 p-5 font-mono text-sm text-slate-100 shadow-inner sm:p-6">
          <p className="text-slate-400">GST = $800 × 0.10 = $80</p>
          <p className="mt-2">Total inc-GST = $800 × 1.10 = $880</p>
          <p className="mt-2 text-lg font-bold text-green-400">Client pays $880</p>
        </div>
      </div>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Example 2: Removing GST from a retail receipt</h4>
        <p className="mb-4 text-sm text-slate-600">
          Priya buys office supplies at Officeworks for $247.00 inc-GST and wants to record the
          ex-GST cost and ITC in her accounts.
        </p>
        <div className="overflow-x-auto rounded-xl bg-slate-900 p-5 font-mono text-sm text-slate-100 shadow-inner sm:p-6">
          <p className="text-slate-400">Ex-GST = $247.00 ÷ 1.10 = $224.55</p>
          <p className="mt-2">GST (ITC) = $247.00 ÷ 11 = $22.45</p>
          <p className="mt-2 text-lg font-bold text-green-400">Claim $22.45 input tax credit</p>
        </div>
      </div>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Example 3: Monthly BAS net GST</h4>
        <p className="mb-4 text-sm text-slate-600">
          A café collected $4,400 GST on sales (1A) and claims $1,650 GST on purchases (1B)
          for the quarter.
        </p>
        <div className="grid max-w-md grid-cols-2 gap-y-2 text-sm">
          <span className="text-slate-500">GST on sales (1A):</span>
          <span className="text-right font-mono">$4,400</span>
          <span className="text-slate-500">GST on purchases (1B):</span>
          <span className="border-b border-slate-300 pb-2 text-right font-mono">$1,650</span>
          <span className="pt-2 font-medium text-slate-700">Net GST payable:</span>
          <span className="pt-2 text-right font-mono font-bold text-emerald-600">$2,750</span>
        </div>
      </div>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Example 4: Incorrect vs correct GST removal</h4>
        <p className="mb-4 text-sm text-slate-600">
          A contractor receives $1,100 inc-GST from a client. Compare the wrong and right methods.
        </p>
        <div className="space-y-3 text-sm">
          <div className="rounded-lg border border-red-100 bg-red-50/60 p-3">
            <strong className="text-red-700">Wrong:</strong>{' '}
            <span className="font-mono">$1,100 × 10% = $110 GST</span>
            <span className="text-slate-600"> (overstates GST by $10)</span>
          </div>
          <div className="rounded-lg border border-emerald-100 bg-emerald-50/60 p-3">
            <strong className="text-emerald-700">Correct:</strong>{' '}
            <span className="font-mono">$1,100 ÷ 11 = $100 GST</span>
            <span className="text-slate-600">, ex-GST = $1,000</span>
          </div>
        </div>
      </div>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Example 5: Mixed invoice with GST-free item</h4>
        <p className="mb-4 text-sm text-slate-600">
          A health food shop sells $50 of GST-free basic food and $30 of taxable snacks on one
          receipt. Only the taxable portion attracts 10% GST.
        </p>
        <div className="overflow-x-auto rounded-xl bg-slate-900 p-5 font-mono text-sm text-slate-100 shadow-inner sm:p-6">
          <p className="text-slate-400">Taxable portion ex-GST = $30.00</p>
          <p className="mt-2">GST on snacks = $30.00 × 0.10 = $3.00</p>
          <p className="mt-2">GST-free food = $50.00 (no GST)</p>
          <p className="mt-2 text-lg font-bold text-green-400">Total payable = $83.00</p>
        </div>
      </div>

      <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
        <h4 className="mb-4 font-bold text-blue-600">Example 6: Voluntary registration benefit</h4>
        <p className="mb-4 text-sm text-slate-600">
          Jake starts a landscaping business. Turnover is $40,000 in year one, but he spends
          $11,000 inc-GST on tools and a ute deposit before his first paying job.
        </p>
        <div className="overflow-x-auto rounded-xl bg-slate-900 p-5 font-mono text-sm text-slate-100 shadow-inner sm:p-6">
          <p className="text-slate-400">ITC on equipment = $11,000 ÷ 11 = $1,000</p>
          <p className="mt-2 text-slate-300">If registered before purchase, Jake claims $1,000 on BAS.</p>
          <p className="mt-2 text-slate-300">If not registered, he absorbs the GST as part of cost.</p>
        </div>
        <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-4 text-sm text-slate-700">
          Voluntary registration can improve cash flow when start-up costs include substantial GST.
        </div>
      </div>

      <h2>GST-Free vs Input-Taxed Supplies</h2>
      <p>
        GST-free supplies have no GST charged to the customer, but the supplier can usually still
        claim input tax credits on related business purchases. Examples include most basic food,
        some medical and health services, certain education courses, exports of goods and services,
        and some childcare services. GST-free is not the same as a zero-rated export in other
        countries conceptually, but the effect for the customer is no GST on the price.
      </p>
      <p>
        Input-taxed supplies have no GST charged, and the supplier generally cannot claim full
        input tax credits on acquisitions related to making those supplies. Common input-taxed
        supplies include financial supplies (lending, account fees in many cases), residential
        rent, and some precious metal transactions. Businesses making both taxable and input-taxed
        supplies often need to apportion ITCs using a reasonable method approved or accepted by
        the ATO.
      </p>

      <div className="my-6 space-y-4">
        {[
          {
            color: 'border-emerald-400',
            title: 'GST-free (0% to customer, credits often allowed)',
            desc: 'Basic unprocessed food, exports, eligible health and medical services, certain education, some childcare, international transport, and other listed supplies. Supplier shows GST-free on invoice, not 10%.',
          },
          {
            color: 'border-orange-400',
            title: 'Input-taxed (no GST, limited credits)',
            desc: 'Financial supplies, residential rent, sales of existing residential premises (with exceptions), and some gold transactions. ITCs on related costs are restricted or blocked.',
          },
          {
            color: 'border-blue-400',
            title: 'Taxable (10% GST)',
            desc: 'Most other commercial goods and services including professional fees, commercial rent, new residential property in some cases, retail goods, and general B2B services.',
          },
        ].map((m) => (
          <div key={m.title} className={`rounded-r-xl border-l-4 ${m.color} bg-white p-5 shadow-sm`}>
            <h4 className="mb-1 font-bold text-slate-800">{m.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{m.desc}</p>
          </div>
        ))}
      </div>

      <h2>Interstate Sales</h2>
      <p>
        GST applies consistently across Australian states and territories. There is no separate
        state GST rate for domestic sales; the same 10% federal GST rules apply whether you sell
        from Sydney to Melbourne, Brisbane to Perth, or anywhere within Australia. For GST
        purposes, an interstate taxable sale is treated like any other domestic taxable supply.
        You charge 10% if the supply is taxable and you are registered.
      </p>
      <p>
        Place of supply rules matter for certain cross-border scenarios, especially services,
        digital products, and transactions connected with property. For purely domestic physical
        goods shipped interstate, the sale is generally taxable at 10% when supplied in Australia
        in the course of an enterprise. Exports outside Australia may be GST-free when the
        export requirements are met, including within the required timeframes and with proper
        documentation.
      </p>
      <p>
        Do not confuse GST with payroll tax or stamp duty, which are state-based and vary by
        jurisdiction. A single business transaction can have GST implications at the federal
        level and separate state tax consequences. Your BAS will not show stamp duty; your
        property lawyer handles that at settlement.
      </p>

      <h2>Invoicing Requirements</h2>
      <p>
        A tax invoice is the primary document for GST compliance. For taxable sales of more
        than $82.50 inc-GST (including any other taxable sales on the same document), you must
        issue a tax invoice within 28 days if the purchaser requests one, or earlier if your
        business practices require it. Tax invoices for sales of $1,000 or more must include
        additional identity details such as the recipient&apos;s name or ABN where applicable.
      </p>
      <p>
        A valid tax invoice generally includes: the words &quot;Tax Invoice&quot;; your identity as
        supplier; your ABN; the date of issue; a brief description of items sold; the GST amount
        payable (shown separately unless the total equals the GST-inclusive price and a statement
        applies); and the extent to which each sale is taxable. Simplified tax invoices may be
        used for sales under $1,000 subject to specific content rules.
      </p>
      <p>
        Recipient-created tax invoices (RCTIs) are allowed in certain industries when the buyer,
        not the seller, issues the invoice under a written agreement. If you receive an RCTI as a
        supplier, ensure the agreement is in place before accepting it. Poor invoicing delays ITC
        claims and creates BAS discrepancies that are tedious to fix under audit.
      </p>

      <h3>Tax Invoice Checklist</h3>
      <ul className="list-disc">
        <li>Document labelled &quot;Tax Invoice&quot; (not merely &quot;Invoice&quot; unless it meets all tax invoice fields)</li>
        <li>Supplier name, address, and ABN</li>
        <li>Date of issue and invoice number</li>
        <li>Description of goods or services supplied</li>
        <li>GST amount shown separately or total inc-GST with required statement</li>
        <li>For invoices of $1,000 or more: buyer identity or ABN</li>
      </ul>

      <h2>Common Mistakes</h2>
      <div className="my-6 space-y-4">
        {[
          {
            n: '1',
            title: 'Using 10% of inc-GST to find the tax component',
            desc: 'Multiplying a GST-inclusive price by 10% overstates GST. Always divide by 11 or use the Remove GST mode in the calculator.',
          },
          {
            n: '2',
            title: 'Claiming ITCs without a valid tax invoice',
            desc: 'Bank statements alone are not enough for most claims. Obtain tax invoices before lodging BAS for the period.',
          },
          {
            n: '3',
            title: 'Failing to register when turnover exceeds $75,000',
            desc: 'Monitor rolling twelve-month turnover. Late registration can mean paying GST from your own pocket on past sales.',
          },
          {
            n: '4',
            title: 'Charging GST on GST-free supplies',
            desc: 'Basic food, exports, and eligible health services must not have 10% added incorrectly. Misclassification exposes you to refunds and penalties.',
          },
          {
            n: '5',
            title: 'Mixing private and business expenses',
            desc: 'Claiming full ITCs on assets or subscriptions used privately without apportionment is a common audit trigger.',
          },
          {
            n: '6',
            title: 'Inconsistent inc-GST vs ex-GST quoting',
            desc: 'Ambiguous quotes lead to disputes and incorrect BAS labels. State clearly whether prices include GST.',
          },
        ].map((s) => (
          <div key={s.n} className="flex gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
              {s.n}
            </div>
            <div>
              <h4 className="mb-1 font-bold text-slate-800">{s.title}</h4>
              <p className="text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Small Business Tips</h2>
      <p>
        Small business owners benefit from treating GST as a separate ledger in their minds even
        if accounting software merges it with sales. Money collected as GST is not revenue; it
        is held on trust for the ATO until your BAS is paid. Many cash-flow crises happen when
        owners spend GST collected on operating expenses and face a large BAS bill without reserves.
      </p>
      <p>
        Open a separate business savings account and transfer each week&apos;s estimated net GST
        obligation, or at minimum the full GST collected on sales, until you lodge and pay the
        BAS. Pair this with timely invoicing: the faster you invoice, the faster you collect
        both your margin and the GST component, but remember only your ex-GST margin is yours to
        keep long term.
      </p>
      <p>
        Use accounting software linked to your bank feed, reconcile weekly, and review BAS draft
        figures mid-quarter so surprises do not appear on the due date. If turnover is close to
        the registration threshold, set a calendar reminder to recalculate rolling twelve-month
        turnover every month. Consider voluntary registration if you have large upfront capital
        purchases and expect taxable sales soon.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          { title: 'Separate GST money', desc: 'Transfer collected GST to a dedicated account until BAS payment. Treat it as a liability, not profit.' },
          { title: 'Invoice promptly', desc: 'Issue tax invoices as soon as work is done or goods are delivered to improve cash flow and record accuracy.' },
          { title: 'Review classification', desc: 'When you add a new product or service line, confirm whether it is taxable, GST-free, or input-taxed before pricing.' },
          { title: 'Use consistent rounding', desc: 'Apply the same rounding method on invoices and in your accounting system to match BAS totals.' },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
            <h4 className="mb-2 font-bold text-blue-600">{c.title}</h4>
            <p className="text-sm leading-relaxed text-slate-600">{c.desc}</p>
          </div>
        ))}
      </div>

      <h2>Frequently Asked Questions</h2>

      <div className="my-6 space-y-4">
        {[
          {
            q: 'Do I need to charge GST if my turnover is under $75,000?',
            a: 'Generally no, unless you are in an industry that must register regardless of turnover (such as taxi and ride-sourcing drivers), or you have chosen voluntary registration. Unregistered businesses must not represent that GST is included in a price as if they were collecting tax for the ATO.',
          },
          {
            q: 'What is the difference between a tax invoice and an ordinary invoice?',
            a: 'A tax invoice contains specific information required by GST law, including the words "Tax Invoice", supplier ABN, and GST amount or a compliant GST-inclusive total statement. An ordinary invoice without those elements may not support an input tax credit for your customer.',
          },
          {
            q: 'Can I claim GST on purchases if I am not registered?',
            a: 'No. Only GST-registered entities can claim input tax credits on their BAS. Unregistered businesses pay GST as part of the purchase price with no credit mechanism.',
          },
          {
            q: 'How do I calculate GST on a discount?',
            a: 'GST is calculated on the price after discount, provided the discount is shown on the tax invoice. If you offer $100 ex-GST less 10% discount, the taxable value is $90 ex-GST and GST is $9, total $99 inc-GST.',
          },
          {
            q: 'Are overseas online purchases subject to GST?',
            a: 'Low-value imported goods and some digital products have specific GST rules requiring overseas suppliers or electronic distribution platforms to charge Australian GST in certain cases. Domestic businesses importing goods may also have GST and customs obligations depending on the import arrangement.',
          },
          {
            q: 'What happens if I lodge my BAS late?',
            a: 'Late lodgment can incur failure-to-lodge penalties and general interest charge on unpaid net GST. Persistent late lodgment affects your compliance record and may trigger ATO contact or audit activity.',
          },
          {
            q: 'Can I cancel my GST registration?',
            a: 'Yes, if your business has ceased or your turnover falls below the turnover threshold and you expect to stay below it. Cancellation does not erase past obligations. You must lodge outstanding BAS and account for stock and assets on hand according to cancellation rules.',
          },
          {
            q: 'Does GST apply to residential rent I collect?',
            a: 'Residential rent is generally input-taxed. Landlords do not charge GST on residential rent and generally cannot claim full input tax credits on related expenses, though specific rules apply to commercial premises and new residential developments.',
          },
        ].map((faq) => (
          <div key={faq.q} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-slate-800">{faq.q}</h4>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">{faq.a}</p>
          </div>
        ))}
      </div>

      <h2>Penalties for Non-Compliance</h2>
      <p>
        The ATO takes GST compliance seriously because the tax is collected from customers on
        behalf of the government. Failure to register when required, failure to lodge BAS on
        time, failure to pay net GST by the due date, and false or misleading statements on
        activity statements can each attract penalties and interest. The general interest charge
        (GIC) accrues on unpaid tax liabilities from the due date until payment is received in
        full.
      </p>
      <p>
        Administrative penalties apply for failures such as not lodging on time, making false
        or misleading statements, and reckless or intentional disregard of tax law. Penalty
        amounts depend on the severity category and whether you have a reasonable excuse. The
        ATO may also apply shortfall penalties where a BAS understates GST payable or overstates
        credits. In serious cases involving deliberate fraud or phoenix activity, criminal
        prosecution and director penalty notices (for companies) can apply.
      </p>
      <p>
        Voluntary disclosure before ATO contact often reduces penalties compared with waiting
        for audit discovery. If you realise you should have been registered, or you omitted
        sales from a prior BAS, contact your tax agent or the ATO to make a voluntary disclosure
        and arrange payment plans if needed. Payment plans do not eliminate interest entirely,
        but they prevent escalation to stronger collection action while you catch up.
      </p>

      <div className="my-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5 sm:p-6">
        <h4 className="mb-2 font-bold text-amber-900">Compliance risks to take seriously</h4>
        <ul className="mb-0 space-y-1 text-sm text-amber-900/80">
          <li>Operating above $75,000 turnover without GST registration</li>
          <li>Claiming input tax credits without valid tax invoices or for private expenses</li>
          <li>Repeated late BAS lodgment or non-payment of net GST</li>
          <li>Issuing tax invoices when not registered, or charging GST on GST-free supplies</li>
          <li>Failing to keep records for the required five-year retention period</li>
        </ul>
      </div>

      <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-sm text-blue-900">
        <strong>Disclaimer:</strong> This guide is general information only and is not tax or
        legal advice. GST law contains many exceptions and transitional provisions. For complex
        supplies, mixed enterprises, property transactions, imports, or audit matters, consult a
        registered tax agent or qualified professional. Rules and thresholds are current in
        principle but should be verified against the latest ATO guidance for your circumstances.
      </div>
    </div>
  );
}
