import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { teamMembers } from "@/data/team";

export const metadata = {
  title: "Our Leadership | Komarock Works",
  description:
    "Meet the leadership guiding Komarock Works' creative, media, campaign, and training work.",
};

export default function TeamPage() {
  return (
    <>
      <section className="bg-deep-navy py-20 text-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-blue">
            The people behind the work
          </p>
          <h1 className="mb-6 font-heading text-5xl font-black md:text-6xl">
            Our Leadership
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-gray-300">
            Meet the team driving Komarock Works&apos; creative, media, and
            strategic work—connecting clear direction with thoughtful delivery.
          </p>
        </div>
      </section>

      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className={`object-cover ${member.imagePosition ?? "object-top"}`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <span className="mb-4 w-fit rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-royal-blue">
                    {member.role}
                  </span>
                  <h2 className="mb-4 font-heading text-2xl font-bold leading-tight text-deep-navy sm:text-3xl">
                    {member.name}
                  </h2>
                  <p className="mb-6 text-sm leading-7 text-muted-gray sm:text-base">
                    {member.bio}
                  </p>
                  <div className="mt-auto pt-6">
                    <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-deep-navy">
                      Focus areas
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {member.focusAreas.map((area) => (
                        <li
                          key={area}
                          className="rounded-full border border-slate-200 bg-off-white px-3 py-1.5 text-xs font-medium leading-5 text-dark-slate"
                        >
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="mb-3 font-heading text-3xl font-bold md:text-4xl">
              Let&apos;s make meaningful work together.
            </h2>
            <p className="max-w-2xl leading-relaxed text-gray-300">
              Visitors, partners, and organizations are welcome to get in touch
              about a project, campaign, or training initiative.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-royal-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-sky-blue"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
