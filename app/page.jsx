import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { Arrow, Btn, BookIcon, MapPlaceholder } from '@/components/ui';
import { AREAS, WHO, WHO_SHORT, PHILOSOPHY, WHY, FOUNDERS, ARTICLES, SITE } from '@/lib/data';
import { Rich, AreaIcon, FounderTile } from '@/components/blocks';
import HomeMotion from '@/components/HomeMotion';

export default function Home() {
  return (
    <>
      <HomeMotion />
      {/* HERO: only fold one */}
      <div className="herofold">
        <section className="hero">
          <div className="hero-art" aria-hidden="true">
            <img className="room" src="/images/courtroom.jpg" alt="" />
          </div>
          <div className="pillars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div className="hero-in">
            <div className="hero-copy">
              <p className="eyebrow hx hx1">Advocates &amp; Consultants · Nagpur</p>
              <div className="hm"><h1 className="hx hx2">Committed to protecting your rights with precision and dedication.</h1></div>
              <div className="hero-btns hx hx3">
                <Btn href="/practice-areas" className="btn btn-w">Practice areas</Btn>
                <Btn href="/contact" className="btn btn-ow">Contact the office</Btn>
              </div>
              <div className="hx hx4 only-m"><LeadForm /></div>
            </div>
          </div>
        </section>
        <div className="formbar only-d hx hx4"><div className="wrap"><LeadForm variant="bar" /></div></div>
      </div>

      {/* PRACTICE AREAS */}
      <section className="fold" id="practice">
        <div className="wrap">
          <i className="hl" data-rv="rule" aria-hidden="true" />
          <div className="mk"><h2 className="h2 tab" data-rv="rise">Practice Areas &amp; Services</h2></div>
          <div className="g-pa">
            {AREAS.map((a, i) => (
              <div className="pa" key={a.slug} data-rv="up" style={{ animationDelay: `${0.04 + i * 0.05}s`, '--d': `${(i % 4) * 0.08}s` }}>
                <span className="num">{a.n}</span>
                <span className="pi"><AreaIcon d={a.icon} /></span>
                <Link href={`/practice-areas/${a.slug}`} className="pc2">
                  <h3>{a.t.replace(/:$/, '')}</h3>
                  <p>{a.short}</p>
                  <span className="more">Read more<Arrow /></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="fold bgsec bg-who" id="about">
        <div className="wrap">
          <div className="bgsec-tx">
            <div className="mk"><h2 className="h2 tab" data-rv="rise">Who We Are</h2></div>
            <div className="prose2">
              {WHO_SHORT.map((t, i) => <p key={i} data-rv="up" style={{ '--d': `${0.08 + i * 0.12}s` }}>{t}</p>)}
            </div>
            <Btn href="/the-firm">More about the firm</Btn>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="fold" id="founders">
        <div className="wrap">
          <i className="hl" data-rv="rule" aria-hidden="true" />
          <div className="mk"><h2 className="h2 tab" data-rv="rise">Founders Details</h2></div>
          <div className="g-fo">
            {FOUNDERS.map((f, i) => <FounderTile key={f.id} f={f} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="phb on-navy" id="philosophy">
        <div className="wrap phb-in">
          <div className="phb-tx">
            <div className="mk"><h2 className="h2 tab" data-rv="rise">Philosophy And Working Approach</h2></div>
            <p className="phb-lead">{PHILOSOPHY.lead}</p>
            <ul className="phb-list">
              {PHILOSOPHY.items.map((t, i) => <li key={t} data-rv="up" style={{ '--d': `${i * 0.09}s` }}>{t}</li>)}
            </ul>
            <p className="phb-q">{PHILOSOPHY.quote.replace(' ;', ';')}</p>
          </div>
          <img className="phb-art" data-rv="up" src="/images/thinker.png" alt="" />
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE US */}
      <section className="fold bgsec bg-why" id="why">
        <div className="wrap">
          <div className="bgsec-tx">
            <div className="mk"><h2 className="h2 tab" data-rv="rise">Why Clients Choose Us</h2></div>
            <div className="why-rows">
              {WHY.map((w) => (
                <div className="wr" key={w} data-rv="up" style={{ '--d': `${WHY.indexOf(w) * 0.1}s` }}>
                  <span className="ck" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg></span>
                  <span>{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KNOW YOUR LAW */}
      <section className="fold" id="know">
        <div className="wrap">
          <i className="hl" data-rv="rule" aria-hidden="true" />
          <div className="mk"><h2 className="h2 tab" data-rv="rise">Know Your Law</h2></div>
          <div className="g-know">
            {ARTICLES.map((a, i) => (
              <Link href={`/knowledge-centre/${a.slug}`} className="kc" key={a.t} data-rv="up" style={{ animationDelay: `${i * 0.08}s`, '--d': `${i * 0.1}s` }}>
                <div className="kt" style={{ background: a.bg }}><span className="c">{a.cat}</span><span className="ki"><BookIcon /></span></div>
                <div className="kb">
                  <span style={{ fontSize: 13, color: '#5B5958' }}>{a.date} · {a.rt}</span>
                  <span className="h3 ttl" style={{ fontSize: 17 }}>{a.t}</span>
                  <span style={{ display: 'block', marginTop: 10, fontSize: 14, lineHeight: 1.6 }}>{a.ex}</span>
                  <span style={{ display: 'block', marginTop: 12, fontSize: 13, color: '#5B5958' }}>{a.au}</span>
                  <span className="btn btn-g">Read article<Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 20 }}><Btn href="/knowledge-centre">All articles</Btn></div>
        </div>
      </section>

      {/* CTA */}
      <section className="fold">
        <div className="wrap">
          <div className="cta" data-rv="up">
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 className="h2">Discuss a legal matter</h2>
              <p>Call {SITE.phone1} / {SITE.phone2} or send an enquiry. The office responds on working days.</p>
            </div>
            <div className="acts">
              <Btn href="/contact" className="btn btn-k">Send an enquiry</Btn>
              <Btn href={`tel:${SITE.phone1Tel}`} className="btn btn-o">Call the office</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section className="fold">
        <div className="wrap">
          <div className="office">
            <div>
              <div className="mk"><h2 className="h2 tab" data-rv="rise">The Office</h2></div>
              <address style={{ fontStyle: 'normal', marginTop: 20 }}>{SITE.address[0]}<br />{SITE.address[1]}</address>
              <p style={{ margin: '12px 0 0' }}><a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a> / <a href={`tel:${SITE.phone2Tel}`}>{SITE.phone2}</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
              <p style={{ margin: '12px 0 0', color: '#5B5958' }}>{SITE.hours}</p>
              <div style={{ marginTop: 18 }}><Btn href="/contact">Get directions</Btn></div>
            </div>
            <div className="map" data-rv="wipe"><MapPlaceholder /></div>
          </div>
        </div>
      </section>
    </>
  );
}
