import { SectionHeader } from "@/components/section-header";

const profiles = [
  {
    platform: "Codeforces",
    username: "@eftekar",
    maxRating: "978",
    solved: "87",
    rank: "Newbie",
    color: "hsl(160, 84%, 45%)",
  },
  {
    platform: "LeetCode",
    username: "@eftekar",
    maxRating: "--",
    solved: "87",
    rank: "Unranked",
    color: "hsl(40, 90%, 55%)",
  },
  {
    platform: "CodeChef",
    username: "@eftekar",
    maxRating: "1342",
    solved: "200+",
    rank: "1 Star",
    color: "hsl(25, 85%, 55%)",
  },
  {
    platform: "HackerRank",
    username: "@eftekar",
    maxRating: "--",
    solved: "--",
    rank: "Unranked",
    color: "hsl(145, 63%, 42%)",
  },
];

export function CodingProfiles() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Court of Code"
          subtitle="Algorithms Are Tried, Tested, and Proven"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <div
              key={profile.platform}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
            >
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {profile.platform}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {profile.username}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs text-muted-foreground">Max Rating</p>
                  <p className="font-heading text-lg font-bold text-foreground">
                    {profile.maxRating}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Solved</p>
                  <p className="font-heading text-lg font-bold text-foreground">
                    {profile.solved}
                  </p>
                </div>
              </div>

              <div
                className="rounded-lg px-3 py-1.5 text-center text-xs font-semibold"
                style={{
                  backgroundColor: `${profile.color}20`,
                  color: profile.color,
                }}
              >
                {profile.rank}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
