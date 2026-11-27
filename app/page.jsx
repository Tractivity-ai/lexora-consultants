import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import Rail from '@/components/Rail';
import { Arrow, Btn, MapPlaceholder } from '@/components/ui';
import { AREAS, WHO_SHORT, PHILOSOPHY, WHY, FOUNDERS, ARTICLES, SITE } from '@/lib/data';
import { FounderTile } from '@/components/blocks';

const Ck = () => (
  <svg viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="12.4" /><path d="M7.5 13.5l4 4 7-8.5" /></svg>
);

export default function Home() {
  return (
    <>
      <Rail />
      {/* HERO */}
      <div className="herofold">
        <section className="hero">
          <div className="hero-pn">
            <div className="pillars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            <div className="hero-copy">
              <p className="eyebrow hx hx1">Advocates &amp; Consultants · Nagpur</p>
              <div className="hm"><h1 className="hx hx2">Committed to protecting your rights with precision and dedication.</h1></div>
              <div className="hero-btns hx hx3">
                <Btn href="/practice-areas" className="btn btn-w">Practice areas</Btn>
                <Btn href="/contact" className="btn btn-ow">Contact the office</Btn>
              </div>
              <p className="hero-sub hx hx3">Bombay High Court, Nagpur Bench · District and Sessions Courts · Consumer forums and tribunals</p>
              <div className="hx hx4 only-m"><LeadForm /></div>
            </div>
          </div>
          <div className="hero-art"><img src="/images/library.jpg" alt="" /></div>
        </section>
        <div className="formbar only-d hx hx4"><div className="wrap"><LeadForm variant="bar" /></div></div>
      </div>

      {/* 01 PRACTICE */}
      <section className="ch" id="practice" data-ch="Practice areas">
        <div className="wrap ch-in">
          <div className="ch-h">
            <span className="ch-n" data-rv="up">01</span>
            <div className="mk"><h2 className="h2" data-rv="rise">Practice Areas &amp; Services</h2></div>
            <p data-rv="up" style={{ '--d': '.1s' }}>Eight areas of work, from lending and recovery to property, litigation and advisory.</p>
            <Btn href="/practice-areas">All practice areas</Btn>
          </div>
          <div className="rows">
            {AREAS.map((a, i) => (
              <Link href={`/practice-areas/${a.slug}`} className="row" key={a.slug} data-rv="up" style={{ '--d': `${(i % 4) * 0.07}s` }}>
                <span className="row-n">{String(a.n).padStart(2, '0')}</span>
                <span className="row-b"><h3>{a.t.replace(/:$/, '')}</h3><p>{a.short}</p></span>
                <Arrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 02 WHO WE ARE */}
      <section className="who-s" id="about" data-ch="Who we are">
        <div className="who-im" data-rv="curtain"><img src="/images/statue.jpg" alt="" /></div>
        <div className="who-tx">
          <span className="ch-n" data-rv="up">02</span>
          <div className="mk"><h2 className="h2" data-rv="rise">Who We Are</h2></div>
          <div className="prose">
            {WHO_SHORT.map((t, i) => <p key={i} data-rv="up" style={{ '--d': `${0.08 + i * 0.12}s` }}>{t}</p>)}
          </div>
          <Btn href="/the-firm" className="btn btn-k">More about the firm</Btn>
          <div className="who-off" data-rv="up"><img src="/images/office.jpg" alt="Reception of the Lexora office, Ganeshpeth" /><span>The office at Ganeshpeth, Nagpur.</span></div>
        </div>
      </section>

      {/* 03 FOUNDERS */}
      <section className="ch fo-s" id="founders" data-ch="Founders">
        <div className="wrap">
          <i className="hl" data-rv="rule" aria-hidden="true" />
          <span className="ch-n" data-rv="up">03</span>
          <div className="mk"><h2 className="h2" data-rv="rise">Founders Details</h2></div>
          <div className="g-fo" style={{ marginTop: 36 }}>
            {FOUNDERS.map((f, i) => <FounderTile key={f.id} f={f} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* 04 PHILOSOPHY */}
      <section className="phb" id="philosophy" data-ch="Philosophy">
        <div className="wrap phb-in">
          <div>
            <span className="ch-n" data-rv="up">04</span>
            <div className="mk"><h2 className="h2 on-dark" data-rv="rise">Philosophy And Working Approach</h2></div>
            <p className="phb-lead">{PHILOSOPHY.lead}</p>
            <ul className="phb-list">
              {PHILOSOPHY.items.map((t, i) => <li key={t} data-rv="up" style={{ '--d': `${i * 0.09}s` }}>{t}</li>)}
            </ul>
            <p className="phb-q" data-rv="up">{PHILOSOPHY.quote.replace(' ;', ';')}</p>
          </div>
          <img className="phb-art" data-rv="up" src="/images/thinker.png" alt="" />
        </div>
      </section>

      {/* 05 WHY */}
      <section className="ch why-s" id="why" data-ch="Why clients choose us">
        <div className="wrap ch-in">
          <div className="ch-h">
            <span className="ch-n" data-rv="up">05</span>
            <div className="mk"><h2 className="h2" data-rv="rise">Why Clients Choose Us</h2></div>
            <div className="ch-im" data-rv="curtain" style={{ '--d': '.15s' }}><img src="/images/suit.jpg" alt="" /></div>
          </div>
          <div className="why-rows">
            {WHY.map((w, i) => (
              <div className="wr" key={w} data-rv="up" style={{ '--d': `${i * 0.1}s` }}>
                <span className="ck"><Ck /></span>
                <span>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 KNOW YOUR LAW */}
      <section className="ch" id="know" data-ch="Know your law">
        <div className="wrap ch-in">
          <div className="ch-h">
            <span className="ch-n" data-rv="up">06</span>
            <div className="mk"><h2 className="h2" data-rv="rise">Know Your Law</h2></div>
            <p data-rv="up" style={{ '--d': '.1s' }}>Short explainers that put the law in plain language.</p>
            <Btn href="/knowledge-centre">All articles</Btn>
          </div>
          <div className="g-know">
            {ARTICLES.map((a, i) => (
              <Link href={`/knowledge-centre/${a.slug}`} className="krow" key={a.slug} data-rv="up" style={{ '--d': `${i * 0.1}s` }}>
                <span className="meta">{a.cat} · {a.date} · {a.rt}</span>
                <span className="ttl">{a.t}</span>
                <span className="ex">{a.ex}</span>
                <Arrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DISCUSS A MATTER */}
      <section className="cta-s">
        <div className="wrap">
          <div>
            <h2 className="h2" data-rv="up">Discuss a legal matter</h2>
            <p data-rv="up" style={{ '--d': '.1s' }}>Call {SITE.phone1} / {SITE.phone2} or send an enquiry. The office responds on working days.</p>
          </div>
          <div className="acts" data-rv="up" style={{ '--d': '.2s' }}>
            <Btn href="/contact" className="btn btn-w">Send an enquiry</Btn>
            <Btn href={`tel:${SITE.phone1Tel}`} className="btn btn-ow">Call the office</Btn>
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section className="fold" id="office">
        <div className="wrap">
          <div className="office">
            <div>
              <div className="mk"><h2 className="h2" data-rv="rise">The Office</h2></div>
              <address style={{ fontStyle: 'normal', marginTop: 20 }}>{SITE.address[0]}<br />{SITE.address[1]}</address>
              <p style={{ margin: '12px 0 0' }}><a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a> / <a href={`tel:${SITE.phone2Tel}`}>{SITE.phone2}</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
              <p style={{ margin: '12px 0 0', color: 'var(--sl)' }}>{SITE.hours}</p>
              <div style={{ marginTop: 18 }}><Btn href="/contact">Get directions</Btn></div>
            </div>
            <div className="map" data-rv="wipe"><MapPlaceholder /></div>
          </div>
        </div>
      </section>
    </>
  );
}
