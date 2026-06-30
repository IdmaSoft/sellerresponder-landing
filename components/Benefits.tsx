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
    <section className="mx-auto max-w-screen-xl px-6 py-16 sm:px-8 lg:px-12">
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
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-[0_30px_80px_rgba(15,23,42,0.08)] transition duration-300 hover:shadow-[0_30px_100px_rgba(15,23,42,0.15)]"
          >
            <div className="absolute -right-10 top-6 text-[6rem] font-semibold text-slate-900/10">
              {benefit.icon}
            </div>
            <div className="relative">
              <h3 className="text-xl font-semibold text-slate-950">{benefit.title}</h3>
              <p className="mt-4 text-slate-600">{benefit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
