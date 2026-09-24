import GuideShell from '@/components/shell/GuideShell';

/**
 * FAQ answer pages are public (no login) content, and there are 250+ of them across 12
 * categories — rather than pre-capture every one, this fetches the real answer directly from
 * the source and renders it inside the same shell as the rest of the guide site. Read-only,
 * same-site published content; no user input is involved. Cached like any static fetch so the
 * server only fetches once per slug instead of racing itself during render/hydration.
 */
async function getAnswer(slug: string) {
  const res = await fetch(`https://mcwguide.com/bd/en/faq/${slug}`).catch(() => null);
  if (!res || !res.ok) return null;
  const html = await res.text();
  const h1Match = html.match(/<h1[^>]*class="[^"]*text-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/);
  const bodyMatch = html.match(/<h1[^>]*text-title[^>]*>[\s\S]*?<\/h1>([\s\S]*?)<\/main>/);
  if (!h1Match) return null;
  return { title: h1Match[1].trim(), body: bodyMatch ? bodyMatch[1] : '' };
}

export default async function FaqAnswerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const answer = await getAnswer(slug);

  return (
    <GuideShell>
      <div style={{ marginTop: 20 }}>
        <h1 className="text-center text-title">{answer?.title ?? slug.replace(/-/g, ' ')}</h1>
        {answer ? (
          <div className="faq-answer-body container" style={{ maxWidth: 720, margin: '2rem auto 0', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: answer.body }} />
        ) : (
          <p className="text-center text-muted" style={{ marginTop: '2rem' }}>
            Couldn&apos;t load this answer right now — the source page may be unavailable.
          </p>
        )}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/bd/en/faq" style={{ color: 'var(--secondary, #ffd259)' }}>
            ← Back to FAQ
          </a>
        </div>
      </div>
    </GuideShell>
  );
}
