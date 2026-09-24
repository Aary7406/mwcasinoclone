'use client';

import { useMemo, useState } from 'react';
import faqCategories from '@/lib/faq-categories.json';

type Question = { t: string; h: string };
const CATEGORIES = Object.keys(faqCategories) as (keyof typeof faqCategories)[];

/** FAQ category tabs + question list — real data captured from every category (252 questions
 * across 12 categories), so switching tabs shows the actual questions for that category. */
export default function FaqContent() {
  const [active, setActive] = useState<string>(CATEGORIES[0]);
  const [search, setSearch] = useState('');

  const questions = useMemo(() => {
    const list = (faqCategories as Record<string, Question[]>)[active] ?? [];
    if (!search.trim()) return list;
    const q = search.trim().toLowerCase();
    return list.filter(item => item.t.toLowerCase().includes(q));
  }, [active, search]);

  return (
    <div className="container faq-contents">
      <div className="row">
        <div style={{ marginTop: '20px' }}>
          <div className="bx01">
            <h1 className="text-center">How can we help you today?</h1>
            <div className="d-flex justify-content-center align-items-center">
              <form className="w-100" style={{ maxWidth: '600px' }} onSubmit={e => e.preventDefault()}>
                <div className="input-group input-group-lg">
                  <input
                    className="form-control"
                    placeholder="Search or type your question here..."
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="bx02 pt-5">
            <p className="text-center text-muted">
              These are some of the most common questions and answers about MCW. If you couldn't find your question in the list below, please contact our Customer Support.
            </p>
            <div className="container py-4">
              <ul className="nav nav-pills justify-content-center mb-4">
                {CATEGORIES.map(cat => (
                  <li key={cat} className={`nav-item${cat === active ? ' active' : ''}`} onClick={() => setActive(cat)}>
                    <button className="nav-link" type="button">{cat}</button>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                <div className="list-group">
                  {questions.map(q => (
                    <a key={q.h} href={q.h}>{q.t}</a>
                  ))}
                  {questions.length === 0 && (
                    <p className="text-center text-muted" style={{ padding: '2rem 0' }}>No matching questions.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
