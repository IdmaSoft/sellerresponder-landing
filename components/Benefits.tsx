const benefits = [
  {
    title: "Instant Replies",
    description:
      "Send the first message immediately when a buyer contacts you, so Marketplace leads do not go cold.",
    icon: "⚡",
  },
  {
    title: "Automatic Greetings",
    description:
      "Welcome every buyer with a friendly response that starts the conversation and keeps them engaged.",
    icon: "👋",
  },
  {
    title: "Thank-you Messages",
    description:
      "Confirm interest, share purchase next steps and reassure buyers after every inquiry.",
    icon: "🙏",
  },
  {
    title: "Custom Templates",
    description:
      "Use personalized replies for pricing, availability and delivery, so you answer consistently and confidently.",
    icon: "✍️",
  },
  {
    title: "Easy Android Setup",
    description:
      "Install in minutes and start handling Marketplace chats without needing technical skills.",
    icon: "📱",
  },
  {
    title: "Reduce Missed Opportunities",
    description:
      "Respond faster, keep buyers interested and turn more Marketplace conversations into sales.",
    icon: "🎯",
  },
];

export default function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
          Key benefits
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Built for Facebook Marketplace sellers who need faster responses.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          SellerResponder focuses on speed, consistency and buyer confidence so you can keep more Marketplace shoppers engaged.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg text-white">
              {benefit.icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-950">{benefit.title}</h3>
            <p className="mt-3 text-slate-600">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
